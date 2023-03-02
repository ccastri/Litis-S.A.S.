'use client';
import HomeIcon from '@mui/icons-material/Home';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { MenuIcon } from '@heroicons/react/outline';
import {useState} from 'react'
import Image from 'next/image';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`  text-white text-xl bg-[#675FFA]  `}>
        <div className='flex flex-row w-full justify-between items-center my-auto py-5  mb-0'>

          {/* <Sidebar/> */}
          <MenuIcon 
          onClick={()=> setIsOpen(!isOpen)}
          className={`h-6 mx-8 transition duration-100 transform hover:scale-125 hover:text-white`} />
          <Image
          src='/LOGO-LITIS-removebg.png'
          width={100}
          height={100}
          className='mr-4 transition duration-100
          transform hover:scale-125
          '
          object-fit='cover'
          alt=''/>
          </div>
    <div className={`absolute z-50 opacity-70 h-full  ${isOpen && '-translate-x-full'} rounded bg-blue-500`}>
        <h1 className='text-center text-3xl py-4 '>MENU</h1>
        <div className='  rounded-md hover:opacity-100 hover:bg-green-500 space-y-4 p-6'>
            <div className='flex space-x-4 items-center hover:text-3xl m-auto  hover:bg-slate-600 rounded-md hover:px-4'>
            <HomeIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Inicio</h2>
            </div>
           <div className='flex space-x-4 items-center hover:text-3xl  hover:bg-slate-600 rounded-md hover:px-4'>
            <Diversity2Icon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Quienes Somos</h2>
            </div>
            <div className='flex space-x-4 items-center hover:text-3xl  hover:bg-slate-600 rounded-md hover:px-4'>
            <GroupAddIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Afiliate Ya</h2>
            </div>
           <div className='flex space-x-4 items-center hover:text-3xl  hover:bg-slate-600 rounded-md hover:px-4'>
            <ConnectWithoutContactIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Contactanos</h2>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar