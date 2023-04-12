'use client'
import Image from 'next/image'
import {useState} from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export interface Slide{
    url:string
}
const Carousel = () => {
    const slides = [
        {
            url: '/compensacion.png'
        },
        {
            url: '/family-home.png'
        },
        {
            url: '/health.png'
        },
    ]
    const [currentSlide, setCurrentSlide] = useState(1)

    const prevSlide = () =>{
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currentSlide - 1
        setCurrentSlide(newIndex)
    }
    const nextSlide = () =>{
        const isLastSlide = currentSlide === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentSlide + 1
        setCurrentSlide(newIndex)
    }
  return (
    <div className=' max-w-[1400px] mt-[7rem] relative h-[580px] w-full   group'>
        <>
        <div className=' w-full h-full transition duration-500'>
            
                <Image 
                
                fill 
                alt='' 
                src={slides[currentSlide].url}
                className=' absolute m-auto rounded-2xl duration-500 '
                />
                
            )
            
        </div>
        {/* Left Arrow */}
        <div 
        onClick={prevSlide}
        className='absolute hidden group-hover:block top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white '>
        <ChevronLeftIcon sx={{fontSize:'30px'}}/>
        </div>
        {/* Right Arrow */}
        <div
        onClick={nextSlide}
        className='absolute  hidden group-hover:block top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white' >
        <ChevronRightIcon sx={{fontSize:'30px'}} />
        </div>
            </>
    </div>
  )
}

export default Carousel