import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export function getSession() {
    const session = cookies().get('token')?.value
    if (!session) return null
    return session
  }
  
  export function updateSession(req: NextRequest) {
    const token = req.cookies.get('token')?.value
    if (!token) {
      return
    }
    const res = NextResponse.next()
    res.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    })
    return res
  }
  
  export function getMessage() {
    const message = cookies().get('message')?.value
    if (!message) return null
    return message
  }
  