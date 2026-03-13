import {
  FiMonitor,
  FiSettings,
  FiTruck,
  FiArrowUpRight,
  FiTarget,
  FiPlayCircle,
  FiCompass,
} from 'react-icons/fi';

const Services = () => {
  return (
    <section
      id='services'
      className='relative max-w-6xl mx-auto px-4 py-24 overflow-hidden'>
      <div className='absolute top-[40%] left-[10%] w-32 h-32 border-12 border-blue-50/50 rounded-full -z-10'></div>
      <div className='absolute top-[45%] left-[25%] w-12 h-12 bg-blue-50/50 rounded-full -z-10'></div>

      <div className='flex flex-col lg:flex-row items-center gap-16 mb-32'>
        <div className='w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div className='bg-white p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between  hover:-translate-y-1 transition-transform duration-300'>
            <FiMonitor className='text-3xl text-blue-400 mb-4' />
            <h3 className='text-lg font-bold text-blue-400 leading-snug'>
              Business
              <br />
              Consulting
            </h3>
          </div>
          <div className='bg-white p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between  hover:-translate-y-1 transition-transform duration-300'>
            <FiSettings className='text-3xl text-blue-400 mb-4' />
            <h3 className='text-lg font-bold text-blue-400 leading-snug'>
              Software
              <br />
              Implementation
            </h3>
          </div>
          <div className='bg-white p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between  hover:-translate-y-1 transition-transform duration-300'>
            <FiTruck className='text-3xl text-blue-400 mb-4' />
            <h3 className='text-lg font-bold text-blue-400 leading-snug'>
              Outsourced
              <br />
              Delivery Options
            </h3>
          </div>
          <div className='bg-slate-50 p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between  hover:bg-slate-100 transition-colors duration-300 cursor-pointer group'>
            <FiArrowUpRight className='text-3xl text-slate-900 mb-4 group-hover:scale-110 transition-transform origin-bottom-left' />
            <h3 className='text-lg font-bold text-slate-900 leading-snug'>
              View Services
            </h3>
          </div>
        </div>

        <div className='w-full lg:w-1/2 space-y-6'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight'>
            Enterprise-level Support at a Startup-Friendly Price
          </h2>
          <div className='space-y-4 text-sm text-slate-600 leading-relaxed font-light'>
            <p>
              The internet has democratized access to entrepreneurship and made
              it easier for people to launch businesses from the comfort of
              their homes. Unfortunately, startup creators are often thrown to
              the wolves and set up to fail.
            </p>
            <p>
              Our virtual online business bootstrap accelerator framework
              combines 25+ years of high-level corporate experience with the
              latest developments in AI and machine learning to give you access
              to the mentorship and support you need to gain a foothold within
              your ecommerce niche.
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row items-center gap-16'>
        <div className='w-full lg:w-1/2 space-y-6'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight'>
            Give Yourself Access to High-ROI Frameworks & Tools
          </h2>
          <div className='space-y-4 text-sm text-slate-600 leading-relaxed font-light'>
            <p>
              Did you know that small businesses with no employees have an
              average annual revenue of just $48,978? Or that 86.3% of small
              business owners earn under $100,000 a year in income?
            </p>
            <p>
              Often, growth is impeded not by effort or ingenuity but by access
              to the right strategic tools and frameworks. At Rockbell, we put
              everything you need to take your business to the next level right
              at your fingertips.
            </p>
          </div>
        </div>

        <div className='w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6'>
          <div className='bg-white p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between  hover:-translate-y-1 transition-transform duration-300'>
            <FiTarget className='text-3xl text-blue-400 mb-4' />
            <h3 className='text-lg font-bold text-blue-400 leading-snug'>
              Lean Digital
              <br />
              Business
              <br />
              Accelerator
              <br />
              Framework
            </h3>
          </div>
          <div className='bg-white p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between  hover:-translate-y-1 transition-transform duration-300'>
            <FiPlayCircle className='text-3xl text-blue-400 mb-4' />
            <h3 className='text-lg font-bold text-blue-400 leading-snug'>
              LDBAF
              <br />
              Masterclass
            </h3>
          </div>
          <div className='bg-white p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col justify-between  hover:-translate-y-1 transition-transform duration-300'>
            <FiCompass className='text-3xl text-blue-400 mb-4' />
            <h3 className='text-lg font-bold text-blue-400 leading-snug'>
              JAUNT
              <br />
              Framework
            </h3>
          </div>
          <div className='bg-slate-50 p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col justify-between  hover:bg-slate-100 transition-colors duration-300 cursor-pointer group'>
            <FiArrowUpRight className='text-3xl text-slate-900 mb-4 group-hover:scale-110 transition-transform origin-bottom-left' />
            <h3 className='text-lg font-bold text-slate-900 leading-snug'>
              View Business
              <br />
              Tools
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
