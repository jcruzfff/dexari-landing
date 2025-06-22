'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Sample roadmap data - you can replace with actual content
const roadmapCards = [
  {
    id: 1,
    title: "Trade",
    description: "Spot and perp markets with up to 40x leverage.",
    pill: "Q2 2024",
    backgroundImage: "/learn-card2.svg"
  },
  {
    id: 2,
    title: "Deposit",
    description: "Fund your account instantly with card, bank transfers, and more.",
    pill: "Q2 2025",
    backgroundImage: "/learn-card6.svg"
  },
  {
    id: 3,
    title: "Explore",
    description: "Browse and connect to emerging dApps with your Dexari account.",
    pill: "Q4 2024",
    backgroundImage: "/learn-card4.svg"
  },
  {
    id: 4,
    title: "Invest",
    description: "Discover and buy new cryptos early using DCA and TP/SL strategies.",
    pill: "Q1 2025",
    backgroundImage: "/learn-card5.svg"
  },
  {
    id: 5,
    title: "Earn",
    description: "Put idle assets to work with auto-compounding cash and crypto yield.",
    pill: "Q3 2024",
    backgroundImage: "/learn-card3.svg"
  },
  {
    id: 6,
    title: "Borrow",
    description: "Use crypto collateral to borrow cash instantly.",
    pill: "Q1 2024",
    backgroundImage: "/learn-card1.svg"
  },

  {
    id: 7,
    title: "Spend",
    description: "Use your Dexari credit card to spend self-custodied funds anywhere.",
    pill: "Q3 2025",
    backgroundImage: "/learn-card7.svg"
  }
];

export default function RoadmapSection() {
  const [translateX, setTranslateX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, translateX: 0 });
  const [touchDirection, setTouchDirection] = useState<'horizontal' | 'vertical' | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Responsive sizing
  const cardWidth = isMobile ? 280 : 336;
  const cardHeight = isMobile ? 360 : 469;
  const cardGap = isMobile ? 8 : 12;
  const edgeSpacing = isMobile ? 8 : 12;
  const stepSize = cardWidth + cardGap;
  
  // Create many copies for seamless infinite loop
  const infiniteCards = Array(5).fill([...roadmapCards]).flat();
  
  // Calculate center offset for mobile
  const getCenterOffset = () => {
    if (!isMobile || typeof window === 'undefined') return 0;
    const screenWidth = window.innerWidth;
    const cardCenter = cardWidth / 2;
    const screenCenter = screenWidth / 2;
    return screenCenter - cardCenter - edgeSpacing;
  };
  

  
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const baseOffset = roadmapCards.length * stepSize;
    let centerOffset = 0;
    
    if (isMobile && typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      const cardCenter = cardWidth / 2;
      const screenCenter = screenWidth / 2;
      centerOffset = screenCenter - cardCenter - edgeSpacing;
    }
    
    const initialOffset = isMobile ? baseOffset - centerOffset : baseOffset;
    setTranslateX(initialOffset);
  }, [isMobile, stepSize, cardWidth, edgeSpacing]);

  // Snap to nearest card center
  const snapToNearest = (currentTranslateX: number) => {
    const centerOffset = isMobile ? getCenterOffset() : 0;
    const adjustedTranslateX = currentTranslateX + centerOffset;
    const cardIndex = Math.round(adjustedTranslateX / stepSize);
    return cardIndex * stepSize - centerOffset;
  };

  const handlePrevious = () => {
    if (isDragging) return;
    
    setIsTransitioning(true);
    setTranslateX(prev => {
      const centerOffset = isMobile ? getCenterOffset() : 0;
      const newTranslateX = prev - stepSize;
      
      // Check if we need to seamlessly jump forward to continue the infinite loop
      setTimeout(() => {
        const minTranslateX = -centerOffset;
        if (newTranslateX <= minTranslateX) {
          setIsTransitioning(false);
          setTranslateX(newTranslateX + roadmapCards.length * stepSize);
          setTimeout(() => setIsTransitioning(true), 10);
        }
      }, 300);
      
      return newTranslateX;
    });
  };

  const handleNext = () => {
    if (isDragging) return;
    
    setIsTransitioning(true);
    setTranslateX(prev => {
      const centerOffset = isMobile ? getCenterOffset() : 0;
      const newTranslateX = prev + stepSize;
      const maxTranslateX = roadmapCards.length * stepSize * 3 - centerOffset;
      
      // Check if we need to seamlessly jump back to continue the infinite loop
      setTimeout(() => {
        if (newTranslateX >= maxTranslateX) {
          setIsTransitioning(false);
          setTranslateX(newTranslateX - roadmapCards.length * stepSize);
          setTimeout(() => setIsTransitioning(true), 10);
        }
      }, 300);
      
      return newTranslateX;
    });
  };

  // Touch/Mouse event handlers for mobile drag with direction detection
  const handleStart = (clientX: number, clientY: number) => {
    if (!isMobile) return;
    
    setDragStart({ x: clientX, y: clientY, translateX });
    setTouchDirection(null);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isMobile) return;
    
    const deltaX = Math.abs(clientX - dragStart.x);
    const deltaY = Math.abs(clientY - dragStart.y);
    
    // Determine touch direction if not already set
    if (!touchDirection && (deltaX > 5 || deltaY > 5)) {
      if (deltaX > deltaY) {
        setTouchDirection('horizontal');
        setIsDragging(true);
        setIsTransitioning(false);
      } else {
        setTouchDirection('vertical');
      }
    }
    
    // Only handle horizontal dragging for carousel
    if (touchDirection === 'horizontal' && isDragging) {
      const deltaXMove = clientX - dragStart.x;
      const newTranslateX = dragStart.translateX - deltaXMove;
      setTranslateX(newTranslateX);
    }
  };

  const handleEnd = () => {
    if (!isMobile) return;
    
    if (touchDirection === 'horizontal' && isDragging) {
      setIsDragging(false);
      setIsTransitioning(true);
      
      // Snap to nearest card
      const snappedPosition = snapToNearest(translateX);
      setTranslateX(snappedPosition);
      
      // Handle infinite loop boundaries
      setTimeout(() => {
        const centerOffset = getCenterOffset();
        const minTranslateX = -centerOffset;
        const maxTranslateX = roadmapCards.length * stepSize * 3 - centerOffset;
        
        if (snappedPosition <= minTranslateX) {
          setIsTransitioning(false);
          setTranslateX(snappedPosition + roadmapCards.length * stepSize);
          setTimeout(() => setIsTransitioning(true), 10);
        } else if (snappedPosition >= maxTranslateX) {
          setIsTransitioning(false);
          setTranslateX(snappedPosition - roadmapCards.length * stepSize);
          setTimeout(() => setIsTransitioning(true), 10);
        }
      }, 300);
    }
    
    // Reset touch state
    setTouchDirection(null);
    setIsDragging(false);
  };

  return (
    <section id="roadmap" className="relative w-full bg-[#202022]">
      {/* Header */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] pt-12 md:pt-16 lg:pt-24">
        <div className="max-w-[1224px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 md:gap-8 lg:gap-[164px] mb-12 md:mb-16">
            {/* Title */}
            <div className="flex-shrink-0">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-['Avenir_Next'] font-medium leading-tight tracking-[0.1px]">
                The Dexari roadmap
              </h2>
            </div>
            
            {/* Description */}
            <div className="lg:max-w-[476px]">
              <p className="text-[#969799] text-base lg:text-[17px] font-['Inter'] font-semibold leading-relaxed">
                See what&apos;s launching next as Dexari expands into yield, spending, borrowing, and onchain apps. Built for traders who want power in their pocket.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Container - Edge to Edge Infinite Loop */}
      <div className="relative mb-12 md:mb-16" style={{ overflow: 'visible' }}>
        <div className="overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex select-none"
            style={{ 
              transform: `translateX(-${translateX}px)`,
              gap: `${cardGap}px`,
              paddingTop: isMobile ? '8px' : '10px',
              paddingBottom: isMobile ? '8px' : '10px',
              marginLeft: `${edgeSpacing}px`,
              transition: isTransitioning ? 'transform 300ms ease-out' : 'none',
              cursor: isMobile && isDragging ? 'grabbing' : isMobile ? 'grab' : 'default'
            }}
            // Touch events with direction detection
            onTouchStart={(e) => {
              const touch = e.touches[0];
              handleStart(touch.clientX, touch.clientY);
            }}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              handleMove(touch.clientX, touch.clientY);
              
              // Only prevent default for horizontal scrolling
              if (touchDirection === 'horizontal') {
                e.preventDefault();
              }
            }}
            onTouchEnd={handleEnd}
            // Mouse events for testing on desktop
            onMouseDown={(e) => {
              if (isMobile) {
                e.preventDefault();
                handleStart(e.clientX, e.clientY);
              }
            }}
            onMouseMove={(e) => {
              if (isMobile) {
                handleMove(e.clientX, e.clientY);
                if (touchDirection === 'horizontal') {
                  e.preventDefault();
                }
              }
            }}
            onMouseUp={() => {
              if (isMobile) handleEnd();
            }}
            onMouseLeave={() => {
              if (isMobile) handleEnd();
            }}
          >
            {infiniteCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="rounded-[24px] md:rounded-[36px] flex-shrink-0 relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform duration-300 hover:z-10"
                style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}
              >
                {/* Background Image */}
                <Image
                  src={card.backgroundImage}
                  alt={card.title}
                  fill
                  className="object-cover"
                  draggable={false}
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                  {/* Pill */}
                  <div className="flex justify-end">
                    <div className="bg-[#b38d5f] rounded-full px-3 py-1.5 md:px-4 md:py-2">
                      <span className="text-white text-xs md:text-sm font-['Avenir_Next'] font-medium">
                        {card.pill}
                      </span>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-white text-lg md:text-xl font-['Avenir_Next'] font-medium leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[#888888] text-sm md:text-base font-['Avenir_Next'] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Edge spacer */}
            <div 
              className="flex-shrink-0"
              style={{ width: `${edgeSpacing}px`, height: `${cardHeight}px` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center gap-4 md:gap-[22px] pb-12 md:pb-16 lg:pb-24">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="bg-[#e5dbb7] rounded-[28px] md:rounded-[34px] w-[56px] h-[56px] md:w-[68px] md:h-[68px] flex items-center justify-center transition-all duration-200 hover:bg-[#ddd5a8]"
        >
          <svg
            width={isMobile ? "28" : "34"}
            height={isMobile ? "28" : "34"}
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M28.3332 15.5833H11.0924L19.0115 7.66408L16.9999 5.66658L5.66653 16.9999L16.9999 28.3333L18.9974 26.3358L11.0924 18.4166H28.3332V15.5833Z"
              fill="black"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="bg-[#e5dbb7] rounded-[28px] md:rounded-[34px] w-[56px] h-[56px] md:w-[68px] md:h-[68px] flex items-center justify-center transition-all duration-200 hover:bg-[#ddd5a8]"
        >
          <svg
            width={isMobile ? "28" : "34"}
            height={isMobile ? "28" : "34"}
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M16.9995 5.66634L15.002 7.66384L22.907 15.583H5.66615V18.4163H22.907L15.002 26.3355L16.9995 28.333L28.3328 16.9997L16.9995 5.66634Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </section>
  );
} 