"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div
        className={`flex w-full text-white py-1 fixed top-0 left-0 items-center justify-between z-[100] mx-0 my-0 text-base pl-[5%] pr-[5%] ${
          sticky ? 'bg-black transition duration-500' : ''
        }`}
      >
        <Image src="/maida.png" width={120} height={100} alt="logo" />
        <div className="lg:hidden cursor-pointer" onClick={handleMenuToggle}>
          {/* Hamburger icon */}
          <Image
            src="/menu-icon.png"
            width={20}
            height={10}
            alt="logo"
          />
        </div>
        <ul
          className={`flex items-center gap-10 cursor-pointer`}
        >
          <li className="py-2 px-5 lg:py-0 lg:px-0">
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-2 px-5 lg:py-0 lg:px-0">
            <Link to="skills" smooth={true} offset={-260} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-2 px-5 lg:py-0 lg:px-0">
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About
            </Link>
          </li>
          <li className="py-2 px-5 lg:py-0 lg:px-0">
            <Link to="achivements" smooth={true} offset={-260} duration={500}>
              Certificates
            </Link>
          </li>
          <li className="py-2 px-5 lg:py-0 lg:px-0">
            <Link to="projects" smooth={true} offset={-260} duration={500}>
              Projects
            </Link>
          </li>
          <li className="py-2 px-5 lg:py-0 lg:px-0">
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              className="bg-white text-gray-800 py-3 px-6 rounded-full cursor-pointer border-0 outline-none"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Media query styles */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .lg\\:hidden {
            display: block;
          }
        }

        @media (max-width: 1024px) {
          nav ul {
            display: ${menuOpen ? 'block' : 'none'};
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: black;
            padding: 0;
          }

          nav ul li {
            text-align: center;
            padding: 10px 0;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
