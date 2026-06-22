import React from 'react'

function Cards({src, tittle,pera, design}) {
  return (
    <div className='w-[410px] bg-white'>
        <div className='w-full h-[275px] flex items-center justify-center bg-[#F7F7FA] rounded-[10px]'>
            <img src={src} alt="" />

        </div>

        <h3 className='font-inter text-[28px] font-medium text-black leading-[34px] tracking-[-0.8px] mt-5 md:w-[327px] flex-wrap'>{tittle}</h3>

        <p className="text-[17px] text-black/50 font-inter font-normal leading-[25px] tracking-[-0.7px] mt-3 mb-5 md:w-[326px] flex-wrap">{pera}</p>

        <div className="font-inter text-xs bg-[#2AB69121] text-[#2AB691] tracking-[-0.7px] px-3 py-1 rounded-[5px] w-fit">{design}</div>

    </div>
  )
}

export default Cards