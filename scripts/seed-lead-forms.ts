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
  fields: Array<Record<string, unknown>>
}

const richText = (text: string): RichText => ({
  root: {
    type: 'root',
    children: [
      {
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
      },
    ],
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
}: {
  name: string
  label: string
  required?: boolean
  width?: number
}) => ({
  blockType: 'text',
  name,
  label,
  required,
  width,
})

const emailField = ({
  name,
  label,
  required = false,
  width = 50,
}: {
  name: string
  label: string
  required?: boolean
  width?: number
}) => ({
  blockType: 'email',
  name,
  label,
  required,
  width,
})

const textareaField = ({
  name,
  label,
  required = false,
  width = 100,
}: {
  name: string
  label: string
  required?: boolean
  width?: number
}) => ({
  blockType: 'textarea',
  name,
  label,
  required,
  width,
})

const leadForms: FormSeed[] = [
  {
    title: 'Главная — заявка AI',
    slug: 'home-ai-lead',
    formType: 'section',
    submitButtonLabel: 'Отправить заявку',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо! Мы свяжемся с вами в ближайшее время.'),
    fields: [
      textField({
        name: 'name',
        label: 'Имя',
        required: true,
        width: 50,
      }),
      textField({
        name: 'company',
        label: 'Компания',
        required: true,
        width: 50,
      }),
      textField({
        name: 'role',
        label: 'Должность',
        required: false,
        width: 50,
      }),
      emailField({
        name: 'email',
        label: 'Email',
        required: true,
        width: 50,
      }),
      textField({
        name: 'phone',
        label: 'Телефон',
        required: false,
        width: 100,
      }),
      textareaField({
        name: 'message',
        label: 'Что хотите автоматизировать?',
        required: false,
        width: 100,
      }),
    ],
  },
  {
    title: 'Главная — заявка ToDo',
    slug: 'home-todo-lead',
    formType: 'section',
    submitButtonLabel: 'Отправить заявку',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо! Мы свяжемся с вами в ближайшее время.'),
    fields: [
      textField({
        name: 'name',
        label: 'Имя',
        required: true,
        width: 50,
      }),
      textField({
        name: 'company',
        label: 'Компания',
        required: true,
        width: 50,
      }),
      textField({
        name: 'role',
        label: 'Роль в компании',
        required: false,
        width: 50,
      }),
      emailField({
        name: 'email',
        label: 'Email',
        required: true,
        width: 50,
      }),
      textField({
        name: 'phone',
        label: 'Телефон',
        required: false,
        width: 100,
      }),
      textareaField({
        name: 'message',
        label: 'Что хотите заменить / внедрить?',
        required: false,
        width: 100,
      }),
    ],
  },
]

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
    fields: form.fields,
  } as any

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

  for (const form of leadForms) {
    await upsertForm(payload, form)
  }

  payload.logger.info('Seed для lead-forms завершён.')
  process.exit(0)
}

run().catch((error) => {
  console.error('Ошибка при seed lead-forms:', error)
  process.exit(1)
})