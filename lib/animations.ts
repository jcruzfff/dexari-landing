import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Common animation configurations
export const animationConfig = {
  ease: 'power2.out',
  duration: 0.6,
  stagger: 0.1,
};

// Fade in animation
export const fadeIn = (element: string | Element, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Fade in with stagger for multiple elements
export const fadeInStagger = (elements: string | Element[], options?: gsap.TweenVars) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      stagger: animationConfig.stagger,
      ...options,
    }
  );
};

// Scale in animation
export const scaleIn = (element: string | Element, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Slide in from left
export const slideInLeft = (element: string | Element, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Slide in from right
export const slideInRight = (element: string | Element, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    { x: 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: animationConfig.duration,
      ease: animationConfig.ease,
      ...options,
    }
  );
};

// Scroll-triggered animation
export const scrollTriggerAnimation = (
  element: string | Element,
  animation: gsap.TweenVars,
  triggerOptions?: ScrollTrigger.Vars
) => {
  return gsap.fromTo(element, animation, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...triggerOptions,
    },
  });
};

// Parallax effect
export const parallax = (element: string | Element, speed: number = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
};

// Text reveal animation
export const textReveal = (element: string | Element, options?: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      ...options,
    }
  );
}; 