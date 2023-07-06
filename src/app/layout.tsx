/* eslint-disable @next/next/no-page-custom-font */
'use client'

import { GlobalStyle } from './styles/global'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <GlobalStyle />
        {children}
      </body>
    </html>
  )
}
