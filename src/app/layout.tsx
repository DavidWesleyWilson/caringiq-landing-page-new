import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CaringIQ - AI-Powered Caregiving Platform',
  description: 'Meet Cari, your intelligent care companion. CaringIQ helps family caregivers coordinate care, organize tasks, and get the support they need.',
  keywords: 'caregiving, AI assistant, family care, elderly care, care coordination',
  authors: [{ name: 'CaringIQ' }],
  openGraph: {
    title: 'CaringIQ - AI-Powered Caregiving Platform',
    description: 'Meet Cari, your intelligent care companion. CaringIQ helps family caregivers coordinate care, organize tasks, and get the support they need.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CaringIQ - AI-Powered Caregiving Platform',
    description: 'Meet Cari, your intelligent care companion. CaringIQ helps family caregivers coordinate care, organize tasks, and get the support they need.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 