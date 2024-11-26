import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Portfolio from './Portfolio'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Footer from './Footer'


const Mix = () => {
  return (
    <div>
        <Navbar />
        <Hero/>
        <Services/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Mix