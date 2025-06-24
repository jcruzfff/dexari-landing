'use client';

import Image from 'next/image';

export default function PartnersSection() {
  return (
    <section className="relative bg-[#2b2b2b] w-full mt-24 mb-12 lg:mb-16 lg:mt-0 py-8 md:py-16">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Powered by and Secured by - Mobile */}
            <div className="flex flex-row gap-8 mb-8 items-start">
              <div className="flex flex-col gap-2 items-start">
                <p className="text-white text-base font-['Avenir_Next'] font-medium tracking-[0.1px]">
                  Powered by:
                </p>
                <Image 
                  src="/hyperliquid-logo.svg" 
                  alt="Hyperliquid" 
                  width={186}
                  height={42}
                  className="h-7 w-auto"
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <p className="text-white text-base font-['Avenir_Next'] font-medium tracking-[0.1px]">
                  Secured by:
                </p>
                <Image 
                  src="/turnkey-logo.svg" 
                  alt="Turnkey" 
                  width={235}
                  height={37}
                  className="h-7 w-auto"
                />
              </div>
            </div>
            
            {/* Partner Logos - Mobile Grid */}
            <div className="flex flex-col gap-6">
              {/* First Row */}
              <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
                <Image 
                  src="/hero-logo1.svg" 
                  alt="Partner Logo" 
                  width={137}
                  height={18}
                  className="h-4 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <Image 
                  src="/hero-logo2.svg" 
                  alt="Partner Logo" 
                  width={101}
                  height={18}
                  className="h-4 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <Image 
                  src="/hero-logo3.svg" 
                  alt="Partner Logo" 
                  width={87}
                  height={21}
                  className="h-4 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              {/* Second Row */}
              <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
                <Image 
                  src="/hero-logo4.svg" 
                  alt="Partner Logo" 
                  width={99}
                  height={21}
                  className="h-4 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <Image 
                  src="/hero-logo5.svg" 
                  alt="Partner Logo" 
                  width={110}
                  height={21}
                  className="h-4 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
                <Image 
                  src="/hero-logo6.svg" 
                  alt="Partner Logo" 
                  width={70}
                  height={21}
                  className="h-4 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>

          {/* Desktop Layout - Responsive Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-[1fr_auto] gap-8 xl:gap-16 items-start">
            {/* Left Side - Powered by and Secured by */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="flex flex-col gap-2">
                <p className="text-white text-lg font-['Avenir_Next'] font-medium tracking-[0.1px]">
                  Powered by:
                </p>
                <Image 
                  src="/hyperliquid-logo.svg" 
                  alt="Hyperliquid" 
                  width={186}
                  height={42}
                  className="h-[36px] w-auto"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-lg font-['Avenir_Next'] font-medium tracking-[0.1px]">
                  Secured by:
                </p>
                <Image 
                  src="/turnkey-logo.svg" 
                  alt="Turnkey" 
                  width={235}
                  height={37}
                  className="h-[37px] w-auto"
                />
              </div>
            </div>
            
            {/* Right Side - Partner Logos */}
            <div className="flex flex-col gap-6 lg:items-end xl:items-end">
              <div className="flex flex-wrap gap-6 lg:gap-8 xl:gap-12 items-center justify-center lg:justify-end">
                <div className="h-[21px] xl:h-[23px] flex items-center">
                  <Image 
                    src="/hero-logo1.svg" 
                    alt="Partner Logo" 
                    width={137}
                    height={21}
                    className="h-[21px]  xl:h-[23px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="h-[21px]  xl:h-[23px] flex items-center">
                  <Image 
                    src="/hero-logo2.svg" 
                    alt="Partner Logo" 
                    width={101}
                    height={21}
                    className="h-[21px]  xl:h-[23px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="h-[21px]  xl:h-[23px] flex items-center">
                  <Image 
                    src="/hero-logo3.svg" 
                    alt="Partner Logo" 
                    width={87}
                    height={21}
                    className="h-[21px] xl:h-[23px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-6 lg:gap-8 xl:gap-12 items-center justify-center lg:justify-end">
                <div className="h-[21px]  xl:h-[23px] flex items-center">
                  <Image 
                    src="/hero-logo4.svg" 
                    alt="Partner Logo" 
                    width={99}
                    height={21}
                    className="h-[21px]  xl:h-[23px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="h-[21px]  xl:h-[23px] flex items-center">
                  <Image 
                    src="/hero-logo5.svg" 
                    alt="Partner Logo" 
                    width={110}
                    height={21}
                    className="h-[21px]  xl:h-[23px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="h-[21px]  xl:h-[23px] flex items-center">
                  <Image 
                    src="/hero-logo6.svg" 
                    alt="Partner Logo" 
                    width={70}
                    height={21}
                    className="h-[21px]  xl:h-[23px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 