import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Account',
  description: 'YoloHome account page',
}

const page = () => {
  return notFound()
}

export default page
