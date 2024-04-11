"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from "next/image";
import contactimg from '../../../public/assets/images/contactus-img.webp'

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
      if (document.getElementById('name').value !== '' && document.getElementById('email').value !== '' && document.getElementById('text').value !== '') {
          emailjs
              .sendForm('service_gtssbkg', 'template_rdt2k7c', form.current, {
                  publicKey: 'LSDT0o-MnV4WWn46U',
              })
              .then(
                  () => {
                      console.log('SUCCESS!');
                      window.location.reload(true)
                  },
                  (error) => {
                      console.log('FAILED..', error.text);
                  },
              );
      }
      else {
          alert('Please fill in all fields');
      }
  };

  return (
    <div id='services' className='pt-[40px] md:pt-[90px] lg:pt-[150px]'>
      <div className=' container mx-auto px-3'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[65px]'>
          <div>
            <h2 className=' max-w-[521px] text-black font-Outfit font-semibold text-3xl md:text-5xl pb-2 md:pb-4'>Contact<span className=' font-light'> Us</span></h2>
            <p className='text-[#5A594D] font-Exo font-normal text-sm md:text-base max-w-[409px] pb-[18px]'>Feel free to contact us any time . We will get back to you as soon as we can! </p>
            <form ref={form} onSubmit={sendEmail}>
              <div className=' flex flex-col md:flex-row items-center gap-[11px] pb-4'>
                <div className=' flex flex-col w-full'>
                  <label className=' font-Exo text-sm md:text-base text-[#5A594D] font-normal pb-[5px]'>Name</label>
                  <input type="text" id='name' className='px-2' />
                </div>
                <div className=' flex flex-col w-full'>
                  <label className=' font-Exo text-sm md:text-base text-[#5A594D] font-normal pb-[5px]'>Last Name</label>
                  <input type="text" id='name' className='px-2' />
                </div>
              </div>
              <div className=' flex flex-col mb-4 w-full'>
                <label className=' font-Exo text-sm md:text-base text-[#5A594D] font-normal pb-[5px]'>Email</label>
                <input type="email" className='email px-2' id='email'  />
              </div>
              <div className=' flex flex-col  w-full'>
                <label className=' font-Exo text-sm md:text-base text-[#5A594D] font-normal pb-[5px]'>Message</label>
                <textarea type="text" className='message resize-none px-2' id='text' />
              </div>
              <input className='duration-300 hover:bg-gradient-to-br hover:to-[#4F91FC] hover:to-50% hover:from-[#A854E8] hover:scale-95 bg-gradient-to-br to-[#A854E9] to-50%  from-[#4F91FC] font-Outfit cursor-pointer py-[14px] px-[24px] submit mt-4 ' type="submit" value="Submit" />
            </form></div>
          <div>
            <Image src={contactimg} alt="#" height={572} width={598} className=' w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactus

