import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-deep-blue-bg pt-20 pb-10 rounded-t-[3rem] mt-20'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 border-b border-white/10 pb-16'>
          {/* Brand Col */}
          <div className='md:col-span-2'>
            <h2 className='text-3xl font-bold text-white mb-4'>Rockbell</h2>
            <p className='text-blue-100/70 text-sm font-light max-w-sm mb-6'>
              The complete digital infrastructure to start, run, and scale your
              online business. We turn ideas into automated revenue machines.
            </p>
            <div className='flex gap-4 text-white/80'>
              <a
                href='#'
                className='hover:text-white transition-colors'>
                <FaTwitter className='text-xl' />
              </a>
              <a
                href='#'
                className='hover:text-white transition-colors'>
                <FaLinkedin className='text-xl' />
              </a>
              <a
                href='#'
                className='hover:text-white transition-colors'>
                <FaGithub className='text-xl' />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className='text-white font-bold mb-4'>Navigation</h3>
            <ul className='space-y-3 text-blue-100/70 text-sm font-light'>
              <li>
                <Link
                  href='#home'
                  className='hover:text-white transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='#about'
                  className='hover:text-white transition-colors'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='#services'
                  className='hover:text-white transition-colors'>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='#pricing'
                  className='hover:text-white transition-colors'>
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className='text-white font-bold mb-4'>Legal</h3>
            <ul className='space-y-3 text-blue-100/70 text-sm font-light'>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-white transition-colors'>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center text-blue-100/50 text-xs font-light'>
          <p>
            &copy; {new Date().getFullYear()} Rockbell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
