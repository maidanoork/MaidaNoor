import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <div
      className='flex items-center justify-center w-full text-white h-[100vh] bg-cover bg-center'
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/hero.png')"
      }} id='hero'
    >
      <div className='flex flex-col items-center py-3 px-6 font-roboto max-w-[800px] text-center'>
        <h1 className='text-[40px] md:text-[60px] font-semibold font-roboto'>Web Developer</h1>
        <p className='max-w-[700px] mx-auto my-2.5 mb-5 font-roboto leading-relaxed text-sm md:text-base'>
          A web developer experienced in React.js, HTML, CSS, Next.js, WordPress, and Node.js specializes in building dynamic, responsive websites. They create interactive front-end interfaces and manage back-end development, delivering comprehensive web solutions.
        </p>
        <button className='flex items-center justify-center gap-3 md:gap-5 bg-white text-gray-800 py-2 px-4 md:py-3 md:px-6 mt-6 rounded-full cursor-pointer border-0 outline-none text-sm md:text-base'>
          Explore more
          <Image
            src="/dark-arrow.png"
            width={20}
            height={10}
            alt="logo"
          />
        </button>
      </div>
    </div>
  );
}

export default Hero;
