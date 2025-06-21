'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface NavbarProps {
  isBannerVisible: boolean;
}

export default function Navbar({ isBannerVisible }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Track screen size for mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280); // xl breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Only apply scroll behavior on mobile
  useEffect(() => {
    if (!isMobile) {
      // On desktop, always keep navbar visible
      setIsNavbarVisible(true);
      return;
    }

    let lastScrollY = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at the top of the page
      if (currentScrollY < 10) {
        setIsNavbarVisible(true);
      }
      // Hide when scrolling down, show when scrolling up (only on mobile)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <>
      {/* Navigation */}
      <nav 
        className={`nav-animate fixed left-0 z-40 w-full bg-[#202022] transition-all duration-300 ${
          isBannerVisible ? 'top-[58px]' : 'top-0'
        }`}
        style={{
          transform: isMobile && !isNavbarVisible ? 'translateY(-100%)' : 'translateY(0)'
        }}
      >
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] py-4 lg:py-4 xl:py-6 lg:h-[60px] xl:h-[88px]">
          {/* Mobile/Tablet Layout - justify-between */}
          <div className="xl:hidden flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex justify-start">
              <Image 
                src="/dexari-logo.svg" 
                alt="Dexari Logo" 
                width={112}
                height={28}
                className="h-6 lg:h-[28.474px] w-auto"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-row gap-1 sm:gap-2 items-center">
              {/* Language Selector - Hidden on extra small screens */}
              <div className="hidden md:flex backdrop-blur-[4.1px] bg-[rgba(255,248,216,0.12)] border border-[rgba(103,103,103,0.8)] rounded-[74px] h-8 lg:h-10 px-2 lg:px-4 items-center gap-1.5 lg:gap-2.5">
                <div className="w-2.5 lg:w-3 h-1.5 lg:h-2 bg-gray-300 rounded"></div>
                <span className="text-white text-[12px] lg:text-[14px] font-['Helvetica_Neue'] font-medium">EN</span>
                <svg className="w-[10px] lg:w-[12px] h-[10px] lg:h-[12px] rotate-[270deg]" fill="none" viewBox="0 0 14 14">
                  <path d="M0.8225 0L0 0.8225L2.67167 3.5L0 6.1775L0.8225 7L4.3225 3.5L0.8225 0Z" fill="white"/>
                </svg>
              </div>
              
              {/* Download Button */}
              <div className="bg-[#e5dbb7] rounded-[74px] h-8 lg:h-10 w-20 sm:w-24 lg:w-28 flex items-center justify-center hover:bg-[#d4c99a] transition-colors cursor-pointer">
                <p className="text-[#202022] text-[10px] sm:text-[12px] lg:text-[14px] font-['Avenir_Next'] font-semibold">Download</p>
              </div>

              {/* Hamburger Menu - Visible on mobile/tablet */}
              <button 
                className="flex flex-col justify-center items-center w-8 h-8 ml-1 sm:ml-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Desktop Layout - 3-column grid */}
          <div className="hidden xl:grid grid-cols-3 items-center w-full">
            {/* Left Section - Logo */}
            <div className="flex justify-start">
              <Image 
                src="/dexari-logo.svg" 
                alt="Dexari Logo" 
                width={112}
                height={28}
                className="h-6 lg:h-[28.474px] w-auto"
              />
            </div>

            {/* Center Section - Navigation Menu */}
            <div className="flex justify-center">
              <div className="flex flex-row gap-8 items-center font-['Avenir_Next'] font-semibold text-white text-[16px]">
                <div className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Features</div>
                <div className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Why Dexari?</div>
                <div className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Roadmap</div>
                <div className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Docs</div>
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex justify-end">
              <div className="flex flex-row gap-1 sm:gap-2 items-center">
                {/* Language Selector */}
                <div className="flex backdrop-blur-[4.1px] bg-[rgba(255,248,216,0.12)] border border-[rgba(103,103,103,0.8)] rounded-[74px] h-8 lg:h-10 xl:h-12 px-2 lg:px-4 xl:px-6 items-center gap-1.5 lg:gap-2.5">
                  <div className="w-2.5 lg:w-3 xl:w-3.5 h-1.5 lg:h-2 xl:h-2.5 bg-gray-300 rounded"></div>
                  <span className="text-white text-[12px] lg:text-[14px] xl:text-[16px] font-['Helvetica_Neue'] font-medium">EN</span>
                  <svg className="w-[10px] lg:w-[12px] xl:w-[14px] h-[10px] lg:h-[12px] xl:h-[14px] rotate-[270deg]" fill="none" viewBox="0 0 14 14">
                    <path d="M0.8225 0L0 0.8225L2.67167 3.5L0 6.1775L0.8225 7L4.3225 3.5L0.8225 0Z" fill="white"/>
                  </svg>
                </div>
                
                {/* Download Button */}
                <div className="bg-[#e5dbb7] rounded-[74px] h-8 lg:h-10 xl:h-12 w-20 sm:w-24 lg:w-28 xl:w-36 flex items-center justify-center hover:bg-[#d4c99a] transition-colors cursor-pointer">
                  <p className="text-[#202022] text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] font-['Avenir_Next'] font-semibold">Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-[#202022] z-[100]">
          <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 py-6 flex flex-col">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-8">
              {/* Dexari Logo */}
              <div className="flex justify-start">
                <Image 
                  src="/dexari-logo.svg" 
                  alt="Dexari Logo" 
                  width={112}
                  height={28}
                  className="h-6 lg:h-[28.474px] w-auto"
                />
              </div>
              
              {/* Close Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 32 32">
                  <path d="M16.0004 14.6265L11.8521 10.4782L10.4785 11.8518L14.6268 16.0001L10.4785 20.1484L11.8521 21.522L16.0004 17.3737L20.1487 21.522L21.5223 20.1484L17.374 16.0001L21.5223 11.8518L20.1487 10.4782L16.0004 14.6265Z" fill="white"/>
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-0">
              <div className="font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Features</div>
              <div className="font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Why Dexari?</div>
              <div className="font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Roadmap</div>
              <div className="font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Docs</div>
            </div>

            {/* Download Button */}
            <div className="mt-8">
              <div className="bg-[#e5dbb7] rounded-[74px] h-12 w-full flex items-center justify-center hover:bg-[#d4c99a] transition-colors cursor-pointer">
                <p className="text-[#202022] text-[16px] font-['Avenir_Next'] font-semibold">Download</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 