import React from 'react'

function Button({ text, className}) {
  return (
   <button className={`lg:px-[15px] px-4 py-2 lg:py-[16px] font-medium lg:text-[16px] rounded-[10px] ${className}`}>{text}</button>
  )
}

export default Button;