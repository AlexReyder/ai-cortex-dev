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

const commonFields = () => [
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
    name: 'position',
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
]

const demoForms: FormSeed[] = [
  {
    title: 'Demo — запрос демо',
    slug: 'demo-main-demo',
    formType: 'section',
    submitButtonLabel: 'Запросить демо',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'intentField',
        label: 'Что хотите посмотреть?',
        required: false,
        width: 100,
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
      }),
    ],
  },
  {
    title: 'Demo — запрос демо-стенда',
    slug: 'demo-main-stand',
    formType: 'section',
    submitButtonLabel: 'Запросить демо-стенд',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'intentField',
        label: 'Что хотите оценить самостоятельно?',
        required: false,
        width: 100,
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
      }),
    ],
  },
  {
    title: 'Demo — пилот',
    slug: 'demo-main-pilot',
    formType: 'section',
    submitButtonLabel: 'Обсудить пилот',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'intentField',
        label: 'Какой процесс хотите проверить на пилоте?',
        required: false,
        width: 100,
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
      }),
    ],
  },
  {
    title: 'Demo — миграция',
    slug: 'demo-main-migration',
    formType: 'section',
    submitButtonLabel: 'Обсудить миграцию',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'intentField',
        label: 'С какой системы переходите?',
        required: false,
        width: 100,
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
      }),
    ],
  },
  {
    title: 'Demo — архитектура размещения',
    slug: 'demo-main-architecture',
    formType: 'section',
    submitButtonLabel: 'Обсудить архитектуру',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      selectField({
        name: 'deployment',
        label: 'Где планируете размещение?',
        required: false,
        width: 100,
        placeholder: 'Выберите вариант',
        options: [
          { value: 'onprem', label: 'Сервер клиента' },
          { value: 'private-cloud', label: 'Private cloud' },
          { value: 'russian-dc', label: 'Российский ЦОД' },
        ],
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
      }),
    ],
  },
  {
    title: 'Demo — кастомизация',
    slug: 'demo-main-customization',
    formType: 'section',
    submitButtonLabel: 'Обсудить кастомизацию',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'intentField',
        label: 'Какие доработки вас интересуют?',
        required: false,
        width: 100,
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
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

  for (const form of demoForms) {
    await upsertForm(payload, form)
  }

  payload.logger.info('Seed для demo main form завершён.')
  process.exit(0)
}

run().catch((error) => {
  console.error('Ошибка при seed demo main form:', error)
  process.exit(1)
})