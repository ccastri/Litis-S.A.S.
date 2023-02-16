import Image from 'next/image'
import React from 'react'

const Admin = () => {
  return (
    <div>
        <div className='flex  flex-col text-center  h-144 items-center  bg-[#5C7AA5]'>
          <p className='w-full absolute text-center font-bold'>Seguridad social en 4 componentes:</p>
          <div className=' group flex h-52 w-full bg-[#ffbf97] relative group mt-8 flex-row'>
            

          <Image
          src='/health.png'
          fill
          alt=''
          className='absolute group-hover:opacity-50 '
          />
          <p className='flex mx-auto  text-gray-800 text-center relative items-center opacity-0 group-hover:opacity-100 text-3xl font-OpenSans font-bold'>Salud</p>
          </div>
          <div className=' group flex h-52 w-full bg-[#07bfff] relative group flex-row'>
            

          <Image
          src='/socialsecurity.png'
          fill
          alt=''
          className='absolute group-hover:opacity-50 '
          />
          <p className='flex mx-auto  text-gray-800 text-center relative items-center opacity-0 group-hover:opacity-100 text-sm'>Administradora de Riesgos Laborales</p>
          </div>
          <div className=' group flex h-52 w-full bg-[#25fff8] relative group flex-row'>
            

          <Image
          src='/pension.png'
          fill
          alt=''
          className='absolute group-hover:opacity-50 '
          />
          <p className='flex mx-auto  text-gray-800 text-center relative items-center opacity-0 group-hover:opacity-100 text-sm'>Administradora de Fondos de Pension</p>
          </div>
          <div className=' group flex h-52 w-full bg-[#ffdf88] relative group flex-row'>
            

          <Image
          src='/compensacion.png'
          fill
          alt=''
          className='absolute group-hover:opacity-50 '
          />
          <p className='flex w-2 ml-16 text-2xl text-gray-800  font-bold text-center relative items-center opacity-0 group-hover:opacity-100'>Caja de Compensación Familiar</p>
          </div>

    </div>
    </div>

  )
}

export default Admin