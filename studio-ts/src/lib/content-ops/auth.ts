import {timingSafeEqual} from 'node:crypto'

export function isAuthorized(request: Request, secret: string | undefined): boolean {
  if (!secret) throw new Error('Content operations secret is not configured')
  const authorization = request.headers.get('authorization')
  if (!authorization?.startsWith('Bearer ')) return false
  const supplied = Buffer.from(authorization.slice(7))
  const expected = Buffer.from(secret)
  return supplied.length === expected.length && timingSafeEqual(supplied, expected)
}
