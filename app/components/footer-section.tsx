'use client';

import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="footer-animate relative w-full bg-[#202022] py-4 lg:py-24">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
          {/* Top Border */}
          <div className="w-full h-px bg-[#333333] mb-8 lg:mb-16" />
          
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image 
                src="/dexari-logo.svg" 
                alt="Dexari" 
                width={268}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            
            {/* Description */}
            <div className="text-center mb-8">
              <p className="text-white text-2xl font-normal font-['Avenir_Next'] leading-7 max-w-[397px] mx-auto">
                Unlock the latest strategies shaping tomorrow&apos;s financial systems.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center items-center gap-5 mb-32">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/x-icon.svg" alt="X (Twitter)" width={42} height={42} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/discord-icon.svg" alt="Discord" width={42} height={42} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/tg-icon.svg" alt="Telegram" width={42} height={42} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image src="/github-icon.svg" alt="GitHub" width={42} height={42} />
              </a>
            </div>
            
            {/* Email Input */}
            <div className="mb-8">
              <div className="flex flex-col gap-5">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="What's your email?"
                    className="w-full h-[60px] bg-[#2b2b2b] rounded-full border-2 border-[#6d6d6d]/20 px-6 pr-16 text-white text-base font-medium font-['Avenir_Next'] placeholder-white focus:outline-none focus:border-[#6d6d6d]/40 transition-colors"
                  />
                  <button className="absolute right-2 top-2 w-11 h-11 bg-[#e5dbb7] rounded-full flex items-center justify-center hover:bg-[#e5dbb7]/90 transition-colors">
                    <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <p className="text-white text-[11px] font-normal font-['Avenir_Next'] leading-tight text-center">
                  I confirm that I have read <span className="font-bold">Dexari&apos;s Privacy Policy</span> and agree with it.
                </p>
              </div>
            </div>
            
            {/* Download Buttons - Horizontal */}
            <div className="flex justify-center items-center gap-2 mb-8">
              {/* Google Play Store */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/googleplay-icon.svg" 
                  alt="Google Play" 
                  width={162}
                  height={57}
                />
              </a>
              
              {/* App Store */}
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Image 
                  src="/applestore-icon.svg" 
                  alt="App Store" 
                  width={163}
                  height={57}
                />
              </a>
            </div>
            
            {/* Mobile Border */}
            <div className="w-full h-px bg-[#333333] mb-6" />
            
            {/* Powered by and Secured by */}
            <div className="flex flex-row justify-center items-center gap-6 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next']">
                  Powered by
                </span>
                <Image 
                  src="/hyperliquid-logo.svg" 
                  alt="Hyperliquid" 
                  width={89}
                  height={14}
                  className="h-3.5 w-auto"
                />
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next']">
                  Secured by
                </span>
                <Image 
                  src="/turnkey-logo.svg" 
                  alt="Turnkey" 
                  width={91}
                  height={19}
                  className="h-[19px] w-auto"
                />
              </div>
            </div>
            
            {/* Mobile Bottom Border */}
            <div className="w-full h-px bg-[#333333] mb-6" />
            
            {/* Footer Links Mobile */}
            <div className="flex flex-nowrap justify-center items-center gap-3 text-center overflow-x-auto">
              <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors whitespace-nowrap">
                Disclaimer
              </a>
              <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors whitespace-nowrap">
                Help
              </a>
              <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors whitespace-nowrap">
                Terms of Use
              </a>
              <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors whitespace-nowrap">
                Fee Schedule
              </a>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Main Content */}
            <div className="flex justify-between items-start gap-8 mb-20">
              {/* Left Side - Logo and Description */}
              <div className="flex flex-col gap-8 max-w-[397px]">
                {/* Logo */}
                <div className="flex items-center gap-5">
                  <Image 
                    src="/dexari-logo.svg" 
                    alt="Dexari" 
                    width={268}
                    height={48}
                    className="h-12 w-auto"
                  />
                </div>
                
                {/* Description and Footer Info */}
                <div className="flex flex-col gap-8">
                  <p className="text-white text-2xl font-normal font-['Avenir_Next'] leading-7">
                    Unlock the latest strategies shaping tomorrow&apos;s financial systems.
                  </p>
                  
                  {/* Powered by and Secured by */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next']">
                        Powered by
                      </span>
                      <Image 
                        src="/hyperliquid-logo.svg" 
                        alt="Hyperliquid" 
                        width={89}
                        height={14}
                        className="h-3.5 w-auto"
                      />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next']">
                        Secured by
                      </span>
                      <Image 
                        src="/turnkey-logo.svg" 
                        alt="Turnkey" 
                        width={91}
                        height={19}
                        className="h-[19px] w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Email and Downloads */}
              <div className="flex flex-col gap-8 w-full max-w-[445px]">
                {/* Email Input */}
                <div className="flex flex-col gap-5">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="What's your email?"
                      className="w-full h-[60px] bg-[#2b2b2b] rounded-full border-2 border-[#6d6d6d]/20 px-6 pr-16 text-white text-base font-medium font-['Avenir_Next'] placeholder-white focus:outline-none focus:border-[#6d6d6d]/40 transition-colors"
                    />
                    <button className="absolute right-2 top-2 w-11 h-11 bg-[#e5dbb7] rounded-full flex items-center justify-center hover:bg-[#e5dbb7]/90 transition-colors">
                      <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-white text-[13px] font-normal font-['Avenir_Next'] leading-tight">
                    I confirm that I have read <span className="font-bold">Dexari&apos;s Privacy Policy</span> and agree with it.
                  </p>
                </div>
                
                {/* Download Buttons - Horizontal with QR */}
                <div className="flex items-center gap-3">
                  {/* QR Code */}
                  <div className="w-[60px] h-[60px] bg-white rounded-md border border-[#dadada] flex items-center justify-center flex-shrink-0">
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
            
            {/* Bottom Border */}
            <div className="w-full h-px bg-[#333333] mb-6" />
            
            {/* Bottom Section */}
            <div className="flex justify-between items-center">
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/x-icon.svg" alt="X (Twitter)" width={32} height={32} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/discord-icon.svg" alt="Discord" width={32} height={32} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/tg-icon.svg" alt="Telegram" width={32} height={32} />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Image src="/github-icon.svg" alt="GitHub" width={32} height={32} />
                </a>
              </div>
              
              {/* Footer Links */}
              <div className="flex items-center gap-6">
                <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors">
                  Disclaimer
                </a>
                <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors">
                  Help
                </a>
                <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors">
                  Terms of Use
                </a>
                <a href="#" className="text-[#a6a6a6] text-xs font-normal font-['Avenir_Next'] hover:text-white transition-colors">
                  Fee Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 