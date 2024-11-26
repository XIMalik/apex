import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Talk from './Talk';
const Swipe = () => {
    return (
        <>
            <div className="hidden md:flex xl:hidden flex items-center justify-center">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={51}
                    slidesPerView={2}
                    // navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='py-10 h-[300px] flex items-center justify-center'
                >
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>

                    <style jsx>{`
        /* Custom styles for pagination */
        .swiper-pagination {
            bottom: 10px; /* Adjust position */
            }
            
            .swiper-pagination-bullet {
                background-color: #FB7916; /* Color for inactive bullets */
                }
                
                .swiper-pagination-bullet-active {
                    background-color: #FB7916; /* Color for the active bullet */
                    }
                    `}</style>
                </Swiper>
            </div>
            <div className="hidden xl:flex">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={51}
                    slidesPerView={3}
                    // navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='py-10 h-[300px] flex items-center justify-center'
                >
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>

                    <style jsx>{`
        /* Custom styles for pagination */
        .swiper-pagination {
            bottom: 10px; /* Adjust position */
            }
            
            .swiper-pagination-bullet {
                background-color: #FB7916; /* Color for inactive bullets */
                }
                
                .swiper-pagination-bullet-active {
                    background-color: #FB7916; /* Color for the active bullet */
                    }
                    `}</style>
                </Swiper>
            </div>
            <div className="flex md:hidden">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={51}
                    slidesPerView={1}
                    // navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='py-10 h-[300px] flex items-center justify-center'
                >
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>
                    <SwiperSlide className=''><Talk /></SwiperSlide>

                    <style jsx>{`
        /* Custom styles for pagination */
        .swiper-pagination {
            bottom: 10px; /* Adjust position */
            }
            
            .swiper-pagination-bullet {
                background-color: #FB7916; /* Color for inactive bullets */
                }
                
                .swiper-pagination-bullet-active {
                    background-color: #FB7916; /* Color for the active bullet */
                    }
                    `}</style>
                </Swiper>
            </div>
        </>
    );
}

export default Swipe