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

const selectField = ({
  name,
  label,
  required = false,
  width = 100,
  placeholder,
  options,
}: {
  name: string
  label: string
  required?: boolean
  width?: number
  placeholder?: string
  options: Array<{ label: string; value: string }>
}) => ({
  blockType: 'select',
  name,
  label,
  required,
  width,
  placeholder,
  options,
})

const buildInternalNotification = ({
  subject,
  bodyLines,
  emailTo,
}: {
  subject: string
  bodyLines: string[]
  emailTo?: string
}) => ({
  emailTo: emailTo || process.env.LEADS_TO_EMAIL || process.env.SMTP_USER || undefined,
  emailFrom: process.env.SMTP_USER,
  subject,
  message: richTextParagraphs([
    ...bodyLines,
    '',
    'Полный набор отправленных данных:',
    '{{*:table}}',
  ]),
})

const ctaForms: FormSeed[] = [
  {
    title: 'CTA — partner',
    slug: 'cta-partner',
    formType: 'modal',
    submitButtonLabel: 'Отправить партнерский запрос',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Спасибо, партнерский запрос отправлен.',
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: партнерский запрос',
        bodyLines: [
          'Новая заявка из modal partner.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Тип партнерства: {{partnership_type}}',
          'Комментарий: {{comment}}',
        ],
      }),
    ],
    fields: [
      textField({
        name: 'name',
        label: 'Имя',
        placeholder: 'Ваше имя',
        required: true,
        width: 50,
      }),
      textField({
        name: 'company',
        label: 'Компания',
        placeholder: 'Название компании',
        required: true,
        width: 50,
      }),
      emailField({
        name: 'email',
        label: 'Email',
        placeholder: 'email@company.ru',
        required: true,
        width: 50,
      }),
      textField({
        name: 'phone',
        label: 'Телефон',
        placeholder: '+7 (___) ___-__-__',
        width: 50,
      }),
      selectField({
        name: 'partnership_type',
        label: 'Тип партнерства',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Интегратор', value: 'integrator' },
          { label: 'Облако / ЦОД', value: 'cloud-dc' },
          { label: 'Реселлер', value: 'reseller' },
          { label: 'Технологический партнер', value: 'technology-partner' },
          { label: 'Консалтинг', value: 'consulting' },
        ],
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        placeholder: 'Расскажите о предложении...',
        width: 100,
      }),
    ],
  },

  {
    title: 'CTA — contact',
    slug: 'cta-contact',
    formType: 'modal',
    submitButtonLabel: 'Отправить сообщение',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Спасибо, мы свяжемся с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: общий контакт',
        bodyLines: [
          'Новая заявка из modal contact.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Сообщение: {{message}}',
        ],
      }),
    ],
    fields: [
      textField({
        name: 'name',
        label: 'Имя',
        placeholder: 'Ваше имя',
        required: true,
        width: 50,
      }),
      textField({
        name: 'company',
        label: 'Компания',
        placeholder: 'Название компании',
        width: 50,
      }),
      emailField({
        name: 'email',
        label: 'Email',
        placeholder: 'email@company.ru',
        required: true,
        width: 50,
      }),
      textField({
        name: 'phone',
        label: 'Телефон',
        placeholder: '+7 (___) ___-__-__',
        width: 50,
      }),
      textareaField({
        name: 'message',
        label: 'Сообщение',
        placeholder: 'Ваше сообщение...',
        required: true,
        width: 100,
      }),
    ],
  },

  {
    title: 'CTA — investor',
    slug: 'cta-investor',
    formType: 'modal',
    submitButtonLabel: 'Связаться с командой',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Спасибо за интерес.',
      'Мы свяжемся с вами для обсуждения.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: инвестиционный диалог',
        emailTo:
          process.env.INVESTOR_TO_EMAIL ||
          process.env.LEADS_TO_EMAIL ||
          process.env.SMTP_USER ||
          undefined,
        bodyLines: [
          'Новая заявка из modal investor.',
          'Имя: {{name}}',
          'Компания / Фонд: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Тип инвестора: {{investor_type}}',
          'Сообщение: {{message}}',
        ],
      }),
    ],
    fields: [
      textField({
        name: 'name',
        label: 'Имя',
        placeholder: 'Ваше имя',
        required: true,
        width: 50,
      }),
      textField({
        name: 'company',
        label: 'Компания / Фонд',
        placeholder: 'Название организации',
        required: true,
        width: 50,
      }),
      emailField({
        name: 'email',
        label: 'Email',
        placeholder: 'email@company.com',
        required: true,
        width: 50,
      }),
      textField({
        name: 'phone',
        label: 'Телефон',
        placeholder: '+7 (___) ___-__-__',
        width: 50,
      }),
      selectField({
        name: 'investor_type',
        label: 'Тип инвестора',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Angel investor', value: 'angel-investor' },
          { label: 'VC fund', value: 'vc-fund' },
          { label: 'Strategic investor', value: 'strategic-investor' },
          { label: 'Family office', value: 'family-office' },
          { label: 'Другое', value: 'other' },
        ],
      }),
      textareaField({
        name: 'message',
        label: 'Сообщение',
        placeholder: 'Расскажите о вашем интересе к проекту...',
        width: 100,
      }),
    ],
  },

  {
    title: 'CTA — investor materials',
    slug: 'cta-investor-materials',
    formType: 'modal',
    submitButtonLabel: 'Запросить материалы',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Спасибо.',
      'Материалы будут направлены на указанный email.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: инвестиционные материалы',
        emailTo:
          process.env.INVESTOR_TO_EMAIL ||
          process.env.LEADS_TO_EMAIL ||
          process.env.SMTP_USER ||
          undefined,
        bodyLines: [
          'Новая заявка из modal investor-materials.',
          'Имя: {{name}}',
          'Компания / Фонд: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Какие материалы интересуют: {{materials}}',
          'Комментарий: {{comment}}',
        ],
      }),
    ],
    fields: [
      textField({
        name: 'name',
        label: 'Имя',
        placeholder: 'Ваше имя',
        required: true,
        width: 50,
      }),
      textField({
        name: 'company',
        label: 'Компания / Фонд',
        placeholder: 'Название организации',
        required: true,
        width: 50,
      }),
      emailField({
        name: 'email',
        label: 'Email',
        placeholder: 'email@company.com',
        required: true,
        width: 50,
      }),
      textField({
        name: 'phone',
        label: 'Телефон',
        placeholder: '+7 (___) ___-__-__',
        width: 50,
      }),
      selectField({
        name: 'materials',
        label: 'Какие материалы интересуют?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Presentation deck', value: 'presentation-deck' },
          { label: 'Financial summary', value: 'financial-summary' },
          { label: 'Product roadmap', value: 'product-roadmap' },
          { label: 'Все материалы', value: 'all-materials' },
        ],
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        placeholder: 'Дополнительные вопросы или комментарии...',
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

  for (const form of ctaForms) {
    await upsertForm(payload, form)
  }

  payload.logger.info('Seed для CTA modals part 3 завершён.')
  process.exit(0)
}

run().catch((error) => {
  console.error('Ошибка при seed CTA modals part 3:', error)
  process.exit(1)
})