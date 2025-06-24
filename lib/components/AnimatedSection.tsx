'use client';

import { useScrollTrigger, useEntranceAnimation, useStaggerAnimation } from '../hooks/useGSAP';
import { LottiePlayer } from './LottiePlayer';

interface AnimatedSectionProps {
  title: string;
  subtitle?: string;
  lottieUrl?: string;
  children?: React.ReactNode;
  className?: string;
}

export const AnimatedSection = ({
  title,
  subtitle,
  lottieUrl,
  children,
  className = '',
}: AnimatedSectionProps) => {
  // Animation refs
  const titleRef = useEntranceAnimation<HTMLHeadingElement>('fadeIn', { delay: 0.2 });
  const subtitleRef = useEntranceAnimation<HTMLParagraphElement>('fadeIn', { delay: 0.4 });
  const contentRef = useStaggerAnimation<HTMLDivElement>('.animate-item', { delay: 0.6 });
  const lottieRef = useScrollTrigger<HTMLDivElement>(
    { opacity: 0, scale: 0.8 },
    {
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: 1,
    }
  );

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 
              ref={titleRef}
              className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              {title}
            </h2>
            
            {subtitle && (
              <p 
                ref={subtitleRef}
                className="text-xl text-gray-600 mb-8"
              >
                {subtitle}
              </p>
            )}
            
            <div ref={contentRef}>
              {children}
            </div>
          </div>

          {/* Lottie Animation */}
          {lottieUrl && (
            <div ref={lottieRef} className="flex justify-center">
              <LottiePlayer
                src={lottieUrl}
                className="w-full max-w-md"
                autoplay
                loop
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Example usage component
export const ExampleAnimatedPage = () => {
  return (
    <div>
      <AnimatedSection
        title="Welcome to Dexari"
        subtitle="Experience the future of web animations"
        lottieUrl="https://lottie.host/embed/your-animation-id.json"
        className="bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="space-y-4">
          <div className="animate-item p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Feature 1</h3>
            <p className="text-gray-600">Description of your first feature</p>
          </div>
          <div className="animate-item p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Feature 2</h3>
            <p className="text-gray-600">Description of your second feature</p>
          </div>
          <div className="animate-item p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg">Feature 3</h3>
            <p className="text-gray-600">Description of your third feature</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}; 