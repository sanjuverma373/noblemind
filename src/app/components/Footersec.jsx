import React from 'react'
import { Facebook, Footericon, Insta, Linkedin, Twitter } from './Icon'

const Footersec = () => {
        return (
                <div id='faq' className=' bg-black pt-[90px] lg:pt-[142px]'>
                        <div className=' container px-3 mx-auto'>
                                <div className='grid grid-cols-1 md:grid-cols-8 '>
                                        <div className=' col-span-2'>
                                                <span><Footericon /></span>
                                                <p className='text-white text-sm md:text-base  font-Exo pt-[28px] pb-2'>Follow Us</p>
                                                <div className=' flex items-center gap-[16px]'>
                                                        <a className=' duration-300 hover:translate-y-[-5px] hover:scale-105' href='https://www.facebook.com/' target='_blank'><Facebook /></a>
                                                        <a className=' duration-300 hover:translate-y-[-5px] hover:scale-105' href='https://www.instagram.com/' target='_blank'><Insta /></a>
                                                        <a className=' duration-300 hover:translate-y-[-5px] hover:scale-105' href='https://www.twitter.com/' target='_blank'><Twitter /></a>
                                                        <a className=' duration-300 hover:translate-y-[-5px] hover:scale-105' href='https://www.linkedin.com/' target='_blank'><Linkedin /></a>
                                                </div>
                                        </div>
                                        <div className=' col-span-6  flex pt-5 md:pt-0 md:justify-end gap-[64px] pb-4 lg:pb-[52px]'>
                                                <ul>
                                                        <li className=' pb-[16px] text-white text-sm md:text-base font-normal font-Outfit'>Maine</li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#home">Home</a></li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#about">About Us</a></li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#services">services</a></li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#choose">Why Choose Us</a></li>
                                                </ul>
                                                <ul>
                                                        <li className=' pb-[16px] text-white text-sm md:text-base font-normal font-Outfit '>Legal</li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#team">Term & Conduction</a></li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#privacy">Privacy Policy</a></li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#contact">Contact</a></li>
                                                        <li className=' pb-[14px]'><a className=' text-sm md:text-base duration-300 hover:text-white font-normal text-[#B7B7B4] font-Exo' href="#tel">(629) 555-0129</a></li>
                                                </ul>
                                        </div>
                                </div>
                        </div> 
                        <p className=' text-white text-sm text-center font-Exo opacity-[70%] pt-[16px] pb-[16px] lg:pb-[35px] border-t border-solid border-t-[#5A5A50]'>© Copyright 2023 Noble Mind | All rights reserved. </p>                       
                </div>
        )
}

export default Footersec
