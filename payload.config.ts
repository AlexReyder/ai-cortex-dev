import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { formBuilderPlugin, fields as formBuilderFields } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ru } from '@payloadcms/translations/languages/ru'

import { Users } from './collection/Users'
import { Pages } from './collection/Pages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const smtpPort = Number(process.env.SMTP_PORT ?? 465)

const disableEmail =
  process.env.PAYLOAD_SEED === 'true' ||
  process.env.DISABLE_EMAIL === 'true' ||
  !process.env.SMTP_HOST ||
  !process.env.SMTP_USER ||
  !process.env.SMTP_PASS

type FieldConfigLike = Record<string, any>

const FIELD_LABEL_TRANSLATIONS: Record<string, string> = {
  title: 'Название формы',
  label: 'Название поля',
  name: 'Системное имя',
  width: 'Ширина',
  required: 'Обязательное поле',
  defaultValue: 'Значение по умолчанию',
  placeholder: 'Подсказка',
  options: 'Варианты',
  value: 'Значение',
  rows: 'Количество строк',
  message: 'Текст сообщения',
  submitButtonLabel: 'Текст кнопки',
  confirmationType: 'Действие после отправки',
  confirmationMessage: 'Сообщение после отправки',
  redirect: 'Переадресация',
  url: 'Ссылка',
  emails: 'Email-уведомления',
  emailTo: 'Кому отправлять',
  cc: 'Копия',
  bcc: 'Скрытая копия',
  replyTo: 'Ответить на',
  emailFrom: 'Email отправителя',
  subject: 'Тема письма',
  form: 'Форма',
  createdAt: 'Дата создания',
  updatedAt: 'Дата обновления',
  id: 'ID',
}

const FIELD_DESCRIPTION_TRANSLATIONS: Record<string, string> = {
  label: 'Подпись, которую увидит пользователь на сайте.',
  name: 'Техническое имя поля. Используется в отправке формы, шаблонах писем и на фронтенде. Лучше не менять после подключения формы на сайт.',
  width: 'Ширина поля в сетке формы.',
  required: 'Если включено, поле обязательно для заполнения.',
  defaultValue: 'Значение, которое будет подставлено по умолчанию.',
  placeholder: 'Подсказка внутри поля на фронтенде.',
  options: 'Варианты выбора для select, radio или checkbox.',
  message: 'Информационный текст, который отображается внутри формы.',
  submitButtonLabel: 'Текст кнопки отправки формы.',
  confirmationType: 'Что должно произойти после успешной отправки формы.',
  confirmationMessage: 'Сообщение, которое увидит пользователь после успешной отправки.',
  url: 'Ссылка, на которую нужно перенаправить пользователя после отправки.',
  emails: 'Уведомления, которые будут отправляться после успешной отправки формы.',
  emailTo: 'Основной адрес получателя уведомления.',
  replyTo: 'Адрес, на который будет удобно отвечать из письма.',
}

function localizeFieldConfig<T extends FieldConfigLike>(field: T): T {
  const next: T = { ...field }

  if (typeof next.name === 'string') {
    const translatedLabel = FIELD_LABEL_TRANSLATIONS[next.name]
    const translatedDescription = FIELD_DESCRIPTION_TRANSLATIONS[next.name]

    if (translatedLabel) {
      next.label = translatedLabel
    }

    if (translatedDescription) {
      next.admin = {
        ...(next.admin || {}),
        description: translatedDescription,
      }
    }
  }

  if (Array.isArray(next.fields)) {
    next.fields = next.fields.map((nestedField: FieldConfigLike) => localizeFieldConfig(nestedField))
  }

  if (Array.isArray(next.tabs)) {
    next.tabs = next.tabs.map((tab: FieldConfigLike) => ({
      ...tab,
      fields: Array.isArray(tab.fields)
        ? tab.fields.map((nestedField: FieldConfigLike) => localizeFieldConfig(nestedField))
        : tab.fields,
    }))
  }

  if (Array.isArray(next.blocks)) {
    next.blocks = next.blocks.map((block: FieldConfigLike) => ({
      ...block,
      fields: Array.isArray(block.fields)
        ? block.fields.map((nestedField: FieldConfigLike) => localizeFieldConfig(nestedField))
        : block.fields,
    }))
  }

  return next
}

function buildLocalizedFormBlock(
  baseBlock: any,
  labels: { singular: string; plural: string },
  options?: {
    addPlaceholder?: boolean
  },
) {
  if (!baseBlock || !('fields' in baseBlock) || !Array.isArray(baseBlock.fields)) {
    return true
  }

  const placeholderField = {
    name: 'placeholder',
    label: 'Подсказка',
    type: 'text' as const,
    admin: {
      description: 'Подсказка внутри поля на фронтенде.',
    },
  }

  return {
    ...baseBlock,
    labels,
    fields: [
      ...baseBlock.fields.map((field: FieldConfigLike) => localizeFieldConfig(field)),
      ...(options?.addPlaceholder ? [placeholderField] : []),
    ],
  }
}

const textBlock = buildLocalizedFormBlock(
  formBuilderFields.text,
  {
    singular: 'Текстовое поле',
    plural: 'Текстовые поля',
  },
  { addPlaceholder: true },
)

const emailBlock = buildLocalizedFormBlock(
  formBuilderFields.email,
  {
    singular: 'Поле Email',
    plural: 'Поля Email',
  },
  { addPlaceholder: true },
)

const textareaBlock = buildLocalizedFormBlock(
  formBuilderFields.textarea,
  {
    singular: 'Многострочное поле',
    plural: 'Многострочные поля',
  },
  { addPlaceholder: true },
)

const selectBlock = buildLocalizedFormBlock(formBuilderFields.select, {
  singular: 'Выпадающий список',
  plural: 'Выпадающие списки',
})

const radioBlock = buildLocalizedFormBlock(formBuilderFields.radio, {
  singular: 'Переключатели',
  plural: 'Переключатели',
})

const checkboxBlock = buildLocalizedFormBlock(formBuilderFields.checkbox, {
  singular: 'Чекбокс',
  plural: 'Чекбоксы',
})

const numberBlock = buildLocalizedFormBlock(formBuilderFields.number, {
  singular: 'Числовое поле',
  plural: 'Числовые поля',
})

const messageBlock = buildLocalizedFormBlock(formBuilderFields.message, {
  singular: 'Информационный блок',
  plural: 'Информационные блоки',
})

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: './app/(payload)/importMap.ts',
    },
  },

  i18n: {
    fallbackLanguage: 'ru',
    supportedLanguages: {
      ru,
    },
  },

  editor: lexicalEditor({}),

  email: disableEmail
    ? undefined
    : nodemailerAdapter({
        defaultFromAddress: process.env.SMTP_USER as string,
        defaultFromName: 'Cortex ToDo',
        transportOptions: {
          host: process.env.SMTP_HOST,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        },
      }),

  collections: [Users, Pages],

  plugins: [
    formBuilderPlugin({
      fields: {
        text: textBlock,
        email: emailBlock,
        textarea: textareaBlock,
        select: selectBlock,
        radio: radioBlock,
        checkbox: checkboxBlock,
        number: numberBlock,
        message: messageBlock,
        country: false,
        state: false,
        date: false,
        payment: false,
      },

      defaultToEmail: process.env.LEADS_TO_EMAIL || process.env.SMTP_USER || undefined,

      formOverrides: {
        labels: {
          singular: 'Форма',
          plural: 'Формы',
        },
        admin: {
          group: 'Формы и заявки',
          useAsTitle: 'title',
          defaultColumns: ['title', 'slug', 'formType', 'updatedAt'],
        },
        access: {
          read: () => true,
        },
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields.map((field) => localizeFieldConfig(field)),
            {
              name: 'slug',
              label: 'Ключ формы',
              type: 'text',
              required: true,
              unique: true,
              index: true,
              admin: {
                description:
                  'Технический ключ для загрузки формы на фронтенде. Например: home-ai-lead',
              },
            },
            {
              name: 'formType',
              label: 'Тип формы',
              type: 'select',
              defaultValue: 'section',
              options: [
                {
                  label: 'Секционная форма',
                  value: 'section',
                },
                {
                  label: 'Модальное окно',
                  value: 'modal',
                },
              ],
            },
          ]
        },
      },

      formSubmissionOverrides: {
        labels: {
          singular: 'Заявка с формы',
          plural: 'Заявки с форм',
        },
        admin: {
          group: 'Формы и заявки',
          defaultColumns: [
            'createdAt',
            'form',
            'sourcePage',
            'sourceSection',
            'intent',
            'product',
          ],
        },
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields.map((field) => localizeFieldConfig(field)),
            {
              name: 'sourcePage',
              label: 'Источник: страница',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'sourceSection',
              label: 'Источник: секция',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'modalType',
              label: 'Источник: модальное окно',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'product',
              label: 'Продукт',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'intent',
              label: 'Сценарий',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'utmSource',
              label: 'UTM-источник',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'utmMedium',
              label: 'UTM-канал',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'utmCampaign',
              label: 'UTM-кампания',
              type: 'text',
              admin: { readOnly: true },
            },
          ]
        },
      },
    }),
  ],

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: true,
  }),

  secret: process.env.PAYLOAD_SECRET || '',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})