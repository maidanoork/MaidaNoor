"use client";

import React, { useState } from 'react';
import Image from 'next/image';

function Projects() {
  const images = [
    { src: '/project-1.png', link: 'https://canopus-consulting.com' },
    { src: '/project-2.png', link: 'https://www.sceptrum-consulting.com' },
    { src: '/project-3.png', link: 'https://www.imonkeyss.com' },
    { src: '/project-4.png', link: 'https://www.cryptowhitepapersonline.com/' },
    // Add more images and links as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next'); // To track the direction of the transition

  const nextImage = () => {
    
    if (isAnimating) return;
    setDirection('next');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (isAnimating) return;
    setDirection('prev');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className='pl-[5%] pr-[5%]' id='projects'>
      <div className='mx-auto px-20 my-20'>
        <div className='flex justify-between items-center'>
          {/* Back Button with Circular Background */}
          <div
            className='p-4 bg-black rounded-full cursor-pointer '
            onClick={prevImage}
          >
            <Image
              src="/back-icon.png"
              width={30}
              height={30}
              alt="Back Button"
            />
          </div>

          {/* Image Carousel showing 2 images */}
          <div className='flex justify-center items-center overflow-hidden'>
            <div
              className={`grid grid-cols-2 gap-8 transition-transform duration-1000 ease-in-out transform ${
                isAnimating ? (direction === 'next' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'
              }`}
            >
              <a href={images[currentIndex].link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={images[currentIndex].src}
                  width={300}
                  height={200}
                  alt="Project Image"
                  className={`rounded-lg cursor-pointer transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleAnimationEnd}
                />
              </a>
              <a href={images[(currentIndex + 1) % images.length].link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={images[(currentIndex + 1) % images.length].src}
                  width={300}
                  height={200}
                  alt="Project Image"
                  className={`rounded-lg cursor-pointer transition-opacity duration-500 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
                  onLoad={handleAnimationEnd}
                />
              </a>
            </div>
          </div>

          {/* Next Button with Circular Background */}
          <div
            className='p-4 bg-black rounded-full cursor-pointer'
            onClick={nextImage}
          >
            <Image
              src="/next-icon.png"
              width={30}
              height={30}
              alt="Next Button"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
