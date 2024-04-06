"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Stars, Triangle } from './Icon'
import Image from "next/image";
import sliderimg from '../../../public/assets/images/slider-img.webp'
import 'swiper/css';
import 'swiper/css/pagination';
const Choosesec = () => {
    const Items = [
        { id: 1, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 2, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 3, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
        { id: 4, title: 'Customer-Centric', para: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.' },
    ]
    return (
        <div id='choose' className=" relative z-10">
            <div className="container flex flex-col items-center justify-center mx-auto px-3 overflow-hidden">
                <div className=' flex items-center gap-[6px] pb-2'>
                    <span><Stars /></span>
                    <p className=' font-Exo font-normal text-sm md:text-base text-[#131200]'>Why Choose Us</p>
                </div>
                <h2 className=' text-black font-Outfit font-light text-3xl md:text-5xl text-center mx-auto'>Driving Innovation &<span className=' font-semibold block'>Transforming Industries</span></h2>
                <div className='flex flex-col w-full mt-[20px] md:mt-[52px]'>
                    <Swiper spaceBetween={24}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        pagination={{ el: ".swiper-pagination", type: "bullets", clickable: true, bulletActiveClass: "swiper-pagination-bullet-active", }}
                        modules={[Pagination]}
                        breakpoints={{
                            567: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className='w-full'>
                        {
                            Items.map((items, index) => (
                                <SwiperSlide key={index} className='mx-auto'>
                                    <div className={`border border-[#EEDDFB] rounded-xl p-[18px] max-w-[364px] w-full min-h-[208px] overflow-auto`}>
                                        <span className='border-[7px] text-sm md:text-base font-bold font-Outfit flex items-center justify-center rounded-full bg-gradient-to-tr from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent border-[#F4EAFC] h-9 w-9'>{items.id}</span>
                                        <p className='mt-3 text-[20px] leading-[25px] font-normal font-Outfit text-[#131200]'>{items.title}</p>
                                        <p className='mt-1 text-sm md:text-base text-[#5A594D] font-Exo'>{items.para}</p>
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <div className="swiper-pagination"><span className='swiper-pagination-bullet pt-[20px]'></span></div>
                </div>
                <div className=' flex items-center justify-center'>
                    <Image src={sliderimg} alt='#' width={1440} height={577} />
                </div>
            </div>
            <span className=' absolute -z-10 top-[-3%] left-[2%]'><Triangle /></span>
            <span className=' absolute -z-10 bottom-[7%] right-[2%]'><Triangle /></span>
        </div>
    )
}

export default Choosesec
