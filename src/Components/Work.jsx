import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Work = (props) => {
  return (
    <div className='flex flex-col items-start justify-start p-5'>
        <div className="image w-[100%] h-[200px] rounded-md mb-2 bg-black/20">
            <img src={props.src} className='' alt="" />
        </div>
        <h1 className='font-[700] text-[20px]'>{props.title}</h1>
        <FaArrowRightLong className='mt-2'/>

    </div>
  )
}

export default Work