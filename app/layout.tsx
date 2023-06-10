import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { SocialIcon } from 'react-social-icons'
import Image from 'next/image'

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
        <header className='text-gray-950 text-center flex justify-center items-center mt-10 text-8xl mb-10 font-noto font-semibold'>
        <div className="flex -space-x-1 ">
        <Image
          className="inline-block h-64 w-64 rounded-full ring-4 ring-white ml-4"
          src="/IMG_1255.jpg"
          alt=""
          width={256}
          height={256}
        />
        </div>
        </header> 
        <Navbar></Navbar>
        <div className='border-white border-y-2'></div>
        <div className='flex justify-center items-center pt-4 pb-4 space-x-4'>
          <SocialIcon url='https://www.linkedin.com/in/bradley-gulli/' target='_blank'/>
          <SocialIcon url='https://github.com/BradGulli' target='_blank'/>
        </div>
        {children}
      </body>
    </html>
  )
}
