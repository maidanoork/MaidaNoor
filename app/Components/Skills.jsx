import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
    <div className='z-60 pl-[5%] pr-[5%] my-20 mx-auto w-11/12 flex flex-wrap items-center justify-between' id='skills'>
      <div className='relative m-2 p-2 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 basis-1/3 min-w-[200px]'>
        <Image
          src="/skill-1.png"
          layout="responsive"
          width={100}
          height={100}
          alt="Program 1 Logo"
        />
        <div className='flex flex-col items-center justify-center text-white cursor-pointer absolute inset-0 bg-[rgba(0,15,15,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-400 transform transition-transform duration-400 rounded-lg'>
          <Image 
            src="/program-icon-1.png"
            width={60}
            height={60}
            alt="Program 1 Icon"
          />
          <p>WordPress Development</p>
        </div>
      </div>

      <div className='relative m-2 p-2 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 basis-1/3 min-w-[200px]'>
        <Image
          src="/skill-2.png"
          layout="responsive"
          width={100}
          height={100}
          alt="Program 2 Logo"
        />
        <div className='flex flex-col items-center justify-center text-white cursor-pointer absolute inset-0 bg-[rgba(0,15,15,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-400 transform transition-transform duration-400 rounded-lg'>
          <Image 
            src="/program-icon-2.png"
            width={60}
            height={60}
            alt="Program 2 Icon"
          />
          <p>Graphic Designing</p>
        </div>
      </div>

      <div className='relative m-2 p-2 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 basis-1/3 min-w-[200px]'>
        <Image
          src="/skill-3.png"
          layout="responsive"
          width={100}
          height={100}
          alt="Program 3 Logo"
        />
        <div className='flex flex-col items-center justify-center text-white cursor-pointer absolute inset-0 bg-[rgba(0,15,15,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-400 transform transition-transform duration-400 rounded-lg'>
          <Image 
            src="/program-icon-3.png"
            width={60}
            height={60}
            alt="Program 3 Icon"
          />
          <p>Web Development</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
