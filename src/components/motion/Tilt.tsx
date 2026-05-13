import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ReactNode, useRef, MouseEvent } from 'react';

interface TiltProps {
  children: ReactNode;
  className?: string;
  max?: number;
}

/** Subtle 3D tilt on pointer move — sculpture-on-a-turntable feel. */
export const Tilt = ({ children, className, max = 8 }: TiltProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 18 });
  const sy = useSpring(y, { stiffness: 150, damping: 18 });
  const rotX = useTransform(sy, [-0.5, 0.5], [max, -max]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-max, max]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
