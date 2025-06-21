'use client';

import Image from 'next/image';

export default function PartnersSection() {
  return (
    <section className="footer-animate relative bg-[#2b2b2b] w-full mt-16 lg:mt-24 py-8 md:py-16">
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
            <div className="flex flex-col gap-6 ">
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

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row gap-[287px] items-start">
            <div className="flex flex-row gap-[91px] items-start">
              <div className="w-[186px]">
                <div className="flex flex-col gap-2">
                  <p className="text-white text-lg font-['Avenir_Next'] font-medium tracking-[0.1px]">
                    Powered by:
                  </p>
                  <Image 
                    src="/hyperliquid-logo.svg" 
                    alt="Hyperliquid" 
                    width={186}
                    height={42}
                    className="h-[42px] w-auto"
                  />
                </div>
              </div>
              <div className="w-[235px]">
                <div className="flex flex-col gap-[9px]">
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
            </div>
            <div className="w-[422px]">
              <div className="flex flex-col gap-6 items-end">
                <div className="flex flex-row gap-12 items-center">
                  <Image 
                    src="/hero-logo1.svg" 
                    alt="Partner Logo" 
                    width={137}
                    height={18}
                    className="h-[18px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <Image 
                    src="/hero-logo2.svg" 
                    alt="Partner Logo" 
                    width={101}
                    height={18}
                    className="h-[18px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <Image 
                    src="/hero-logo3.svg" 
                    alt="Partner Logo" 
                    width={87}
                    height={21}
                    className="h-[21px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="flex flex-row gap-[62px] items-end">
                  <Image 
                    src="/hero-logo4.svg" 
                    alt="Partner Logo" 
                    width={99}
                    height={21}
                    className="h-[21px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <Image 
                    src="/hero-logo5.svg" 
                    alt="Partner Logo" 
                    width={110}
                    height={21}
                    className="h-[21px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <Image 
                    src="/hero-logo6.svg" 
                    alt="Partner Logo" 
                    width={70}
                    height={21}
                    className="h-[21px] w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
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