import Image from 'next/image'
import React from 'react'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { LuClipboardPen } from "react-icons/lu";
import Link from 'next/link';
import Button from '../shared/Button';






const Navbar = () => {
  return (
    <div className='w-250 flex mx-auto justify-between items-center'>
        <Image 
        src={"/Frame.svg"}
        width={150}
        height={150}
        alt=''
        />
        <div className='flex items-center gap-3 text-xl'>
            <HiOutlineBars3BottomRight/>
            <Link href={""} className='font-mulish'>Kurslar</Link>
        </div>

        <div className='flex gap-2 items-center font-mulish text-xl text-first py-7'>
            <IoMdHeartEmpty/>
            <Link href={""}>İstək siyahısı</Link>
        </div>

        <div className='flex gap-5'>
          <div className='flex items-center gap-2 text-xl text-first rounded-3xl px-4 py-2 border border-first'>
            <FiLogIn/>
            <Link href={""}>Daxil ol</Link>
          </div>
          <div className='flex items-center gap-2 text-xl text-fourth rounded-3xl px-4 py-2 border border-first bg-first'>
            <LuClipboardPen/>
            <Link href={""}>Qeydiyyatdan Keç</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
