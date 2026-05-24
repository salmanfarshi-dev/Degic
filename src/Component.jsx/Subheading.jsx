import React from 'react'

function Subheading({text, className}) {
  return (
   <h2 className={`text-[55px] font-medium font-inter text-black tracking-[-2.5px] ${className}`}>{text}</h2>
  )
}

export default Subheading