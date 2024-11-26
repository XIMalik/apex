import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='h-[90vh] hero flex items-center relative justify-center'>
        <div className="text text-center text-white">
            <h1 className='text-[40px] md:text-[61px] hero-title'>Empowering your <br /> Business Through Technology</h1>
            <p className='hero-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime <br /> mollitia,molestiae quas vel sint commodi</p>
            <button className='hero-button'>Get started</button>
        </div>

        <div className="logos hidden md:flex font-bold flex gap-10 text-[30px] absolute bottom-10 text-white/30">
            <span className=''>Logo</span>
            <span className=''>Logo</span>
            <span className=''>Logo</span>
            <span className=''>Logo</span>
            <span className=''>Logo</span>
            <span className=''>Logo</span>
        </div>
    </div>
  )
}

export default Hero