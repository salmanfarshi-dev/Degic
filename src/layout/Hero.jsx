import React from 'react'
import Pera from '../Component.jsx/Pera'
import Button from '../Component.jsx/Button'
import Banner from '../assets/banner.png'

function Hero() {
  return (
   <>
   <div className="container md:px-20 mx-auto flex md:flex-row flex-col items-center justify-center pt-2 md:pt-[100px]">
    <div className="md:w-1/2 px-4 md:pl-16">
     <h1 className="md:text-[72px] text-[30px] text-black font-semibold font-inter md:w-[600px] w-full md:tracking-[-4.5px] md:leading-[72px]">Simply explained with illustrations</h1>
     <Pera text="There are a lot of different components that will help you create the perfect look for your project" className="leading-[30px] text-[21px] tracking-[-0.8px] lg:w-[448px] lg:pt-[22px] lg:pb-[44px]"/>
     <div className="flex gap-x-3 mt-6 md:mt-0 ">
        <Button text="Get Started" className="bg-[#5F62E2] text-white hover:border hover:border-[#5F62E2] border border-transparent hover:bg-transparent hover:text-[#5F62E2] duration-300"/>
        <Button text="Learn More" className="bg-[#5F62E2] bg-opacity-[15%] text-[#5F62E2] hover:bg-[#5F62E2] hover:text-white duration-300"/>
     </div>
    </div>
    <div className="w-1/2 mt-20 md:mt-0">
    <img src={Banner} alt="Banner" className="lg:w-[590px]"/>
    </div>
   </div>
   
   </>
  )
}

export default Hero