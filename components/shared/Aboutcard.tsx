import React from 'react'
import Image from 'next/image'

const Aboutcard = ({img,textHeader,textABout,bgColor}) => {
  return (
    <div className='bg-[#FFFFFF] w-62 h-55 border-none rounded-2xl flex flex-col justify-evenly gap-2 items-center p-5 font-mulish'>
        <Image className='border-none rounded-2xl p-3'
        style={{backgroundColor: bgColor}}
        src={img}
        width={50}
        height={50}
        alt=''
        />
        <p className='text-lg font-bold'>{textHeader}</p>
        <p className='text-center font-extralight text-xs'>{textABout}</p>
    </div>
  )
}

export default Aboutcard