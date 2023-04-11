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
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className='mb-0  text-white'>

        {/* <main> */}
        <div>
      {/* <Sidebar/> */}
          {children}
          {/* </main> */}
          </div>
        </body>
    </html>
  )
}
