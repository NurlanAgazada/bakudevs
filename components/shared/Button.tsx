
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const Button = ({title,bgColor,textColor,Icon}) => {
  return (
          <button
          style={{
            backgroundColor:bgColor,
            color:textColor
            
          }}
          className='flex justify-center items-center gap-2 text-xl rounded-3xl px-10 py-2 border text-center w-fit cursor-pointer'>
            <h1>{title}</h1>
            {Icon && <Icon/>}
            
          </button>
  )
}

export default Button
