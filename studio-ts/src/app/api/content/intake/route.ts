import {NextResponse} from 'next/server'
import {adaptIntake, adaptRankScoreMarkdown} from '@/lib/content-ops/adapters'
import {isAuthorized} from '@/lib/content-ops/auth'
import {processIntake} from '@/lib/content-ops/process-intake'
import type {IntakePayload} from '@/lib/content-ops/types'

export const runtime = 'nodejs'
export const maxDuration = 180

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request, process.env.CONTENT_INTAKE_SECRET)) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401})
    }
    const length = Number(request.headers.get('content-length') ?? 0)
    if (length > 512_000) return NextResponse.json({error: 'Payload too large'}, {status: 413})
    const raw = await request.text()
    if (raw.length > 512_000) return NextResponse.json({error: 'Payload too large'}, {status: 413})

    const isMarkdown = request.headers.get('content-type')?.split(';')[0] === 'text/markdown'
    let payload: IntakePayload = {article: {}}
    let article
    if (isMarkdown) {
      const secondaryKeywords = request.headers.get('x-secondary-keywords')?.split(',').map((value) => value.trim()).filter(Boolean)
      article = adaptRankScoreMarkdown(raw, {
        sourceId: request.headers.get('x-source-id') ?? '',
        primaryKeyword: request.headers.get('x-primary-keyword') ?? '',
        pillarArticleId: request.headers.get('x-pillar-article-id') ?? '',
        secondaryKeywords,
        sourceUrl: request.headers.get('x-source-url') ?? undefined,
      })
      payload.force = request.headers.get('x-force-overwrite') === 'true'
    } else {
      try {
        payload = JSON.parse(raw) as IntakePayload
      } catch {
        return NextResponse.json({error: 'Request body must be valid JSON'}, {status: 400})
      }
      article = adaptIntake(payload)
    }
    const result = await processIntake(article, payload.force)
    return NextResponse.json(result.body, {status: result.status})
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected content intake error'
    const clientError = /required|must be|exceeds|Unsupported adapter|ISO-8601/.test(message)
    console.error('Content intake failed', error)
    return NextResponse.json({error: message}, {status: clientError ? 400 : 500})
  }
}
