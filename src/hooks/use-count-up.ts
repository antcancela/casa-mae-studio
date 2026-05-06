import { useEffect, useState } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  /** Only start counting when this becomes true (e.g. element is in view) */
  enabled?: boolean;
}

/**
 * Animate a number from `start` to `end` over `duration` ms once `enabled` becomes true.
 * Uses requestAnimationFrame with an ease-out curve for an elegant feel.
 */
export function useCountUp({ start = 0, end, duration = 1600, enabled = true }: UseCountUpOptions) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!enabled) return;

    // Respect reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return;
    }

    let raf = 0;
    const startTime = performance.now();
    const delta = end - start;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(start + delta * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, start, end, duration]);

  return value;
}
