import { AdminItems } from 'adminImages'
import Image from 'next/image'
import React from 'react'

const Admin = () => {
  return (
    <div>
        <div className='flex  flex-col text-center  h-144 items-center  bg-[#5C7AA5]'>
          <p className='w-full absolute text-center font-bold'>Seguridad social en 4 componentes:</p>
          {AdminItems.map(item=>(
            <div key={item.title} className={`group flex h-52 w-full bg-[${item.color}] relative group mt-8 flex-row`}>
                <Image
                src={item.image}
                fill
                alt={item.title}
                className='absolute group-hover:opacity-50 '
                />
                <p 
                className='flex mx-auto  text-gray-800 text-center relative items-center opacity-0 group-hover:opacity-100 text-3xl font-OpenSans font-bold'>
                  {item.title}
                </p>
            </div>
          ))}
      </div>
    </div>

  )
}

export default Admin