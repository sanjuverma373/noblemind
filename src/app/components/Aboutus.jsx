import React from 'react'
import Image from "next/image";
import { Stars, Triangle } from './Icon'
import aboutimg from '../../../public/assets/images/about-img.webp'
import Commonbtns from './Commonbtns';

const Aboutus = () => {
  return (
    <div id='about' className='pt-[40px] md:pt-[90px] lg:pt-[150px] relative z-10'>
      <div className=' container mx-auto px-3'>
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[75px]'>
        <div>
             <Image src={aboutimg} alt="#" height={567} width={544} className=' w-full'  />
        </div>
              <div className=' flex flex-col justify-center'>
                      <div className=' flex items-center gap-[6px] pb-2'>
                            <span><Stars/></span>
                            <p className=' font-Exo font-normal text-sm md:text-base  text-[#131200]'>About Us</p>
                          </div>
                          <h2 className=' max-w-[521px] text-black font-Outfit font-light text-3xl md:text-5xl pb-4'>Pioneering Vision & Mission-<span className=' font-semibold'>Driven Sectoral Innovation</span></h2>
                          <p className=' text-black font-Exo font-normal text-sm md:text-base  max-w-[491px] pb-[24px] md:pb-[42px]'>Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p> 
                          <div><Commonbtns text="Read More"/></div>     
              </div>
      </div>
      </div>
      <span className=' absolute -z-10 top-[-5%] left-[2%]'><Triangle/></span>
      <span className=' absolute -z-10 bottom-[7%] right-[2%]'><Triangle/></span>
    </div>
  )
}

export default Aboutus
