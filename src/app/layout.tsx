import Header from '@/app/components/Header'
// import Sidebar from '@/app/Sidebar'
import './globals.css'
import { Providers } from './redux/provider'
import Sidebar from './Sidebar'
// import {useState} from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Sidebar/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
