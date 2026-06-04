import React from 'react'
import { GoClock } from "react-icons/go";
import { FaCheck } from "react-icons/fa";

const CourseLessons = () => {
  return (
    <div className='border p-3 border-gray-300'>
        <div className='flex gap-5'>
          <div>
            <input name='salam' type="radio" className="appearance-none h-5 w-5 border relative top-1 rounded
           checked:bg-first checked:border-first" />
            <FaCheck className='relative -top-4.5 left-1 text-xs text-white'/>
          </div>
          
           <div className='flex flex-col gap-2'>
              <p className='w-70 font-semibold text-lg'># 1 - Android-də çat proqramının yaradılması</p>
              <div className='flex gap-2 items-center'>
                <GoClock/>
                <p>12 dəq</p>
              </div>
           </div>
        </div> 
    </div>
     
  )
}

export default CourseLessons