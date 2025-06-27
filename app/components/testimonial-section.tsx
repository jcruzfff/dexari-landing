'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Accessing Hyperliquid directly from my phone means I can monitor positions and execute while out and about. It has been a game-changer for my portfolio and for my peace of mind",
    name: "@biggiesmac",
    title: "Day Trader",
    image: "/biggiemac.jpg"
  },
  // Add more testimonials here as needed
];

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="relative w-full py-16 lg:py-36 bg-[#202022]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row items-center justify-center gap-[97px]">
            {/* Left Content */}
            <div className="flex-1 max-w-[828px]">
              <div className="flex flex-col gap-7">
                {/* Quotes Icon */}
                <div className="w-[55px] h-12">
                  <Image
                    src="/quote-icon.svg"
                    alt="Quote"
                    width={55}
                    height={48}
                    className="w-full h-full"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col gap-16">
                  {/* Testimonial Quote */}
                  <blockquote className="text-[#ffffff] text-[32px] font-['Avenir_Next'] leading-[1.3] text-left">
                    {currentTestimonialData.quote}
                  </blockquote>

                  {/* Navigation Arrows */}
                  <div className="flex flex-row gap-[22px] items-center">
                    <button
                      onClick={goToPrevious}
                      className="bg-[#343434] rounded-full w-[68px] h-[68px] flex items-center justify-center transition-opacity hover:opacity-80"
                      aria-label="Previous testimonial"
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        className="opacity-40"
                      >
                        <path
                          d="M28.3332 15.5833H11.0924L19.0115 7.66408L16.9999 5.66658L5.66653 16.9999L16.9999 28.3333L18.9974 26.3358L11.0924 18.4166H28.3332V15.5833Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="bg-[#343434] rounded-full w-[68px] h-[68px] flex items-center justify-center transition-opacity hover:opacity-80"
                      aria-label="Next testimonial"
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        className="opacity-40"
                      >
                        <path
                          d="M16.9995 5.66634L15.002 7.66384L22.907 15.583H5.66615V18.4163H22.907L15.002 26.3355L16.9995 28.333L28.3328 16.9997L16.9995 5.66634Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-[426px] w-px">
              <svg
                width="2"
                height="426"
                viewBox="0 0 2 426"
                fill="none"
                className="w-full h-full"
              >
                <path
                  d="M1 0V226"
                  stroke="#5C5C5C"
                />
              </svg>
            </div>

            {/* Right Content - User Profile */}
            <div className="flex flex-col items-start gap-[22px] w-[201px]">
              {/* Profile Picture */}
              <div className="bg-[#2b2b2b] rounded-full w-[118px] h-[118px] flex items-center justify-center overflow-hidden">
                <Image
                  src={currentTestimonialData.image}
                  alt={currentTestimonialData.name}
                  width={118}
                  height={118}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* User Info */}
              <div className="text-left">
                <p className="text-[#ffffff] text-[21.37px] font-['Avenir_Next'] font-semibold mb-2 leading-normal">
                  {currentTestimonialData.title}
                </p>
                <p className="text-[#c3c3c3] text-[21.37px] font-['Avenir_Next'] leading-normal">
                  {currentTestimonialData.name}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden max-w-[394px] mx-auto">
            <div className="flex flex-col gap-7">
              {/* Quotes Icon */}
              <div className="w-[55px] h-12">
                <Image
                  src="/quote-icon.svg"
                  alt="Quote"
                  width={55}
                  height={48}
                  className="w-full h-full"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col gap-16">
                {/* Testimonial Quote */}
                <blockquote className="text-[#ffffff] text-[24px] font-['Avenir_Next'] leading-[1.3] text-left">
                  {currentTestimonialData.quote}
                </blockquote>

                {/* Bottom Section */}
                <div className="flex flex-col gap-6 items-center">
                  {/* User Profile */}
                  <div className="flex flex-col gap-[22px] items-center">
                    {/* Profile Picture */}
                    <div className="bg-[#2b2b2b] rounded-full w-[104px] h-[104px] flex items-center justify-center overflow-hidden">
                      <Image
                        src={currentTestimonialData.image}
                        alt={currentTestimonialData.name}
                        width={104}
                        height={104}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* User Info */}
                    <div className="text-center">
                      <p className="text-[#ffffff] text-[21.37px] font-['Avenir_Next'] font-semibold mb-2 leading-normal">
                        {currentTestimonialData.title}
                      </p>
                      <p className="text-[#c3c3c3] text-[21.37px] font-['Avenir_Next'] leading-normal">
                        {currentTestimonialData.name}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex flex-row gap-[15.529px] items-center justify-center">
                    <button
                      onClick={goToPrevious}
                      className="bg-[#343434] rounded-3xl w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-80"
                      aria-label="Previous testimonial"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="opacity-40"
                      >
                        <path
                          d="M19.9997 10.9999H7.82974L13.4197 5.40988L11.9997 3.99989L3.99974 11.9999L11.9997 19.9999L13.4097 18.5899L7.82974 12.9999H19.9997V10.9999Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="bg-[#343434] rounded-3xl w-12 h-12 flex items-center justify-center transition-opacity hover:opacity-80"
                      aria-label="Next testimonial"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="opacity-40"
                      >
                        <path
                          d="M11.9997 3.99971L10.5897 5.40971L16.1697 10.9997H3.99966V12.9997H16.1697L10.5897 18.5897L11.9997 19.9997L19.9997 11.9997L11.9997 3.99971Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 