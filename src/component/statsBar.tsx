import React from 'react';

const StatsBar = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 relative z-20 mt-28 mb-20'>
      <div className='bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] py-10 px-12 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0'>
        {/* Left Label */}
        <div className='md:w-1/4 '>
          <div className='h-0.5 w-16 bg-linear-to-r from-light-blue-bg to-deep-blue-bg'></div>
          <h3 className='text-gray-900 font-bold text-lg mt-3'>
            Business Impact
          </h3>
        </div>

        {/* Stat 1 */}
        <div className='flex-1 text-center md:text-left'>
          <h2 className='text-5xl font-bold text-gray-900 mb-2'>89%</h2>
          <p className='text-xs text-gray-500 font-medium text-balance max-w-37.5 mx-auto md:mx-0'>
            Of businesses are expected to compete mainly on customer experience
          </p>
        </div>

        {/* Divider */}
        <div className='hidden md:block w-px h-16 bg-gray-100'></div>

        {/* Stat 2 */}
        <div className='flex-1 text-center md:text-left pl-0 md:pl-10'>
          <h2 className='text-5xl font-bold text-gray-900 mb-2'>$40M</h2>
          <p className='text-xs text-gray-500 font-medium text-balance max-w-37.5 mx-auto md:mx-0'>
            Revenue won last year as a result of our systems
          </p>
        </div>

        {/* Divider */}
        <div className='hidden md:block w-px h-16 bg-gray-100'></div>

        {/* Stat 3 */}
        <div className='flex-1 text-center md:text-left pl-0 md:pl-10'>
          <h2 className='text-5xl font-bold text-gray-900 mb-2'>300</h2>
          <p className='text-xs text-gray-500 font-medium text-balance max-w-37.5 mx-auto md:mx-0'>
            Months of productivity saved every year
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
