import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageContext';
import joanaPortrait from '@/assets/joana-portrait.jpg';
import { SEO } from '@/components/SEO';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { useInView } from '@/hooks/use-in-view';
import { PageHero } from '@/components/PageHero';

export const About = () => {
  const { t, locale } = useLanguage();

  const journey = useInView<HTMLDivElement>();
  const personal = useInView<HTMLDivElement>();
  const mission = useInView<HTMLDivElement>();

  const metaDescription = locale === 'pt'
    ? 'Conheça Joana Leitão, designer de interiores especializada em espaços familiares. Mais de 10 anos de experiência criando lares funcionais e bonitos.'
    : 'Meet Joana Leitão, interior designer specialized in family spaces. Over 10 years of experience creating functional and beautiful homes.';

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: typeof window !== 'undefined' ? `${window.location.origin}/` : '' },
    { name: locale === 'pt' ? 'Sobre' : 'About', url: typeof window !== 'undefined' ? window.location.href : '' },
  ]);

  return (
    <div className="min-h-screen py-16 overflow-hidden">
      <SEO title={locale === 'pt' ? 'Sobre' : 'About'} description={metaDescription} jsonLd={[getPersonSchema(), breadcrumbSchema]} />
      <div className="container mx-auto max-w-6xl px-4 relative">
        <div className="mb-20">
          <PageHero
            eyebrow="Atelier Casa Mãe"
            headline={t.about.title}
          />
        </div>

        {/* Introduction with layered image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-6 relative h-[520px] lg:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Main rotated portrait */}
            <div className="relative w-[88%] h-[92%] rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-700 z-10">
              <img
                src={joanaPortrait}
                alt="Joana Leitão"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating glass quote */}
            <div className="absolute bottom-6 -right-2 lg:right-2 glass-card px-6 py-4 rounded-[1.75rem] shadow-xl z-30 animate-float max-w-[240px]">
              <div className="flex gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
              </div>
              <p className="text-foreground text-sm font-bold tracking-tight mb-1">
                {locale === 'pt' ? 'Joana Leitão' : 'Joana Leitão'}
              </p>
              <p className="text-muted-foreground text-[11px] leading-snug">
                {locale === 'pt' ? 'Designer de Interiores' : 'Interior Designer'}
              </p>
            </div>

            {/* Decorative ring */}
            <div className="absolute -z-10 top-4 left-4 w-48 h-48 border border-primary/15 rounded-full" />
          </div>

          <div className="lg:col-span-6 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-foreground/90 leading-relaxed font-medium">
              {t.about.paragraphs[0]}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Journey section */}
        <div ref={journey.ref} className={`reveal ${journey.inView ? 'is-visible' : ''}`}>
          <Card className="mb-12 border-none shadow-2xl bg-secondary/10 hover-lift rounded-2xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-display text-2xl md:text-3xl font-semibold mb-6 text-primary">My Journey</h2>
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {t.about.paragraphs[2]}
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {t.about.paragraphs[3]}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal project section */}
        <div ref={personal.ref} className={`mb-12 reveal ${personal.inView ? 'is-visible' : ''}`}>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t.about.paragraphs[4]}
            </p>
          </div>
        </div>

        {/* Mission card */}
        <div ref={mission.ref} className={`reveal ${mission.inView ? 'is-visible' : ''}`}>
          <Card className="mb-12 border-none shadow-2xl bg-primary/5 hover-lift rounded-2xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
                Atelier Casa Mãe
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {t.about.paragraphs[5]}
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed italic border-l-4 border-primary pl-6">
                  {t.about.paragraphs[6]}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
