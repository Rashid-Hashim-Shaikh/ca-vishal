'use client';

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Image 
                src="/assets/ca-logo.png" 
                alt="CA Vishal Singh & Associates Logo" 
                width={60} 
                height={60} 
                className="mr-4 rounded-lg bg-white p-2"
              />
              <div>
                <span className="font-bold text-service-title block">CA Vishal R Singh</span>
                <span className="text-gray-400 text-body-small">& Associates</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-body-regular">
              Providing comprehensive financial services with integrity, expertise, and 
              personalized attention since 2023.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-body-large mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-body-regular">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-body-regular">Services</a></li>
              <li><a href="#about-us" className="text-gray-400 hover:text-white transition-colors text-body-regular">About Us</a></li>
              <li><a href="#contact-us" className="text-gray-400 hover:text-white transition-colors text-body-regular">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-body-large mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="text-body-regular">Universal Majestic, Jeejabai Bhosale Marg</li>
              <li className="text-body-regular">ACC Nagar, Chedda Nagar</li>
              <li className="text-body-regular">Mumbai, Maharashtra 400043</li>
              <li className="text-body-regular">+91 98765 43210</li>
              <li className="text-body-regular">info@vishalsingh.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p className="text-body-small">© {new Date().getFullYear()} CA Vishal R Singh & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 