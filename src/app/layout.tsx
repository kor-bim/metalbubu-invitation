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
  title: '⚡ 드디어 결혼합니다! 헤드뱅잉 하러 오실 거죠? 🤘',
  description: '2025년 5월 17일, 저희 밴드 인생의 가장 중요한 공연(?)이 열립니다! 함께 소리 지르고 축하해 주세요! 🎸🔥',
  openGraph: {
    title: '⚡ 드디어 결혼합니다! 헤드뱅잉 하러 오실 거죠? 🤘',
    description:
      '2025년 5월 17일, 저희 밴드 인생의 가장 중요한 공연(?)이 열립니다! 함께 소리 지르고 축하해 주세요! 🎸🔥',
    url: 'https://invitation.metalbubu.life',
    siteName: '🔥 The Metal Wedding 🔥',
    images: [
      {
        url: 'https://invitation.metalbubu.life/og-img.png',
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
