import React, { useState } from 'react'
import SliderImageone from '../assets/slider-1.png'
import SliderImagetwo from '../assets/Entertainment.png'
import SliderImagethree from '../assets/Managment.png'
import Logo from '../assets/logo.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";


function Slider() {

    const slider = [
        {
            id:1,
            heading:"Make more time for the work that matters most",
            pera:"Best software platform for running an internet business.",
            image:SliderImageone
        },
        {
            id:2,
            heading:" Make myspace your best designed space most important",
            pera:"A lot of different components that will help you create ",
            image:SliderImagetwo
        },
        {
            id:3,
            heading:"My company culture has changed today is the best day",
            pera:"Make myspace your best designed space",
            image:SliderImagethree
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevslider=()=>{
        setCurrentIndex((prev)=>( prev === 0 ? slider.length-1:prev-1))
    }
    const nextslider=()=>{
        setCurrentIndex((next)=>(next===slider.length-1?0:next+1))
    }

    const {heading, pera, image} = slider[currentIndex];


  return (
   <section className='container md:px-20 md:py-24 py-2 '>

    <div className="flex flex-col md:flex-row justify-between items-center py-5 md:py-0 mx-auto">
        <div className='flex flex-col md:w-1/2 w-full'>
            <img className='w-[100px] object-cover' src={Logo} alt="logo" />
            <h2 className='font-inter text-black font-medium text-[55px] leading-[60px] tracking-[-2.5px] md:w-[463px] w-full mt-4 mb-7'>{heading}</h2>
            <p className='text-black/50 text-[21px] font-inter leading-[30px] tracking-[-0.8px]'>{pera}</p>

            <div className="flex gap-x-3">
                <button onClick={prevslider} className='w-[50px] h-[50px] flex justify-center items-center text-[26px] hover:bg-gray-300 duration-300 rounded-full bg-[#C4C4C4] bg-opacity-20 text-[#323232] '><MdKeyboardArrowLeft  className='text-center'/> </button>
                <button onClick={nextslider} className='w-[50px] h-[50px] flex justify-center items-center text-[26px] hover:bg-gray-300 duration-300 rounded-full bg-[#C4C4C4] bg-opacity-20 text-[#323232] '> <MdKeyboardArrowRight  className='text-center'/></button>
            </div>

        </div>


        <div className='md:w-1/2 w-full'>
        <img className='w-[300px] object-cover' src={image} alt="" />

        </div>
    </div>

   </section>
  )
}

export default Slider