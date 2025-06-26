'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const advantages = [
  {
    id: '01',
    title: 'Self-custody',
    description: 'You hold the keys. Dexari never touches your assets. Every trade and transfer is secured and verifiable onchain.',
    icon: '/custody-icon.svg',
    position: 'top-left'
  },
  {
    id: '02',
    title: 'Privacy',
    description: 'No invasive KYC or behavioral profiling. Dexari accounts are yours alone, with activity kept private and encrypted.',
    icon: '/privacy-icon.svg',
    position: 'top-right'
  },
  {
    id: '03',
    title: 'Permissionless',
    description: 'No approvals, no gatekeepers. Get started instantly and access onchain.',
    icon: '/permissionless-icon.svg',
    position: 'bottom-left'
  },
  {
    id: '04',
    title: 'Transparency',
    description: 'Every order, balance, and action settles onchain. Audit your activity or Dexari\'s logic.',
    icon: '/transparency-icon.svg',
    position: 'bottom-right'
  }
];

export default function AdvantageSection() {
  // Animation state for each card
  const [headerVisible, setHeaderVisible] = useState(false);
  const [topLeftVisible, setTopLeftVisible] = useState(false);
  const [topRightVisible, setTopRightVisible] = useState(false);
  const [bottomLeftVisible, setBottomLeftVisible] = useState(false);
  const [bottomRightVisible, setBottomRightVisible] = useState(false);
  const [mobileCardsVisible, setMobileCardsVisible] = useState(false);

  // Refs for intersection observer
  const headerRef = useRef<HTMLDivElement>(null);
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) setHeaderVisible(true);
            if (entry.target === topLeftRef.current) setTopLeftVisible(true);
            if (entry.target === topRightRef.current) setTopRightVisible(true);
            if (entry.target === bottomLeftRef.current) setBottomLeftVisible(true);
            if (entry.target === bottomRightRef.current) setBottomRightVisible(true);
            if (entry.target === mobileCardsRef.current) setMobileCardsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all elements
    if (headerRef.current) observer.observe(headerRef.current);
    if (topLeftRef.current) observer.observe(topLeftRef.current);
    if (topRightRef.current) observer.observe(topRightRef.current);
    if (bottomLeftRef.current) observer.observe(bottomLeftRef.current);
    if (bottomRightRef.current) observer.observe(bottomRightRef.current);
    if (mobileCardsRef.current) observer.observe(mobileCardsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="advantage" className="relative w-full py-16 lg:py-24 bg-[#202022] overflow-hidden">
      {/* Desktop Background - Only show on xl screens and above */}
      <div className="hidden xl:block absolute inset-0 items-center justify-center" style={{ paddingTop: '120px' }}>
        <div className="relative w-[85%] h-[800px] xl:h-[900px] mx-auto">
          <Image
            src="/Advantage-pantheon-light.svg"
            alt="Dexari advantage background"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Header */}
      <div ref={headerRef} className={`text-center mb-1 lg:mb-[-24px] relative z-20 transition-all duration-700 ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-['Avenir_Next'] font-normal mb-6 lg:mb-8 leading-tight tracking-[0.1px]">
          The Dexari advantage
        </h2>
        
        {/* Learn More Button */}
                      <a href="/docs" className="inline-block bg-[#e5dbb7] text-[#202022] px-8 py-3 rounded-[16px] font-['Avenir_Next'] font-semibold text-base hover:bg-[#ddd0a3] transition-colors duration-200">
          Learn more
        </a>
      </div>

      {/* Mobile Image - Show as section element on screens below xl */}
      <div className="xl:hidden flex justify-center mb-[-18px] lg:mb-16 relative z-10">
        <div className="relative w-[100%] h-[370px] sm:h-[420px] lg:h-[540px]">
          <Image
            src="/advantage-pantheon-mobile-light.svg"
            alt="Dexari advantage mobile"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

             {/* Content Container - Aligned with other sections */}
       <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] z-10">
         <div className="max-w-[1224px] mx-auto">
                     {/* Desktop Layout - Only visible on xl screens and above */}
          <div className="hidden xl:block relative min-h-[700px] xl:min-h-[800px]">
             {/* Self-custody Card - Top Left */}
             <div 
               ref={topLeftRef}
               className={`absolute w-[250px] transition-all duration-700 ease-out ${topLeftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ 
                 left: '0px',
                 top: '0px',
                 transitionDelay: topLeftVisible ? '0.1s' : '0s'
               }}
             >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-[88px] h-[88px]">
                  <Image
                    src={advantages[0].icon}
                    alt="Self-custody icon"
                    width={88}
                    height={88}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-[34px] font-['Avenir_Next'] font-medium leading-[42px] mb-6">
                      {advantages[0].title}
                    </h3>
                    <p className="text-[#888888] text-[18px] font-['Avenir_Next'] leading-[24px]">
                      {advantages[0].description}
                    </p>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="w-fit border border-[rgba(240,241,243,0.2)] rounded px-4 py-2">
                    <span className="text-[rgba(240,241,243,0.5)] text-[16px] font-['Inter'] font-normal leading-[24px]">
                      {advantages[0].id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

                         {/* Privacy Card - Top Right */}
             <div 
               ref={topRightRef}
               className={`absolute w-[250px] transition-all duration-700 ease-out ${topRightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ 
                 right: '0px',
                 top: '0px',
                 transitionDelay: topRightVisible ? '0.2s' : '0s'
               }}
             >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-[88px] h-[88px]">
                  <Image
                    src={advantages[1].icon}
                    alt="Privacy icon"
                    width={88}
                    height={88}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-[34px] font-['Avenir_Next'] font-medium leading-[42px] mb-6">
                      {advantages[1].title}
                    </h3>
                    <p className="text-[#888888] text-[18px] font-['Avenir_Next'] leading-[24px]">
                      {advantages[1].description}
                    </p>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="w-fit border border-[rgba(240,241,243,0.2)] rounded px-4 py-2">
                    <span className="text-[rgba(240,241,243,0.5)] text-[16px] font-['Inter'] font-normal leading-[24px]">
                      {advantages[1].id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

                         {/* Permissionless Card - Bottom Left */}
             <div 
               ref={bottomLeftRef}
               className={`absolute w-[250px] transition-all duration-700 ease-out ${bottomLeftVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ 
                 left: '0px',
                 bottom: '0px',
                 transitionDelay: bottomLeftVisible ? '0.3s' : '0s'
               }}
             >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-[88px] h-[88px]">
                  <Image
                    src={advantages[2].icon}
                    alt="Permissionless icon"
                    width={88}
                    height={88}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-[34px] font-['Avenir_Next'] font-medium leading-[42px] mb-6">
                      {advantages[2].title}
                    </h3>
                    <p className="text-[#888888] text-[18px] font-['Avenir_Next'] leading-[24px]">
                      {advantages[2].description}
                    </p>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="w-fit border border-[rgba(240,241,243,0.2)] rounded px-4 py-2">
                    <span className="text-[rgba(240,241,243,0.5)] text-[16px] font-['Inter'] font-normal leading-[24px]">
                      {advantages[2].id}
                    </span>
                  </div>
                </div>
              </div>
            </div>

                         {/* Transparency Card - Bottom Right */}
             <div 
               ref={bottomRightRef}
               className={`absolute w-[250px] transition-all duration-700 ease-out ${bottomRightVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ 
                 right: '0px',
                 bottom: '0px',
                 transitionDelay: bottomRightVisible ? '0.4s' : '0s'
               }}
             >
              <div className="space-y-6">
                {/* Icon */}
                <div className="w-[88px] h-[88px]">
                  <Image
                    src={advantages[3].icon}
                    alt="Transparency icon"
                    width={88}
                    height={88}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white text-[34px] font-['Avenir_Next'] font-medium leading-[42px] mb-6">
                      {advantages[3].title}
                    </h3>
                    <p className="text-[#888888] text-[18px] font-['Avenir_Next'] leading-[24px]">
                      {advantages[3].description}
                    </p>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="w-fit border border-[rgba(240,241,243,0.2)] rounded px-4 py-2">
                    <span className="text-[rgba(240,241,243,0.5)] text-[16px] font-['Inter'] font-normal leading-[24px]">
                      {advantages[3].id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

                               {/* Mobile/Tablet Layout - Visible on all screens below xl (including 1024px) */}
          <div ref={mobileCardsRef} className={`xl:hidden relative z-10 transition-all duration-700 ease-out ${mobileCardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-12 lg:space-y-16 max-w-[600px] mx-auto">
              {advantages.map((advantage) => (
                <div key={advantage.id} className="flex flex-col items-center text-center space-y-6 lg:space-y-8">
                  {/* Icon */}
                  <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] lg:w-[88px] lg:h-[88px]">
                    <Image
                      src={advantage.icon}
                      alt={`${advantage.title} icon`}
                      width={88}
                      height={88}
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Content - NO number badges for mobile/tablet layout */}
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-white text-xl sm:text-2xl lg:text-[34px] font-['Avenir_Next'] font-medium leading-tight lg:leading-[42px]">
                      {advantage.title}
                    </h3>
                    <p className="text-[#888888] text-sm sm:text-base lg:text-[18px] font-['Avenir_Next'] leading-relaxed lg:leading-[24px] max-w-[480px]">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 