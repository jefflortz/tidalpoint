import {NextResponse} from 'next/server'
import {adaptRankScoreArticle, fetchRankScoreArticle} from '@/lib/content-ops/adapters'
import {isAuthorized} from '@/lib/content-ops/auth'
import {processIntake} from '@/lib/content-ops/process-intake'
import type {RankScoreIntakePayload} from '@/lib/content-ops/types'

export const runtime = 'nodejs'
export const maxDuration = 180

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request, process.env.CONTENT_INTAKE_SECRET)) {
      return NextResponse.json({error: 'Unauthorized'}, {status: 401})
    }
    const payload = await request.json() as RankScoreIntakePayload
    const source = await fetchRankScoreArticle(payload.articleId)
    const article = adaptRankScoreArticle(source, payload.pillarArticleId)
    const result = await processIntake(article, payload.force)
    return NextResponse.json(result.body, {status: result.status})
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected Rank Score intake error'
    const clientError = /required|must be|invalid|not found/.test(message)
    console.error('Rank Score intake failed', error)
    return NextResponse.json({error: message}, {status: clientError ? 400 : 500})
  }
}
