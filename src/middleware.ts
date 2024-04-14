import { NextRequest, NextResponse } from 'next/server'
import { updateSession } from './lib'

export function middleware(request: NextRequest) {
  if (!request.cookies.get('token')?.value) {
    return NextResponse.rewrite(new URL('/login', request.url))
  }
  return updateSession(request)
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|signup).*)',
  ],
}
