import Link from 'next/link';
import React from 'react';

const navLinks = [
  {
    text: 'Home',
    href: '#home',
  },
  {
    text: 'About',
    href: '#about',
  },
  {
    text: 'Services',
    href: '#services',
  },
  {
    text: 'Products',
    href: '#products',
  },
  {
    text: 'Contacts',
    href: '#contacts',
  },
  {
    text: 'Pricing',
    href: '#pricing',
  },
];

const Navbar = () => {
  return (
    <>
      <nav className='mx-auto max-w-6xl '>
        <div className='flex justify-between items-center h-20'>
          <div>
            <h2 className='text-3xl font-bold'>Rockbell</h2>
          </div>
          <div className='flex gap-10 items-center justify-between'>
            <ul className='flex gap-5 text-base font-light'>
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className='group flex items-center flex-col'>
                  <Link
                    href={link.href}
                    className=' group-hover:font-medium duration-500'>
                    <span>{link.text}</span>
                  </Link>
                  <div className='w-0  h-0 group-hover:w-[94%] group-hover:h-0.5 bg-linear-to-r from-grad-blue-bg to-deep-blue-bg rounded-2xl duration-600'></div>
                </li>
              ))}
            </ul>
            <button className='bg-linear-to-r from-grad-blue-bg to-deep-blue-bg py-2.5 px-6 rounded-3xl text-white'>
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
