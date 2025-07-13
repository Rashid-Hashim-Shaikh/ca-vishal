'use client';

import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="section-padding-top w-full max-container">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-8 lg:pr-10">
          <div className="mb-8">
            <p className="text-blue-600 font-semibold text-body-large mb-3 tracking-wide uppercase">Welcome to</p>
            <h2 className="text-section-title font-bold text-gray-900 mb-2 leading-tight">
              CA Vishal R Singh
            </h2>
            <h2 className="text-section-title font-bold text-blue-600 mb-4 leading-tight">
              & Associates
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Your Trusted Financial <br /> 
              <span className="text-blue-600">Partner</span> for Success
            </h1>
            <p className="text-body-large text-gray-600 lg:pr-8 leading-relaxed">
              Expert chartered accountancy services including tax planning, GST compliance, 
              financial modeling, and wealth management solutions tailored for your business growth.
            </p>
          </div>
          
          <div className="pt-6">
            <Button
              label="Get an Appointment"
              iconURL="/assets/arrow-right.svg"
              backgroundColor="bg-blue-600"
              onClick={() => {
                document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
            <p className="text-body-small text-gray-500 mt-3">
              Free consultation • Expert advice • Trusted since 2023
            </p>
          </div>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/assets/hero-image.svg"
            alt="CA Vishal Singh & Associates - Financial Services"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 