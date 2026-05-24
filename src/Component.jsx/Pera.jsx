import React from 'react'

function Pera({text, className}) {
  return (
   <>
   <p className={`font-inter font-normal text-black opacity-[50%] ${className}`}>{text}</p>
   </>
  )
}

export default Pera