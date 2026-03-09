import React from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

import man1 from '@/assets/man1.png';
import woman1 from '@/assets/woman1.png';
import woman2 from '@/assets/woman2.png';

const Story = () => {
  return (
    <section
      id='about'
      className='relative max-w-6xl mx-auto px-4 py-24 overflow-hidden'>
      {/* Background Decorative Zig-Zag */}
      <div className='absolute right-10 top-1/2 opacity-20 -z-10'>
        <svg
          width='100'
          height='100'
          viewBox='0 0 100 100'
          fill='none'>
          <path
            d='M0 20 L20 0 L40 20 L60 0 L80 20 L100 0'
            stroke='#93c5fd'
            strokeWidth='8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M0 60 L20 40 L40 60 L60 40 L80 60 L100 40'
            stroke='#93c5fd'
            strokeWidth='8'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      {/* ========================================== */}
      {/* SECTION 1: Our Story                       */}
      {/* ========================================== */}
      <div className='flex flex-col-reverse md:flex-row items-center gap-16 mb-40'>
        {/* Left Side: Floating Image Cluster */}
        <div className='w-full md:w-1/2 relative h-100 flex items-center justify-center'>
          {/* Faint connecting line behind avatars */}
          <svg
            className='absolute inset-0 w-full h-full -z-10 text-blue-100'
            viewBox='0 0 400 400'>
            <line
              x1='100'
              y1='100'
              x2='300'
              y2='300'
              stroke='currentColor'
              strokeWidth='2'
              strokeDasharray='6 6'
            />
            <line
              x1='300'
              y1='100'
              x2='100'
              y2='300'
              stroke='currentColor'
              strokeWidth='2'
              strokeDasharray='6 6'
            />
          </svg>

          {/* Avatar 1 (Top Left) */}
          <div className='absolute top-[10%] left-[10%] w-24 h-24 rounded-full overflow-hidden z-20 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={man1}
              alt='Founder'
              className='w-full h-full object-cover relative z-10'
            />
          </div>

          {/* Avatar 2 (Center Right) */}
          <div className='absolute top-[40%] right-[10%] w-32 h-32 rounded-full overflow-hidden z-20 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={woman1}
              alt='Co-Founder'
              className='w-full h-full object-cover relative z-10'
            />
          </div>

          {/* Avatar 3 (Bottom Center) */}
          <div className='absolute bottom-[10%] left-[30%] w-20 h-20 rounded-full overflow-hidden z-20 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={woman2}
              alt='Team'
              className='w-full h-full object-cover relative z-10'
            />
          </div>
        </div>

        {/* Right Side: Copy */}
        <div className='w-full md:w-1/2 space-y-6 pl-0 md:pl-10'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight'>
            Our Story
          </h2>
          <div className='space-y-4 text-sm text-slate-600 leading-relaxed font-light'>
            <p>
              Rockbell was founded with a single mission: to stop great ideas
              from dying in obscurity. We noticed that brilliant founders were
              spending months trying to stitch together websites, ads, and
              payment gateways instead of actually building their business.
            </p>
            <p>
              By bridging the gap between elite design and aggressive growth
              marketing, we created a single digital infrastructure that takes
              you from a blank canvas to a profitable online machine in record
              time.
            </p>
          </div>
          <a
            href='#more'
            className='inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors group mt-4'>
            Learn more
            <FiArrowUpRight className='text-xl group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform' />
          </a>
        </div>
      </div>

      {/* ========================================== */}
      {/* SECTION 2: Meet The Team / Chat Bubble     */}
      {/* ========================================== */}
      <div className='flex flex-col md:flex-row items-center gap-16'>
        {/* Left Side: Copy */}
        <div className='w-full md:w-1/2 space-y-6'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight'>
            Meet your dedicated growth partner
          </h2>
          <div className='space-y-4 text-sm text-slate-600 leading-relaxed font-light'>
            <p>
              At the center of everything we do at Rockbell is our hands-on
              approach. You do not just get handed a website and left to fend
              for yourself.
            </p>
            <p>
              From day one, you are paired with a dedicated strategist who
              learns your business, audits your competitors, and actively
              manages your transition into a scalable, automated online brand.
            </p>
          </div>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors group mt-4'>
            Book free assessment
            <FiArrowUpRight className='text-xl group-hover:scale-110 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform' />
          </a>
        </div>

        {/* Right Side: The Chat Bubble Graphic */}
        <div className='w-full md:w-1/2 relative h-100 flex items-center justify-center mt-10 md:mt-0'>
          {/* The Person (Updated to match the new style) */}
          <div className='relative w-64 h-64 rounded-full overflow-hidden z-10 shadow-2xl flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={woman1}
              alt='Dedicated Strategist'
              className='w-full h-full object-cover relative z-10'
            />
          </div>

          {/* The Chat Bubble (Floating to the left) */}
          <div className='absolute top-[15%] left-[0%] md:-left-[10%] bg-white rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 max-w-55 animate-bounce-slow'>
            <p className='text-sm font-bold text-blue-600 mb-1'>
              Hi, I'm Sarah!
            </p>
            <p className='text-xs text-slate-600 font-medium leading-relaxed'>
              I can help you grow your business with automation and targeted
              ads. Let's talk!
            </p>

            {/* Chat Bubble Tail */}
            <div className='absolute top-1/2 -right-3 w-6 h-6 bg-white transform rotate-45 -translate-y-1/2 rounded-sm shadow-[5px_-5px_10px_rgba(0,0,0,0.02)]'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
