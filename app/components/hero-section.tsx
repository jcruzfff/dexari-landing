'use client';

import Image from 'next/image';

interface HeroSectionProps {
  isBannerVisible: boolean;
}

export default function HeroSection({ isBannerVisible }: HeroSectionProps) {
  return (
    <section className={`relative w-full min-h-screen flex items-center transition-all duration-300 ${isBannerVisible ? 'pt-[24px] lg:pt-[160px] xl:pt-[140px]' : 'pt-[64px] lg:pt-[80px] xl:pt-[100px]'}`}>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-[660px] xl:max-w-none">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-[42px]">
              {/* Text Container */}
              <div className="w-full">
                <div className={`flex flex-col gap-4 md:gap-6 font-['Avenir_Next'] font-medium text-white ${isBannerVisible ? 'pt-24' : 'pt-16'}`}>
                  <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] leading-tight lg:leading-[72px] tracking-[0.1px]">
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-relaxed lg:leading-normal max-w-full lg:max-w-[603px] text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              {/* Join Container */}
              <div className="hero-social flex flex-row gap-3 md:gap-4 items-center">
                <div className="h-5 w-12 sm:h-6 sm:w-16 md:h-8 md:w-20">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 80 32">
                    <circle cx="16" cy="16" r="15.5" fill="#D9D9D9" stroke="white"/>
                    <circle cx="40" cy="16" r="15.5" fill="#D9D9D9" stroke="white"/>
                    <circle cx="64" cy="16" r="15.5" fill="#D9D9D9" stroke="white"/>
                  </svg>
                </div>
                <p className="text-white text-sm sm:text-base md:text-lg font-['Avenir_Next'] font-medium">
                  Join 50K+ people using Dexari
                </p>
              </div>

              {/* Download Container */}
              <div className="hero-downloads flex flex-row gap-3 md:gap-4 lg:gap-[11px] items-center">
                <button className="hover:scale-105 transition-transform duration-200">
                  <Image 
                    src="/googleplay-icon.svg" 
                    alt="Get it on Google Play" 
                    width={162}
                    height={57}
                    className="h-[57px] sm:h-12 lg:h-[53.226px] w-auto"
                  />
                </button>

                <button className="hover:scale-105 transition-transform duration-200">
                  <Image 
                    src="/applestore-icon.svg" 
                    alt="Download on the App Store" 
                    width={163}
                    height={57}
                    className="h-[57px] sm:h-12 lg:h-[53.226px] w-auto"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="flex-shrink-0 w-full xl:w-auto max-w-[432px] xl:max-w-none">
            <div className="bg-[#2b2b2b] rounded-[36px] h-[400px] sm:h-[500px] xl:h-[595px] w-full xl:w-[432px] flex items-center justify-center">
              {/* Placeholder for hero image/animation */}
              <div className="text-white/50 text-center">
                <p>Hero Image/Animation</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 