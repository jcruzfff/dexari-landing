'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// interface NavbarProps {
//   isBannerVisible: boolean;
// }

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDownloadDropdownOpen, setIsDownloadDropdownOpen] = useState(false);
  const downloadDropdownRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementTop = element.offsetTop;
      const viewportHeight = window.innerHeight;
      const offset = viewportHeight * 0.02; // 2% from top
      const scrollToPosition = elementTop - offset;
      
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // Track screen size for mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1280); // xl breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (downloadDropdownRef.current && !downloadDropdownRef.current.contains(event.target as Node)) {
        setIsDownloadDropdownOpen(false);
      }
    };

    if (isDownloadDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDownloadDropdownOpen]);

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
        className={`nav-animate fixed left-0 z-40 w-full bg-[#202022] transition-all duration-300 opacity-0 ${
           'top-0'
        }`}
        style={{
          transform: isMobile && !isNavbarVisible ? 'translateY(-100%)' : 'translateY(0)'
        }}
      >
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px] py-4 xl:py-5 lg:h-[72px] xl:h-[88px]">
          <div className="max-w-[1224px] mx-auto">
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
                {/* Download Button */}
                <div className="bg-[#e5dbb7] rounded-[12px] h-8 lg:h-10 w-20 sm:w-24 lg:w-28 flex items-center justify-center hover:bg-[#d4c99a] transition-colors cursor-pointer">
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
                  <button onClick={() => scrollToSection('features')} className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Features</button>
                  <button onClick={() => scrollToSection('advantage')} className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Why Dexari?</button>
                  <button onClick={() => scrollToSection('roadmap')} className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Roadmap</button>
                  <a href="/docs" className="hover:text-[#e5dbb7] cursor-pointer transition-colors whitespace-nowrap">Docs</a>
                </div>
              </div>

              {/* Right Section - Actions */}
              <div className="flex justify-end">
                <div className="flex flex-row gap-1 sm:gap-2 items-center">
                  {/* Language Selector */}
                  {/* <div className="flex backdrop-blur-[4.1px] bg-[rgba(255,248,216,0.12)] border border-[rgba(103,103,103,0.8)] rounded-[74px] h-8 lg:h-10 xl:h-12 px-2 lg:px-4 xl:px-6 items-center gap-1.5 lg:gap-2.5">
                    <div className="w-2.5 lg:w-3 xl:w-3.5 h-1.5 lg:h-2 xl:h-2.5 bg-gray-300 rounded"></div>
                    <span className="text-white text-[12px] lg:text-[14px] xl:text-[16px] font-['Helvetica_Neue'] font-medium">EN</span>
                    <svg className="w-[10px] lg:w-[12px] xl:w-[14px] h-[10px] lg:h-[12px] xl:h-[14px] rotate-[270deg]" fill="none" viewBox="0 0 14 14">
                      <path d="M0.8225 0L0 0.8225L2.67167 3.5L0 6.1775L0.8225 7L4.3225 3.5L0.8225 0Z" fill="white"/>
                    </svg>
                  </div> */}
                  
                  {/* Download Button with Dropdown */}
                  <div ref={downloadDropdownRef} className="relative">
                    <button 
                      onClick={() => setIsDownloadDropdownOpen(!isDownloadDropdownOpen)}
                      className="bg-[#e5dbb7] rounded-[16px] h-8 lg:h-10 xl:h-12 w-20 sm:w-24 lg:w-28 xl:w-36 flex items-center justify-center hover:bg-[#d4c99a] transition-colors cursor-pointer"
                    >
                      <p className="text-[#202022] text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] font-['Avenir_Next'] font-semibold">Download</p>
                    </button>

                    {/* Download Dropdown */}
                    {isDownloadDropdownOpen && (
                      <div className="absolute top-full right-0 mt-2 w-72 bg-[#2b2b2b] rounded-[16px] shadow-2xl border border-[#404040] z-50 overflow-hidden">
                        {/* Header */}
                        <div className="px-6 pt-6 pb-4 border-b border-[#404040]">
                          <h3 className="text-white text-lg font-['Avenir_Next'] font-semibold mb-2">Download Dexari</h3>
                          <p className="text-[#888888] text-sm font-['Avenir_Next']">Scan the QR code or download directly</p>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-5">
                          {/* QR Code - Centered at top */}
                          <div className="flex justify-center">
                            <div className="w-28 h-28 bg-white rounded-xl flex items-center justify-center">
                              <Image 
                                src="/qr-code.png" 
                                alt="Download QR Code" 
                                width={112}
                                height={112}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Download Links - Stacked vertically */}
                          <div className="space-y-3">
                            {/* Google Play - First */}
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#323232]">
                              <div className="w-10 h-10 bg-[#404040] rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-white text-sm font-['Avenir_Next'] font-medium">Google Play</p>
                                <p className="text-[#888888] text-xs font-['Avenir_Next']">Download for Android</p>
                              </div>
                            </div>

                            {/* App Store - Second */}
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#323232]">
                              <div className="w-10 h-10 bg-[#404040] rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                              </div>
                              <div className="flex-1">
                                <p className="text-white text-sm font-['Avenir_Next'] font-medium">App Store</p>
                                <p className="text-[#888888] text-xs font-['Avenir_Next']">Download for iOS</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-[#202022] z-[100]">
          <div className="w-full h-full px-4 sm:px-8 md:px-16 lg:px-24 py-4 lg:py-4 flex flex-col">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-8 h-8 lg:h-10">
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
                className="w-10 h-10 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
                  <path d="M16.0004 14.6265L11.8521 10.4782L10.4785 11.8518L14.6268 16.0001L10.4785 20.1484L11.8521 21.522L16.0004 17.3737L20.1487 21.522L21.5223 20.1484L17.374 16.0001L21.5223 11.8518L20.1487 10.4782L16.0004 14.6265Z" fill="white"/>
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-0">
              <button onClick={() => scrollToSection('features')} className="w-full text-left font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Features</button>
              <button onClick={() => scrollToSection('advantage')} className="w-full text-left font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Why Dexari?</button>
              <button onClick={() => scrollToSection('roadmap')} className="w-full text-left font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Roadmap</button>
              <a href="/docs" className="block font-['Avenir_Next'] font-semibold text-white text-[18px] py-4 hover:text-[#e5dbb7] cursor-pointer transition-colors border-b border-[rgba(255,255,255,0.1)]">Docs</a>
            </div>

            {/* Download Button */}
            <div className="mt-8">
              <div className="bg-[#e5dbb7] rounded-[12px] h-12 w-full flex items-center justify-center hover:bg-[#d4c99a] transition-colors cursor-pointer">
                <p className="text-[#202022] text-[16px] font-['Avenir_Next'] font-semibold">Download</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 