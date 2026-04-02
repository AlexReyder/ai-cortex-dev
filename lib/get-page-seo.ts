import 'server-only'

import type { Metadata } from 'next'
import { cacheTag } from 'next/cache'
import { getPayload } from 'payload'

import configPromise from '@payload-config'
import { getPageSEOConfig, type PageSEOKey } from '@/lib/page-seo'

type PageSEODocument = {
  seoTitle?: string | null
  seoDescription?: string | null
}

function normalizeText(value: string | null | undefined, fallback: string) {
  const normalized = value?.trim()
  return normalized ? normalized : fallback
}

export async function getPageSEO(pageKey: PageSEOKey): Promise<PageSEODocument | null> {
  'use cache'

  cacheTag(`page-seo:${pageKey}`)

  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'pages',
    where: {
      pageKey: {
        equals: pageKey,
      },
    },
    limit: 1,
    depth: 0,
  })

  const doc = result.docs?.[0]

  if (!doc) {
    return null
  }

  return {
    seoTitle: typeof doc.seoTitle === 'string' ? doc.seoTitle : null,
    seoDescription: typeof doc.seoDescription === 'string' ? doc.seoDescription : null,
  }
}

export async function buildPageMetadata(pageKey: PageSEOKey): Promise<Metadata> {
  const pageConfig = getPageSEOConfig(pageKey)

  if (!pageConfig) {
    return {}
  }

  const seo = await getPageSEO(pageKey)

  return {
    title: normalizeText(seo?.seoTitle, pageConfig.defaultTitle),
    description: normalizeText(seo?.seoDescription, pageConfig.defaultDescription),
  }
}