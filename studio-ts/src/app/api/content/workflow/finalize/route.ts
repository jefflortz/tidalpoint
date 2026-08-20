import {NextResponse} from 'next/server'
import {isCronAuthorized} from '@/lib/content-ops/cron-auth'
import {finalizeWeeklyApprovals} from '@/lib/content-ops/sanity'

export const runtime = 'nodejs'
export async function GET(request: Request) {
  if (!isCronAuthorized(request)) return NextResponse.json({error: 'Unauthorized'}, {status: 401})
  try { return NextResponse.json(await finalizeWeeklyApprovals()) }
  catch (error) { console.error('Approval finalization failed', error); return NextResponse.json({error: error instanceof Error ? error.message : 'Finalization failed'}, {status: 500}) }
}
