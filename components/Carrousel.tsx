'use client';
import Image from 'next/image'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './slide.css'


const Carrousel = () => {



    return (
        <div className='flex  w-full'>
            <Carousel className='py-5 xl:w-full   xl:px-[15%] items-center justify-center mx-auto bg-blue-200 '>
                <div className=''>
                    <img                         
                    //  className=' rounded-xl'
                        src="/compensacion.png" />
                    <p className="legend ">afiliate ya</p>
                </div>
                <div>
                    <img
                        src="/family-home.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img
                        alt=""
                        width={200} 
                        height={300}
                        src="/health.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>

        //   <div className='flex w-full relative flex-row'>
        //  <div className=' h-60  w-full  absolute xl:grid grid-cols-2 '>
        //           <div className=''>

        //           <Image
        //           className='w-full  h-60 z-50 '
        //           src='/family-home.png'
        //           alt='family home'
        //           // object-fit='contain'
        //           fill
        //           />
        //           </div>
        //          <div className='bg-blue-500 rounded-full w-full '>
        //           <Image
        //           className='w-full  h-60 z-50 '
        //             src='/family-home.png'
        //             alt='family home'
        //             // object-fit='contain'
        //             fill
        //           />

        //          </div>
        //     </div>
        //         <div className='px-2  w-full items-center text-center mt-60 h-30 bg-gradient-to-b from-[#776C44] to-[#BF9A16]'>
        //         <h3 className='text-xs pt-2'>Sabemos que tu familia y tu salud son los más importante</h3>
        //         <h3 className='text-md font-bold'>¡Más aun en tu trabajo!</h3>
        //         <button             className='transition duration-100
        //                       transform hover:scale-125
        //                               hover:text-white bg-gradient-to-b from-[#BF9A16] to-[#B5A15B]   text-white font-bold rounded-md mt-2 py-2 px-3 mb-2  border 10px-solid-white'> Comenzar </button>
        //         </div>
        //   </div>
    )
}

export default Carrousel