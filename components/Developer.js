import Image from 'next/image';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from './ui/button';

const Developer = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center " id='Developer'>
        <Button className="border text-primary border-primary bg-transparent py-3 px-6 rounded-3xl mb-10 hover:bg-primary-dark">
                Developer Team
              </Button>
              
            
      <div className="max-w-6xl md:h-[600px] w-full bg-white shadow-lg  rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side - Developer Image */}
        <div className="w-full p-10 flex items-center justify-center md:p-0 md:w-[40%] h-auto md:h-auto">
          <Image
            src="/developer.png" // Replace with your developer image path
            alt="Developer Image"
           
            objectFit="cover"
            className=" rounded-l-lg hover:animate-pulse cursor-pointer    "
            width={300}
            height={300}
          />
        </div>

        {/* Right Side - Developer Info */}
        <div className="w-full  md:w-1/2 p-4 pt-20">
          <h1 className="text-3xl font-semibold text-gray-800"> <span className='text-secondary'>Praveen.</span> Raghav</h1>
          <p className="mt-4 text-gray-500 text-lg">
            I am a passionate Full Stack Developer with expertise in building scalable web applications using modern technologies like Next.js, Tailwind CSS, and TypeScript. Always eager to learn and contribute to impactful projects.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 w-6 h-6 mr-3" />
              <a href="mailto:your.email@example.com" className="text-gray-700 hover:underline">
                rishavthakur9027@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-green-500 w-6 h-6 mr-3" />
              <a href="tel:+1234567890" className="text-gray-700 hover:underline">
                +1 234 567 890
              </a>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="text-blue-700 w-6 h-6 mr-3" />
              <a
                href="https://linkedin.com/in/praveenraghav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                linkedin.com/in/praveenraghav
              </a>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-gray-800 w-6 h-6 mr-3" />
              <a
                href="https://github.com/praveen-raghav97"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                github.com/praveen-raghav97
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
