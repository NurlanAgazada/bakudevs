import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';



const Footer = () => {
  return (
    <div className='bg-[url(/footer.svg)]'>
      <div className='w-250 mx-auto font-mulish'>
        <div className='py-10 flex justify-between text-white'>
        <div className='flex flex-col gap-7'>
          <Image 
            src={"/Frame1.svg"}
            width={120}
            height={120}
            alt=''
            />
            <p className='w-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <ul className='flex flex-col gap-3 list-disc'>
            <li>Frontend</li>
            <li>Backend</li>
            <li>UI/UX</li>
          </ul>
        </div>

        <div>
          <ul className='flex flex-col gap-3 list-disc'>
            <Link href="/">
            <li>Əsas səhifə</li>
            </Link>
            <Link href="/courses">
            <li>Kurslar</li>
            </Link>
            <Link href="/about">
            <li>Haqqımızda</li>
            </Link>
            <Link href="/contact">
            <li>Əlaqə</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className='w-70'>Yeniliklərdən xəbərdar olmaq üçün Qeydiyyatdan keçin.</p>
          <div className="mt-6 flex max-w-md gap-x-4">
          <label className="sr-only">Email address</label>
          <input id="email-address" type="email" name="email" required placeholder="Email" autoComplete="email" className="border border-first min-w-0  flex-auto rounded-md bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-first sm:text-sm/6" />
          <button type="submit" className="flex-none rounded-md bg-second px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-third focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-third"><FaArrowRightLong/></button>
          </div>
        </div>
        </div>
        <hr className='text-fourth/50'/>
        <div className='text-white flex justify-between py-5'>
          <p>© 2022 BakuDevs.net. Bütün hüquqlar qorunur</p>
          <p>Site by JEDAİ</p>
        </div>
      </div>
    </div>
  )
}

export default Footer