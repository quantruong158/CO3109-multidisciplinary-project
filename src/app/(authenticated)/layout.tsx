import type { Metadata } from 'next'
import NavBar from '@/components/component/navbar'

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
