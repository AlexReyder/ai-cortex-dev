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
}: {
  subject: string
  bodyLines: string[]
}) => ({
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
    title: 'CTA — implementation',
    slug: 'cta-implementation',
    formType: 'modal',
    submitButtonLabel: 'Обсудить внедрение',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: внедрение ToDo Enterprise',
        bodyLines: [
          'Новая заявка из modal implementation.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Где планирует развертывание: {{deployment}}',
          'Какие процессы хочет перенести: {{processes}}',
          'Нужна ли адаптация под процессы: {{customization}}',
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
        name: 'deployment',
        label: 'Где планируете развертывание?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Сервер клиента', value: 'client-server' },
          { label: 'Private cloud', value: 'private-cloud' },
          { label: 'Российский ЦОД', value: 'russian-dc' },
        ],
      }),
      textareaField({
        name: 'processes',
        label: 'Какие процессы хотите перенести?',
        placeholder: 'Опишите текущие процессы...',
        width: 100,
      }),
      selectField({
        name: 'customization',
        label: 'Нужна ли адаптация под ваши процессы?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Да, нужна кастомизация', value: 'yes-customization' },
          { label: 'Возможно, требуется обсуждение', value: 'discussion' },
          { label: 'Нет, стандартная версия', value: 'standard' },
        ],
      }),
    ],
  },

  {
    title: 'CTA — architecture',
    slug: 'cta-architecture',
    formType: 'modal',
    submitButtonLabel: 'Обсудить архитектуру',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: архитектура и размещение',
        bodyLines: [
          'Новая заявка из modal architecture.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Интересующий сценарий размещения: {{deployment_scenario}}',
          'Требования по безопасности: {{security_requirements}}',
          'Нужны ли интеграции: {{integrations}}',
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
        name: 'deployment_scenario',
        label: 'Интересующий сценарий размещения',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'On-prem', value: 'on-prem' },
          { label: 'Private cloud', value: 'private-cloud' },
          { label: 'Российский ЦОД', value: 'russian-dc' },
          { label: 'Гибридный вариант', value: 'hybrid' },
        ],
      }),
      textareaField({
        name: 'security_requirements',
        label: 'Требования по безопасности',
        placeholder: 'Опишите требования...',
        width: 100,
      }),
      selectField({
        name: 'integrations',
        label: 'Нужны ли интеграции?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Да, с текущими системами', value: 'current-systems' },
          { label: 'Да, с корпоративными сервисами', value: 'corporate-services' },
          { label: 'Нет', value: 'no' },
          { label: 'Требуется обсуждение', value: 'discussion' },
        ],
      }),
    ],
  },

  {
    title: 'CTA — migration',
    slug: 'cta-migration',
    formType: 'modal',
    submitButtonLabel: 'Обсудить миграцию',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: миграция в ToDo Enterprise',
        bodyLines: [
          'Новая заявка из modal migration.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'С какой системы переходят: {{current_system}}',
          'Что важно сохранить: {{preserve}}',
          'Нужен ли пилот / демо-стенд: {{pilot}}',
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
        name: 'current_system',
        label: 'С какой системы переходите?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Jira', value: 'jira' },
          { label: 'Trello', value: 'trello' },
          { label: 'Asana', value: 'asana' },
          { label: 'Monday', value: 'monday' },
          { label: 'Notion', value: 'notion' },
          { label: 'Другая система', value: 'other' },
        ],
      }),
      textareaField({
        name: 'preserve',
        label: 'Что важно сохранить?',
        placeholder: 'Данные, структуры, интеграции...',
        width: 100,
      }),
      selectField({
        name: 'pilot',
        label: 'Нужен ли пилот / демо-стенд?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Да, сначала пилот', value: 'pilot-first' },
          { label: 'Да, нужен демо-стенд', value: 'demo-stand' },
          { label: 'Нет, готовы к внедрению', value: 'ready' },
        ],
      }),
    ],
  },

  {
    title: 'CTA — customization',
    slug: 'cta-customization',
    formType: 'modal',
    submitButtonLabel: 'Обсудить кастомизацию',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: кастомизация ToDo Enterprise',
        bodyLines: [
          'Новая заявка из modal customization.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Какие доработки интересуют: {{customization_scope}}',
          'Нужна ли адаптация workflow: {{workflow}}',
          'Нужны ли интеграции: {{integrations}}',
          'Нужна ли адаптация интерфейса: {{interface}}',
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
      textareaField({
        name: 'customization_scope',
        label: 'Какие доработки вас интересуют?',
        placeholder: 'Опишите требования к кастомизации...',
        width: 100,
      }),
      selectField({
        name: 'workflow',
        label: 'Нужна ли адаптация workflow?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Да', value: 'yes' },
          { label: 'Нет', value: 'no' },
          { label: 'Требуется обсуждение', value: 'discussion' },
        ],
      }),
      selectField({
        name: 'integrations',
        label: 'Нужны ли интеграции?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Да, с корпоративными системами', value: 'corporate-systems' },
          { label: 'Да, с внешними сервисами', value: 'external-services' },
          { label: 'Нет', value: 'no' },
        ],
      }),
      selectField({
        name: 'interface',
        label: 'Нужна ли адаптация интерфейса?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Да, брендирование', value: 'branding' },
          { label: 'Да, кастомные поля', value: 'custom-fields' },
          { label: 'Нет', value: 'no' },
        ],
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

  payload.logger.info('Seed для CTA modals part 2 завершён.')
  process.exit(0)
}

run().catch((error) => {
  console.error('Ошибка при seed CTA modals part 2:', error)
  process.exit(1)
})