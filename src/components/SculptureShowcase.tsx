import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import familyHome11 from '@/assets/gallery/family-home-11.jpg';
import { SplitText } from '@/components/motion/SplitText';

/**
 * Signature sculptural showcase — a featured project image scales from a small
 * thumbnail to a full-bleed sculpture as the user scrolls. Caption ledger
 * reveals on the side. Inspired by Transparent Speaker / B&O product reveals.
 */
export const SculptureShowcase = () => {
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.62, 1, 1.04]);
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], ['2.5rem', '0.75rem', '0.5rem']);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 2]);
  const captionY = useTransform(scrollYProgress, [0.1, 0.6], [40, -40]);
  const captionOpacity = useTransform(scrollYProgress, [0.05, 0.25, 0.85, 1], [0, 1, 1, 0.6]);

  const featured = {
    code: 'CM·024',
    title: locale === 'pt' ? 'Casa de Família' : 'Family Home',
    place: 'Lisboa, PT',
    year: '2024',
    discipline: locale === 'pt' ? 'Design de Interiores' : 'Interior Design',
  };

  return (
    <section
      ref={ref}
      className="relative bg-foreground text-background overflow-hidden py-24 md:py-40"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 md:mb-12"
        >
          <div className="h-px w-10 bg-background/60" />
          <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-background/70">
            {locale === 'pt' ? 'Projeto · 001' : 'Project · 001'}
          </span>
        </motion.div>

        <SplitText
          text={
            locale === 'pt'
              ? 'Cada casa de família é uma oportunidade.'
              : 'Each project is an object.'
          }
          italicLast
          className="text-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl mb-16 md:mb-24"
        />

        {/* Sculpture stage */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center min-h-[60vh]">
          {/* Left ledger */}
          <motion.dl
            style={{ y: reduced ? 0 : captionY, opacity: reduced ? 1 : captionOpacity }}
            className="col-span-12 md:col-span-3 space-y-4 md:space-y-6 font-mono text-xs md:text-sm order-2 md:order-1"
          >
            {[
              [locale === 'pt' ? 'Código' : 'Code', featured.code],
              [locale === 'pt' ? 'Local' : 'Place', featured.place],
              [locale === 'pt' ? 'Ano' : 'Year', featured.year],
              [locale === 'pt' ? 'Disciplina' : 'Discipline', featured.discipline],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-4 border-b border-background/15 pb-2">
                <dt className="uppercase tracking-[0.2em] text-background/50 text-[10px]">{k}</dt>
                <dd className="text-background">{v}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Image stage */}
          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <motion.div
              style={{
                scale: reduced ? 1 : scale,
                rotate: reduced ? 0 : rotate,
                borderRadius: reduced ? '0.75rem' : radius,
              }}
              className="relative w-full aspect-[4/3] overflow-hidden shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] will-change-transform"
            >
              <img
                src={familyHome11}
                alt={featured.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Specimen label */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-background/90 backdrop-blur px-3 py-1.5 rounded-full font-mono text-[10px] md:text-xs tracking-widest text-foreground">
                {featured.code}
              </div>
              {/* Title bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-background/70 mb-1">
                  {featured.discipline}
                </p>
                <h3 className="text-display text-2xl md:text-4xl text-background italic font-normal">
                  {featured.title}
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
