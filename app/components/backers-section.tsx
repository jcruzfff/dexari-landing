'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const backers = [
  '@Izebel_ETH',
  'SmartestMoney_',
  'DegenTraveler',
  'DeFiDaddy_',
  '0xKrishB',
  '@BlurCrypto',
  '@Garrettz',
  '@HyperRxBT',
  '@CryptowithLeo',
  '@ORI_WAGMI',
  '@Will__Price',
  '@MK4_Lul',
  '@0xCarlisle',
  '@SenPaiDeFi',
  '@0xTangle'
];

export default function BackersSection() {
  // Animation state
  const [headerVisible, setHeaderVisible] = useState(false);
  const [firmsVisible, setFirmsVisible] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(false);
  const [mobileRow1Visible, setMobileRow1Visible] = useState(false);
  const [mobileRow2Visible, setMobileRow2Visible] = useState(false);
  const [mobileRow3Visible, setMobileRow3Visible] = useState(false);
  const [mobileRow4Visible, setMobileRow4Visible] = useState(false);
  const [mobileRow5Visible, setMobileRow5Visible] = useState(false);

  // Refs for intersection observer
  const headerRef = useRef<HTMLDivElement>(null);
  const firmsRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const mobileLayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === firmsRef.current) setFirmsVisible(true);
            if (entry.target === pillsRef.current) setPillsVisible(true);
            if (entry.target === mobileLayoutRef.current) {
              // Trigger mobile rows with delays
              setTimeout(() => setMobileRow1Visible(true), 100);
              setTimeout(() => setMobileRow2Visible(true), 200);
              setTimeout(() => setMobileRow3Visible(true), 300);
              setTimeout(() => setMobileRow4Visible(true), 400);
              setTimeout(() => setMobileRow5Visible(true), 500);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (firmsRef.current) observer.observe(firmsRef.current);
    if (pillsRef.current) observer.observe(pillsRef.current);
    if (mobileLayoutRef.current) observer.observe(mobileLayoutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-24 mb-12 lg:mb-24 mt-6  bg-[#202022]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className={`mb-12 lg:mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-white text-lg font-['Avenir_Next'] font-medium mb-8 tracking-[0.1px]">
              Backed by:
            </h2>
            
            {/* Investment Firms */}
            <div ref={firmsRef} className={`mb-8 transition-all duration-700 ease-out ${firmsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: firmsVisible ? '0.2s' : '0s' }}>
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex flex-wrap items-center gap-8 lg:gap-11 mb-6">
                  {/* LED - Prelude */}
                  <div className="flex flex-col gap-2.5">
                 
                    <div className="h-[39px] w-[222px] flex items-center justify-center">
                      <Image
                        src="/prelude-icon.svg"
                        alt="Prelude"
                        width={222}
                        height={39}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* CO-LED - Lemniscap */}
                  <div className="flex flex-col gap-2.5">
                   
                    <div className="h-[45px] w-[226px] flex items-center justify-center">
                      <Image
                        src="/lemniscap-icon.svg"
                        alt="Lemniscap"
                        width={226}
                        height={45}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Additional Investors */}
                <div className="flex flex-wrap items-center gap-8 lg:gap-10">
                  <div className="h-[42px] w-[209px] flex items-center justify-center">
                    <Image
                      src="/infinite-icon.svg"
                      alt="Infinite Field"
                      width={209}
                      height={42}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="h-[42px] w-[110px] flex items-center justify-center">
                    <Image
                      src="/kiln-icon.svg"
                      alt="Kiln"
                      width={110}
                      height={42}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="h-[42px] w-[263px] flex items-center justify-center">
                    <Image
                      src="/binance-icon.svg"
                      alt="Binance.US"
                      width={263}
                      height={42}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden mb-18">
                {/* LED - Prelude */}
                <div className="mb-6">
                
                  <div className="h-[39px] w-[222px] flex items-center justify-center">
                    <Image
                      src="/prelude-icon.svg"
                      alt="Prelude"
                      width={222}
                      height={39}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                {/* CO-LED - Lemniscap */}
                <div className="mb-6">
               
                  <div className="h-[45px] w-[226px] flex items-center justify-center">
                    <Image
                      src="/lemniscap-icon.svg"
                      alt="Lemniscap"
                      width={226}
                      height={45}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Additional Investors */}
                <div className="mb-6">
                
                  <div className="flex items-center gap-2 w-full">
                    <div className="h-[24px] flex-1 flex items-center justify-center min-w-0">
                      <Image
                        src="/infinite-icon.svg"
                        alt="Infinite Field"
                        width={120}
                        height={24}
                        className="max-w-full h-full object-contain"
                      />
                    </div>
                    <div className="h-[24px] flex-1 flex items-center justify-center min-w-0">
                      <Image
                        src="/kiln-icon.svg"
                        alt="Kiln"
                        width={63}
                        height={24}
                        className="max-w-full h-full object-contain"
                      />
                    </div>
                    <div className="h-[25px] flex-1 flex items-center justify-center min-w-0">
                      <Image
                        src="/binance-icon.svg"
                        alt="Binance.US"
                        width={156}
                        height={25}
                        className="max-w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Backers */}
          
          {/* Desktop & Tablet Layout (480px and up) */}
          <div ref={pillsRef} className={`hidden min-[480px]:flex min-[480px]:flex-wrap min-[480px]:gap-4 transition-all duration-700 ease-out ${pillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: pillsVisible ? '0.4s' : '0s' }}>
            {backers.map((backer, index) => (
              <div
                key={index}
                className={`bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10 transition-all duration-500 ease-out ${pillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                style={{ transitionDelay: pillsVisible ? `${0.6 + index * 0.05}s` : '0s' }}
              >
                {/* Avatar */}
                <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
                
                {/* Name */}
                <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                  {backer}
                </span>
              </div>
            ))}
            
            {/* More coming soon */}
            <div className={`bg-[#373737] rounded-[21px] flex items-center justify-center px-4 py-[5.5px] h-10 w-[181px] transition-all duration-500 ease-out ${pillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`} style={{ transitionDelay: pillsVisible ? `${0.6 + backers.length * 0.05}s` : '0s' }}>
              <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                more coming soon..
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Staggered effect only below 480px */}
      <div ref={mobileLayoutRef} className="max-[479px]:block hidden relative overflow-hidden w-full">
        {/* Row 1 - Centered */}
        <div className={`flex gap-[10px] justify-center mb-[10px] px-4 transition-all duration-500 ease-out ${mobileRow1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {backers.slice(0, 3).map((backer, index) => (
            <div
              key={index}
              className="bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10"
            >
              <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
              <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                {backer}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - Left offset extending beyond left edge */}
        <div className={`flex gap-[10px] mb-[10px] relative transition-all duration-500 ease-out ${mobileRow2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ marginLeft: '-20px' }}>
          {backers.slice(3, 6).map((backer, index) => (
            <div
              key={index + 3}
              className="bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10"
            >
              <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
              <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                {backer}
              </span>
            </div>
          ))}
        </div>

        {/* Row 3 - Right offset extending beyond right edge */}
        <div className={`flex gap-[10px] justify-end mb-[10px] relative transition-all duration-500 ease-out ${mobileRow3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ marginRight: '-20px' }}>
          {backers.slice(6, 9).map((backer, index) => (
            <div
              key={index + 6}
              className="bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10"
            >
              <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
              <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                {backer}
              </span>
            </div>
          ))}
        </div>

        {/* Row 4 - Left offset extending beyond left edge */}
        <div className={`flex gap-[10px] mb-[10px] relative transition-all duration-500 ease-out ${mobileRow4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ marginLeft: '-30px' }}>
          {backers.slice(9, 12).map((backer, index) => (
            <div
              key={index + 9}
              className="bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10"
            >
              <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
              <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                {backer}
              </span>
            </div>
          ))}
        </div>

        {/* Row 5 - Centered with remaining + more coming soon */}
        <div className={`flex gap-[10px] justify-center px-4 transition-all duration-500 ease-out ${mobileRow5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {backers.slice(12, 14).map((backer, index) => (
            <div
              key={index + 12}
              className="bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10"
            >
              <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
              <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                {backer}
              </span>
            </div>
          ))}
          <div className="bg-[#373737] rounded-[21px] flex items-center justify-center px-4 py-[5.5px] h-10 w-[181px]">
            <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
              more coming soon..
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 