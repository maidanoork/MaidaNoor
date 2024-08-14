"use client";
import React, { useState } from 'react';
import Image from 'next/image';

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2739dc4-ce22-440f-bed5-dcfbf05caf69");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Email sent successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("Network error. Please try again later.");
    }
  };

  return (
    <div className='flex flex-col md:flex-row justify-between pl-[5%] pr-[5%] mb-10 max-w-[90%] mx-auto' id='contact'>
      <div className='basis-[48%] text-[#676767]'>
        <h1 className='flex text-[20px] font-bold mb-[20px] items-center text-[#000F38]'>
          Send us a Message
          <Image
            className='ml-[10px]'
            src="/msg-icon.png"
            width={30}
            height={30}
            alt="Message Icon"
          />
        </h1>
        <p className='max-w-[450px] text-[14px] mb-[20px]'>
          Feel free to reach out through the contact form or find our
          contact information below. Your feedback, questions, and
          suggestions are important to us as we strive to provide
          exceptional service to our university community.
        </p>
        <ul>
          <li className='flex items-center my-[20px]'>
            <Image
              className='mr-[10px]'
              src="/phone-icon.png"
              width={30}
              height={30}
              alt="Phone Icon"
            />
            03039682442
          </li>
          <li className='flex items-center my-[20px]'>
            <Image
              className='mr-[10px]'
              src="/mail-icon.png"
              width={30}
              height={30}
              alt="Mail Icon"
            />
            maidanoor200302@gmail.com
          </li>
          <li className='flex items-center my-[20px]'>
            <Image
              className='mr-[10px]'
              src="/location-icon.png"
              width={30}
              height={30}
              alt="Location Icon"
            />
            Abbottabad, Pakistan
          </li>
        </ul>
      </div>
      <div className='basis-[48%]'>
        <h2 className='text-[20px] font-bold mb-[15px] text-[#000F38]'>Contact Form</h2>
       

        <form onSubmit={onSubmit}>
          <div className='mb-[15px]'>
            <label className='block mb-[5px]' htmlFor="name">Name</label>
            <input className='w-full p-[10px] border border-[#ccc]' type="text" id="name" name="name" required />
          </div>
          <div className='mb-[15px]'>
            <label className='block mb-[5px]' htmlFor="email">Email</label>
            <input className='w-full p-[10px] border border-[#ccc]' type="email" id="email" name="email" required />
          </div>
          <div className='mb-[15px]'>
            <label className='block mb-[5px]' htmlFor="message">Message</label>
            <textarea className='w-full p-[10px] border border-[#ccc]' id="message" name="message" rows="4" required></textarea>
          </div>
          <button className='p-[10px] bg-[#000F38] text-white rounded-full' type="submit">Send Message</button>
        </form>


        {result && <p className='mt-[15px] text-center text-gray-700'>{result}</p>}
      </div>
    </div>
  );
}

export default Contact;
