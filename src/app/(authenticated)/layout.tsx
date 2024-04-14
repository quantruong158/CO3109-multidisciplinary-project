import type { Metadata } from 'next'
import NavBar from '@/components/component/navbar'

export const metadata: Metadata = {
  title: 'Home',
  description: 'YoloHome homepage',
}

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
