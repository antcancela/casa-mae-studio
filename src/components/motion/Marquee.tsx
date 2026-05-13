import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
  reverse?: boolean;
}

/** Infinite horizontal marquee. Children should be a single line of content. */
export const Marquee = ({ children, duration = 30, className, reverse = false }: MarqueeProps) => {
  const reduced = useReducedMotion();
  return (
    <div className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        animate={reduced ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        <div className="flex gap-12 shrink-0">{children}</div>
        <div className="flex gap-12 shrink-0" aria-hidden="true">{children}</div>
      </motion.div>
    </div>
  );
};
