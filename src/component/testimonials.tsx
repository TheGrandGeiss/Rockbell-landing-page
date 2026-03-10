import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: 'David O.',
      role: 'E-commerce Founder',
      text: 'Rockbell completely overhauled our funnel. We went from struggling to get leads to fully automating our onboarding process. Absolute game-changer.',
    },
    {
      name: 'Sarah M.',
      role: 'SaaS Creator',
      text: "The speed at which they execute is insane. They didn't just build a website; they built a complete digital infrastructure that actually converts.",
    },
    {
      name: 'Michael T.',
      role: 'Agency Owner',
      text: 'Enterprise-level quality without the bloated agency timeline. If you want to scale your digital presence fast, these are the guys you call.',
    },
  ];

  return (
    <section className='bg-slate-50 py-24'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <h2 className='text-4xl font-extrabold text-slate-900 mb-4'>
            Don't just take our word for it
          </h2>
          <p className='text-slate-600 font-light'>
            See what founders and business owners are saying about our growth
            infrastructure.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {reviews.map((review, index) => (
            <div
              key={index}
              className='bg-white p-8 rounded-4xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-transform duration-300'>
              <div className='flex gap-1 text-yellow-400 mb-6'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className='text-slate-700 font-light leading-relaxed mb-8'>
                "{review.text}"
              </p>
              <div>
                <p className='font-bold text-slate-900'>{review.name}</p>
                <p className='text-xs text-slate-500'>{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
