import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";import { FaTwitter } from "react-icons/fa";




function Icons() {
  return (
    <>
     <div className="flex gap-x-3 mt-5">

         <div className="size-12 rounded-full bg-[#C4C4C4] flex items-center justify-center cursor-pointer hover:bg-gray-400 duration-300 "> <FaFacebook className='text-gray-500  text-2xl'/>
        </div>
      <div className="size-12 rounded-full bg-[#C4C4C4] flex items-center justify-center cursor-pointer hover:bg-gray-400 duration-300 "> <BiLogoInstagramAlt className='text-gray-500  text-2xl'/>
        </div>
      <div className="size-12 rounded-full bg-[#C4C4C4] flex items-center justify-center cursor-pointer hover:bg-gray-400 duration-300 "> <FaTwitter className='text-gray-500  text-2xl'/>
        </div>
     </div>
    </>
  )
}

export default Icons