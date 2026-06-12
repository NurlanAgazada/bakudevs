"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = ({title}) => {
    const path = usePathname()
  return (
    <div className='font-mulish w-full text-fourth text-center text-3xl p-15 bg-[url(/HeaderImage.svg)]'>
    <h2>{
title
}</h2>
    </div>
  )
}

export default Header