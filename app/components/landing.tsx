'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Banner from './banner';
import Navbar from './navbar';
import HeroSection from './hero-section';
import FeatureSection from './feature-section';
import PartnersSection from './partners-section';
import TestimonialSection from './testimonial-section';
import AdvantageSection from './advantage-section';
import BackersSection from './backers-section';
import RoadmapSection from './roadmap-section';
import FooterSection from './footer-section';

export default function Landing() {
  const heroRef = useRef<HTMLElement>(null);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Banner animation
      gsap.fromTo('.banner-animate', 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      // Navigation animation
      gsap.fromTo('.nav-animate', 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: 'power2.out' }
      );

      // Hero content animation with stagger
      gsap.fromTo('.hero-title', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-subtitle', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, delay: 0.6, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-social', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, delay: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.hero-downloads', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, delay: 1.0, ease: 'power2.out' }
      );

      // Hero logos animation
      gsap.fromTo('.hero-logos', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, delay: 1.2, ease: 'power2.out' }
      );

      // Footer animation
      gsap.fromTo('.footer-animate', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6, delay: 1.4, ease: 'power2.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef} className="bg-[#202022] relative min-h-screen text-white overflow-x-hidden">
      <Banner isBannerVisible={isBannerVisible} setIsBannerVisible={setIsBannerVisible} />
      <Navbar isBannerVisible={isBannerVisible} />
      <HeroSection isBannerVisible={isBannerVisible} />
      <PartnersSection />
      <FeatureSection />
      <TestimonialSection />
      <AdvantageSection />
      <BackersSection />
      <RoadmapSection />
      <FooterSection />
    </main>
  );
} 