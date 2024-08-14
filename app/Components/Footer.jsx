import React from 'react';

function Footer() {
  return (
    <div className='pl-[5%] pr-[5%] py-[15px] mx-auto flex flex-col md:flex-row items-center justify-between border-t border-[#797979]'>
      <p className='text-center text-gray-500 mb-4 md:mb-0'>© 2024 Maida Noor. All rights reserved.</p>
      <ul className='flex space-x-4'>
        <li className='list-none'><a href='#' className='text-gray-500 hover:text-gray-700'>Privacy Policy</a></li>
        <li className='list-none'><a href='#' className='text-gray-500 hover:text-gray-700'>Terms of Service</a></li>
      </ul>
    </div>
  );
}

export default Footer;
