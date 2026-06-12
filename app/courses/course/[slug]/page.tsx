
"use client";
  

import Navbar from '@/components/layout/Navbar'
import Image from 'next/image'
import Footer from '@/components/layout/Footer'
import Header from '@/components/ui/Header'
import { GoDotFill } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import React, { useState } from 'react';
import MapCard from '@/components/shared/MapCard';
import CourseLessons from '@/components/shared/CourseLessons';
import { GoClock } from "react-icons/go";
import { IoIosLock } from "react-icons/io";






const CourseSingle = () => {

  const [selectedOption, setSelectedOption] = useState("radioMac");

  const options = [
    { id: "radioMac", label: "Mac" },
    { id: "radioWindows", label: "Windows" },
    { id: "radioLinux", label: "Linux" },
    { id: "radioIOS", label: "iOS" },
    { id: "radioAndroid", label: "Android" }
  ];
  return (
    <div className='flex flex-col gap-5 bg-[#FAFDFD]'>
      <Header title={"Android Program Development"}/>
      <div className='w-250 mx-auto'>
        <div className='flex items-center gap-7 font-thin text-sm py-5'>
          <p className=''>Əsas səhifə</p>
          <GoDotFill className='opacity-20'/>
          <p>Kurslar</p>
          <GoDotFill className='opacity-20'/>
          <p className='font-normal text-lg'>Android Program Development</p>
        </div>
        <div className='pb-5 flex items-center w-50 justify-between'>
          <p className='border-none rounded-2xl p-2 bg-[#f4dba6] w-fit'>Backend</p>
          <div className='flex gap-2'>
            <Image
            src={"/vector.svg"}
            width={20}
            height={20}
            alt=''
            />
            <p>14 dərs</p>
          </div>
        </div>
        <hr className='text-black/20 pb-5 w-130'/>
        <div className='flex justify-between'>
          <div className='w-110 flex flex-col gap-5'>
          <div className='flex gap-5'>
          <Image
          src={"/Android.png"}
          width={200}
          height={200}
          alt=''
          />
          <p className='font-bold'>Android development tutorials / #1 - Creating a chat program on Android</p>
          </div>
          <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat.</p>
          <div className="">
          <p className="text-[#138a8a] text-xl font-bold mb-4">Videodərs</p>

          <div className="relative pt-[56.25%] w-full max-w-200 rounded-xl overflow-hidden shadow-md ">
            <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/4o3yuEtgIWs" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
            </iframe>
          </div>
          <p className='font-mulish text-sm py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue.</p>
          <p className='text-[#138a8a] text-xl font-bold mb-4'>Android Development</p>
          <Image
          className='w-full'
          src={"/image 9.svg"}
          width={100}
          height={100}
          alt=''
          />
          <p className='font-mulish text-sm py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue.</p>
          <p className='text-[#138a8a] text-xl font-bold mb-4'>“For” döngüsü</p>
          <p className='font-mulish text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue.</p>
          <div className='border py-5 px-3 bg-[#CAE6E8] mt-5 rounded-2xl border-black/20' >
            <p className='w-40 text-sm'>
            {"for ($i = 0; $i<10 $i++) echo $i;"}</p>
          </div>
          <p className='font-mulish text-sm py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus sed turpis risus molestie auctor vel. Iaculis augue diam tempus aliquet eu, pulvinar feugiat. Suscipit non viverra dignissim dolor augue.</p>
          <div className='border py-5 px-3 bg-[#CAE6E8] rounded-2xl border-black/20' >
            <p className='w-60 text-sm'>
            {"$i = 1; // Создание переменной while ($i <= 10) { // Здесь только условие echo $i; $i++; // Увеличение переменной}"}</p>
          </div>
          <p className='font-semibold py-5'>Döngələrdəki operatorlar</p>
          <div className='border py-5 px-3 bg-[#CAE6E8] rounded-2xl border-black/20' >
            <p className='w-50 text-sm'>
            {"for($el = 100; $el > 10; $el /= 2) { if($el < 15) break; if($el % 2 == 0) continue; echo $el.'<br>'; }"}</p>
          </div>
          <hr className='text-black/20 w-full mt-5'/>
          <div className='flex gap-3 items-center py-5'>
            <GrDocumentText/>
            <p className='text-xl font-semibold'>Tapşırıqlar</p>
          </div>
          <div className='flex flex-col gap-3 border border-[#ECE2CB] p-4 rounded-2xl'>
            <p className='text-[#BE870D]'>Döngüdə çıxış</p>
            <p>21 rəqəmini atlayaraq, 16-dan 23-ə qədər rəqəmlər sütununu çap edin. For döngəsindən istifadə edin və eyni şeyi while döngəsi ilə edin.</p>
            <div className='flex items-center text-center gap-1 border p-2 w-fit border-[#BE870D] text-[#BE870D] rounded-2xl'>
              <p>Cavab</p>
              <MdKeyboardDoubleArrowUp className='text-md'/>
            </div>
            <p className='font-semibold'>For döngüsü üçün kod:</p>
            <div className='border border-[#ECE2CB] p-5 rounded-2xl flex flex-col gap-7'>
              <p className='w-30'>{"for ($i = 16; $i <= 23; $i++) { if ($i == 21) continue;"}</p>
              <p>echo $i; <br />{"}"}</p>
            </div>
            <p className='font-semibold'>For döngüsü üçün kod:</p>
            <div className='border border-[#ECE2CB] p-5 rounded-2xl flex flex-col gap-7'>
              <p className='w-20'>{"$i = 16; while ($i <= 23) { if ($i == 21) { $i++; continue; }"}</p>
              <p>echo $i;<br />$i++; <br />{"}"}</p>
            </div>
            <div className='flex flex-col gap-3 border border-[#ECE2CB] p-4 rounded-2xl'>
              <p className='text-[#BE870D]'>Döngüdə çıxış</p>
            <p>21 rəqəmini atlayaraq, 16-dan 23-ə qədər rəqəmlər sütununu çap edin. For döngəsindən istifadə edin və eyni şeyi while döngəsi ilə edin.</p>
            <div className='flex items-center text-center gap-1 border p-2 w-fit border-[#BE870D] text-[#BE870D] rounded-2xl'>
              <p>Cavab</p>
              <MdKeyboardDoubleArrowUp className='text-md'/>
            </div>
            </div>
            <div className='flex flex-col gap-3 border border-[#ECE2CB] p-4 rounded-2xl'>
              <p className='text-[#BE870D]'>Döngüdə çıxış</p>
            <p>21 rəqəmini atlayaraq, 16-dan 23-ə qədər rəqəmlər sütununu çap edin. For döngəsindən istifadə edin və eyni şeyi while döngəsi ilə edin.</p>
            <div className='flex items-center text-center gap-1 border p-2 w-fit border-[#BE870D] text-[#BE870D] rounded-2xl'>
              <p>Cavab</p>
              <MdKeyboardDoubleArrowUp className='text-md'/>
            </div>
            </div>
            
          </div>
          </div>
          </div> 
        <div className='flex flex-col'>
          <p className='font-semibold text-lg mb-4'>Kursun dərsləri</p>
          {[...Array(4)].map((_, index) => (
            <CourseLessons key={index} />
          ))}
          <div className='border p-3 border-gray-300 bg-amber-100'>
              <div className='flex gap-5'>
                <IoIosLock className='relative top-1.4 text-2xl text-[#C89F9F]'/>
                <div className='flex flex-col gap-2'>
                  <p className='w-70 font-semibold text-lg'># 1 - Android-də çat proqramının yaradılması</p>
                    <div className='flex gap-2 items-center'>
                      <GoClock/>
                      <p>12 dəq</p>
                    </div>
                </div>
              </div> 
          </div>
          <div className='border p-3 border-gray-300 bg-amber-100'>
              <div className='flex gap-5'>
                <IoIosLock className='relative top-1.4 text-2xl text-[#C89F9F]'/>
                <div className='flex flex-col gap-2'>
                  <p className='w-70 font-semibold text-lg'># 1 - Android-də çat proqramının yaradılması</p>
                    <div className='flex gap-2 items-center'>
                      <GoClock/>
                      <p>12 dəq</p>
                    </div>
                </div>
              </div> 
          </div>
        </div>

        </div>
        <div className='py-7 flex flex-col gap-5'>
          <p className='font-semibold text-xl'>Oxşar kurslar</p>
          <MapCard count={3}/>
        </div>
      </div>

    </div>
  )
}

export default CourseSingle