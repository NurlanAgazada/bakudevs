import Header from '@/components/ui/Header'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Header title={"Əlaqə"}/>
        <div className='w-250 mx-auto flex justify-between py-20'>
            <div className='w-60 h-60 border border-[#d4a482] rounded-2xl bg-[#f8eada] flex flex-col items-center py-5 gap-3'>
                <div className='w-15 h-15 bg-second rounded-2xl'>

                </div>
                <p className='font-semibold text-xl'>Telefon</p>
                <div>
                  <p className='font-light'>+994 55 555 55 55</p>
                  <p className='font-light'>+994 55 555 55 55</p>
                </div>
            </div>
            <div className='w-60 h-60 border border-[#d4a482] rounded-2xl bg-[#f8eada] flex flex-col items-center py-5 gap-3'>
                <div className='w-15 h-15 bg-second rounded-2xl'>

                </div>
                <p className='font-semibold text-xl'>Email</p>
                <div>
                  <p className='font-light'>info@bakudevs.net</p>
                </div>
            </div>
            <div className='w-60 h-60 border border-[#d4a482] rounded-2xl bg-[#f8eada] flex flex-col items-center py-5 gap-3'>
                <div className='w-15 h-15 bg-second rounded-2xl'>

                </div>
                <p className='font-semibold text-xl'>Whatsapp</p>
                <div>
                  <p className='font-light'>+994 55 555 55 55</p>
                </div>
            </div>
            <div className='w-60 h-60 border border-[#d4a482] rounded-2xl bg-[#f8eada] flex flex-col items-center py-5 gap-3'>
                <div className='w-15 h-15 bg-second rounded-2xl'>

                </div>
                <p className='font-semibold text-xl'>Sosial şəbəkələr</p>
                <div className='flex justify-between gap-5'>
                    <div className='w-7 h-7 border rounded-md border-third/60'></div>
                    <div className='w-7 h-7 border rounded-md border-third/60'></div>
                    <div className='w-7 h-7 border rounded-md border-third/60'></div>
                    <div className='w-7 h-7 border rounded-md border-third/60'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact