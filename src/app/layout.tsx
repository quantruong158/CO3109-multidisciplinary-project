import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Background from '@/components/component/background'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'relative')}>
        <Toaster />
        <Background></Background>
        {children}
      </body>
    </html>
  )
}
