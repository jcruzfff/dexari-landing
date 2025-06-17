'use client';

interface BannerProps {
  isBannerVisible: boolean;
  setIsBannerVisible: (visible: boolean) => void;
}

export default function Banner({ isBannerVisible, setIsBannerVisible }: BannerProps) {
  if (!isBannerVisible) return null;

  return (
    <div className="banner-animate fixed bg-[#507084] h-[58px] left-0 top-0 w-full z-50">
      <div className="max-w-screen-2xl mx-auto px-4 pr-12 h-full">
        <div className="flex flex-row gap-2 sm:gap-3 lg:gap-3.5 items-center justify-center h-full">
          {/* Limited Tag - Hidden on mobile */}
          <div className="hidden min-[600px]:flex bg-white h-6 rounded-[20px] px-3 items-center flex-shrink-0">
            <p className="font-['Avenir_Next'] font-semibold text-black text-[12px] tracking-[1.68px] uppercase whitespace-nowrap">
              Limited
            </p>
          </div>
          
          {/* Main Text */}
          <div className="text-white font-['Avenir_Next'] text-center flex-shrink-0">
            <span className="hidden sm:inline text-[14px]">Trade free for the next 12 hours</span>
            <span className="sm:hidden text-[12px]">Trade free for 12h</span>
          </div>
          
          {/* CTA Button */}
          <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[999px] px-3 sm:px-4 py-2 hover:bg-[rgba(255,255,255,0.2)] transition-colors cursor-pointer flex-shrink-0">
            <p className="text-white text-[13px] sm:text-[14px] lg:text-[16px] font-['Avenir_Next'] font-medium tracking-[-0.9px] whitespace-nowrap">
              Claim Offer
            </p>
          </div>
        </div>
      </div>
      
      {/* Close Button */}
      <button 
        onClick={() => setIsBannerVisible(false)}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded-full transition-colors"
        aria-label="Close banner"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 32 32">
          <path d="M16.0004 14.6265L11.8521 10.4782L10.4785 11.8518L14.6268 16.0001L10.4785 20.1484L11.8521 21.522L16.0004 17.3737L20.1487 21.522L21.5223 20.1484L17.374 16.0001L21.5223 11.8518L20.1487 10.4782L16.0004 14.6265Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
} 