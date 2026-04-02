import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import dotenv from 'dotenv'
import { getPayload } from 'payload'

import { PAGE_SEO_CONFIG } from '../lib/page-seo'

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

async function seedPagesSEO() {
  const payload = await getPayload({
    config,
  })

  for (const [pageKey, page] of Object.entries(PAGE_SEO_CONFIG)) {
    const existing = await payload.find({
      collection: 'pages',
      where: {
        pageKey: {
          equals: pageKey,
        },
      },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    })

    const data = {
      pageKey,
      pageName: page.label,
      path: page.path,
      seoTitle: page.defaultTitle,
      seoDescription: page.defaultDescription,
    }

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
      })

      payload.logger.info(`[pages-seo] updated: ${pageKey}`)
      continue
    }

    await payload.create({
      collection: 'pages',
      data,
      overrideAccess: true,
    })

    payload.logger.info(`[pages-seo] created: ${pageKey}`)
  }

  payload.logger.info('[pages-seo] done')
  process.exit(0)
}

seedPagesSEO().catch((error) => {
  console.error('[pages-seo] failed', error)
  process.exit(1)
})