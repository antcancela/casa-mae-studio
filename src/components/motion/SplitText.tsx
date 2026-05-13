import { motion, useReducedMotion, type Variants } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  italicLast?: boolean;
  italicClassName?: string;
  delay?: number;
  stagger?: number;
}

/**
 * Per-word mask reveal — display headline animation.
 */
export const SplitText = ({
  text,
  className,
  italicLast = false,
  italicClassName = 'italic font-normal',
  delay = 0,
  stagger = 0.07,
}: SplitTextProps) => {
  const reduced = useReducedMotion();
  const words = text.trim().split(' ');

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduced ? 0 : stagger, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: { y: reduced ? 0 : '110%', opacity: reduced ? 1 : 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={container}
      aria-label={text}
    >
      {words.map((w, i) => {
        const isLast = i === words.length - 1;
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-baseline"
            aria-hidden="true"
            style={{ paddingBottom: '0.12em' }}
          >
            <motion.span
              className={`inline-block ${italicLast && isLast ? italicClassName : ''}`}
              variants={word}
            >
              {w}
              {i < words.length - 1 && '\u00A0'}
            </motion.span>
          </span>
        );
      })}
    </motion.h1>
  );
};
