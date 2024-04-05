"use client"
import { useState } from 'react'

const Backtop = () => {
        const [isVisible, setIsVisible] = useState(false);

        const scrollToTop = () => {
                window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                });
        };

        window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                        setIsVisible(true);
                } else {
                        setIsVisible(false);
                }
        });
        return (
                <div>
                        <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-1 right-1 z-[100] animate-bounce aspect-square `}
                                onClick={scrollToTop}
                                style={{ display: isVisible ? 'block' : 'none', }} >
                                <div className='w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] cursor-pointer rounded-full bg-white hover:-translate-y-1 duration-300 hover:shadow-[0px_0px_12px_4px_rgba(30,31,31,0.36)] flex justify-center items-center'>
                                        <svg className=" bi bi-arrow-up-circle" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path fillRule="evenodd"
                                                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                                        </svg>
                                </div>
                        </button>

                </div>
        )
}

export default Backtop
