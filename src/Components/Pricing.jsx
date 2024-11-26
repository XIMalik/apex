import React from 'react'
import Price from './Price'

const Pricing = () => {
    return (
        <div className='flex flex-col px-[50px] md:px-[100px] gap-[70px] py-[70px]'>
            <div className="text flex flex-col items-center">
                <span className='section-description uppercase'>billing</span>
                <h1 className='section-title text-black'>Pricing</h1>
                <span className='section-mini-des'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, doloremque.</span>
            </div>
            <div className="prices flex flex-wrap gap-7 w-full justify-center items-center">
                <Price title="Basic" price="1,000,000"/>
                <Price title="Standard" price="600,000" bg="#FB7916" color="#FFFFFF" height="490px"/>
                <Price title="Premium" price="1,600,000"/>
            </div>
        </div>
    )
}

export default Pricing