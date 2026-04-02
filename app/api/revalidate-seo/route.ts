import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

import { getPageSEOConfig, isPageSEOKey } from '@/lib/page-seo'

type RevalidateSEORequest = {
  secret?: string
  pageKey?: string
  path?: string
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as RevalidateSEORequest | null

  if (!body || body.secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 })
  }

  if (!body.pageKey || !isPageSEOKey(body.pageKey)) {
    return NextResponse.json({ ok: false, error: 'Invalid pageKey' }, { status: 400 })
  }

  const pageConfig = getPageSEOConfig(body.pageKey)

  if (!pageConfig) {
    return NextResponse.json({ ok: false, error: 'Unknown page config' }, { status: 400 })
  }

  revalidateTag(`page-seo:${body.pageKey}`, 'max')
  revalidatePath(body.path || pageConfig.path)

  return NextResponse.json({
    ok: true,
    revalidated: true,
    pageKey: body.pageKey,
    path: body.path || pageConfig.path,
  })
}