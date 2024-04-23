import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function getAllFeeds() {
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds`,
    {
      cache: 'no-cache',
      headers: {
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit, // Add the type assertion here
    },
  )
  const data = await res.json()
  return data
}

export async function getLastDataFromFeed(feedKey: string) {
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds/${feedKey}/data/last`,
    {
      cache: 'no-cache',
      headers: {
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit,
    },
  )
  const data = await res.json()
  return data
}

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
