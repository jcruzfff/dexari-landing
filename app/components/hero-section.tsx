'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

// interface HeroSectionProps {
//   isBannerVisible: boolean;
// }

export default function HeroSection() {
  // Animation state
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [downloadsVisible, setDownloadsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);

  // Refs
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const downloadsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start animations immediately when component mounts (no scroll needed for hero)
    setTimeout(() => setTitleVisible(true), 200);
    setTimeout(() => setSubtitleVisible(true), 400);
    setTimeout(() => setDownloadsVisible(true), 600);
    setTimeout(() => setImageVisible(true), 500);
    setTimeout(() => setPartnersVisible(true), 800);
  }, []);

  return (
    <section className={`relative w-full min-h-screen flex items-center transition-all duration-300 : 'pt-[64px] lg:pt-[80px] xl:pt-[100px]'}`}>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-[660px] xl:max-w-none mt-28">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-[42px]">
              {/* Text Container */}
              <div className="w-full">
                <div className={`flex flex-col gap-4 md:gap-6 font-['Avenir_Next'] font-medium text-white 'pt-16'}`}>
                  <h1 ref={titleRef} className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[48px] leading-tight lg:leading-[72px] tracking-[0.1px] transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Trade perps onchain. <br /> Anytime. Anywhere.
                  </h1>
                  <p ref={subtitleRef} className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] leading-relaxed lg:leading-normal max-w-full lg:max-w-[603px] text-[#ffffffbd] transition-all duration-700 ease-out ${subtitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Go long or short with leverage, pro charts, and advanced order types — all in a seamless, self-custodial app built for serious traders.
                  </p>
                </div>
              </div>

              {/* Join Container */}
              {/* <div className="hero-social flex flex-row gap-3 md:gap-4 items-center">
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
              </div> */}

              {/* Download Container */}
              <div ref={downloadsRef} className={`flex flex-row gap-3 md:gap-4 lg:gap-[11px] items-center transition-all duration-700 ease-out ${downloadsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* QR Code - Hidden on mobile, visible on larger screens */}
              <div className="hidden md:flex w-[60px] h-[60px] bg-white rounded-md border border-[#dadada] items-center justify-center flex-shrink-0">
                    <Image src="/qr-icon.svg" alt="QR Code" width={60} height={60} />
                  </div>
                  
                  {/* Google Play Store */}
                  <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/googleplay-icon.svg" 
                      alt="Google Play" 
                      width={183}
                      height={64}
                    />
                  </a>
                  
                  {/* App Store */}
                  <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image 
                    src="/applestore-icon.svg" 
                      alt="App Store" 
                      width={184}
                      height={64}
                    />
                  </a>
                </div>
            </div>
          </div>

          {/* Right Hero Image */}
          <div ref={imageRef} className={`flex-shrink-0 w-full xl:w-auto max-w-[442px] xl:max-w-none transition-all duration-700 ease-out ${imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="rounded-t-[36px] h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[595px] w-full flex items-center justify-center pr-[24px]">
              {/* Hero image with proper aspect ratio */}
              <div className="relative w-full h-full max-w-[442px] mx-auto">
                <Image 
                  src="/hero-image1.png" 
                  alt="dexari-hero-image" 
                  width={442}
                  height={644}
                  className="w-full h-full object-contain object-center"
                  priority
                />
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Partners Section - Integrated into Hero */}
        <div ref={partnersRef} className={`mt-0 -mx-4 sm:-mx-8 md:-mx-16 lg:-mx-24 xl:-mx-[120px] bg-[#2b2b2b] py-8 md:py-16 transition-all duration-700 ease-out ${partnersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
            <div className="max-w-[1224px] mx-auto">
            {/* Unified Responsive Layout */}
            {/* Mobile Only: Single unified 2-column grid with all 8 logos (no titles) */}
            <div className="sm:hidden">
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 place-items-center max-w-xs mx-auto">
                {/* Hyperliquid Logo */}
                <div className="w-full flex items-center justify-center h-[37px]">
                  <Image 
                    src="/hyperliquid-logo.svg" 
                    alt="Hyperliquid" 
                    width={186}
                    height={37}
                    className="h-[37px] w-auto"
                  />
                </div>
                {/* Turnkey Logo */}
                <div className="h-5 w-full flex items-center justify-center pt-1 pl-1">
                  <Image 
                    src="/turnkey-logo.svg" 
                    alt="Turnkey" 
                    width={235}
                    height={37}
                    className="h-6 w-auto"
                    quality={100}
                  />
                </div>
                {/* Partner Logo 1 */}
                <div className="h-5 w-full flex items-center justify-center">
                  <Image 
                    src="/hero-logo1.svg" 
                    alt="Partner Logo" 
                    width={137}
                    height={21}
                    className="h-5 w-auto"
                  />
                </div>
                {/* Partner Logo 2 */}
                <div className="h-5 w-full flex items-center justify-center">
                  <Image 
                    src="/hero-logo2.svg" 
                    alt="Partner Logo" 
                    width={101}
                    height={21}
                    className="h-5 w-auto"
                  />
                </div>
                {/* Partner Logo 3 */}
                <div className="h-5 w-full flex items-center justify-center">
                  <Image 
                    src="/hero-logo3.svg" 
                    alt="Partner Logo" 
                    width={87}
                    height={21}
                    className="h-5 w-auto"
                  />
                </div>
                {/* Partner Logo 4 */}
                <div className="h-7 w-full flex items-center justify-center">
                  <Image 
                    src="/hero-logo4.svg" 
                    alt="Partner Logo" 
                    width={99}
                    height={21}
                    className="h-6 w-auto"
                  />
                </div>
                {/* Partner Logo 5 */}
                <div className="h-5 w-full flex items-center justify-center">
                  <Image 
                    src="/hero-logo5.svg" 
                    alt="Partner Logo" 
                    width={110}
                    height={21}
                    className="h-5 w-auto"
                  />
                </div>
                {/* Partner Logo 6 */}
                <div className="h-5 w-full flex items-center justify-center">
                  <Image 
                    src="/hero-logo6.svg" 
                    alt="Partner Logo" 
                    width={70}
                    height={21}
                    className="h-5 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Tablet/Desktop: Original layout with titles and separate sections (2 powered/secured + 3-3 partner rows) */}
            <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1fr_auto] gap-12 lg:gap-12 xl:gap-16 items-start">
              {/* Left Side - Powered by and Secured by */}
              <div className="flex flex-row gap-16 sm:gap-20 md:gap-12 lg:gap-12 items-center lg:items-start justify-center lg:justify-start mx-auto lg:mx-0">
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-3 items-start lg:items-start">
                  <p className="text-white text-base lg:text-lg font-['Avenir_Next'] font-medium tracking-[0.1px]">
                    Powered by:
                  </p>
                  <div className="h-[36px] flex items-center">
                    <Image 
                      src="/hyperliquid-logo.svg" 
                      alt="Hyperliquid" 
                      width={186}
                      height={36}
                      className="h-[36px] w-auto"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-3 items-start lg:items-start">
                  <p className="text-white text-base lg:text-lg font-['Avenir_Next'] font-medium tracking-[0.1px]">
                    Secured by:
                  </p>
                  <div className="h-[37px] flex items-center">
                    <Image 
                      src="/turnkey-logo.svg" 
                      alt="Turnkey" 
                      width={235}
                      height={37}
                      className="h-[37px] w-auto"
                      quality={100}
                    />
                  </div>
                </div>
              </div>
              
              {/* Right Side - Partner Logos */}
              <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-6 items-center lg:items-end xl:items-end">
                <div className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-6 [@media(min-width:1100px)]:gap-8 xl:gap-12 items-center justify-center lg:justify-end">
                  <div className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] flex items-center">
                    <Image 
                      src="/hero-logo1.svg" 
                      alt="Partner Logo" 
                      width={137}
                      height={21}
                      className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] w-auto"
                    />
                  </div>
                  <div className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] flex items-center">
                    <Image 
                      src="/hero-logo2.svg" 
                      alt="Partner Logo" 
                      width={101}
                      height={21}
                      className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] w-auto"
                    />
                  </div>
                  <div className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] flex items-center">
                    <Image 
                      src="/hero-logo3.svg" 
                      alt="Partner Logo" 
                      width={87}
                      height={21}
                      className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] w-auto"
                    />
                  </div>
                </div>
                <div className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-6 [@media(min-width:1100px)]:gap-8 xl:gap-12 items-center justify-center lg:justify-end">
                  <div className="h-7 xs:h-5 sm:h-6 md:h-7 lg:h-[26px] xl:h-[26px] flex items-center">
                    <Image 
                      src="/hero-logo4.svg" 
                      alt="Partner Logo" 
                      width={99}
                      height={22}
                      className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[24px] xl:h-[28px] w-auto"
                    />
                  </div>
                  <div className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] flex items-center">
                    <Image 
                      src="/hero-logo5.svg" 
                      alt="Partner Logo" 
                      width={110}
                      height={21}
                      className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] w-auto"
                    />
                  </div>
                  <div className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] flex items-center">
                    <Image 
                      src="/hero-logo6.svg" 
                      alt="Partner Logo" 
                      width={70}
                      height={21}
                      className="h-4 xs:h-5 sm:h-6 md:h-7 lg:h-[21px] xl:h-[23px] w-auto"
                    />
                  </div>
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