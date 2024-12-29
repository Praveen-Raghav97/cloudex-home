import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const Feuture = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center flex-col">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center">
          <Button className="border text-primary border-gray-300 bg-transparent py-3 px-6 rounded-3xl mb-10 hover:bg-primary-dark">
            Amazing Product
          </Button>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6 animate-bounce"
            style={{ wordSpacing: '0.2rem' }}
          >
            Build With The Cloud{''}
            <span className="text-secondary">Platform Designed</span> for
           
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-12">
            From secure stack and predictable pricing to support designed for
            growing businesses, DigitalOcean is built to meet the unique needs of
            startups and SMBs.
          </p>
        </div>

        {/* Image Section */}
        <Image
          src="/page.png"
          width={1000}
          height={1000}
          alt="Platform Overview"
          className="rounded-lg w-full max-w-4xl shadow-md"
        />
      </div>
    </section>
  );
};

export default Feuture;
