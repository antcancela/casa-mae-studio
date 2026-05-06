import { useInView } from '@/hooks/use-in-view';
import { useCountUp } from '@/hooks/use-count-up';

interface AnimatedStatProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

/**
 * A stat block that counts up from 0 to `end` when scrolled into view.
 */
export const AnimatedStat = ({ end, suffix = '', label, delay = 0 }: AnimatedStatProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const value = useCountUp({ end, enabled: inView, duration: 1800 });

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-display text-5xl md:text-7xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500 tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="text-lg opacity-90 tracking-wide">{label}</div>
    </div>
  );
};
