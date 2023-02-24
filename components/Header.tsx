import { MenuIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
<div className=' text-white text-xl bg-[#675FFA]  flex w-full justify-between items-center my-auto py-5 h-16 mb-0'>
        <MenuIcon className='h-6   mx-8 
        transition duration-100
                        transform hover:scale-125
                                hover:text-white' />
        <Image
          src='/LOGO-LITIS-removebg.png'
          width={100}
          height={100}
          className='mr-4 transition duration-100
                        transform hover:scale-125
                                '
          object-fit='cover'
          alt=''/>
        {/* <p className="px-8 text-sm text-center font-bold font-OpenSans ">
          LITIS DE COLOMBIA S.A.S 
        </p> */}
      </div>
  )
}

export default Header
