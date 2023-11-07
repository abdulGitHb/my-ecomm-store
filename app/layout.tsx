import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { NextUIProviderMain } from '@/providers/nextUI-Provider'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CupShup Store',
  description: 'Your ultimate crockery destination',
  icons:{
    icon:[{
      url:"/cupshop-logo.svg",
      href:"/cupshop-logo.svg",
    }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        {/* <NextTopLoader/> */}
        <NextUIProviderMain>
          {children}
        </NextUIProviderMain>
        <Footer/>
      </body>
    </html>
  )
}
