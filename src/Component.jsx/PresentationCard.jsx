import React from 'react'
import Pera from './Pera'

function PresentationCard({image, tittle, className, des}) {
  return (
    <>
    <div className="flex flex-col items-center text-center p-2 md:p-[32px] bg-white rounded-[10px] hover:shadow-lg hover:translate-y-[-5px] duration-300">
        <img src={image} alt="" className="" />
        <h3 className="text-[24px] leading-[30px] font-medium font-inter tracking-[-1px] md:mt-6 mt-3 md:mb-3 mb-2">{tittle}</h3>
        <p className="text-[17px] font-inter leading-[25px] font-normal text-black opacity-50 w-full ">{des}</p>
    </div>
    </>
  )
}

export default PresentationCard