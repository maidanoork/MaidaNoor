import React from 'react';
import Image from 'next/image';

function Achievements() {
  return (
    <div className='pl-[5%] pr-[5%] my-20 mx-auto w-[90%] text-center' id='achievements'>
      <div className='flex flex-wrap justify-center mb-10 gap-4'>
        
        <div className='relative w-[230px] h-[230px]'>
          <Image
            className='rounded-lg'
            src="/ignite.jpg"
            layout="fill"
            objectFit="cover"
            alt="Project 2"
          />
        </div>
        <div className='relative w-[230px] h-[230px]'>
          <Image
            className='rounded-lg'
            src="/xistil.png"
            layout="fill"
            objectFit="cover"
            alt="Project 3"
          />
        </div>
        <div className='relative w-[230px] h-[230px]'>
          <Image
            className='rounded-lg'
            src="/teleup.png"
            layout="fill"
            objectFit="cover"
            alt="Project 4"
          />
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button className='flex items-center justify-center gap-3 bg-black text-white py-3 px-6 rounded-full cursor-pointer border-0 outline-none'>
          Explore more
          <Image
            src="/white-arrow.png"
            width={20}
            height={10}
            alt="arrow"
          />
        </button>
      </div>
    </div>
  );
}

export default Achievements;
