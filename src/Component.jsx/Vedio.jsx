import React from 'react'
import Vedios from '../assets/song.mp4'
import Thamble from '../assets/thamble.png'

function Vedio() {
  return (
   <section className='pt-10 md:pt-[120px] pb-10 md:pb-[104px] container md:px-20 bg-black/5'>
    <h1 className='font-inter font-medium text-[25px] md:text-[55px] text-black md:tracking-[-2.5px] mb-14 text-center'>Use illustrations in UI design</h1>

    <video src={Vedios} poster={Thamble} controls className='w-full object-cover rounded-lg'  ></video>

   </section>
  )
}

export default Vedio