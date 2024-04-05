import React from 'react'

const Mailsec = () => {
        return (
                <div id='blogs' className=' translate-y-[40px] md:translate-y-[86px] relative z-10'>
                        <div className=' container px-3 mx-auto pt-2 lg:pt-[64px]'>
                                <div className='bg-[url(/assets/images/mail-img.webp)] bg-cover bg-center bg-no-repeat py-[32px] md:py-[45px] lg:py-[60px] flex-grow-1 flex items-center  justify-center rounded-[20px]'>
                                        <div className=' flex flex-col items-center justify-center'>
                                                <h2 className=" font-light text-3xl md:text-5xl mx-auto  font-Outfit text-white text-center">
                                                Subscribe to our <span className=" font-semibold">Newsletter!</span>
                                                </h2>
                                                <p className=" font-normal text-sm md:text-base font-Exo text-white pb-4 md:pb-[36px] mx-auto text-center pt-2">
                                                Be the first to get exclusive offers and the latest news.</p>
                                                <label htmlFor="" className='border border-solid border-[#A480E1] bg-[#8D62DC] p-[10px] rounded-[6px] max-w-[448px] flex flex-col md:flex-row items-center '>
                                                        <input type="email" placeholder='Enter your email' className=' placeholder:text-white mail ml-[14px] bg-[#8D62DC] border-none outline-none text-white'  />
                                                        <button className='text-white  font-Outfit text-sm md:text-base font-semibold px-[16px] md:px-[24px] py-[10px] md:py-[14px] border border-solid border-white rounded-[4px] duration-300 hover:scale-95'>Subscribe</button>
                                                </label>
                                                
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Mailsec
