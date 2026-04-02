import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import dotenv from 'dotenv'
import { getPayload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const projectDir = path.resolve(dirname, '..')

function loadEnvFiles() {
  const nodeEnv = process.env.NODE_ENV || 'development'

  const envFiles = [
    '.env',
    `.env.${nodeEnv}`,
    '.env.local',
    `.env.${nodeEnv}.local`,
  ]

  for (const file of envFiles) {
    const fullPath = path.join(projectDir, file)

    if (fs.existsSync(fullPath)) {
      dotenv.config({
        path: fullPath,
        override: true,
      })
    }
  }
}

loadEnvFiles()
process.env.PAYLOAD_SEED = 'true'

const { default: config } = await import('../payload.config')

type RichText = {
  root: {
    type: string
    children: Array<Record<string, unknown>>
    direction: 'ltr' | 'rtl' | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
}

type FormSeed = {
  title: string
  slug: string
  formType: 'section' | 'modal'
  submitButtonLabel: string
  confirmationType: 'message'
  confirmationMessage: RichText
  emails: Array<{
    emailTo?: string
    cc?: string
    bcc?: string
    replyTo?: string
    emailFrom?: string
    subject: string
    message: RichText
  }>
  fields: Array<Record<string, unknown>>
}

const richTextParagraphs = (paragraphs: string[]): RichText => ({
  root: {
    type: 'root',
    children: paragraphs.map((text) => ({
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text,
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          version: 1,
        },
      ],
      direction: null,
      format: '',
      indent: 0,
      version: 1,
    })),
    direction: null,
    format: '',
    indent: 0,
    version: 1,
  },
})

const textField = ({
  name,
  label,
  required = false,
  width = 50,
  placeholder,
}: {
  name: string
  label: string
  required?: boolean
  width?: number
  placeholder?: string
}) => ({
  blockType: 'text',
  name,
  label,
  required,
  width,
  ...(placeholder ? { placeholder } : {}),
})

const emailField = ({
  name,
  label,
  required = false,
  width = 50,
  placeholder,
}: {
  name: string
  label: string
  required?: boolean
  width?: number
  placeholder?: string
}) => ({
  blockType: 'email',
  name,
  label,
  required,
  width,
  ...(placeholder ? { placeholder } : {}),
})

const textareaField = ({
  name,
  label,
  required = false,
  width = 100,
  placeholder,
}: {
  name: string
  label: string
  required?: boolean
  width?: number
  placeholder?: string
}) => ({
  blockType: 'textarea',
  name,
  label,
  required,
  width,
  ...(placeholder ? { placeholder } : {}),
})

const buildInternalNotification = ({
  subject,
  bodyLines,
}: {
  subject: string
  bodyLines: string[]
}) => ({
  emailTo:
    process.env.INVESTOR_TO_EMAIL ||
    process.env.LEADS_TO_EMAIL ||
    process.env.SMTP_USER ||
    undefined,
  emailFrom: process.env.SMTP_USER,
  subject,
  message: richTextParagraphs([
    ...bodyLines,
    '',
    'Полный набор отправленных данных:',
    '{{*:table}}',
  ]),
})

const investorForm: FormSeed = {
  title: 'Investors — инвестиционный диалог',
  slug: 'investor-contact',
  formType: 'section',
  submitButtonLabel: 'Связаться с командой',
  confirmationType: 'message',
  confirmationMessage: richTextParagraphs([
    'Спасибо за интерес.',
    'Мы свяжемся с вами в ближайшее время для обсуждения инвестиционного тезиса.',
  ]),
  emails: [
    buildInternalNotification({
      subject: 'Новая инвестиционная заявка с сайта',
      bodyLines: [
        'Новая заявка со страницы investors.',
        'Имя: {{name}}',
        'Email: {{email}}',
        'Компания / Фонд: {{company}}',
        'Сообщение: {{message}}',
      ],
    }),
  ],
  fields: [
    textField({
      name: 'name',
      label: 'Имя',
      required: true,
      width: 50,
      placeholder: 'Ваше имя',
    }),
    emailField({
      name: 'email',
      label: 'Email',
      required: true,
      width: 50,
      placeholder: 'email@company.com',
    }),
    textField({
      name: 'company',
      label: 'Компания / Фонд',
      required: false,
      width: 100,
      placeholder: 'Название организации',
    }),
    textareaField({
      name: 'message',
      label: 'Сообщение',
      required: false,
      width: 100,
      placeholder: 'Расскажите о вашем интересе к проекту...',
    }),
  ],
}

async function upsertForm(payload: Awaited<ReturnType<typeof getPayload>>, form: FormSeed) {
  const existing = await payload.find({
    collection: 'forms',
    where: {
      slug: {
        equals: form.slug,
      },
    },
    limit: 1,
    depth: 0,
    overrideAccess: true,
  })

  const data = {
    title: form.title,
    slug: form.slug,
    formType: form.formType,
    submitButtonLabel: form.submitButtonLabel,
    confirmationType: form.confirmationType,
    confirmationMessage: form.confirmationMessage,
    emails: form.emails,
    fields: form.fields,
  } as const

  if (existing.docs.length > 0) {
    const updated = await payload.update({
      collection: 'forms',
      id: existing.docs[0].id,
      data,
      overrideAccess: true,
    })

    payload.logger.info(`Обновлена форма: ${updated.slug}`)
    return
  }

  const created = await payload.create({
    collection: 'forms',
    data,
    overrideAccess: true,
  })

  payload.logger.info(`Создана форма: ${created.slug}`)
}

async function run() {
  const payload = await getPayload({ config })

  await upsertForm(payload, investorForm)

  payload.logger.info('Seed для investor contact завершён.')
  process.exit(0)
}

run().catch((error) => {
  console.error('Ошибка при seed investor contact:', error)
  process.exit(1)
})