"use client"
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export function Hero() {

  const [isOpen, setIsOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="text-center py-20 px-4 sm:py-32 lg:py-40 bg-primary-light flex flex-col items-center animate-fadeIn">
      <div className="text-center flex items-center justify-center w-full">
        <h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-black max-w-[90%] sm:max-w-[700px] lg:max-w-[900px]" 
          style={{ wordSpacing: '0.5rem' }}
        >
          Remote <span className="text-secondary">Computer</span> Anywhere and Anytime
        </h1>
      </div>

      <p className="text-base sm:text-lg mt-4 text-gray-600 max-w-[90%] sm:max-w-[600px]">
        Run optimized developer cloud. Use all software supports it.
      </p>
      <p className="text-base sm:text-lg text-gray-600 max-w-[90%] sm:max-w-[600px]">
        From anywhere and with any device.
      </p>

      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Link href="https://cloudex-eight.vercel.app/">
            <Button className="bg-secondary text-white py-3 px-6 rounded-3xl">
              Create Your Cloude
            </Button>
            </Link>
        <Button className="border border-secondary bg-transparent py-3 px-6 rounded-3xl text-sm sm:text-base" onClick={openModal}>
          See Video Demo
        </Button>
         {/* Modal for Video */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className=" p-10 rounded-xl max-w-4xl w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-secondary text-2xl font-semibold  p-2 rounded-md"
              onClick={closeModal}
            >
              X
            </button>

            {/* Video Player */}
            <div className="relative w-full">
              <video className="w-full h-[500px] rounded-lg" controls>
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}
