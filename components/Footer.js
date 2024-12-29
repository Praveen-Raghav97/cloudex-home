// components/Footer.jsx
import Image from 'next/image';
import { Separator } from './ui/separator';
import FooterCard from './FooterCard';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-10">
      <FooterCard />
      <Separator className="my-4 bg-gray-300 font-extrabold h-[2px] w-full max-w-6xl" />
      <footer className="py-8 md:py-12 px-4 md:px-8 lg:px-16 mt-8 w-full">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between text-gray-600 text-sm space-y-8 md:space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h4 className="font-bold text-2xl md:text-3xl mb-2 text-primary">Cloudex</h4>
              <p className="text-base md:text-lg text-gray-700">
                Run all challenging software from any device, anywhere with your own supercomputer on the cloud.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-800">Company</h4>
              <ul className="space-y-1 text-sm md:text-base">
                <li>About Us</li>
                <li>Careers at Virries</li>
                <li>Customer Reviews</li>
                <li>Investor Relations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-800">Products</h4>
              <ul className="space-y-1 text-sm md:text-base">
                <li>Product Overview</li>
                <li>Managed Databases</li>
                <li>Functions</li>
                <li>App Platform</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-800">Solutions</h4>
              <ul className="space-y-1 text-sm md:text-base">
                <li>Databases</li>
                <li>Virtual Machines</li>
                <li>Data Analytics</li>
                <li>AI and Machine Learning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg md:text-xl mb-2 text-gray-800">Contact</h4>
              <ul className="space-y-1 text-sm md:text-base">
                <li>Support</li>
                <li>System Status</li>
                <li>Report Issues</li>
                <li>Share Your Ideas</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="mt-6 mb-4 bg-gray-300 font-extrabold h-[2px] w-full max-w-6xl" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p>&copy; 2024 Cloudex, LLC.</p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Praveen-Raghav97">
              <Image src="/github (1).png" width={28} height={24} alt="icon" />
              </Link>
              <Link href="mailto:rishavthakur9027@gmail.com">
              <Image src="/gmail.png" width={28} height={24} alt="icon" />
              </Link>
              
              <Link href="https://www.linkedin.com/in/praveen-raghav/">
              <Image src="/linkedin.png" width={28} height={24} alt="icon" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-black font-semibold text-lg mt-10 animate-bounce">
              By <span className="text-secondary font-medium ">Praveen Raghav</span>
            </p>
         
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
