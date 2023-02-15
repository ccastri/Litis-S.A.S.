import {
  MenuIcon
} from '@heroicons/react/outline'
import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='w-full h-screen'>
      {/* {Header} */}
      <div className='text-white text-xl bg-[#B5A15B]  flex w-full justify-between items-center my-auto py-5 h-16'>
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
      <div className='w-full h-60 absolute '>
            <Image
            className=' '
              src='/family-home.png'
              alt='family home'
              object-fit='cover'
              fill
            />
      </div>
          <div className='px-2  text-white flex flex-col w-full items-center text-center mt-60 h-30 bg-gradient-to-b from-[#776C44] to-[#BF9A16] mb-2'>
          <h3 className='text-xs pt-2'>Sabemos que tu familia y tu salud son los más importante</h3>
          <h3 className='text-md font-bold'>¡Más aun en tu trabajo!</h3>
          <button             className='transition duration-100
                        transform hover:scale-125
                                hover:text-white bg-gradient-to-b from-[#BF9A16] to-[#B5A15B]   text-white font-bold rounded-md mt-2 py-2 px-3 mb-2  border 10px-solid-white'> Comenzar </button>
          </div>
          <div className='flex justify-center border 1px-solid-white  
                        '>
<p>Mor mañana sacamos los paquetes y el login, hagale?</p>
          </div>

    </div>
  )
}
