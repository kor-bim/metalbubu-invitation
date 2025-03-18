import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ReactNode } from 'react'
import localFont from 'next/font/local'
import Providers from '@/app/provider'

const pretendard = localFont({
  src: '../../public/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: '박병주 ♥ 이은총 결혼식에 초대합니다. 🤘',
  description: '2025년 5월 17일(토) 오후4시 호텔 ICC웨딩홀 1층',
  openGraph: {
    title: '박병주 ♥ 이은총 결혼식에 초대합니다. 🤘',
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

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="kr" suppressHydrationWarning className={`${pretendard.variable}`}>
      <body className={`${pretendard.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
