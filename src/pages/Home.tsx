import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { getOrganizationSchema, getServiceSchema } from '@/lib/structuredData';
import { AnimatedStat } from '@/components/AnimatedStat';
import { SculptureShowcase } from '@/components/SculptureShowcase';
import { Reveal } from '@/components/motion/Reveal';
import { Magnetic } from '@/components/motion/Magnetic';
import { Tilt } from '@/components/motion/Tilt';
import { SplitText } from '@/components/motion/SplitText';
import { Parallax } from '@/components/motion/Parallax';
import { motion } from 'framer-motion';
import joanaHero from '@/assets/joana-hero.jpg';
import familyHome11 from '@/assets/gallery/family-home-11.jpg';
import lisbonApt3 from '@/assets/gallery/lisbon-apt-3.jpg';
import riverApt3 from '@/assets/gallery/river-apt-3.jpg';
import kidsRoom3 from '@/assets/gallery/kids-room-3.jpg';
import kidsRoom5 from '@/assets/gallery/kids-room-5.jpg';
interface HomeProps {
  onBookCallClick: () => void;
}

// Architectural emblem: floor plan (turnkey)
const PlanIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <motion.g
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Outer walls */}
      <path d="M7 8 H41 V40 H7 Z" />
      {/* Internal divider */}
      <path d="M26 8 V24" />
      <path d="M7 24 H20" />
      <path d="M26 24 H41" />
      {/* Door swing arc (bottom-left room) */}
      <path d="M14 40 A6 6 0 0 0 20 34" />
      <path d="M14 40 V34" strokeDasharray="2 2" opacity={0.6} />
      {/* Window ticks */}
      <path d="M30 8 V11" />
      <path d="M36 8 V11" />
    </motion.g>
  </svg>
);

// Architectural emblem: elevation (consultancy)
const ElevationIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <motion.g
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Facade silhouette with pitched roof */}
      <path d="M8 38 V20 L24 10 L40 20 V38" />
      {/* Ground line */}
      <path d="M5 38 H43" />
      <path d="M5 41 H43" strokeDasharray="2 2" opacity={0.5} />
      {/* Door */}
      <path d="M21 38 V28 H27 V38" />
      {/* Windows */}
      <path d="M12 24 H17 V29 H12 Z" />
      <path d="M31 24 H36 V29 H31 Z" />
      {/* Window mullions */}
      <path d="M14.5 24 V29 M12 26.5 H17" opacity={0.7} />
      <path d="M33.5 24 V29 M31 26.5 H36" opacity={0.7} />
    </motion.g>
  </svg>
);

export const Home = ({
  onBookCallClick
}: HomeProps) => {
  const {
    t,
    locale
  } = useLanguage();
  const metaDescription = locale === 'pt' ? 'Design de interiores especializado em famílias e quartos de crianças. Atelier Casa Mãe cria espaços bonitos e funcionais para toda a família.' : 'Interior design specialized in families and children\'s rooms. Atelier Casa Mãe creates beautiful and functional spaces for the whole family.';
return <div className="min-h-screen overflow-hidden">
      <SEO title={locale === 'pt' ? 'Início' : 'Home'} description={metaDescription} jsonLd={[getOrganizationSchema(), getServiceSchema()]} />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle background gradient - Desktop */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 pointer-events-none hidden md:block" />
        
        {/* Mobile Layout: Image on top, text below */}
        <div className="md:hidden">
          {/* Full-width image */}
          <div className="relative h-[50vh] w-full overflow-hidden">
            <img 
              src={joanaHero}
              alt="Joana Leitão - Interior designer"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>
          
          {/* Mobile content below image */}
          <div className="px-4 py-8 -mt-8 relative z-10">
            <div role="heading" aria-level={1} className="text-display text-3xl sm:text-4xl font-semibold leading-[1.1] animate-fade-in-up mb-5">
              {t.home.hero.headline}
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              {t.home.hero.subheadline}
            </p>
            <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" onClick={onBookCallClick} className="group shadow-lg hover:shadow-xl transition-all duration-300 w-full shine-cta press-tactile">
                {t.home.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:bg-primary/5 transition-colors duration-300 w-full">
                <Link to="/work">{t.home.hero.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout: Premium Family Atelier */}
        <div className="hidden md:flex min-h-[90vh] items-center relative z-10">
          {/* Decorative blurred background accent */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/40 rounded-full blur-[120px] opacity-60 -z-10 pointer-events-none" />
          <div className="absolute -top-32 -left-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

          <div className="container mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Copy */}
              <div className="lg:col-span-6 space-y-9 animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-primary font-semibold tracking-[0.2em] text-[11px] uppercase">
                    {locale === 'pt' ? 'Atelier Casa Mãe' : 'Atelier Casa Mãe'}
                  </span>
                </div>

                <SplitText
                  text={t.home.hero.headline}
                  italicLast
                  className="text-display text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight text-foreground"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg"
                >
                  {t.home.hero.subheadline}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <Magnetic strength={0.25}>
                    <Button
                      size="lg"
                      onClick={onBookCallClick}
                      className="group rounded-2xl px-10 py-6 text-base font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-500 shine-cta press-tactile"
                    >
                      {t.home.hero.primaryCta}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Magnetic>

                  <Link to="/work" className="flex items-center gap-3 text-foreground font-semibold group py-2">
                    <span className="border-b border-foreground/20 group-hover:border-primary transition-colors pb-1">
                      {t.home.hero.secondaryCta}
                    </span>
                    <span className="w-10 h-10 rounded-full border border-foreground/15 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              </div>

              {/* Right Column: Sculpture composition */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 relative h-[640px] flex items-center justify-end"
                style={{ perspective: 1200 }}
              >
                <Tilt max={6} className="relative w-[88%] h-[88%] z-10">
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                    <img
                      src={joanaHero}
                      alt="Joana Leitão - Interior designer specializing in family-friendly spaces"
                      width={1600}
                      height={1800}
                      fetchPriority="high"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 to-transparent" />
                  </div>
                </Tilt>

                <motion.div
                  initial={{ opacity: 0, x: -40, rotate: -8 }}
                  animate={{ opacity: 1, x: 0, rotate: -3 }}
                  transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 -left-4 w-[240px] h-[240px] rounded-[2rem] overflow-hidden border-[10px] border-background shadow-2xl z-20 hover:scale-[1.04] hover:-rotate-1 transition-all duration-500"
                >
                  <img src={kidsRoom5} alt="Children's room interior detail" className="w-full h-full object-cover" loading="lazy" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-12 -left-6 glass-card px-7 py-5 rounded-[1.75rem] shadow-xl z-30 animate-float max-w-[220px]"
                >
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                  </div>
                  <p className="text-foreground text-sm font-bold tracking-tight mb-1">
                    {locale === 'pt' ? 'Espaços com Alma' : 'Spaces with Soul'}
                  </p>
                  <p className="text-muted-foreground text-[11px] leading-snug">
                    {locale === 'pt' ? 'Onde a funcionalidade encontra o afeto.' : 'Where function meets affection.'}
                  </p>
                </motion.div>

                <div className="absolute -z-10 top-4 right-0 w-56 h-56 border border-primary/15 rounded-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Sculpture Showcase — featured project as object */}
      <SculptureShowcase />


      <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground relative overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.14),transparent_55%)]"
        />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center" y={20}>
            <AnimatedStat end={50} suffix="+" label={t.home.stats.projects} delay={0} />
            <AnimatedStat end={15} label={t.home.stats.years} delay={120} />
            <AnimatedStat end={40} suffix="+" label={t.home.stats.families} delay={240} />
          </Reveal>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 via-secondary/20 to-secondary/30 relative overflow-hidden">
        <Parallax speed={-0.15} className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <Parallax speed={0.18} className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-6xl px-4 relative">
          {/* Lead-in heading */}
          <Reveal blur className="mb-12 md:mb-20">
            <SplitText
              text={t.home.intro.leadIn}
              italicLast
              className="block text-center text-display text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.15] px-2"
            />
          </Reveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18, delayChildren: 0.05 } },
            }}
          >
            {[
              { num: '01', title: t.home.intro.audience1.title, items: t.home.intro.list1, rotate: 'md:rotate-3' },
              { num: '02', title: t.home.intro.audience2.title, items: t.home.intro.list2, rotate: 'md:-rotate-3' },
            ].map((card, cIdx) => (
              <motion.div
                key={card.num}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Tilt max={4} className="h-full">
                  <Card className="relative h-full border border-border/40 shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.18)] hover:shadow-[0_40px_90px_-30px_hsl(var(--primary)/0.3)] bg-card/85 backdrop-blur-md transition-all duration-700 rounded-3xl md:overflow-visible overflow-hidden group">
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-1 md:h-1.5 origin-left bg-gradient-to-r ${cIdx === 0 ? 'from-primary to-primary/60' : 'from-primary/60 to-primary'}`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.4 + cIdx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <CardContent className="p-6 md:p-10 pt-8 md:pt-10">
                      <motion.div
                        whileHover={{ rotate: cIdx === 0 ? 8 : -8, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className={`inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-bold text-base md:text-xl shadow-xl mb-4 md:mb-0 md:absolute md:-top-5 md:-left-5 ${card.rotate}`}
                      >
                        {card.num}
                      </motion.div>
                      <h3 className="text-display text-xl sm:text-2xl md:text-3xl font-semibold mb-5 md:mb-8 text-primary md:mt-4">
                        {card.title}
                      </h3>
                      <motion.ul
                        className="space-y-3 md:space-y-5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.3 } } }}
                      >
                        {card.items.map((item, idx) => (
                          <motion.li
                            key={idx}
                            variants={{
                              hidden: { opacity: 0, x: -12 },
                              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                            }}
                            className="flex items-start gap-3 md:gap-4 text-foreground/80 leading-relaxed text-sm md:text-base"
                          >
                            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <Reveal>
              <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                {locale === 'pt' ? 'Trabalhos Selecionados' : 'Selected Works'}
              </p>
            </Reveal>
            <Reveal delay={0.05} blur>
              <SplitText
                text={t.home.portfolio.title}
                italicLast
                className="block text-display text-3xl md:text-5xl font-semibold mb-6"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t.home.portfolio.description}
              </p>
            </Reveal>
          </div>

          {/* Project thumbnails grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { img: familyHome11, alt: 'Modern family home interior design with functional spaces for children and parents', label: t.home.portfolio.projects.familyHome, code: 'CM·011' },
              { img: lisbonApt3, alt: 'Contemporary apartment design in Lisbon with family-friendly layout', label: t.home.portfolio.projects.lisbonApt, code: 'CM·018' },
              { img: riverApt3, alt: 'Family apartment interior with river views, designed for comfort and functionality', label: t.home.portfolio.projects.riverApt, code: 'CM·022' },
              { img: kidsRoom3, alt: "Children's room design promoting independence and organization with playful aesthetics", label: t.home.portfolio.projects.kidsRoom, code: 'CM·027' },
            ].map((p) => (
              <motion.div
                key={p.code}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.94 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Tilt max={6}>
                  <Link
                    to="/work"
                    className="group relative block overflow-hidden rounded-2xl md:rounded-3xl aspect-square shadow-[0_20px_50px_-20px_hsl(var(--foreground)/0.25)] hover:shadow-[0_40px_80px_-25px_hsl(var(--foreground)/0.4)] transition-shadow duration-700"
                  >
                    <motion.img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-3 left-3 md:top-4 md:left-4 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-background/90 bg-foreground/40 backdrop-blur-md px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {p.code}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="text-primary-foreground font-semibold text-base md:text-lg block">{p.label}</span>
                      <span className="font-mono text-[10px] tracking-widest uppercase text-background/70">
                        {locale === 'pt' ? 'Ver projeto →' : 'View project →'}
                      </span>
                    </div>
                  </Link>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>

          <Reveal delay={0.2} className="text-center">
            <Magnetic strength={0.25} className="inline-block">
              <Button size="lg" variant="outline" asChild className="group hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-full px-8 border-2">
                <Link to="/work">
                  {t.home.portfolio.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-xs mx-auto flex items-center gap-4">
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-transparent to-border origin-right"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-primary/50"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
          />
          <motion.div
            className="flex-1 h-px bg-gradient-to-l from-transparent to-border origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 md:mb-20">
            <Reveal>
              <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                {locale === 'pt' ? 'Como Trabalhamos' : 'How We Work'}
              </p>
            </Reveal>
            <Reveal delay={0.05} blur>
              <SplitText
                text={t.home.process.title}
                italicLast
                className="block text-display text-3xl md:text-5xl font-semibold mb-6"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t.home.process.description}
              </p>
            </Reveal>
          </div>

          {/* Two Service Paths Side by Side */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          >
            {[
              { icon: Wrench, title: t.home.process.paths.turnkey.title, subtitle: t.home.process.paths.turnkey.subtitle, steps: t.home.process.paths.turnkey.steps, cta: t.home.process.paths.turnkey.cta, floatDelay: 0 },
              { icon: Lightbulb, title: t.home.process.paths.consultancy.title, subtitle: t.home.process.paths.consultancy.subtitle, steps: t.home.process.paths.consultancy.steps, cta: t.home.process.paths.consultancy.cta, floatDelay: 0.5 },
            ].map((path) => {
              const Icon = path.icon;
              return (
                <motion.div
                  key={path.title}
                  variants={{
                    hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Tilt max={3}>
                    <Card className="border border-border/40 shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.2)] hover:shadow-[0_50px_100px_-30px_hsl(var(--primary)/0.25)] transition-all duration-700 rounded-3xl overflow-hidden bg-card/60 backdrop-blur-md group">
                      <CardContent className="p-8 md:p-10">
                        <div className="text-center mb-8">
                          <motion.div
                            whileHover={{ scale: 1.08, rotate: 6 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-5 animate-float shadow-inner"
                            style={{ animationDelay: `${path.floatDelay}s` }}
                          >
                            <Icon className="h-10 w-10 text-primary" />
                          </motion.div>
                          <h3 className="text-display text-2xl md:text-3xl font-bold mb-3 text-primary">{path.title}</h3>
                          <p className="text-muted-foreground">{path.subtitle}</p>
                        </div>
                        <motion.div
                          className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent mx-auto mb-8 origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.3 }}
                        />
                        <motion.div
                          className="space-y-6 mb-10 relative"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } } }}
                        >
                          <motion.div
                            className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full origin-top"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          />
                          {path.steps.map((step, idx) => (
                            <motion.div
                              key={idx}
                              variants={{
                                hidden: { opacity: 0, x: -16 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                              }}
                              className="flex gap-5 relative group/step"
                            >
                              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm z-10 shadow-lg group-hover/step:scale-110 group-hover/step:rotate-6 transition-transform duration-300">
                                {idx + 1}
                              </div>
                              <div className="flex-1 pt-1">
                                <h4 className="font-semibold mb-1.5 text-foreground">{step.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                        <Magnetic strength={0.2}>
                          <Button className="w-full group/btn shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl" size="lg" onClick={onBookCallClick}>
                            {path.cta}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                          </Button>
                        </Magnetic>
                      </CardContent>
                    </Card>
                  </Tilt>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/10 via-secondary/20 to-secondary/30 relative overflow-hidden">
        <Parallax speed={-0.12} className="absolute top-10 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <Reveal blur className="mb-16 md:mb-20 text-center">
            <SplitText
              text={t.home.testimonials.title}
              italicLast
              className="block text-display text-3xl md:text-5xl font-semibold"
            />
          </Reveal>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -8% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {t.home.testimonials.items.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Tilt max={4} className="h-full">
                  <Card className="h-full border border-border/40 shadow-[0_20px_50px_-25px_hsl(var(--foreground)/0.18)] hover:shadow-[0_40px_80px_-25px_hsl(var(--primary)/0.25)] transition-all duration-700 rounded-3xl bg-card/85 backdrop-blur-md group">
                    <CardContent className="p-8 md:p-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
                        className="text-7xl text-primary/20 font-serif leading-none mb-4 group-hover:text-primary/30 transition-colors duration-500"
                      >
                        "
                      </motion.div>
                      <p className="text-foreground/80 mb-6 italic leading-relaxed text-lg -mt-8">{testimonial.text}</p>
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-10 h-0.5 bg-primary/40 rounded-full origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.4 + idx * 0.1 }}
                        />
                        <p className="text-sm font-medium text-foreground">
                          {testimonial.author}
                          {testimonial.lang && (
                            <span className="ml-2 text-xs text-muted-foreground">
                              ({testimonial.lang.toUpperCase()})
                            </span>
                          )}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative py-28 md:py-36 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_55%)]"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.12),transparent_55%)]"
        />
        <Parallax speed={0.15} className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="animate-float inline-block mb-8"
          >
            <Users className="h-20 w-20 mx-auto opacity-90" />
          </motion.div>
          <Reveal blur className="mb-10">
            <SplitText
              text={t.home.ctaBand.title}
              italicLast
              className="block text-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-4xl mx-auto"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <Magnetic strength={0.3} className="inline-block">
              <Button size="lg" variant="secondary" onClick={onBookCallClick} className="group shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg px-10 py-7 h-auto rounded-2xl shine-cta press-tactile">
                {t.home.ctaBand.cta}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </section>
    </div>;
};