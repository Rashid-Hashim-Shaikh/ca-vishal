'use client';

import Image from 'next/image';

const services = [
  {
    title: "GST Returns & Consultation",
    imgURL: "/assets/gst.jpg",
    description: "Navigate the complexities of GST (Goods and Services Tax) seamlessly with our expert GST returns filing and consultation services. Our team of GST specialists provides comprehensive support, from GST registration and return filing to compliance advisory and representation. Whether you're a small business or a large corporation, we tailor our services to meet your specific GST requirements and ensure compliance with regulatory guidelines. Trust us to handle your GST matters efficiently, allowing you to focus on growing your business.",
  },
  {
    title: "Tax Planning & Advisory",
    imgURL: "/assets/tax1.jpg",
    description: "Navigate the complexities of the tax landscape with confidence and ease with our specialized tax planning and advisory services. Our team of seasoned tax professionals is dedicated to minimising your tax liabilities while maximising your returns. From proactive tax planning strategies to expert advisory services, we provide comprehensive support tailored to your unique financial situation and goals. With our guidance, you can optimise your tax efficiency, mitigate risks, and achieve long-term financial success. Trust us to be your strategic partner in tax planning and advisory.",
  },
  {
    title: "Financial Modelling",
    imgURL: "/assets/finance.jpg",
    description: "Unlock the potential of your financial future with our comprehensive financial modelling services. Our team of experts utilizes advanced techniques and industry-leading software to develop accurate and insightful financial models tailored to your specific needs. Whether you're analyzing investment opportunities, planning for growth, or assessing risk, our models provide the clarity and precision you need to make informed decisions with confidence. Partner with us to optimize your financial strategy and achieve your goals.",
  },
  {
    title: "TDS & TCS Compliance",
    imgURL: "/assets/tds.jpg",
    description: "Stay compliant with TDS (Tax Deducted at Source) and TCS (Tax Collected at Source) regulations effortlessly with our comprehensive compliance services. Our team of experts keeps you up-to-date with the latest regulatory changes and ensures timely and accurate compliance with TDS and TCS requirements. From TDS deductions and filings to TCS collections and remittances, we handle all aspects of compliance, allowing you to focus on your core business activities. Partner with us to simplify TDS and TCS compliance and avoid penalties and regulatory hassles.",
  },
  {
    title: "Company & Firm Incorporation",
    imgURL: "/assets/company.jpg",
    description: "Streamline the process of company and firm incorporation with our expert guidance and support. Our team of professionals specializes in company formation services, guiding you through every step of the incorporation process with ease. From choosing the right business structure to completing necessary documentation and compliance requirements, we ensure a smooth and efficient incorporation process. With our expertise and attention to detail, you can establish your company or firm with confidence and start your business journey on the right foot.",
  },
  {
    title: "Wealth Management",
    imgURL: "/assets/wealth.jpg",
    description: "Achieve your financial aspirations and secure your future with our personalized wealth management solutions. Our experienced wealth management advisors work closely with you to understand your goals, assess your risk tolerance, and develop a customized wealth management strategy. From investment management to retirement planning and estate planning, we provide comprehensive services designed to optimize your financial well-being. With our expertise and personalized approach, you can navigate market fluctuations with confidence and achieve lasting financial success.",
  }
];

const Services = () => {
  return (
    <section id="services" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 items-center">
        <h2 className="text-section-title font-bold">
          Our <span className="text-coral-red">Services</span>
        </h2>
      </div>
      <div className="mt-16 flex flex-col sm:gap-6 gap-14">
        {services.map((service, index) => (
          <div 
            key={service.title} 
            className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} gap-3 w-full max-sm:w-full max-sm:flex-col items-center`}
          >
            <Image
              src={service.imgURL}
              alt={service.title}
              width={564}
              height={300}
              className="w-[100%] h-[300px] max-w-[564px] border-2 aspect-square rounded-lg shadow-lg max-sm:h-auto object-cover"
            />
            <div className="p-4 flex-1">
              <h3 className="mt-2 text-service-title text-coral-red font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-body-large">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services; 