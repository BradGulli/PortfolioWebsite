import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

export const metadata = {
  title: 'Brad Gulli',
  description: 'Brad Gulli\'s personal website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen bg-slate-700'>
        <header className='text-gray-950 text-center flex justify-center items-center mt-10 text-8xl mb-10 font-noto font-semibold'>Bradley Gulli</header>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
