import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel web site',
  description: 'Travel web site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='overflow-hidden relative'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
