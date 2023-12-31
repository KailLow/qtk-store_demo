import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/index";
import "@/utils/font"
import { primary } from '@/utils/font';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QTK Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className&&primary.className}>{children}</body>
    </html>
  )
}
