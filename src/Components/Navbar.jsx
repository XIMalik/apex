import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();
  const nav = useNavigate()


  const goHome = () => {
    nav('/')
  }

  const go = () => {
      nav('/get-plots')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='flex absolute top-0 w-[100%] h-[80px] z-[100] py-4'>
      <div
        className={`navbar z-10 flex w-[100%] h-[100%] justify-between items-center text-white px-[50px] md:px-[100px] rounded-sm h-[40px] transition-all duration-300`}
      >

        <div>
            <h1 className='font-bold text-3xl'>Logo</h1>
        </div>


        {/* {location.pathname === '/get-plots' && (
          <div className='res-page'>
            <div onClick={goHome} className={`link-div-light cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>
              <a className="link-light" href="#amenities">
                <span>Home</span>
              </a>
            </div>
          </div>        
        )} */}

          <div
            className={`rounded-full links flex gap-10 hidden md:flex items-center `}
          >
            <div className="link-div">
              <a className="link" href="#amenities">
                <span>About us</span>
              </a>
            </div>
            <div className="link-div">
              <a className="link" href="#gallery">
                <span>Services</span>
              </a>
            </div>
            <div className="link-div">
              <a className="link" href="#renders">
                <span>Portfolio</span>
              </a>
            </div>
            <div className="link-div">
              <a className="link" href="#pricing">
                <span>Pricing</span>
              </a>
            </div>
          </div>

          <button className='border-[0.5px] border-white rounded-md hidden md:flex px-6 py-2'>Contact us</button>

        
          <div className="mobile-nav lg:hidden cursor-pointer" onClick={toggleMenu}>
            {isScrolled ? <img width="25" height="25" src="https://img.icons8.com/fluency-systems-filled/50/menu.png" alt="menu" />
              : <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png" alt="menu--v6" />
            }
          </div>
        


        {/* {menuOpen && (
          <div className={`mobile-menu fixed inset-0 bg-black/70 bg-opacity-90 flex flex-col items-center backdrop-blur-sm justify-center space-y-4 z-50 ${menuOpen ? 'open' : ''}`}>
            <a href="#amenities" onClick={toggleMenu} className="text-white hover:text-[#afc723] ease-in duration-150">Amenities</a>
            <a href="#remarks" onClick={toggleMenu} className="text-white hover:text-[#afc723] ease-in duration-150">Remarks</a>
            <a href="#images" onClick={toggleMenu} className="text-white hover:text-[#afc723] ease-in duration-150">Gallery</a>
            <a href="#renders" onClick={toggleMenu} className="text-white hover:text-[#afc723] ease-in duration-150">Renders</a>
            <a href="#pricing" onClick={toggleMenu} className="text-white hover:text-[#afc723] ease-in duration-150">Pricing</a>
            <a href="#map" onClick={toggleMenu} className="text-white hover:text-[#afc723] ease-in duration-150">Map</a>
            <a href="#contact" onClick={toggleMenu} className="text-white hover:text-[#afc723] ease-in duration-150">Contact </a>
            <a href="/Tranquil Plains Brochure.pdf" className="text-white hover:text-[#afc723] ease-in duration-150" download>
                <span>Brochure</span>
              </a>
            <a  href="/Tranquil Plains Brochure.pdf" className="text-white hover:text-[#afc723] ease-in duration-150">
                <span>Reserve a plot</span>
              </a>
            <button onClick={toggleMenu} className="text-white text-2xl absolute bottom-10">
              <img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/cancel.png" alt="cancel" /></button>
          </div>

        )} */}


      </div>
    </div>
  );
};

export default Navbar;
