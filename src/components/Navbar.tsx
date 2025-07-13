'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Add scroll event listener to detect when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`padding-x py-4 md:py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white/95 shadow-sm' : 'bg-transparent'}`}>
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image 
            src="/assets/ca-logo.png" 
            alt="logo" 
            width={50} 
            height={50} 
            className="m-0 w-[45px] h-[45px] md:w-[50px] md:h-[50px]" 
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-10 md:gap-16 max-lg:hidden">
          <li>
            <Link href="#home" className="font-montserrat leading-normal text-base md:text-lg text-slate-gray hover:text-coral-red transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about-us" className="font-montserrat leading-normal text-base md:text-lg text-slate-gray hover:text-coral-red transition-colors">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#services" className="font-montserrat leading-normal text-base md:text-lg text-slate-gray hover:text-coral-red transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact-us" className="font-montserrat leading-normal text-base md:text-lg text-slate-gray hover:text-coral-red transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          {/* Additional nav items can be added here */}
        </div>

        {/* Mobile Navigation Icon */}
        <div 
          className="hidden max-lg:block cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image 
            src={isMobileMenuOpen ? "/assets/close.svg" : "/assets/hamburger.svg"} 
            alt="menu icon" 
            width={22} 
            height={22} 
          />
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-[72px] right-0 left-0 bg-white p-6 rounded-b-3xl shadow-xl z-50 lg:hidden border-t border-slate-200">
            <ul className="flex flex-col items-center gap-6">
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="#home" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">
                  Home
                </Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="#about-us" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">
                  About Us
                </Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="#services" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">
                  Services
                </Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="#contact-us" className="font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar; 