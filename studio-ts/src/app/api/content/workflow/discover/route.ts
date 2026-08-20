import {NextResponse} from 'next/server'
import {isCronAuthorized} from '@/lib/content-ops/cron-auth'
import {discoverWeeklyArticle} from '@/lib/content-ops/workflow'

export const runtime = 'nodejs'
export const maxDuration = 300

export async function GET(request: Request) {
  if (!isCronAuthorized(request)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  try { return NextResponse.json(await discoverWeeklyArticle()) }
  catch (error) { console.error('Weekly discovery failed', error); return NextResponse.json({error: error instanceof Error ? error.message : 'Workflow failed'}, {status: 500}) }
}
