'use client';

export default function FeatureSection() {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#202022]">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        {/* Header Container */}
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <div className="max-w-[850px] mx-auto">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-['Avenir_Next'] font-medium mb-4 leading-tight tracking-[0.1px]">
              Pro-grade mobile trading. All onchain.
            </h2>
            <p className="text-[#888888] text-base sm:text-lg xl:text-[18px] max-w-[698px] mx-auto font-['Avenir_Next'] leading-relaxed">
              Dexari gives you the speed, depth, and precision of a top-tier platform. Self-custodial by design and powered by Hyperliquid's high-performance order book.
            </p>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-[1224px] mx-auto space-y-4">
          {/* Deep Liquidity Card */}
          <div className="bg-[#2b2b2b] rounded-[24px] lg:rounded-[36px] p-6 lg:p-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 max-w-[530px]">
                <div className="space-y-4">
                  <div className="space-y-2.5">
                    <p className="text-[#ffffff] text-sm lg:text-[18px] font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5">
                      deep Liquidity
                    </p>
                    <h3 className="text-[#ffffff] text-xl sm:text-2xl lg:text-[34px] font-['Avenir_Next'] font-medium leading-tight">
                      200+ markets. Up to 40x leverage
                    </h3>
                  </div>
                  <p className="text-[#888888] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed max-w-[453px]">
                    Access deep spot and perp liquidity with tight spreads and strong book depth, even during high volatility. Powered by Hyperliquid with $1.5T+ traded.
                  </p>
                </div>
              </div>
              <div className="bg-[#343434] h-[200px] lg:h-[264px] w-full lg:w-[407px] rounded-lg lg:rounded-none flex-shrink-0" />
            </div>
          </div>

          {/* Two Column Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Fast Execution Card */}
            <div className="bg-[#2b2b2b] rounded-[24px] lg:rounded-[36px] p-6 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[665px]">
              <div className="space-y-4 max-w-[508px]">
                <div className="space-y-2.5 max-w-[408px]">
                  <p className="text-[#ffffff] text-sm lg:text-[18px] font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5">
                    fast Execution
                  </p>
                  <h3 className="text-[#ffffff] text-xl sm:text-2xl lg:text-[34px] font-['Avenir_Next'] font-medium leading-tight">
                    Orders fill in under 300ms
                  </h3>
                </div>
                <p className="text-[#888888] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed">
                  Trade with low latency, low fees, and zero gas. Supports market, limit, TP/SL, stop, TWAP, and scale strategies.
                </p>
              </div>
              <div className="bg-[#343434] h-[200px] lg:h-[416px] w-full rounded-t-[24px] lg:rounded-t-[35px] mt-8" />
            </div>

            {/* Advanced Tools Card */}
            <div className="bg-[#2b2b2b] rounded-[24px] lg:rounded-[36px] p-6 lg:p-12 flex flex-col justify-between min-h-[400px] lg:min-h-[665px]">
              <div className="space-y-4 lg:space-y-[22px] max-w-[508px]">
                <div className="space-y-2.5">
                  <p className="text-[#ffffff] text-sm lg:text-[18px] font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5">
                    advanced Tools
                  </p>
                  <h3 className="text-[#ffffff] text-xl sm:text-2xl lg:text-[34px] font-['Avenir_Next'] font-medium leading-tight">
                    Pro charts, signals and alerts
                  </h3>
                </div>
                <p className="text-[#888888] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed">
                  Execute your edge with TradingView's advanced charts and get real-time alerts for fills, margin usage and new listings.
                </p>
              </div>
              <div className="bg-[#343434] h-[200px] lg:h-[416px] w-full rounded-t-[24px] lg:rounded-t-[35px] mt-8" />
            </div>
          </div>

          {/* Zero Friction Card */}
          <div className="bg-[#2b2b2b] rounded-[24px] lg:rounded-[36px] p-6 lg:p-12 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 max-w-[566px]">
                <div className="space-y-4">
                  <div className="space-y-2.5">
                    <p className="text-[#ffffff] text-sm lg:text-[18px] font-['Avenir_Next'] font-medium tracking-[1.5px] uppercase leading-5">
                      zero friction
                    </p>
                    <h3 className="text-[#ffffff] text-xl sm:text-2xl lg:text-[34px] font-['Avenir_Next'] font-medium leading-tight">
                      Fund easily. Move freely. Stay secure
                    </h3>
                  </div>
                  <p className="text-[#888888] text-base lg:text-[18px] font-['Avenir_Next'] font-medium leading-relaxed max-w-[471px]">
                    Deposit with card, bank, or crypto. Move funds between accounts without bridging steps. Stay self-custodial with MFA, secured by Turnkey.
                  </p>
                </div>
              </div>
              <div className="bg-[#18181a] h-[200px] lg:h-[357px] w-full lg:w-[499px] rounded-lg lg:rounded-none flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 