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
    title: 'CTA — ToDo demo',
    slug: 'cta-todo-demo',
    formType: 'modal',
    submitButtonLabel: 'Отправить запрос',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: доступ к ToDo Enterprise',
        bodyLines: [
          'Новая заявка из modal todo-demo.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Должность: {{position}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Что хочет протестировать: {{test_scope}}',
          'Интересует: {{interest}}',
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
      textField({
        name: 'position',
        label: 'Должность',
        placeholder: 'Ваша должность',
        width: 100,
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
        name: 'test_scope',
        label: 'Что хотите протестировать?',
        placeholder: 'Опишите ваши задачи...',
        width: 100,
      }),
      selectField({
        name: 'interest',
        label: 'Интересует',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Демо', value: 'demo' },
          { label: 'Демо-стенд', value: 'demo-stand' },
          { label: 'Пилот', value: 'pilot' },
          { label: 'Внедрение', value: 'implementation' },
        ],
      }),
    ],
  },

  {
    title: 'CTA — ToDo stand',
    slug: 'cta-todo-stand',
    formType: 'modal',
    submitButtonLabel: 'Запросить демо-стенд',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: демо-стенд ToDo Enterprise',
        bodyLines: [
          'Новая заявка из modal todo-stand.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Роль в компании: {{role}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Размер команды: {{team_size}}',
          'Что хочет проверить в пилоте: {{pilot_scope}}',
          'Требуется ли on-prem / private cloud: {{deployment}}',
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
      textField({
        name: 'role',
        label: 'Роль в компании',
        placeholder: 'Ваша роль',
        width: 100,
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
        name: 'team_size',
        label: 'Размер команды',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'до 10', value: 'up-to-10' },
          { label: '10-50', value: '10-50' },
          { label: '50-200', value: '50-200' },
          { label: '200-1000', value: '200-1000' },
          { label: '1000+', value: '1000-plus' },
        ],
      }),
      textareaField({
        name: 'pilot_scope',
        label: 'Что хотите проверить в пилоте?',
        placeholder: 'Опишите сценарии использования...',
        width: 100,
      }),
      selectField({
        name: 'deployment',
        label: 'Требуется ли on-prem / private cloud?',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Нет, облако', value: 'cloud' },
          { label: 'Да, on-prem', value: 'on-prem' },
          { label: 'Да, private cloud', value: 'private-cloud' },
          { label: 'Требуется обсуждение', value: 'discussion' },
        ],
      }),
    ],
  },

  {
    title: 'CTA — AI demo',
    slug: 'cta-ai-demo',
    formType: 'modal',
    submitButtonLabel: 'Заказать демо',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: демо Cortex AI Agents',
        bodyLines: [
          'Новая заявка из modal ai-demo.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Должность: {{position}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Что хочет автоматизировать: {{automation_scope}}',
          'Количество сотрудников: {{employees}}',
          'Интересующий сценарий: {{scenario}}',
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
      textField({
        name: 'position',
        label: 'Должность',
        placeholder: 'Ваша должность',
        width: 100,
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
        name: 'automation_scope',
        label: 'Что хотите автоматизировать?',
        placeholder: 'Опишите рутинные процессы...',
        width: 100,
      }),
      selectField({
        name: 'employees',
        label: 'Количество сотрудников',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'до 10', value: 'up-to-10' },
          { label: '10-50', value: '10-50' },
          { label: '50-200', value: '50-200' },
          { label: '200+', value: '200-plus' },
        ],
      }),
      selectField({
        name: 'scenario',
        label: 'Интересующий сценарий',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Задачи', value: 'tasks' },
          { label: 'Совещания', value: 'meetings' },
          { label: 'Коммуникации', value: 'communications' },
          { label: 'Отчетность', value: 'reporting' },
          { label: 'AI-ассистент', value: 'ai-assistant' },
          { label: 'Все сценарии', value: 'all' },
        ],
      }),
    ],
  },

  {
    title: 'CTA — pilot',
    slug: 'cta-pilot',
    formType: 'modal',
    submitButtonLabel: 'Заказать демо',
    confirmationType: 'message',
    confirmationMessage: richTextParagraphs([
      'Наш менеджер свяжется с вами в ближайшее время.',
    ]),
    emails: [
      buildInternalNotification({
        subject: 'Новая заявка: пилот Cortex AI Agents',
        bodyLines: [
          'Новая заявка из modal pilot.',
          'Имя: {{name}}',
          'Компания: {{company}}',
          'Должность: {{position}}',
          'Email: {{email}}',
          'Телефон: {{phone}}',
          'Что хочет автоматизировать: {{automation_scope}}',
          'Количество сотрудников: {{employees}}',
          'Интересующий сценарий: {{scenario}}',
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
      textField({
        name: 'position',
        label: 'Должность',
        placeholder: 'Ваша должность',
        width: 100,
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
        name: 'automation_scope',
        label: 'Что хотите автоматизировать?',
        placeholder: 'Опишите рутинные процессы...',
        width: 100,
      }),
      selectField({
        name: 'employees',
        label: 'Количество сотрудников',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'до 10', value: 'up-to-10' },
          { label: '10-50', value: '10-50' },
          { label: '50-200', value: '50-200' },
          { label: '200+', value: '200-plus' },
        ],
      }),
      selectField({
        name: 'scenario',
        label: 'Интересующий сценарий',
        placeholder: 'Выберите...',
        width: 100,
        options: [
          { label: 'Задачи', value: 'tasks' },
          { label: 'Совещания', value: 'meetings' },
          { label: 'Коммуникации', value: 'communications' },
          { label: 'Отчетность', value: 'reporting' },
          { label: 'AI-ассистент', value: 'ai-assistant' },
          { label: 'Все сценарии', value: 'all' },
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

  payload.logger.info('Seed для CTA modals part 1 завершён.')
  process.exit(0)
}

run().catch((error) => {
  console.error('Ошибка при seed CTA modals part 1:', error)
  process.exit(1)
})