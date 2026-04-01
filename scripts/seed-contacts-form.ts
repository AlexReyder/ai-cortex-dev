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

const commonFields = () => [
  textField({
    name: 'name',
    label: 'Имя',
    required: true,
    width: 50,
    placeholder: 'Ваше имя',
  }),
  textField({
    name: 'company',
    label: 'Компания',
    required: true,
    width: 50,
    placeholder: 'Название компании',
  }),
  textField({
    name: 'position',
    label: 'Должность',
    required: false,
    width: 100,
    placeholder: 'Ваша должность',
  }),
  emailField({
    name: 'email',
    label: 'Email',
    required: true,
    width: 50,
    placeholder: 'email@company.ru',
  }),
  textField({
    name: 'phone',
    label: 'Телефон',
    required: false,
    width: 50,
    placeholder: '+7 (___) ___-__-__',
  }),
]

const contactForms: FormSeed[] = [
  {
    title: 'Contacts — демо',
    slug: 'contacts-demo',
    formType: 'section',
    submitButtonLabel: 'Запросить демо',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'whatToShow',
        label: 'Что хотите посмотреть?',
        required: false,
        width: 100,
        placeholder: 'Какие сценарии вас интересуют?',
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
        placeholder: 'Дополнительная информация...',
      }),
    ],
  },
  {
    title: 'Contacts — демо-стенд',
    slug: 'contacts-stand',
    formType: 'section',
    submitButtonLabel: 'Запросить демо-стенд',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'whatToTest',
        label: 'Что хотите проверить в пилоте?',
        required: false,
        width: 100,
        placeholder: 'Какие процессы планируете протестировать?',
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
        placeholder: 'Дополнительная информация...',
      }),
    ],
  },
  {
    title: 'Contacts — миграция',
    slug: 'contacts-migration',
    formType: 'section',
    submitButtonLabel: 'Обсудить миграцию',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textField({
        name: 'migrationFrom',
        label: 'С какой системы переходите?',
        required: false,
        width: 100,
        placeholder: 'Jira, Trello, Asana, другая...',
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
        placeholder: 'Дополнительная информация...',
      }),
    ],
  },
  {
    title: 'Contacts — архитектура',
    slug: 'contacts-architecture',
    formType: 'section',
    submitButtonLabel: 'Обсудить архитектуру',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      selectField({
        name: 'deploymentLocation',
        label: 'Где планируете размещение?',
        required: false,
        width: 100,
        placeholder: 'Выберите вариант',
        options: [
          { label: 'Сервер клиента', value: 'client-server' },
          { label: 'Private cloud', value: 'private-cloud' },
          { label: 'Российский ЦОД', value: 'russian-dc' },
        ],
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
        placeholder: 'Дополнительная информация...',
      }),
    ],
  },
  {
    title: 'Contacts — кастомизация',
    slug: 'contacts-customization',
    formType: 'section',
    submitButtonLabel: 'Обсудить кастомизацию',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      textareaField({
        name: 'customizationNeeds',
        label: 'Какие доработки вас интересуют?',
        required: false,
        width: 100,
        placeholder: 'Опишите, что нужно адаптировать...',
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
        placeholder: 'Дополнительная информация...',
      }),
    ],
  },
  {
    title: 'Contacts — партнерство',
    slug: 'contacts-partner',
    formType: 'section',
    submitButtonLabel: 'Отправить партнерский запрос',
    confirmationType: 'message',
    confirmationMessage: richText('Спасибо за запрос. Мы свяжемся с вами в ближайшее время.'),
    fields: [
      ...commonFields(),
      selectField({
        name: 'partnerType',
        label: 'Тип партнерства',
        required: false,
        width: 100,
        placeholder: 'Выберите тип',
        options: [
          { label: 'Интегратор', value: 'integrator' },
          { label: 'Облако / ЦОД', value: 'cloud-dc' },
          { label: 'Реселлер', value: 'reseller' },
          { label: 'Консалтинг', value: 'consulting' },
          { label: 'Технологический партнер', value: 'technology-partner' },
        ],
      }),
      textareaField({
        name: 'comment',
        label: 'Комментарий',
        required: false,
        width: 100,
        placeholder: 'Дополнительная информация...',
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

  for (const form of contactForms) {
    await upsertForm(payload, form)
  }

  payload.logger.info('Seed для contacts form завершён.')
  process.exit(0)
}

run().catch((error) => {
  console.error('Ошибка при seed contacts form:', error)
  process.exit(1)
})