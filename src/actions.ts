'use server'
import { cookies } from 'next/headers'

type FormState = {
  type: string
  value: string
}

export async function login(prevState: FormState, formData: FormData) {
  const data = new URLSearchParams({
    email: formData.get('email')?.toString()!,
    password: formData.get('password')?.toString()!,
  })
  const res = await fetch(`${process.env.BACKEND_URL}/api/account/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  })
  const responseData = await res.json()
  if (responseData.code == 200) {
    const token = responseData.token
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24) // 1d expire
    cookies().set('token', token, { expires, httpOnly: true })
    const mes: FormState = {
      type: 'success',
      value: responseData.message,
    }
    return mes
  }
  const mes: FormState = {
    type: 'fail',
    value: responseData.message,
  }
  return mes
}

export async function register(prevState: FormState, formData: FormData) {
  const data = new URLSearchParams({
    email: formData.get('email')?.toString()!,
    password: formData.get('password')?.toString()!,
    fullName:
      formData.get('fname')?.toString()! + formData.get('lname')?.toString()!,
  })
  const res = await fetch(`${process.env.BACKEND_URL}/api/account/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data,
  })
  const responseData = await res.json()
  const mes: FormState = {
    type: responseData.code === 200 ? 'success' : 'fail',
    value: responseData.message,
  }
  return mes
}

export async function logout() {
  cookies().set('token', '', { expires: new Date(0) })
}

export async function toggleInLED(prevState: FormState, formData: FormData) {
  const value = formData.get('value')
  console.log('here:', value)
  const toggled_value = value === '1' ? '0' : '1'
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds/in-led/data`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit,
      body: JSON.stringify({ value: toggled_value }),
    },
  )
  const responseData = await res.json()
  const mes: FormState = {
    type: res.status === 200 ? 'success' : 'fail',
    value: responseData.value,
  }
  return mes
}

export async function toggleOutLED(prevState: FormState, formData: FormData) {
  const value = formData.get('value')
  const toggled_value = value === '1' ? '0' : '1'
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds/led/data`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit,
      body: JSON.stringify({ value: toggled_value }),
    },
  )
  const responseData = await res.json()
  const mes: FormState = {
    type: res.status === 200 ? 'success' : 'fail',
    value: responseData.value,
  }
  return mes
}

export async function changeDoorPassword(
  prevState: FormState,
  formData: FormData,
) {
  const value = formData.get('value')
  const res = await fetch(
    `https://io.adafruit.com/api/v2/${process.env.ADA_USERNAME}/feeds/password/data`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AIO-Key': process.env.ADA_KEY,
      } as HeadersInit,
      body: JSON.stringify({ value }),
    },
  )
  const responseData = await res.json()
  const mes: FormState = {
    type: res.status === 200 ? 'success' : 'fail',
    value: responseData.value,
  }
  return mes
}
