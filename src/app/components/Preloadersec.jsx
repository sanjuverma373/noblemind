"use client"
import React, { useEffect, useState } from 'react'
import { Footericon } from './Icon';

const Preloadersec = () => {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
                const delay = setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                }, 3500);

                return () => clearTimeout(delay);
        }, []);
        useEffect(() => {
                document.body.style.overflow = 'hidden';
        }, []);
        return (
                <div className=" duration-300 w-screen h-screen bg-[black] fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                        <div className='flex items-center justify-center h-screen'>
                                <div className="flex items-center justify-center  flex-colum gap-6">
                                        <div className="loader animate-bounce aspect-square w-8 flex flex-col justify-center items-center">
                                        <span><Footericon/></span>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}

export default Preloadersec
