'use client';
import { AdminItems } from 'adminImages';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState,   } from 'react';
import Plans from './Plans';

export interface DivClicked {
  isClicked: boolean;
  id:string
}

// type DivProps = React.HTMLProps<HTMLDivElement>


export const Admin = () => {
  const [isClicked, setIsClicked] = useState(false)
 
  const plansRef = useRef<null | HTMLDivElement>(null)
  const handleScroll = () => {
    plansRef.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handleClick = ()=>{
    setIsClicked(!isClicked)
  }
  return (
    <div className ={`flex  flex-col text-center text-white  h-154 items-center xl:grid grid-cols-4 bg-[#5C7AA5]`} >
     
    <div className='w-full  my-auto py-6 items-center  text-center text-3xl font-bold'>
          <p className='text-center'>Seguridad social en 4 componentes:</p>
          </div>
        <div className={`flex  flex-col text-center text-white  w-full h-full items-center xl:grid grid-cols-4`}>
          {AdminItems.map(item=>(
            <div key={item.title} className={` h-80 w-full relative group  ${item.color} `}>
                
                <Image
                src={item.image}
                fill
                alt={item.title}
                className={` z-10 group-hover:opacity-50  `}
                />
                <div className={`w-full h-full mx-auto relative z-50  mb-0 opacity-0 group-hover:opacity-100 ${isClicked?'':' pt-16'} justify-center `}>
                  {item.icon}
                  <p 
                  className='flex mx-auto  text-white text-center relative items-center opacity-0 group-hover:opacity-100 text-3xl font-OpenSans justify-center font-bold'>
                    {item.title}
                  </p>
                  {isClicked ? (
                    <p  className='font-bold flex  justify-center w-16  mb-2 py-1 px-4 ml-[45%] text-white border-2 border-white  hover:bg-red-500 rounded cursor-pointer'
                      onClick={handleClick}>Close</p>):(<p 
                      className='font-bold border-2 border-white hover:bg-blue-500 w-24 ml-[40%] cursor-pointer rounded-md py-2 mt-2'
                      onClick={handleClick}>Ver mas...</p>
                      )}

                      {isClicked &&(
                        <div className=' p-5 h-[50%]  flex flex-column opacity-100  items-start bg-slate-400  w-full   '>
                          <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, fuga deserunt! Voluptatem 
                          distinctio dicta recusandae ipsam nulla nisi. Aliquam tempora minima sunt, sapiente quaerat
                          ratione natus temporibus beatae officiis obcaecati.
                            <hr/>
                              <span  onClick={handleScroll}
                                className='cursor-pointer relative hover:bg-blue-900  border-2 border-white mt-1 ml-[40%] w-28 px-2 font-bold text-xs rounded-md py-2 flex '
                              >Planes y precios
                            </span>
                          </p>
                        </div>)}
                  </div>
            </div>
          ))}
    </div>
    <Plans ref={plansRef}/>
    {/* <div 
    ref={plansRef}
   >
      <p>This is the element I want to scroll though</p>
    </div> */}
    </div>

  )
}

export default Admin