import { motion, useScroll, useTransform, useReducedMotion, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';

/**
 * Scroll-revealed technical artifacts: a procedurally drawn floor plan whose
 * strokes draw in (pathLength 0 → 1), elevation lines, and material swatches.
 * Communicates the technical craft behind each interior.
 */
export const TechnicalArtifacts = () => {
  const { locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const swatchY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const elevationX = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.6, ease, delay: 0.2 + i * 0.08 },
        opacity: { duration: 0.4, delay: 0.2 + i * 0.08 },
      },
    }),
  };

  const swatches = [
    { name: 'Bouclé', hex: '#E8DCC8' },
    { name: 'Carvalho', hex: '#B89876' },
    { name: 'Latão', hex: '#9C7A3A' },
    { name: 'Linho', hex: '#D4C9B5' },
    { name: 'Travertino', hex: '#C7B89C' },
    { name: 'Argila', hex: '#A66E4F' },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-primary" />
            <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary">
              {locale === 'pt' ? 'Bastidores' : 'Behind the design'}
            </span>
          </div>
          <h2 className="text-display text-3xl md:text-5xl font-semibold leading-tight">
            {locale === 'pt' ? (
              <>Plantas, alçados,{' '}
                <span className="italic font-normal">materiais.</span>
              </>
            ) : (
              <>Plans, elevations,{' '}
                <span className="italic font-normal">materials.</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground text-lg mt-5 leading-relaxed">
            {locale === 'pt'
              ? 'O trabalho técnico que transforma uma ideia num espaço habitado.'
              : 'The technical craft that turns an idea into a lived-in space.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Floor plan — animated draw */}
          <div className="col-span-12 lg:col-span-7 relative">
            <div className="relative aspect-[4/3] bg-card rounded-2xl border border-border/60 overflow-hidden shadow-xl">
              {/* paper grain */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, hsl(var(--muted-foreground)/0.12) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--muted-foreground)/0.12) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <motion.svg
                viewBox="0 0 600 450"
                className="absolute inset-0 w-full h-full text-foreground"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-15% 0px' }}
              >
                {/* Outer walls */}
                {[
                  'M40 40 L560 40',
                  'M560 40 L560 410',
                  'M560 410 L40 410',
                  'M40 410 L40 40',
                  // interior partitions
                  'M40 220 L320 220',
                  'M320 40 L320 320',
                  'M320 320 L560 320',
                  'M210 220 L210 410',
                  'M420 40 L420 220',
                ].map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="currentColor"
                    strokeWidth={3}
                    fill="none"
                    strokeLinecap="square"
                    custom={i}
                    variants={draw}
                  />
                ))}
                {/* Doors / arcs */}
                {[
                  'M180 220 A 30 30 0 0 1 210 250',
                  'M390 320 A 30 30 0 0 0 420 290',
                  'M260 40 A 25 25 0 0 1 285 65',
                ].map((d, i) => (
                  <motion.path
                    key={`a${i}`}
                    d={d}
                    stroke="currentColor"
                    strokeWidth={1.5}
                    fill="none"
                    custom={9 + i}
                    variants={draw}
                  />
                ))}
                {/* Furniture: bed, sofa, table */}
                {[
                  'M70 70 L160 70 L160 180 L70 180 Z', // bed
                  'M360 80 L540 80 L540 130 L360 130 Z', // sofa
                  'M380 240 L500 240 L500 290 L380 290 Z', // table
                  'M70 260 L180 260 L180 380 L70 380 Z', // sofa
                ].map((d, i) => (
                  <motion.path
                    key={`f${i}`}
                    d={d}
                    stroke="hsl(var(--primary))"
                    strokeWidth={1.5}
                    fill="hsl(var(--primary)/0.06)"
                    custom={12 + i}
                    variants={draw}
                  />
                ))}
                {/* Dimension ticks */}
                <motion.path
                  d="M40 425 L560 425"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth={0.8}
                  strokeDasharray="4 4"
                  custom={18}
                  variants={draw}
                />
              </motion.svg>

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span>{locale === 'pt' ? 'Planta · esc 1:50' : 'Plan · scale 1:50'}</span>
                <span>CM·024 / 01</span>
              </div>
            </div>
          </div>

          {/* Right column: elevation + swatches */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 md:gap-8">
            {/* Elevation */}
            <motion.div
              style={{ x: reduced ? 0 : elevationX }}
              className="relative aspect-[3/2] bg-card rounded-2xl border border-border/60 overflow-hidden shadow-lg"
            >
              <motion.svg
                viewBox="0 0 400 260"
                className="absolute inset-0 w-full h-full text-foreground"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-15% 0px' }}
              >
                {/* Ground line */}
                <motion.path d="M20 230 L380 230" stroke="currentColor" strokeWidth={2} fill="none" custom={0} variants={draw} />
                {/* Building outline */}
                <motion.path d="M40 230 L40 60 L360 60 L360 230" stroke="currentColor" strokeWidth={2.5} fill="none" custom={1} variants={draw} />
                {/* Roofline */}
                <motion.path d="M30 60 L200 20 L370 60" stroke="currentColor" strokeWidth={2.5} fill="none" custom={2} variants={draw} />
                {/* Windows */}
                {[80, 150, 240, 310].map((x, i) => (
                  <motion.rect
                    key={i}
                    x={x} y={100} width={40} height={70}
                    stroke="currentColor" strokeWidth={1.5} fill="none"
                    custom={3 + i} variants={draw}
                  />
                ))}
                {/* Door */}
                <motion.rect x={185} y={150} width={30} height={80} stroke="hsl(var(--primary))" strokeWidth={2} fill="hsl(var(--primary)/0.08)" custom={8} variants={draw} />
              </motion.svg>
              <div className="absolute bottom-3 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>{locale === 'pt' ? 'Alçado Sul' : 'South elevation'}</span>
                <span>02</span>
              </div>
            </motion.div>

            {/* Material swatches */}
            <motion.div
              style={{ y: reduced ? 0 : swatchY }}
              className="bg-card rounded-2xl border border-border/60 p-5 md:p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                <span>{locale === 'pt' ? 'Paleta de materiais' : 'Material palette'}</span>
                <span>03</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {swatches.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4 }}
                    className="group cursor-default"
                  >
                    <div
                      className="aspect-square rounded-xl shadow-inner ring-1 ring-foreground/5 transition-transform duration-500 group-hover:scale-[1.04]"
                      style={{ background: s.hex }}
                    />
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {s.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
