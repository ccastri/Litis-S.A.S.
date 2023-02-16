import Image from 'next/image'
import React from 'react'

const Carrousel = () => {
  return (
    <>
   <div className='w-full h-60 absolute '>
            <Image
            className=' '
              src='/family-home.png'
              alt='family home'
              object-fit='cover'
              fill
            />
      </div>
          <div className='px-2 flex flex-col w-full items-center text-center mt-60 h-30 bg-gradient-to-b from-[#776C44] to-[#BF9A16]'>
          <h3 className='text-xs pt-2'>Sabemos que tu familia y tu salud son los más importante</h3>
          <h3 className='text-md font-bold'>¡Más aun en tu trabajo!</h3>
          <button             className='transition duration-100
                        transform hover:scale-125
                                hover:text-white bg-gradient-to-b from-[#BF9A16] to-[#B5A15B]   text-white font-bold rounded-md mt-2 py-2 px-3 mb-2  border 10px-solid-white'> Comenzar </button>
          </div>
    </>
  )
}

export default Carrousel