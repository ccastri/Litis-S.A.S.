'use client';
import HomeIcon from '@mui/icons-material/Home';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { MenuIcon } from '@heroicons/react/outline';
import {useRef, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

     const HomeRef = useRef<null | HTMLDivElement>(null)
  return (
    // <div className='fixed'>

    <div className={`  fixed z-50  w-full top-0 h-28  text-white text-xl bg-[#675FFA]  `}>
        <div className='      flex flex-row w-full justify-between items-center  py-2  '>

          {/* <Sidebar/> */}
          <MenuIcon 
          onClick={()=> setIsOpen(!isOpen)}
          className={` z-10 h-10 mx-8 transition duration-100 transform hover:scale-125 hover:text-white`} />
{/* <> */}

          <Image
          src='/LOGO-LITIS-removebg.png'
          width={150}
          height={150}
          className='mr-4 transition duration-100
          transform hover:scale-125 
          '
          object-fit='cover'
          alt=''/>
          {/* </> */}
          
          </div>
    <div className={`fixed z-50 opacity-[85%] w-[55%] top-28 h-[100%]  ${isOpen && '-translate-x-full  bottom-0 absolute'}  rounded bg-blue-500`}>
        <h1 className='text-center text-3xl py-4 '>MENU</h1>
        {/* <Link ></Link> */}
        <div 
        
        className='  rounded-md hover:opacity-100  text-justify justify-between hover:bg-green-500 space-y-4 p-6'>
            <Link href='/' onClick={()=>setIsOpen(!isOpen)}>
            <div className='flex space-x-4 items-center hover:text-3xl m-auto w-full hover:bg-slate-600 rounded-md hover:px-4'>
            <HomeIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Inicio</h2>
            </div>
            </Link>
           <div className='flex space-x-4 items-center hover:text-3xl  hover:bg-slate-600 rounded-md hover:px-4'>
            <Diversity2Icon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Quienes Somos</h2>
            </div>
            <div className='cursor-pointer'>
            <Link href='/signup'
            className='flex space-x-4 items-center hover:text-3xl cursor-pointer hover:bg-slate-600 rounded-md hover:px-4'
            >
            <GroupAddIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Afiliate Ya</h2>
            </Link>
            </div>
            <div className='w-full text-center flex space-x-2 items-center hover:text-3xl  hover:bg-slate-600 rounded-md '>
            <ConnectWithoutContactIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Contactanos</h2>
            </div>
            
        </div>
        </div>
    </div>
    // </div>
  )
}

export default Sidebar