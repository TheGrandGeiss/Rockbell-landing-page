import React from 'react';
import { MdRocketLaunch } from 'react-icons/md';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa6';

// Make sure your import paths match your actual project structure!
import man1 from '@/assets/man1.png';
import man2 from '@/assets/man2.png';
import man3 from '@/assets/man3.png';
import woman1 from '@/assets/woman1.png';
import woman2 from '@/assets/woman2.png';
import woman3 from '@/assets/woman3.png';

const Hero = () => {
  return (
    <section className='max-w-6xl mx-auto'>
      <div className='flex gap-10 justify-between items-center'>
        {/* ============================== */}
        {/* LEFT SIDE: COPY & CTA          */}
        {/* ============================== */}
        <div className='w-1/2 space-y-6.5'>
          <h2 className='text-balance leading-[1.1] text-5xl font-bold text-gray-950'>
            Go From Idea to Launched Online Business
          </h2>
          <div className='space-y-4.5'>
            <p className='font-light text-sm text-balance'>
              We provide the complete digital infrastructure to start, run, and
              scale your business. From brand identity and lightning-fast
              websites to payment setups and targeted ads, we build your entire
              online presence from scratch.
            </p>
            <button className='bg-linear-to-r from-grad-blue-bg to-deep-blue-bg py-2.5 px-6 rounded-3xl text-white flex gap-2 items-center hover:opacity-90 transition-opacity'>
              <MdRocketLaunch />
              <span>Launch Your Business</span>
            </button>
          </div>
        </div>

        {/* ============================== */}
        {/* RIGHT SIDE: FLOATING UI CANVAS */}
        {/* ============================== */}
        <div className='relative w-1/2 h-150'>
          {/* 1. TEXT BOX: Top Right (ROI) */}
          <div className='absolute top-[4%] right-[25%] bg-white rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] w-50 z-20'>
            <p className='text-xs font-medium text-slate-700 leading-relaxed'>
              Increase ROI from $0 to six figures in 120 days
            </p>
            {/* Jagged Line Chart Icon */}
            <div className='absolute -top-5 -right-2 w-10 h-10'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='#93c5fd'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <polyline points='22 7 13.5 15.5 8.5 10.5 2 17'></polyline>
                <polyline points='16 7 22 7 22 13'></polyline>
              </svg>
            </div>
          </div>

          {/* 2. TEXT BOX: Middle Left (Conversion + Donut Chart) */}
          <div className='absolute top-[40%] left-[0%] bg-white rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] w-55 z-20'>
            <p className='text-xs font-medium text-slate-700 leading-relaxed'>
              You increase your conversion for the last 2 months
            </p>
            {/* OVERLAPPING 80% DONUT CHART */}
            <div className='absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.08)] flex items-center justify-center p-1.5'>
              <svg
                viewBox='0 0 36 36'
                className='w-full h-full transform -rotate-90'>
                <circle
                  stroke='currentColor'
                  fill='transparent'
                  strokeWidth='4'
                  cx='18'
                  cy='18'
                  r='15.915'
                  className='text-blue-50'
                />
                <circle
                  stroke='currentColor'
                  fill='transparent'
                  strokeWidth='4'
                  strokeLinecap='round'
                  cx='18'
                  cy='18'
                  r='15.915'
                  className='text-[#4ea2e0]'
                  strokeDasharray='80, 100'
                />
              </svg>
              <span className='absolute text-[10px] font-bold text-gray-800'>
                80%
              </span>
            </div>
          </div>

          {/* 3. TEXT BOX: Bottom Left (New Lead Pill) */}
          <div className='absolute bottom-[10%] left-[5%] bg-white rounded-full p-2 pr-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex items-center gap-3 w-fit z-20'>
            <div className='relative w-fit flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:w-[90%] before:h-[90%] before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10'>
              <Image
                src={man1}
                alt='Lead'
                height={40}
                width={40}
                className='relative z-10 w-10 h-10 rounded-full object-cover'
              />
            </div>
            <p className='text-xs font-medium text-slate-700'>
              You have a new <br /> lead from ads
            </p>
            {/* Floating Plus Button */}
            <div className='absolute -top-5 -right-2 w-10 h-10 bg-linear-to-b from-deep-blue-bg to-grad-blue-bg rounded-full flex items-center justify-center text-white font-bold shadow-xl shadow-blue-500/30'>
              <FaPlus />
            </div>
          </div>

          {/* 4. THE TOGGLE SWITCH */}
          <div className='absolute top-[28%] left-[30%] bg-white rounded-full w-12 h-6 shadow-[0_5px_15px_rgba(0,0,0,0.05)] p-1 flex items-center z-20'>
            <div className='w-4 h-4 bg-blue-500 rounded-full shadow-sm'></div>
          </div>

          {/* 5. THE MINI BAR CHART */}
          <div className='absolute bottom-[35%] left-[25%] bg-white rounded-full px-2.5 py-3 shadow-[0_8px_20px_rgba(0,0,0,0.05)] flex items-end gap-1 h-12 z-20'>
            <div className='w-1 h-4 bg-blue-300 rounded-full'></div>
            <div className='w-1 h-6 bg-blue-600 rounded-full'></div>
            <div className='w-1 h-3 bg-blue-400 rounded-full'></div>
          </div>

          {/* ==================================================================== */}
          {/* 6. THE FLOATING AVATARS (Staggered 1-2-3 Pyramid Layout)             */}
          {/* ==================================================================== */}

          {/* COLUMN 1: The Single Avatar (Left) */}
          <div className='absolute top-[50%] right-[36%] w-20 h-20 rounded-full overflow-hidden z-10 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={man2}
              alt='Team member'
              className='w-full h-full object-cover relative z-10'
            />
          </div>

          {/* COLUMN 2: The Two Avatars (Middle) */}
          {/* Top Avatar - Centered between 30 and 50 */}
          <div className='absolute top-[40%] right-[19%] w-20 h-20 rounded-full overflow-hidden z-10 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={woman1}
              alt='Team member'
              className='w-full h-full object-cover relative z-10'
            />
          </div>
          {/* Bottom Avatar - Centered between 50 and 70 */}
          <div className='absolute top-[60%] right-[19%] w-20 h-20 rounded-full overflow-hidden z-10 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={man3}
              alt='Team member'
              className='w-full h-full object-cover relative z-10'
            />
          </div>

          {/* COLUMN 3: The Three Avatars (Right) */}
          {/* Top Avatar */}
          <div className='absolute top-[30%] right-[2%] w-20 h-20 rounded-full overflow-hidden z-10 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={woman2}
              alt='Team member'
              className='w-full h-full object-cover relative z-10'
            />
          </div>
          {/* Middle Avatar */}
          <div className='absolute top-[50%] right-[2%] w-20 h-20 rounded-full overflow-hidden z-10 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={woman3}
              alt='Team member'
              className='w-full h-full object-cover relative z-10'
            />
          </div>
          {/* Bottom Avatar */}
          <div className='absolute top-[70%] right-[2%] w-20 h-20 rounded-full overflow-hidden z-10 shadow-lg hover:scale-105 duration-300 flex items-center justify-center before:content-[""] before:absolute before:bg-avatar-bg before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-full before:rounded-full before:-z-10'>
            <Image
              src={man1}
              alt='Team member'
              className='w-full h-full object-cover relative z-10'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
