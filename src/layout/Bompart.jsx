import React from 'react'
import Button from '../Component.jsx/Button'
import Bom from '../assets/bom.png'

function Bompart() {
  return (
  <section className='w-full bg-[#5F62E2] 
  '>

    <div className="flex md:flex-row flex-col md:px-20 px-4 ">
       <div className="py-[68px]">
         <h2 className='text-[40px] flex-wrap md:text-[55px] font-inter font-medium md:tracking-[-2.5px] md:leading-[60px] text-white md:w-[743px]'>The quickest way to create awesome presentation</h2>
        <div className="flex flex-wrap gap-x-3 md:mt-10 mt-4">
             <Button text="Get Started" className="bg-[#2AB691] text-white  hover:bg-[#29ddad] duration-300"/>
        <Button text="Learn More" className="bg-white/15 text-white hover:bg-white/30 duration-300"/>
        </div>
       </div>
       <div className="self-end">
        <img src={Bom} alt="" className='w-full  md:ml-[-200px] ' />
       </div>
    </div>

  </section>
  )
}

export default Bompart