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

type FormEmail = {
  emailTo?: string
  cc?: string
  bcc?: string
  replyTo?: string
  emailFrom?: string
  subject?: string
  message?: unknown
}

type PayloadFormDoc = {
  id: string | number
  slug?: string
  title?: string
  emails?: FormEmail[] | null
}

function resolveRecipientEmail() {
  const value = process.env.SMTP_USER

  const normalized = value?.trim()

  if (!normalized) {
    throw new Error(
      'Set FORM_RECIPIENT_EMAIL or LEADS_TO_EMAIL (or SMTP_USER) in env before running this script.',
    )
  }

  return normalized
}

async function fetchAllForms(payload: Awaited<ReturnType<typeof getPayload>>) {
  const docs: PayloadFormDoc[] = []
  let page = 1
  let hasNextPage = true

  while (hasNextPage) {
    const result = await payload.find({
      collection: 'forms',
      limit: 100,
      page,
      depth: 0,
      overrideAccess: true,
    })

    docs.push(...(result.docs as PayloadFormDoc[]))
    hasNextPage = Boolean(result.hasNextPage)
    page += 1
  }

  return docs
}

async function run() {
  const recipientEmail = resolveRecipientEmail()

  const payload = await getPayload({
    config,
  })

  const forms = await fetchAllForms(payload)

  if (forms.length === 0) {
    payload.logger.info('[forms-recipient] Нет форм для обновления.')
    process.exit(0)
  }

  let updatedCount = 0
  let skippedCount = 0

  for (const form of forms) {
    const currentEmails = Array.isArray(form.emails) ? form.emails : []

    if (currentEmails.length === 0) {
      payload.logger.info(
        `[forms-recipient] skip: ${form.slug || form.id} — у формы нет email-уведомлений`,
      )
      skippedCount += 1
      continue
    }

    const nextEmails = currentEmails.map((email) => ({
      ...email,
      emailTo: recipientEmail,
    }))

    const changed = nextEmails.some(
      (email, index) => email.emailTo !== currentEmails[index]?.emailTo,
    )

    if (!changed) {
      payload.logger.info(
        `[forms-recipient] skip: ${form.slug || form.id} — email уже ${recipientEmail}`,
      )
      skippedCount += 1
      continue
    }

    await payload.update({
      collection: 'forms',
      id: form.id,
      data: {
        emails: nextEmails,
      },
      overrideAccess: true,
    })

    payload.logger.info(
      `[forms-recipient] updated: ${form.slug || form.id} -> ${recipientEmail}`,
    )
    updatedCount += 1
  }

  payload.logger.info(
    `[forms-recipient] done. updated=${updatedCount}, skipped=${skippedCount}, total=${forms.length}`,
  )

  process.exit(0)
}

run().catch((error) => {
  console.error('[forms-recipient] failed', error)
  process.exit(1)
})