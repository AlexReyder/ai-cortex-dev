import { getPageSEOConfig, isPageSEOKey } from '@/lib/page-seo'

function getBaseURL() {
  const candidates = [
    process.env.SITE_URL,
    process.env.APP_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.NEXT_PUBLIC_APP_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
    'http://localhost:3000',
  ]

  const resolved = candidates.find((value) => typeof value === 'string' && value.length > 0)

  return resolved?.replace(/\/$/, '') ?? 'http://localhost:3000'
}

export async function revalidatePageSEO(pageKey: string) {
  if (process.env.PAYLOAD_SEED === 'true') {
    return
  }

  if (!isPageSEOKey(pageKey)) {
    return
  }

  const secret = process.env.REVALIDATE_SECRET

  if (!secret) {
    console.warn('[SEO revalidate] REVALIDATE_SECRET is not set')
    return
  }

  const pageConfig = getPageSEOConfig(pageKey)

  if (!pageConfig) {
    return
  }

  const url = `${getBaseURL()}/api/revalidate-seo`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      body: JSON.stringify({
        secret,
        pageKey,
        path: pageConfig.path,
      }),
    })

    if (!response.ok) {
      const text = await response.text().catch(() => '')
      console.error(
        `[SEO revalidate] Failed for ${pageKey}. Status: ${response.status}. Response: ${text}`,
      )
    }
  } catch (error) {
    console.error(`[SEO revalidate] Request failed for ${pageKey}`, error)
  }
}