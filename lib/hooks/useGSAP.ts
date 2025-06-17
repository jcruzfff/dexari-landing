'use client';

import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Hook for GSAP animations
export const useGSAP = (
  callback: (context: { timeline: gsap.core.Timeline; selector: (selector: string) => Element[] }) => void,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      const selector = (selector: string) => 
        gsap.utils.toArray(selector, ref.current) as Element[];

      callback({ timeline, selector });
    }, ref.current);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

// Hook for scroll-triggered animations
export const useScrollTrigger = (
  animation: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current, animation, {
        ...animation,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...triggerOptions,
        },
      });
    }, ref.current);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

// Hook for entrance animations
export const useEntranceAnimation = (
  type: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' = 'fadeIn',
  options?: gsap.TweenVars,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const animations = {
      fadeIn: { opacity: 0, y: 30 },
      slideUp: { opacity: 0, y: 50 },
      slideLeft: { opacity: 0, x: -50 },
      slideRight: { opacity: 0, x: 50 },
      scaleIn: { opacity: 0, scale: 0.8 },
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        animations[type],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          ...options,
        }
      );
    }, ref.current);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

// Hook for stagger animations
export const useStaggerAnimation = (
  childSelector: string = '.stagger-item',
  animation?: gsap.TweenVars,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const children = gsap.utils.toArray(childSelector, ref.current);
      
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          ...animation,
        }
      );
    }, ref.current);

    return () => ctx.revert();
  }, dependencies);

  return ref;
};

// Hook for hover animations
export const useHoverAnimation = (
  hoverIn?: gsap.TweenVars,
  hoverOut?: gsap.TweenVars,
  dependencies: any[] = []
) => {
  const ref = useRef<HTMLElement>(null);

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
        ...hoverIn,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        ...hoverOut,
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, dependencies);

  return ref;
}; 