'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const backers = [
  { name: "Prelude", url: "https://x.com/preludexyz", image: "/backers/prelude.png" },
  { name: "Lemniscap", url: "https://x.com/Lemniscap" , image: "/backers/lemniscap.png" },
  { name: "Binance.US", url: "https://x.com/BinanceUS", image: "/backers/binance.jpg" },
  { name: "Infinite Field", url: "https://x.com/infinitefieldx" , image: "/backers/infinitefield.png" },
  { name: "Kiln", url: "https://x.com/Kiln_finance" , image: "/backers/kiln.png" },
  { name: "Jez", url: "https://x.com/izebel_eth" , image: "/backers/jez.png" },
  { name: "Will Price", url: "https://x.com/will__price" , image: "/backers/willprice.png" },
  { name: "Blurr", url: "https://x.com/blurr" , image: "/backers/blurr.png" },
  { name: "SmartestMoney", url: "https://x.com/smartestmoney_" , image: "/backers/smartestmoney.png" },
  { name: "DegenTraveler.hl", url: "https://x.com/degentraveler" , image: "/backers/degentraveler.png" },
  { name: "DeFiDaddy", url: "https://x.com/DeFiDaddy_" , image: "/backers/defidaddy.png" },
  { name: "CryptoWithLeo", url: "https://x.com/CryptoWithLeo" , image: "/backers/cryptowithleo.png" },
  { name: "DeFiSenpai", url: "https://x.com/SenpaiDefi" , image: "/backers/defisenpai.png" },
  { name: "0xCarlisle", url: "https://x.com/0xcarisle" , image: "/backers/0xcarlisle.png" },
  { name: "Tangle.hl", url: "https://x.com/0xTangle" , image: "/backers/tangle.png" },
  { name: "ORI.hl", url: "https://x.com/ori_wagmi" , image: "/backers/ori.png" }, 
  { name: "HypurrXBT", url: "https://x.com/HypurrXBT" , image: "/backers/hypurrxbt.png" }, 
  { name: "MK4", url: "https://x.com/mk4_lul" , image: "/backers/mk4.png" },  
  { name: "Garrettz", url: "https://x.com/GarrettZ" , image: "/backers/garrettz.png" },
  { name: "Krish", url: "https://x.com/0xkrishb" , image: "/backers/krish.png" },
  { name: "Nick Brons", url: "https://x.com/nickbronstodeth" , image: "/backers/nickbrons.png" }
];

export default function BackersSection() {
  // Animation state
  const [headerVisible, setHeaderVisible] = useState(false);
  const [pillsVisible, setPillsVisible] = useState(false);

  // Refs for intersection observer
  const headerRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const mobileLayoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === pillsRef.current) setPillsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (pillsRef.current) observer.observe(pillsRef.current);
    if (mobileLayoutRef.current) observer.observe(mobileLayoutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full py-32 md:py-24 bg-[#202022]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className={`mb-4 lg:mb-6 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="block text-[#fff] text-base sm:text-lg xl:text-[18px] font-medium font-['Avenir_Next'] mb-3 mx-auto text-center" >
              Strategic investors
            </h2>
          </div>

          {/* Individual Backers */}
          {/* Desktop & Tablet Layout (above 880px) */}
          <div ref={pillsRef} className={`hidden min-[881px]:flex flex-col gap-4 transition-all duration-700 ease-out ${pillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: pillsVisible ? '0.4s' : '0s' }}>
            {/* Row 1: 7 backers */}
            <div className="flex justify-center gap-4">
              {backers.slice(0, 7).map((backer, index) => (
                <a
                  key={index}
                  href={backer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10
                    transition-all duration-200 ease-out
                    ${pillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
                    hover:scale-110 active:opacity-70 focus:outline-none`}
                  style={{ transitionDelay: pillsVisible ? `${0.6 + index * 0.05}s` : '0s' }}
                >
                  {backer.image ? (
                    <Image
                      src={backer.image}
                      alt={backer.name}
                      width={29}
                      height={29}
                      className="w-[29px] h-[29px] rounded-full flex-shrink-0 object-cover"
                    />
                  ) : (
                    <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
                  )}
                  <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                    {backer.name}
                  </span>
                </a>
              ))}
            </div>
            {/* Row 2: 6 backers */}
            <div className="flex justify-center gap-4">
              {backers.slice(7, 13).map((backer, index) => (
                <a
                  key={index}
                  href={backer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10
                    transition-all duration-200 ease-out
                    ${pillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
                    hover:scale-110 active:opacity-70 focus:outline-none`}
                  style={{ transitionDelay: pillsVisible ? `${0.6 + (index + 7) * 0.05}s` : '0s' }}
                >
                  {backer.image ? (
                    <Image
                      src={backer.image}
                      alt={backer.name}
                      width={29}
                      height={29}
                      className="w-[29px] h-[29px] rounded-full flex-shrink-0 object-cover"
                    />
                  ) : (
                    <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
                  )}
                  <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                    {backer.name}
                  </span>
                </a>
              ))}
            </div>
            {/* Row 3: 7 backers */}
            <div className="flex justify-center gap-4">
              {backers.slice(13, 20).map((backer, index) => (
                <a
                  key={index}
                  href={backer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10
                    transition-all duration-200 ease-out
                    ${pillsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
                    hover:scale-110 active:opacity-70 focus:outline-none`}
                  style={{ transitionDelay: pillsVisible ? `${0.6 + (index + 13) * 0.05}s` : '0s' }}
                >
                  {backer.image ? (
                    <Image
                      src={backer.image}
                      alt={backer.name}
                      width={29}
                      height={29}
                      className="w-[29px] h-[29px] rounded-full flex-shrink-0 object-cover"
                    />
                  ) : (
                    <div className="w-[29px] h-[29px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
                  )}
                  <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                    {backer.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - 3 marquee rows only at 880px and below */}
      <div ref={mobileLayoutRef} className="max-[880px]:block hidden relative overflow-hidden w-full">
        {/* Row 1 - Marquee right to left (7 backers) */}
        <div className="marquee-row marquee-ltr mb-[16px] px-4">
          <div className="flex gap-[16px] w-max animate-marquee-ltr">
            {[...backers.slice(0, 7), ...backers.slice(0, 7)].map((backer, index) => (
              <a
                key={index}
                href={backer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#373737] rounded-[24px] flex items-center gap-3 pl-[7px] pr-5 py-[7px] h-12"
              >
                {backer.image ? (
                  <Image
                    src={backer.image}
                    alt={backer.name}
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px] rounded-full flex-shrink-0 object-cover"
                  />
                ) : (
                  <div className="w-[32px] h-[32px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
                )}
                <span className="text-white text-lg font-['Avenir_Next'] whitespace-nowrap">
                  {backer.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Row 2 - Marquee left to right (6 backers) */}
        <div className="marquee-row marquee-rtl mb-[16px] px-4">
          <div className="flex gap-[16px] w-max animate-marquee-rtl">
            {[...backers.slice(7, 13), ...backers.slice(7, 13)].map((backer, index) => (
              <a
                key={index}
                href={backer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#373737] rounded-[24px] flex items-center gap-3 pl-[7px] pr-5 py-[7px] h-12"
              >
                {backer.image ? (
                  <Image
                    src={backer.image}
                    alt={backer.name}
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px] rounded-full flex-shrink-0 object-cover"
                  />
                ) : (
                  <div className="w-[32px] h-[32px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
                )}
                <span className="text-white text-lg font-['Avenir_Next'] whitespace-nowrap">
                  {backer.name}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* Row 3 - Marquee right to left (7 backers) */}
        <div className="marquee-row marquee-ltr mb-[16px] px-4">
          <div className="flex gap-[16px] w-max animate-marquee-ltr">
            {[...backers.slice(13, 20), ...backers.slice(13, 20)].map((backer, index) => (
              <a
                key={index}
                href={backer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#373737] rounded-[24px] flex items-center gap-3 pl-[7px] pr-5 py-[7px] h-12"
              >
                {backer.image ? (
                  <Image
                    src={backer.image}
                    alt={backer.name}
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px] rounded-full flex-shrink-0 object-cover"
                  />
                ) : (
                  <div className="w-[32px] h-[32px] bg-[#d9d9d9] rounded-full flex-shrink-0" />
                )}
                <span className="text-white text-lg font-['Avenir_Next'] whitespace-nowrap">
                  {backer.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 