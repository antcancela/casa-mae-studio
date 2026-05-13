import { motion, useScroll, useTransform, useReducedMotion, type MotionStyle } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxProps {
  children?: ReactNode;
  className?: string;
  /** range in px, e.g. 60 = ±60px */
  range?: number;
  direction?: 'up' | 'down';
  /** alternative to range/direction: -1..1, negative = up, positive = down. Multiplied by 200px */
  speed?: number;
  style?: MotionStyle;
}

export const Parallax = ({ children, className, range = 60, direction = 'up', speed, style }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const effectiveRange = speed !== undefined ? Math.abs(speed) * 200 : range;
  const factor = speed !== undefined ? Math.sign(speed) || -1 : direction === 'up' ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [effectiveRange * factor, -effectiveRange * factor]);

  return (
    <motion.div ref={ref} style={{ ...style, y: reduced ? 0 : y }} className={className}>
      {children}
    </motion.div>
  );
};
