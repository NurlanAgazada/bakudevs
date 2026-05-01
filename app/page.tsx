import Navbar from "@/components/layout/Navbar";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import Image from 'next/image'


export default function Home() {
  return (
    <div className="bg-[#FAFDFD]">
      <div className="w-full bg-[url(/bg.svg)] bg-no-repeat h-screen bg-center bg-cover -z-10">
        <div className='flex w-250 mx-auto justify-between items-center flex-wrap'>
        <Navbar/>
      <div className="py-20 flex justify-between w-full items-center font-lora">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl w-65">
          <span className="text-second font-bold">Proqramlaşdırmanı</span> onlayn olaraq bizdən öyrənin
        </h1>
        <Button title={"Kurslar"} bgColor={"#008D96"} textColor={"#FFFFFF"}/>
        </div>
        <div className="relative">
          <Image className="relative"
            src={"./girl 2.svg"}
            width={400}
            height={400}
            alt=''
          />
          <Image className="absolute -top-3 -z-1 left-10"
            src={"./Group 41.svg"}
            width={400}
            height={400}
            alt=''
          />
          <Image className="absolute -top-3 -z-1 left-10"
            src={"./Group 58.svg"}
            width={400}
            height={400}
            alt=''
          />
        </div>
      </div>
        </div>
    </div> 

    <div className="flex w-250 mx-auto justify-between items-center py-10">
      <h2 className="font-lora text-3xl">Populyar Kurslar</h2>
      <div className="flex gap-5">
        <Button title={"Hamısı"} bgColor={"#008D96"} textColor={"#FFFFFF"}/>
        <Button title={"Backend"} bgColor={"#FFFFFF"} textColor={"#008D96"}/>
        <Button title={"Frontend"} bgColor={"#FFFFFF"} textColor={"#008D96"}/>
        <Button title={"UI/UX"} bgColor={"#FFFFFF"} textColor={"#008D96"}/> 
      </div>
    </div>

    <div>
      <Card/>
    </div>
    </div>
      
  );
}
