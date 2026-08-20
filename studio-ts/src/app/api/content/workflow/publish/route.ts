import {NextResponse} from 'next/server'
import {isCronAuthorized} from '@/lib/content-ops/cron-auth'
import {publishDueArticles} from '@/lib/content-ops/sanity'

export const runtime = 'nodejs'
export const maxDuration = 180

export async function GET(request: Request) {
  if (!isCronAuthorized(request)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  try { const published = await publishDueArticles(); return NextResponse.json({status: published.length ? 'published' : 'unchanged', published}) }
  catch (error) { console.error('Scheduled publishing failed', error); return NextResponse.json({error: error instanceof Error ? error.message : 'Publishing failed'}, {status: 500}) }
}
