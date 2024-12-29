import React from 'react';
import { Button } from './ui/button';

const About = () => {
  return (
    <section className="py-16 bg-primary-light about">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="max-w-3xl mx-auto text-center">
          <Button className="border text-primary border-primary bg-transparent py-3 px-6 rounded-3xl mb-8 hover:bg-primary-dark">
            Why Cloudex?
          </Button>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mb-6 animate-bounce"
            style={{ wordSpacing: '0.5rem' }}
          >
            More Capability. <span className="text-secondary">Less Complexity.</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            From secure stack and predictable pricing to support designed for growing businesses, DigitalOcean is built
            to meet the unique needs of startups and SMBs.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid p-20 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white h-[320px]  cursor-pointer rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Secure Your Cloud Data</h3>
            <p className="text-gray-600 mt-4">
              Gain Multi-layered Protection Against Risk From Malware And Zero-Day Attacks.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white h-[320px]cursor-pointer rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 19.125h12a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-12a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Speed Up Onboarding</h3>
            <p className="text-gray-600 mt-4">
              Get New Agents And Terms Up To Speed Quickly With AI Playbooks And Accelerate Agent Assist.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white h-[320px]  cursor-pointer rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center gap-4 mb-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-purple-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 6" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900">Build, Scale, and Govern AI</h3>
            <p className="text-gray-600 mt-4">
              Your Business Manage AI Data, Act Accelerate Responsible AI Workloads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
