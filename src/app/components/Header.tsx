'use client';
// import { MenuIcon } from '@heroicons/react/outline'

import Image from 'next/image'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import Sidebar from '../Sidebar'

const Header = () => {

// const dispatch = useDispatch()
  return (
<div className={`  text-white text-xl bg-[#675FFA]  flex w-full justify-between items-center my-auto py-5 h-16 mb-0`}>
        <Image
          src='/LOGO-LITIS-removebg.png'
          width={100}
          height={100}
          className='mr-4 transition duration-100
          transform hover:scale-125
          '
          object-fit='cover'
          alt=''/>
          {/* <Sidebar/> */}
          {/* <MenuIcon  */}
          {/* // onClick={}
          className={`h-6 mx-8 transition duration-100 transform hover:scale-125 hover:text-white`} /> */}
      </div>
  )
}

export default Header
