import '../styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/providers/theme-provider'

export const metadata: Metadata = {
  title: 'Learniva AI - Transform Static Notes into Dynamic Learning',
  description: 'Multimodal AI-powered platform that converts your handwritten or digital notes into interactive study materials, animations, and personalized practice exercises.',
  keywords: 'AI learning, note transformation, educational technology, flashcards, study materials',
  authors: [{ name: 'Learniva AI' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/icon.svg'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Learniva AI - Transform Static Notes into Dynamic Learning',
    description: 'Multimodal AI-powered platform that converts your handwritten or digital notes into interactive study materials, animations, and personalized practice exercises.',
    url: 'https://learniva.ai',
    siteName: 'Learniva AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Learniva AI Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learniva AI - Transform Static Notes into Dynamic Learning',
    description: 'Multimodal AI-powered platform that converts your handwritten or digital notes into interactive study materials, animations, and personalized practice exercises.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
