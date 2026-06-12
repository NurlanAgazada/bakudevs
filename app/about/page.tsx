import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Aboutcard from '@/components/shared/Aboutcard'
import AboutDiv from '@/components/shared/AboutDiv'
import Header from '@/components/ui/Header'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
        <Header title={"Haqqımızda"}/>
        <div className='w-250 mx-auto py-20 flex justify-between'>
          <div className='w-70 h-60 border rounded-3xl border-first relative bg-[url("/elearning.png")] bg-cover'>
            <div className='w-70 h-60 border rounded-3xl border-first absolute top-5 -right-5 -z-1'>
              <Image
              className='absolute -top-10 -left-15'
              src={"/shape.png"}
              width={80}
              height={80}
              alt=''
              ></Image>
              <Image
              className='absolute top-62 left-57'
              src={"/ellipse.png"}
              width={30}
              height={30}
              alt=''
              ></Image>
            </div>
          </div>
          <div className='flex-col'>
            <div className='w-80'>
            <p className='font-semibold text-3xl'>BakuDevs haqqında məlumat</p>
            </div>
            <div className='w-114 py-8'>
            <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue morbi. Odio maecenas dolor, hac sodales non donec. Felis, non venenatis massa tincidunt massa quis libero in odio. Sapien, quis a viverra odio orci. Pretium molestie blandit faucibus eu, placerat sagittis, odio duis molestie. Sagittis, pretium, mi, faucibus lectus posuere pharetra amet, in.</p>
            </div>
            
          </div>
        </div>
        <AboutDiv/>
    </div>
  )
}

export default About