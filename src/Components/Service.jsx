import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Service = (props) => {
  return (
    <div className='flex flex-col gap-2 p-5'>
        <div className='w-[50px] h-[50px] rounded-full bg-[#FFF2E9]'></div>
        <h1 className='font-[700] text-[20px]'>{props.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ad labore debitis natus? Doloribus, ut.</p>
        <FaArrowRightLong className='mt-5'/>
    </div>
  )
}

export default Service