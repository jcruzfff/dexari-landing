'use client';

import Image from 'next/image';

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
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#202022] overflow-hidden">
      {/* Desktop Background - Only show on xl screens and above */}
      <div className="hidden xl:block absolute inset-0 items-center justify-center" style={{ paddingTop: '120px' }}>
        <div className="relative w-[85%] h-[800px] xl:h-[900px] mx-auto">
          <Image
            src="/Advantage-pantheon.svg"
            alt="Dexari advantage background"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-1 lg:mb-4 relative z-20">
        <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-[48px] font-['Avenir_Next'] font-normal mb-6 lg:mb-8 leading-tight tracking-[0.1px]">
          The Dexari advantage
        </h2>
        
        {/* Learn More Button */}
        <button className="bg-[#e5dbb7] text-[#202022] px-8 py-3 rounded-full font-['Avenir_Next'] font-semibold text-base hover:bg-[#ddd0a3] transition-colors duration-200">
          Learn more
        </button>
      </div>

      {/* Mobile Image - Show as section element on screens below xl */}
      <div className="xl:hidden flex justify-center mb-[-18px] lg:mb-16 relative z-10">
        <div className="relative w-[100%] h-[370px] sm:h-[420px] lg:h-[540px]">
          <Image
            src="/advantage-pantheon-mobile.svg"
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
               className="absolute w-[250px]" 
               style={{ 
                 left: '0px',
                 top: '0px'
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
               className="absolute w-[250px]" 
               style={{ 
                 right: '0px',
                 top: '0px'
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
               className="absolute w-[250px]" 
               style={{ 
                 left: '0px',
                 bottom: '0px'
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
               className="absolute w-[250px]" 
               style={{ 
                 right: '0px',
                 bottom: '0px'
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
          <div className="xl:hidden relative z-10">
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