import React from 'react'
import Navsection from './Navsection'
import { Stars } from './Icon'


const Headersection = () => {
  return (
    <div className='bg-[url(/assets/images/hero-bg.webp)] bg-cover bg-center bg-no-repeat min-h-screen flex-grow-1 relative flex flex-col items-center justify-center'>
      <Navsection />
      <div id='home' className=' container mx-auto px-3'>
        <div className=' flex items-center gap-[6px] pb-2'>
          <span><Stars /></span>
          <p className=' font-Exo font-normal text-sm md:text-base  text-[#131200]'>AI With Noble Mind</p>
        </div>
        <h1 className=' font-Outfit font-light text-[50px] md:text-[64px] leading-[57px] md:leading-[76px] text-black max-w-[584px] mb-4'>Inspiring Innovation, Elevating Solutions - <span className=' font-semibold text-5xl text-[40px]'>Noble Mind"</span></h1>
        <p className=' text-black font-Exo font-normal text-sm md:text-base max-w-[584px]'>At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
      </div>
    </div>
  )
}

export default Headersection
