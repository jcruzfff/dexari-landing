'use client';

import { useRef, useEffect, useState } from 'react';

export default function FeatureSection() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const fastVideoRef1 = useRef<HTMLVideoElement>(null);
  const fastVideoRef2 = useRef<HTMLVideoElement>(null);

  // Animation state
  const [headerVisible, setHeaderVisible] = useState(false);
  const [row1Visible, setRow1Visible] = useState(false);
  const [row2Visible, setRow2Visible] = useState(false);
  const [row3Visible, setRow3Visible] = useState(false);

  // Refs for intersection observer
  const headerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Speed up the Deep Liquidity videos to 1.5x speed
    if (videoRef1.current) {
      videoRef1.current.playbackRate = 2;
    }
    if (videoRef2.current) {
      videoRef2.current.playbackRate = 2;
    }
    
    // Speed up the Fast Execution videos to 1.5x speed
    if (fastVideoRef1.current) {
      fastVideoRef1.current.playbackRate = 1.5;
    }
    if (fastVideoRef2.current) {
      fastVideoRef2.current.playbackRate = 1.5;
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === row1Ref.current) setRow1Visible(true);
            if (entry.target === row2Ref.current) setRow2Visible(true);
            if (entry.target === row3Ref.current) setRow3Visible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (row1Ref.current) observer.observe(row1Ref.current);
    if (row2Ref.current) observer.observe(row2Ref.current);
    if (row3Ref.current) observer.observe(row3Ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section id="features" className="relative w-full py-16 lg:py-24 bg-[#202022]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        {/* Header Container */}
        <div ref={headerRef} className={`flex flex-col items-center justify-center text-center mb-12 lg:mb-16 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-[850px] mx-auto">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-['Avenir_Next'] font-medium mb-4 leading-tight tracking-[0.1px]">
              Full power. Zero compromises.
            </h2>
            <p className="text-[#ffffffbd] text-[18px] sm:text-lg xl:text-[18px] max-w-[698px] mx-auto font-['Avenir_Next'] font-medium leading-relaxed">
            Dexari delivers deep liquidity, lightning-fast execution, and pro-grade tools built for mobile. All powered by Hyperliquid’s decentralized, high-performance order book.
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-[1224px] mx-auto space-y-4">
          {/* Deep Liquidity Card */}
          <div ref={row1Ref} className={`bg-[#2b2b2b] rounded-[16px] overflow-hidden [@media(min-width:1080px)]:rounded-[16px] [@media(min-width:1080px)]:flex [@media(min-width:1080px)]:min-h-[264px] transition-all duration-700 ease-out ${row1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Text Content Container */}
            <div className="p-6 space-y-4 [@media(min-width:1080px)]:flex-1 [@media(min-width:1080px)]:p-[48px] [@media(min-width:1080px)]:pr-[20px] [@media(min-width:1080px)]:space-y-6 [@media(min-width:1080px)]:flex [@media(min-width:1080px)]:flex-col [@media(min-width:1080px)]:justify-start">
              {/* deep Liquidity label */}
              <p className="text-[#ffffff] text-sm font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5 [@media(min-width:1080px)]:text-[18px]">
              UNMATCHED LIQUIDITY

              </p>
              
              {/* Main heading */}
              <h3 className="text-[#ffffff] text-xl sm:text-2xl font-['Avenir_Next'] font-medium leading-tight [@media(min-width:1080px)]:text-[34px] [@media(min-width:1080px)]:leading-[42px]">
              Move size with up to 40x leverage
              </h3>
              
              {/* Description */}
              <p className="text-[#ffffffbd] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed [@media(min-width:1080px)]:text-[18px]">
              Tap into 300+ perps and spot markets with tight spreads and strong depth. Access new listings daily, often before they reach major CEX platforms.
              </p>
            </div>
            
            {/* Video section */}
            <div className="w-full [@media(min-width:1080px)]:w-[410px] [@media(min-width:1080px)]:self-stretch">
              {/* Mobile: Flexbox approach */}
              <div className="[@media(min-width:1080px)]:hidden flex-1 mx-6 lg:mx-12 mb-0 flex flex-col justify-end">
                <div className="w-full h-auto bg-[#343434] rounded-t-[24px] lg:rounded-t-[35px] overflow-hidden flex items-end">
                  <video
                    ref={videoRef1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/liquidity.mov" type="video/mp4" /> 
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Desktop: Bottom-aligned flexbox approach */}
              <div className="hidden [@media(min-width:1080px)]:flex [@media(min-width:1080px)]:flex-col [@media(min-width:1080px)]:justify-end [@media(min-width:1080px)]:h-full [@media(min-width:1080px)]:bg-[#343434] [@media(min-width:1080px)]:pt-[33px] [@media(min-width:1080px)]:px-[36px]">
                <div className="w-full flex-1 rounded-t-[20px] overflow-hidden flex items-end">
                  <video
                    ref={videoRef2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/liquidity.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Cards */}
          <div ref={row2Ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-700 ease-out ${row2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Fast Execution Card */}
            <div className="bg-[#2b2b2b] rounded-[16px] lg:rounded-[16px] overflow-hidden flex flex-col justify-between min-h-[400px] lg:min-h-[665px]">
              <div className="p-6 lg:p-12 space-y-4 max-w-[508px]">
                <div className="space-y-2.5 max-w-[408px]">
                  <p className="text-[#ffffff] text-sm lg:text-[18px] font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5">
                  ULTRA-FAST
                  </p>
                  <h3 className="text-[#ffffff] text-xl sm:text-2xl lg:text-[34px] font-['Avenir_Next'] font-medium leading-tight">
                  Orders execute in milliseconds
                  </h3>
                </div>
                <p className="text-[#ffffffbd] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed">
                Trade with low latency, zero gas, and industry low fees. Use market, limit, TP/SL, TWAP, and other advanced strategies with speed and precision.
                </p>
              </div>
              {/* Mobile: With margins and rounded top */}
              <div className="lg:hidden flex-1 mx-6 mb-0 flex flex-col justify-end min-h-[280px]">
                <div className="w-full h-auto bg-[#343434] rounded-t-[24px] overflow-hidden flex items-end">
                  <video
                    ref={fastVideoRef1}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/long.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Desktop: With padding and inner rounded container */}
              <div className="hidden lg:flex lg:flex-col lg:justify-end lg:min-h-[400px] lg:bg-[#343434] lg:pt-[33px] lg:px-[32px]">
                <div className="w-full h-auto rounded-t-[20px] overflow-hidden flex items-end">
                  <video
                    ref={fastVideoRef2}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/long2.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Advanced Tools Card */}
            <div className="bg-[#2b2b2b] rounded-[16px] lg:rounded-[16px] overflow-hidden flex flex-col justify-between min-h-[400px] lg:min-h-[665px]">
              <div className="p-6 lg:p-12 space-y-4 lg:space-y-[22px] max-w-[508px]">
                <div className="space-y-2.5">
                  <p className="text-[#ffffff] text-sm lg:text-[18px] font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5">
                  ADVANCED TOOLS
                  </p>
                  <h3 className="text-[#ffffff] text-xl sm:text-2xl lg:text-[34px] font-['Avenir_Next'] font-medium leading-tight">
                  Charts, indicators and alerts
                  </h3>
                </div>
                <p className="text-[#ffffffbd] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed">
                Trade smarter with TradingView’s full charting suite. Stay informed with real-time notifications for order fills, margin levels, and new listings.
                </p>
              </div>
              {/* Mobile: With margins and rounded top */}
              <div className="lg:hidden flex-1 mx-6 mb-0 flex flex-col justify-end min-h-[280px]">
                <div className="w-full h-auto bg-[#343434] rounded-t-[24px] overflow-hidden flex items-end">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/advanced.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Desktop: With padding and inner rounded container */}
              <div className="hidden lg:flex lg:flex-col lg:justify-end lg:min-h-[400px] lg:bg-[#343434] lg:pt-[33px] lg:px-[32px]">
                <div className="w-full h-auto rounded-t-[20px] overflow-hidden flex items-end">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/advanced.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Seamless Experience Card */}
          <div ref={row3Ref} className={`bg-[#2b2b2b] rounded-[16px] overflow-hidden [@media(min-width:1080px)]:rounded-[16px] [@media(min-width:1080px)]:flex [@media(min-width:1080px)]:min-h-[264px] transition-all duration-700 ease-out ${row3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Text Content Container */}
            <div className="p-6 space-y-4 [@media(min-width:1080px)]:flex-1 [@media(min-width:1080px)]:p-[48px] [@media(min-width:1080px)]:pr-[20px] [@media(min-width:1080px)]:space-y-6 [@media(min-width:1080px)]:flex [@media(min-width:1080px)]:flex-col [@media(min-width:1080px)]:justify-start">
              {/* seamless experience label */}
              <p className="text-[#ffffff] text-sm font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5 [@media(min-width:1080px)]:text-[18px]">
                SEAMLESS EXPERIENCE
              </p>
              
              {/* Main heading */}
              <h3 className="text-[#ffffff] text-xl sm:text-2xl font-['Avenir_Next'] font-medium leading-tight [@media(min-width:1080px)]:text-[34px] [@media(min-width:1080px)]:leading-[42px]">
                Fund instantly. Transfer easily
              </h3>
              
              {/* Description */}
              <p className="text-[#ffffffbd] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed [@media(min-width:1080px)]:text-[18px]">
                Deposit with card, bank transfer, or crypto. Move funds across chains without friction. Every action is secured with multi-factor authentication and Turnkey-powered self-custody.
              </p>
            </div>
            
            {/* Video section */}
            <div className="w-full [@media(min-width:1080px)]:w-[410px] [@media(min-width:1080px)]:self-stretch">
              {/* Mobile: Flexbox approach */}
              <div className="[@media(min-width:1080px)]:hidden flex-1 mx-6 lg:mx-12 mb-0 flex flex-col justify-end">
                <div className="w-full h-auto bg-[#343434] rounded-t-[24px] lg:rounded-t-[35px] overflow-hidden flex items-end">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/deposit.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              
              {/* Desktop: Bottom-aligned flexbox approach */}
              <div className="hidden [@media(min-width:1080px)]:flex [@media(min-width:1080px)]:flex-col [@media(min-width:1080px)]:justify-end [@media(min-width:1080px)]:h-full [@media(min-width:1080px)]:bg-[#343434] [@media(min-width:1080px)]:pt-[33px] [@media(min-width:1080px)]:px-[36px]">
                <div className="w-full flex-1 rounded-t-[20px] overflow-hidden flex items-end">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain object-bottom"
                  >
                    <source src="/videos/deposit.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 