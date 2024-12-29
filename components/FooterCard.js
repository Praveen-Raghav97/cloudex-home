import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';


const FooterCard = () => {
  return (
    <div className="w-full max-w-6xl h-auto rounded-xl my-10 bg-white py-10 px-6 md:py-20 md:px-12 lg:px-20 shadow-lg hover:animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Start Building Today
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
            Sign up now and you'll be up and running on Virries in just minutes.
          </p>
          <Link href="https://cloudex-eight.vercel.app/">
            <Button className="bg-secondary text-white  py-3 px-6 rounded-3xl">
            Sign Up and  Get Started
            </Button>
            </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0">
          <Image
            src="/icon.png" // Replace with your image path
            alt="Cloud Image"
            width={300} // Adjust as needed
            height={280} // Adjust as needed
            className="mx-auto h-[200px] md:h-[280px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
