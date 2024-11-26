import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swipe from './Swipe';

const Testimonials = () => {
    return (
        <div className='flex  bg-[#FFF3E9] flex-col px-[50px] md:px-[100px] gap-[70px] py-[70px] h-[100vh]'>
            <div className="text flex flex-col items-center text-center">
                <span className='section-description uppercase'>feedback</span>
                <h1 className='section-title text-black'>Testimonials</h1>
                <span className='section-mini-des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, doloremque.</span>
            </div>
            <div className="prices w-full justify-center items-center">
               <Swipe/>
            </div>
        </div>)
}

export default Testimonials