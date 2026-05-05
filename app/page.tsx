"use client"
import Navbar from "@/components/layout/Navbar";
import Aboutcard from "@/components/shared/Aboutcard";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import Hero from "@/components/ui/Hero";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {

  const courses = [
    {
      id:0,
      img:"./Js.svg",
      numLesson:"18",
      lesson:"Frontend"
    },
    {
      id:1,
      img:"./Phpmysql.svg",
      numLesson:"20",
      lesson:"Backend"
    },
        {
      id:2,
      img:"./Rectangle 50.svg",
      numLesson:"23",
      lesson:"UI/UX"
    },
      {
      id:3,
      img:"./Rectangle 51.svg",
      numLesson:"12",
      lesson:"Backend"
    },
    {
      id:4,
      img:"./Rectangle 59.svg",
      numLesson:"10",
      lesson:"Frontend"
    },
    {
      id:4,
      img:"./Rectangle 59.svg",
      numLesson:"10",
      lesson:"Frontend"
    },
    {
      id:4,
      img:"./Rectangle 59.svg",
      numLesson:"10",
      lesson:"Frontend"
    },
    {
      id:4,
      img:"./Rectangle 59.svg",
      numLesson:"10",
      lesson:"Frontend"
    }
  ]

  return (
    <div className="bg-[#FAFDFD]">
      <div className="w-full bg-[url(/bg.svg)] bg-no-repeat h-screen bg-center bg-cover -z-10">
        <div className="flex w-250 mx-auto justify-between items-center flex-wrap">
          <Navbar />
          <Hero/>
        </div>
      </div>

      <div className="flex w-250 mx-auto justify-between items-center py-10">
        <h2 className="font-lora text-3xl">Populyar Kurslar</h2>
        <div className="flex gap-5">
          <Button title={"Hamısı"} bgColor={"#008D96"} textColor={"#FFFFFF"} />
          <Button title={"Backend"} onClick={()=>console.log("Salam")} bgColor={"#FFFFFF"} textColor={"#008D96"} />
          <Button
            title={"Frontend"}
            bgColor={"#FFFFFF"}
            textColor={"#008D96"}
          />
          <Button title={"UI/UX"} bgColor={"#FFFFFF"} textColor={"#008D96"} />
        </div>
      </div>

      <div className="flex w-250 mx-auto justify-between items-center gap-5 flex-wrap">

    {
      courses.map(({id,img,numLesson,lesson})=>(
                <Link key={id} href={`/courses/course/${lesson}`}>
                <Card  img={img} numLesson={numLesson} lesson={lesson} />
                </Link>
      ))
    }
      </div>

      <div className="flex py-10 justify-center items-center">
        <Button
          title={"Bütün kurslar"}
          bgColor={"#008D96"}
          textColor={"#FFFFFF"}
          Icon={IoIosArrowForward}
        />
      </div>

      <div className="bg-[#E3F1F2]">
        <div className="w-250 mx-auto py-20 flex flex-col gap-5 font-mulish">
          <p className="text-3xl font-semibold font-lora">
            BakuDevs ilə istədiyiniz biliklərə sahib olun!
          </p>
          <p className="text-xl">
            Nə üçün tədrisinizi məhz bizdə keçməlisiniz? Bunun üçün ən azı dörd
            səbəb var:
          </p>
          <div className="flex justify-between py-5">
            <div className="flex gap-7">
              <div className="flex flex-col gap-5">
            <Aboutcard
            img={"./akar-icons_money.svg"}
            textHeader={"Sərfəli qiymət"}
            textABout={
              "Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar sizin üçün tam açıq olacaq!"
            }
            bgColor={"#F57170"}
          />
          <Aboutcard
            img={"./play.svg"}
            textHeader={"Video və Yazılı format"}
            textABout={
              "Bizim saytımızda siz dərslərə həm video formatında, həm də yazılı izah formatında rahat baxa bilərsiniz "
            }
            bgColor={"#64B7F4"}
          />
          </div>
          <div className="flex flex-col gap-5 py-10">
            <Aboutcard
            img={"./akar-icons_money.svg"}
            textHeader={"Sərfəli qiymət"}
            textABout={
              "Ayda cəmi 10 AZN ödəniş etməklə saytdımızdaki bütün kurslar sizin üçün tam açıq olacaq!"
            }
            bgColor={"#F57170"}
          />
          <Aboutcard
            img={"./play.svg"}
            textHeader={"Video və Yazılı format"}
            textABout={
              "Bizim saytımızda siz dərslərə həm video formatında, həm də yazılı izah formatında rahat baxa bilərsiniz "
            }
            bgColor={"#64B7F4"}
          />
          </div>
            </div>
            
          <div className="flex items-center justify-between">
            <Image className="relative"
            src={"./Group 36.svg"}
            width={400}
            height={400}
            alt=""
            />
            <Image className="absolute"
            src={"./Group 59.svg"}
            width={400}
            height={400}
            alt=""
            />
          </div>

          </div>
          
          
        </div>
      </div>
    </div>
  );
}
