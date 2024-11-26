import React from 'react'
import Work from './Work'

const Portfolio = () => {
  return (
    <div className='portfolio bg-[#FFF3E9] py-[70px] text-center h-fit w-[100%] px-[50px] md:px-[100px]'>
        <span className='section-description uppercase'>portfolio</span>
        <h1 className='section-title text-black'>Our Latest Work</h1>
        <span className='section-mini-des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, doloremque.</span>

        <div className="works grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-5">
          <div className=""><Work title='Abeenton Oil & Gas'/></div>
          <div className=""><Work title='Abeenton Oil & Gas'/></div>
          <div className=""><Work title='Abeenton Oil & Gas'/></div>
          <div className=""><Work title='Abeenton Oil & Gas'/></div>
          <div className=""><Work title='Abeenton Oil & Gas'/></div>
          <div className=""><Work title='Abeenton Oil & Gas'/></div>
        </div>
    </div>
  )
}

export default Portfolio