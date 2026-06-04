"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Card from './Card'



const MapCard = ({count}) => {
    const [data,setData]= useState([])

  useEffect(()=>{

    fetch("http://localhost:3001/courses").then((res)=>res.json()).then((data)=>setData(data))
  },[])
  return (
    <div className='flex w-250 flex-wrap justify-between gap-7'>
        {
      data.map(({id,img,numLesson,lesson})=>(
                id <= count ?<Link key={id} href={`/courses/course/${lesson}`}>
                <Card  img={img} numLesson={numLesson} lesson={lesson} />
                </Link> : ""
      ))
    }
    </div>
  )
}

export default MapCard