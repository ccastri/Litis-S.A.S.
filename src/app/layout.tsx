import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import './globals.css'
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

      <body className='mb-0'>
        <div className='text-white'>

      <Header/>
      <Sidebar/>
        </div>
        <div>
          {children}
          </div>
        </body>
    </html>
  )
}
