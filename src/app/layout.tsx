import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aline Oliveira Portfolio',
  description: 'Meu portfolio designer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>{children}</body>
    </html>
  )
}
