'use client';

import Image from 'next/image';

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
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#202022]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="max-w-[1224px] mx-auto">
          
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <h2 className="text-white text-lg font-['Avenir_Next'] font-medium mb-8 tracking-[0.1px]">
              Backed by:
            </h2>
            
            {/* Investment Firms */}
            <div className="mb-8">
              {/* Desktop Layout */}
              <div className="hidden lg:block">
                <div className="flex flex-wrap items-center gap-8 lg:gap-11 mb-6">
                  {/* LED - Prelude */}
                  <div className="flex flex-col gap-2.5">
                    <span className="text-[#b38d5f] text-sm font-['Avenir_Next'] font-medium tracking-[0.1px]">
                      LED
                    </span>
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
                    <span className="text-[#b38d5f] text-sm font-['Avenir_Next'] font-medium tracking-[0.1px]">
                      CO-LED
                    </span>
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
              <div className="lg:hidden">
                {/* LED - Prelude */}
                <div className="mb-6">
                  <span className="text-[#b38d5f] text-sm font-['Avenir_Next'] font-medium tracking-[0.1px] block mb-2.5">
                    LED
                  </span>
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
                  <span className="text-[#b38d5f] text-sm font-['Avenir_Next'] font-medium tracking-[0.1px] block mb-2.5">
                    CO-LED
                  </span>
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
                  <span className="text-[#b38d5f] text-sm font-['Avenir_Next'] font-medium tracking-[0.1px] block mb-2.5">
                    WITH EARLY SUPPORT FROM
                  </span>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="h-[24px] w-[120px] flex items-center justify-center">
                      <Image
                        src="/infinite-icon.svg"
                        alt="Infinite Field"
                        width={120}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="h-[24px] w-[63px] flex items-center justify-center">
                      <Image
                        src="/kiln-icon.svg"
                        alt="Kiln"
                        width={63}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="h-[25px] w-[156px] flex items-center justify-center">
                      <Image
                        src="/binance-icon.svg"
                        alt="Binance.US"
                        width={156}
                        height={25}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Backers */}
          
          {/* Desktop & Tablet Layout (480px and up) */}
          <div className="hidden min-[480px]:flex min-[480px]:flex-wrap min-[480px]:gap-4">
            {backers.map((backer, index) => (
              <div
                key={index}
                className="bg-[#373737] rounded-[21px] flex items-center gap-2.5 pl-[5.5px] pr-4 py-[5.5px] h-10"
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
            <div className="bg-[#373737] rounded-[21px] flex items-center justify-center px-4 py-[5.5px] h-10 w-[181px]">
              <span className="text-white text-base font-['Avenir_Next'] whitespace-nowrap">
                more coming soon..
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Staggered effect only below 480px */}
      <div className="max-[479px]:block hidden relative overflow-hidden w-full">
        {/* Row 1 - Centered */}
        <div className="flex gap-[10px] justify-center mb-[10px] px-4">
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
        <div className="flex gap-[10px] mb-[10px] relative" style={{ marginLeft: '-20px' }}>
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
        <div className="flex gap-[10px] justify-end mb-[10px] relative" style={{ marginRight: '-20px' }}>
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
        <div className="flex gap-[10px] mb-[10px] relative" style={{ marginLeft: '-30px' }}>
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
        <div className="flex gap-[10px] justify-center px-4">
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