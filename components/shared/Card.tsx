import Image from 'next/image'
import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { FaCirclePlay } from "react-icons/fa6";



const Card = ({img, numLesson,lesson}) => {
  return (
        <div className='rounded-2xl p-3 bg-white w-fit font-mulish'>
            <Image
        src={img}
        width={180}
        height={180}
        alt=''
        />
        <div className='flex gap-5 py-3 justify-between'>
            <p className='rounded-2xl bg-red-200 px-2 py-1.5'>{lesson}</p>
            <div className='flex items-center gap-1'>
                <CiPlay1/>
                <p>{numLesson} dərs</p>
            </div>
        </div>
        <hr className='text-[#D9D9D9]'/>
        <div className='flex py-2 items-center gap-3'>
            <p>Lorem ipsum dolor <br /> sit amet.</p>
            <FaCirclePlay className='text-first text-3xl'/>
        </div>
        </div>
  )
}

export default Card
