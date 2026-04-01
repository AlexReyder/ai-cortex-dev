import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { Users } from './collection/Users'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
   admin: {
    user: Users.slug,
    importMap: {
       baseDir: path.resolve(dirname), 
      importMapFile: './app/(payload)/importMap.ts',
    },
  },
   email: nodemailerAdapter({
    defaultFromAddress: process.env.SMTP_USER as string,
    defaultFromName: 'Atelier Meridian',
    transportOptions: {
      host: process.env.SMTP_HOST,
      port: 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  }),
  collections: [Users],
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