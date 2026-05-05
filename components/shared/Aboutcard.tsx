import React from 'react'
import Image from 'next/image'

const Aboutcard = ({img,textHeader,textABout,bgColor}) => {
  return (
    <div className='bg-[#FFFFFF] w-60 h-60 border-none rounded-2xl flex flex-col gap-3 items-center justify-between p-5 font-mulish'>
        <Image className='border-none rounded-2xl p-3'
        style={{backgroundColor: bgColor}}
        src={img}
        width={50}
        height={50}
        alt=''
        />
        <p className='text-xl'>{textHeader}</p>
        <p className='text-center font-extralight text-sm'>{textABout}</p>
    </div>
  )
}

export default Aboutcard