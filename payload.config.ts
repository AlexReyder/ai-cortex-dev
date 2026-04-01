import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { Users } from './collection/Users'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ru } from '@payloadcms/translations/languages/ru'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const smtpPort = Number(process.env.SMTP_PORT ?? 465)

const disableEmail =
  process.env.PAYLOAD_SEED === 'true' ||
  process.env.DISABLE_EMAIL === 'true' ||
  !process.env.SMTP_HOST ||
  !process.env.SMTP_USER ||
  !process.env.SMTP_PASS

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
     supportedLanguages: { ru }
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

  collections: [Users],

  plugins: [
    formBuilderPlugin({
      fields: {
        text: true,
        textarea: true,
        select: true,
        radio: true,
        email: true,
        checkbox: true,
        number: true,
        message: true,
        country: false,
        state: false,
        date: false,
        payment: false,
      },

      defaultToEmail: process.env.SMTP_USER || undefined,

      formOverrides: {
        access: {
          read: () => true,
        },
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields,
            {
              name: 'slug',
              label: 'Slug формы',
              type: 'text',
              required: true,
              unique: true,
              index: true,
              admin: {
                description:
                  'Технический slug для загрузки формы на фронтенде. Например: home-ai-lead',
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
        admin: {
          defaultColumns: ['createdAt', 'form', 'sourcePage', 'sourceSection', 'intent', 'product'],
        },
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields,
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
              label: 'Источник: modalType',
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
              label: 'Intent',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'utmSource',
              label: 'UTM Source',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'utmMedium',
              label: 'UTM Medium',
              type: 'text',
              admin: { readOnly: true },
            },
            {
              name: 'utmCampaign',
              label: 'UTM Campaign',
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