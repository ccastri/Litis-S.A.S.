'use client';
import HomeIcon from '@mui/icons-material/Home';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LoginIcon from '@mui/icons-material/Login';
// import { MenuIcon } from '@heroicons/react/outline';
import {useEffect, useRef, useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

     const HomeRef = useRef<null | HTMLDivElement>(null)
     const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    // <div className='fixed'>
// !Animated Icon
    <div className={`  fixed z-50  w-full top-0 h-28  text-white text-xl bg-[#675FFA]  ${ isScrolled ? 'opacity-70' : 'opacity-100'} `}>
        <div className='      flex flex-row w-full justify-between items-center  py-2  '>

          {/* <Sidebar/> */}
          <>
           <div className="relative w-8  h-16 mx-8" onClick={()=>{setIsOpen(!isOpen)}}>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'rotate-45' : 'mt-2'}`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? '-rotate-45' : ''}`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'opacity-0' : 'mt-4'}`}
      ></div>
    </div>

          {/* <MenuIcon 
          onClick={()=> setIsOpen(!isOpen)}
          className={` z-10 h-10 mx-8 transition duration-100 transform hover:scale-125 hover:text-white`} /> */}
          </>
{/* <> */}
<>
          <Image
          src='/LOGO-LITIS-removebg.png'
          width={150}
          height={150}
          className='mr-4 transition duration-100
          transform hover:scale-125  bg-white
          '
          object-fit='cover'
          alt=''/>
          {/* </> */}
          </>
          
          
          </div>
    <div className={` z-50 opacity-[85%] w-[55%] mt-2 h-screen transform ${isOpen ?  'translate-x-all duration-300 ': '-translate-x-full duration-300  bottom-0 '}  rounded bg-blue-500`}>
        <h1 className='text-center text-3xl py-4 '>MENU</h1>
        {/* <Link ></Link> */}
        <div 
        
        className='  rounded-md hover:opacity-100   text-justify justify-between my-2 space-y-4 py-2'>
            <Link href='/' onClick={()=>setIsOpen(!isOpen)}>
            <div className='flex space-x-4 items-center  w-full hover:text-2xl hover:duration-200 px-4 py-2 hover:bg-slate-600'>
            <HomeIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Inicio</h2>
            </div>
            </Link >
           <div className='flex space-x-4 items-center hover:text-2xl hover:duration-200 px-4 py-2 hover:bg-slate-600 w-full '>
            <Diversity2Icon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Quienes Somos</h2>
            </div>
            <div className='cursor-pointer'>
            <Link href='/signup' onClick={()=>setIsOpen(!isOpen)}
            className='flex space-x-4 items-center py-2  cursor-pointer px-4 hover:transition hover:duration-500 hover:bg-slate-600 hover:text-3xl '
            >
            <GroupAddIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Afiliate Ya</h2>
            </Link>
            </div>
            <div className='w-full text-center flex space-x-2 items-center hover:text-3xl px-4 py-2 hover:bg-slate-600  '>
            <ConnectWithoutContactIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Contactanos</h2>
            </div>
            <div className='coursor-pointer'>
               <Link href='/dashboard' onClick={()=>setIsOpen(!isOpen)}
               className='w-full text-center flex space-x-2 items-center hover:text-3xl px-4 py-2 hover:bg-slate-600  '>
            <AssignmentIndIcon sx={{fontSize:'30px'}} className=''/>
            <h2 className=''>Mis usuarios</h2>
             </Link>
            </div>
            
        </div>

        <div className='cursor-pointer'>
          <Link href='/signin'
        className='w-full mt-12 z-50 pl-4 text-center flex space-x-2  hover:text-3xl bottom-0 items-center hover:bg-slate-600  '>
            <LoginIcon sx={{fontSize:'30px'}} className=''/>

            <h2 className=''>Inicio de sesion</h2>
        </Link>
            </div>
        </div>
    </div>
    // </div>
  )
}

export default Sidebar