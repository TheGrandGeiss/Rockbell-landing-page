'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Added icons for the mobile toggle

const navLinks = [
  { text: 'Home', href: '#home' },
  { text: 'About', href: '#about' },
  { text: 'Services', href: '#services' },
  { text: 'Products', href: '#products' },
  { text: 'Contacts', href: '#contacts' },
  { text: 'Pricing', href: '#pricing' },
];

const Navbar = () => {
  // State to manage the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // Added relative positioning and z-index so the mobile dropdown overlaps content
    <nav className='relative mx-auto max-w-6xl px-4 xl:px-0 z-50'>
      <div className='flex justify-between items-center h-20'>
        {/* Logo */}
        <div>
          <h2 className='text-3xl font-bold text-slate-900'>Rockbell</h2>
        </div>

        {/* ========================================== */}
        {/* DESKTOP MENU (Hidden on mobile)            */}
        {/* ========================================== */}
        <div className='hidden md:flex gap-10 items-center justify-between'>
          <ul className='flex gap-5 text-base font-light'>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className='group flex items-center flex-col'>
                <Link
                  href={link.href}
                  className='group-hover:font-medium duration-500 text-slate-700'>
                  <span>{link.text}</span>
                </Link>
                {/* Your awesome hover underline effect */}
                <div className='w-0 h-0 group-hover:w-[94%] group-hover:h-0.5 bg-linear-to-r from-grad-blue-bg to-deep-blue-bg rounded-2xl duration-600'></div>
              </li>
            ))}
          </ul>
          <button className='bg-linear-to-r from-grad-blue-bg to-deep-blue-bg py-2.5 px-6 rounded-3xl text-white hover:opacity-90 transition-opacity'>
            Contact Us
          </button>
        </div>

        {/* ========================================== */}
        {/* MOBILE HAMBURGER ICON (Hidden on desktop)  */}
        {/* ========================================== */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            className='text-slate-900 text-3xl focus:outline-none'>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* MOBILE DROPDOWN MENU                       */}
      {/* ========================================== */}
      {isOpen && (
        <div className='absolute top-20 left-0 w-full bg-white shadow-2xl rounded-b-3xl py-6 px-4 flex flex-col gap-6 md:hidden border-t border-gray-50 animate-in slide-in-from-top-2 duration-300'>
          <ul className='flex flex-col gap-4 text-center text-lg font-light'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Closes the menu when a link is clicked!
                  className='text-slate-700 hover:text-blue-600 transition-colors block py-2'>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <button className='bg-linear-to-r from-grad-blue-bg to-deep-blue-bg py-3 px-6 rounded-3xl text-white font-medium w-full shadow-lg'>
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
