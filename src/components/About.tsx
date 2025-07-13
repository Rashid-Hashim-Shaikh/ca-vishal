'use client';

import Image from 'next/image';

const statsList = [
  { value: '5+', label: 'Years of Experience' },
  { value: '50+', label: 'Satisfied Clients' },
  { value: '₹10Cr+', label: 'Tax Savings' },
];

const About = () => {
  return (
    <section id="about-us" className="section-padding-top w-full py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/company.jpg"
              alt="About Our Company"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-section-title font-bold mb-6">
              About <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-body-large text-gray-700 mb-8">
              With over 5 years of experience, CA Vishal R Singh & Associates has been providing
              top-notch financial services to businesses and individuals. Our team of experts
              is dedicated to delivering personalized solutions tailored to your specific needs.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {statsList.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-service-title font-bold text-blue-600">{stat.value}</p>
                  <p className="text-body-small text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 