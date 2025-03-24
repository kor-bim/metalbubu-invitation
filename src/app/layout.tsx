import type { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'
import Providers from '@/app/provider'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: 'PBJ💜LEC 🔜 🦋BUBU🦋',
  description: '2025년 5월 17일(토) 오후4시 호텔 ICC웨딩홀 1층',
  openGraph: {
    title: '박병주♥이은총 결혼 🎸',
    description: '2025년 5월 17일(토) 오후4시 호텔 ICC웨딩홀 1층',
    url: 'https://invitation.metalbubu.life',
    siteName: '박병주 ♥ 이은총 결혼식',
    images: [
      {
        url: 'https://invitation.metalbubu.life/og-image.png',
        width: 1200,
        height: 630,
        alt: '청첩장 썸네일'
      }
    ],
    type: 'website'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  minimumScale: 1.0,
  userScalable: false // user-scalable=0
}

const pretendard = localFont({
  src: '../../public/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <body className={`${pretendard.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
