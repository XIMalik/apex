import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from 'react-router-dom'



const Footer = () => {

  const nav = useNavigate()

  const go = () => {
      nav('/get-plots')
  }

  return (
    <footer className="relative footer-center bg-white border-t-[0.5px]" >

      <div className="w-full flex flex-col items-start text-left p-10 gap-5">

        <div className="logo bg-black w-[300px]">
          {/* <img src={logo} className='scale-[100%] object-cover w-full h-full' /> */}
          <h1 className='section-title'>Logo</h1>
        </div>
        
        <div className="flex flex-col">

          <h1 className='section-p text-xl'>Building a community around people, nature and sustainability principles</h1>
          {/* <h1 className='section-p text-xl'>The Perfect
            Balance of Nature
            & Modern Living.</h1> */}

        </div>

        <nav>
          <div className="flex flex-row items-center justify-center gap-6 my-10">
            <a
              href="https://wa.me/8120953669"
              target="_blank"
              data-aos="fade-down" data-aos-delay="200"
              rel="noopener noreferrer"
              className="rounded-full h-fit w-fit border-[0.5px] border-[#afc723] p-4"
            >
              <FaWhatsapp className="scale-[1.5]" />
            </a>

            <a data-aos="fade-down" data-aos-delay="400" href="tel:+2348120953669" className="rounded-full h-fit w-fit border-[0.5px] border-[#afc723] p-4 cursor-pointernpm">
              <FiPhone className='scale-[1.5]' />
            </a>

            <a data-aos="fade-down" data-aos-delay="600" href="mailto:tawesu@gmail.com" className="rounded-full h-fit w-fit border-[0.5px] border-[#afc723] p-4 cursor-pointer">
              <MdOutlineEmail className='scale-[1.5]' />
            </a>
          </div>




        </nav>
      </div>

      <p className='absolute bottom-0 text-xs py-2 bg-black text-white text-center w-full'>Copyright © {new Date().getFullYear()} </p>
    </footer>
  )
}

export default Footer