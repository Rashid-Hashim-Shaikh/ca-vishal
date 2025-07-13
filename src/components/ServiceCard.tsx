'use client';

import Image from 'next/image';

interface ServiceCardProps {
  imgURL: string;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ imgURL, title, description, index }: ServiceCardProps) => {
  return (
    <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} gap-6 w-full max-lg:flex-col items-center bg-slate-50 p-6 max-sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300`}>
      <div className="lg:w-2/5 w-full">
        <Image
          src={imgURL}
          alt={title}
          width={564}
          height={300}
          className="w-full h-auto min-h-[200px] max-h-[300px] object-cover rounded-lg border-2 border-slate-100"
        />
      </div>
      <div className="lg:w-3/5 w-full p-4 max-sm:p-2 flex flex-col gap-3">
        <h3 className="text-2xl max-sm:text-xl leading-normal text-coral-red font-semibold font-palanquin">
          {title}
        </h3>
        <p className="font-montserrat text-base md:text-lg max-sm:text-sm leading-relaxed text-slate-gray">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard; 