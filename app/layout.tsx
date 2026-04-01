import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CTAModalProvider } from '@/components/cta-modals'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Cortex ToDo — Российская AI-native платформа для управления бизнесом',
  description: 'AI-агенты для роста малого и среднего бизнеса. Защищенная Task Management System для enterprise. Одна технологическая платформа для автоматизации, контроля исполнения и безопасного управления процессами.',
  generator: 'v0.app',
  keywords: ['AI', 'task management', 'enterprise', 'российская платформа', 'автоматизация', 'управление проектами'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <CTAModalProvider>
          {children}
        </CTAModalProvider>
        <Analytics />
      </body>
    </html>
  )
}
