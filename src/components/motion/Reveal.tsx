import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'span' | 'li' | 'header';
}

/**
 * Scroll-triggered reveal with optional blur. One-shot by default.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 36,
  blur = false,
  once = true,
  as = 'div',
}: RevealProps) => {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduced ? 0 : y,
      filter: blur && !reduced ? 'blur(10px)' : 'none',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.95,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
};
