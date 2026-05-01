import Link from 'next/link';
import React from 'react'


const Button = ({title,bgColor,textColor}) => {
  return (
          <div
          style={{
            backgroundColor:bgColor,
            color:textColor
          }}
          className='flex justify-center items-center gap-2 text-2xl rounded-3xl px-4 py-2 border text-center'>
            <Link href={""}>{title}</Link>
          </div>
  )
}

export default Button
