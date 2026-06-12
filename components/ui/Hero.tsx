
import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Navbar from '../layout/Navbar';
import HeroNavbar from '../layout/HeroNavbar';

const Hero = () => {
  return (
    <div>
      <HeroNavbar/>
      <div className="py-20 flex justify-between w-full items-center font-lora">
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl w-65">
                <span className="text-second font-bold">Proqramlaşdırmanı</span>{" "}
                onlayn olaraq bizdən öyrənin
              </h1>
              <Link href="/courses">
              <Button
                title={"Kurslar"}
                bgColor={"#008D96"}
                textColor={"#FFFFFF"}
                Icon={IoIosArrowForward}
              />
              </Link>
              
            </div>
            <div className="relative">
              <Image
                className="relative z-3"
                src={"./girl 2.svg"}
                width={500}
                height={500}
                alt=""
              />
              <Image
                className="absolute -top-3 z-1 left-30"
                src={"./Group 41.svg"}
                width={400}
                height={400}
                alt=""
              />
              <Image
                className="absolute -top-3 z-2 left-30"
                src={"./Group 58.svg"}
                width={400}
                height={400}
                alt=""
              />
            </div>
          </div>
    </div>
  )
}

export default Hero