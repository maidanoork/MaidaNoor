import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div className='flex flex-col md:flex-row pl-[5%] pr-[5%] my-[100px] mx-auto items-center justify-between w-full md:w-[90%]' id='about'>
      <div className='relative m-2 p-2 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 basis-full md:basis-[40%]'>
        <Image
          className='rounded-lg'
          src="/about.jpg"
          layout="responsive"
          width={100}
          height={100}
          alt="My Profile"
        />
        <div className='absolute inset-0 flex items-center justify-center flex-col text-white cursor-pointer bg-[rgba(0,15,15,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-400 rounded-lg'>
          <Image
            src="/play-icon.png"
            width={50}
            height={50}
            alt="Play icon"
          />
        </div>
      </div>
      <div className='basis-full md:basis-[56%] mt-4 md:mt-0'>
        <h3 className='text-lg md:text-xl font-semibold'>Maida Noor</h3>
        <h2 className='text-2xl md:text-3xl font-bold my-4 max-w-[90%] md:max-w-[400px]'>Web Developer</h2>
        <p className='mb-4 text-sm md:text-base'>
          I am a passionate and dedicated web developer with a keen eye for design and a strong foundation in HTML, CSS, React, JavaScript, and WordPress. I have worked on various projects for clients ranging from small businesses to large corporations, and I am always eager to learn and improve my skills.
        </p>
        <p className='text-sm md:text-base'>
          When I am not coding, I enjoy spending time with my family, exploring new cities, and learning about different cultures. I also enjoy cooking and experimenting with new recipes.
        </p>
      </div>
    </div>
  );
}

export default About;
