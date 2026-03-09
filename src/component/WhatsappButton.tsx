import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  return (
    <a
      href='https://wa.me/2349164861760'
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center'
      aria-label='Contact us on WhatsApp'>
      <FaWhatsapp className='text-3xl' />
    </a>
  );
};

export default WhatsAppButton;
