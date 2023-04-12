import Header from 'components/Header'
// import Sidebar from '@/app/Sidebar'
import './globals.css'
import Sidebar from './Sidebar'
// import {useState} from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Sidebar/>
      <body className='relative'>{children} </body>
    </html>
  )
}
