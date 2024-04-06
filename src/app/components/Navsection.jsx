"use client"
import React, { useState } from 'react'
import { Navicon } from './Icon';
import Commonbtns from './Commonbtns';

const Navsection = () => {
        const [first, setfirst] = useState(false);
        function MobileView() {
                setfirst(!first);
                if (first === false) {
                        document.body.classList.add("overflow");
                } else {
                        document.body.classList.remove("overflow");
                }
        }
        return (
                <div className='py-[19px] absolute top-0 left-0 w-full'>
                        <div className=' container px-3 mx-auto'>
                                <div className=' flex items-center justify-between'>
                                        <div>
                                                <a href=""><Navicon /></a>
                                        </div>
                                        <ul onClick={MobileView} className={`${first ? "left-0" : "left-[-100%]"} flex items-center duration-300 justify-center gap-4 max-lg:flex-col max-lg:w-full max-lg:h-full max-lg:fixed max-lg:top-0 max-lg:z-20 max-lg:bg-white max-lg:over`}>
                                                <li onClick={() => setfirst(false)} className=' text-[#5A594D] font-Exo font-normal text-sm md:text-base hover:text-black after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-black'><a href="#home">Home</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-[#5A594D] font-Exo font-normal text-sm md:text-base hover:text-black after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-black'><a href="#about">About Us</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-[#5A594D] font-Exo font-normal text-sm md:text-base hover:text-black after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-black'><a href="#services">Services</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-[#5A594D] font-Exo font-normal text-sm md:text-base hover:text-black after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-black'><a href="#choose">Why Choose Us</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-[#5A594D] font-Exo font-normal text-sm md:text-base hover:text-black after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-black'><a href="#blogs">Blogs</a></li>
                                                <li onClick={() => setfirst(false)} className=' text-[#5A594D] font-Exo font-normal text-sm md:text-base hover:text-black after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:-bottom-[1px] after:rounded-xl  after:h-[2px] after:bg-black'><a href="#faq" className=' font-Exo'>FAQ</a></li>
                                                <li className=' ml-0 lg:ml-[16px]'><Commonbtns text="Contact Us" /></li>
                                        </ul>
                                        <label className=" lg:hidden" onClick={MobileView}>
                                                {first ? (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-black absolute -left-7 duration-300 rounded-lg top-1 rotate-45 h-[3px] w-6"></span>
                                                                <span className="flex bg-black absolute -left-7 duration-300 rounded-lg -rotate-45 h-[3px] w-6 mt-1"></span>
                                                        </div>
                                                ) : (
                                                        <div className="z-20 relative">
                                                                <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 "></span>
                                                                <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 my-1"></span>
                                                                <span className="flex bg-black h-[3px] rounded-xl duration-300 w-6 "></span>
                                                        </div>
                                                )}
                                        </label>
                                </div>
                        </div>
                </div>
        )
}

export default Navsection
