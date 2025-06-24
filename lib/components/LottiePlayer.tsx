'use client';

import { useEffect, useRef } from 'react';
import { DotLottie } from '@lottiefiles/dotlottie-web';

interface LottiePlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  speed?: number;
  className?: string;
  onLoad?: () => void;
  onComplete?: () => void;
  onError?: (error: Error) => void;
  width?: string | number;
  height?: string | number;
}

export const LottiePlayer = ({
  src,
  autoplay = true,
  loop = true,
  speed = 1,
  className = '',
  onLoad,
  onComplete,
  onError,
  width = '100%',
  height = '100%',
}: LottiePlayerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotLottieRef = useRef<DotLottie | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const dotLottie = new DotLottie({
      autoplay,
      loop,
      canvas: canvasRef.current,
      src,
      speed,
    });

    dotLottieRef.current = dotLottie;

    // Event listeners
    if (onLoad) {
      dotLottie.addEventListener('load', onLoad);
    }

    if (onComplete) {
      dotLottie.addEventListener('complete', onComplete);
    }

    if (onError) {
      dotLottie.addEventListener('loadError', () => {
        onError(new Error('Failed to load Lottie animation'));
      });
    }

    // Cleanup
    return () => {
      dotLottie.destroy();
    };
  }, [src, autoplay, loop, speed, onLoad, onComplete, onError]);

  return (
    <div 
      className={className}
      style={{ width, height }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

// Hook for controlling Lottie animations
export const useLottieControls = (playerRef: React.RefObject<{ play: () => void; pause: () => void; stop: () => void; setSpeed: (speed: number) => void }>) => {
  const play = () => playerRef.current?.play();
  const pause = () => playerRef.current?.pause();
  const stop = () => playerRef.current?.stop();
  const setSpeed = (speed: number) => playerRef.current?.setSpeed(speed);

  return { play, pause, stop, setSpeed };
}; 