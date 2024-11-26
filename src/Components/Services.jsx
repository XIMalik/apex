import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <div>
      <div className='flex flex-col pt-[70px] px-[50px] md:px-[100px]'>
        <div className="text">
          <span className='section-description'>SERVICES</span>
          <h1 className='section-title'>Essential BusinessTech</h1>
          <span className='section-mini-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, cum.</span>
        </div>
        <div className="services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5">
          <div className="border border-black/10 p-4"><Service title='Web & App Development' /></div>
          <div className="border border-black/10 p-4"><Service title='Web & App Development' /></div>
          <div className="border border-black/10 p-4"><Service title='Web & App Development' /></div>
          <div className="border border-black/10 p-4"><Service title='Web & App Development' /></div>
          <div className="border border-black/10 p-4"><Service title='Web & App Development' /></div>
          <div className="border border-black/10 p-4"><Service title='Web & App Development' /></div>
        </div>
      </div>
      <div className="banner h-[200px] flex items-center justify-center text-center text-white">
        <h1 className='section-title'>Essential BusinessTech</h1>
      </div>
    </div>
  )
}

export default Services