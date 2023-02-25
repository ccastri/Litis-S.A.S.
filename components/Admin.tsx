'use client';
import { PlusIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { AdminItems } from 'adminImages'
import Image from 'next/image'
import React from 'react'


const Admin = () => {
  return (
    <div className='bg-[#5C7AA5]' >
     
    <div className='w-full  my-auto py-6 items-center  text-center text-3xl font-bold'>
          <p className='text-center'>Seguridad social en 4 componentes:</p>
          </div>
        <div className='flex  flex-col text-center text-white  h-154 items-center xl:grid grid-cols-4' >
          {AdminItems.map(item=>(
            <div key={item.title} className={`group flex h-64 w-full  relative group flex-row ${item.color} `}>
                
                <Image
                src={item.image}
                fill
                alt={item.title}
                className={`absolute group-hover:opacity-50 `}
                />
                <div className='flex w-full px-4 relative opacity-0 group-hover:opacity-100 space-x-4 sm:justify-center items-center'>

                {item.icon}
                <p 
                className=' text-white   opacity-0 group-hover:opacity-100 text-3xl font-OpenSans font-bold'>
                  {item.title}
                </p>
                  </div>
            </div>
          ))}
    </div>
    </div>

  )
}

export default Admin