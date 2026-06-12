
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Header from '@/components/ui/Header'
import React from 'react'
import MapCard from '@/components/shared/MapCard';
import Button from '@/components/shared/Button';



const Courses = () => {


  

  return (
    <div className='bg-[#FAFDFD]'>
      <Header title={"Kurslar"}/>
      <div className='w-250 mx-auto flex flex-col gap-7 py-10'>
        <div className="flex gap-5 justify-center">
          <Button title={"Hamısı"} bgColor={"#008D96"} textColor={"#FFFFFF"} />
          <Button title={"Backend"} bgColor={"#FFFFFF"} textColor={"#008D96"} />
          <Button title={"Frontend"} bgColor={"#FFFFFF"} textColor={"#008D96"}/>
          <Button title={"UI/UX"} bgColor={"#FFFFFF"} textColor={"#008D96"} />
        </div>
        <MapCard count={11}/>
      </div>
    </div>
    
  )
}

export default Courses