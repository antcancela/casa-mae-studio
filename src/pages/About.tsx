import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageContext';
import joanaPortrait from '@/assets/joana-portrait.jpg';
import { SEO } from '@/components/SEO';
import { getPersonSchema, getBreadcrumbSchema } from '@/lib/structuredData';
import { useInView } from '@/hooks/use-in-view';

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
    <div className="min-h-screen py-16">
      <SEO title={locale === 'pt' ? 'Sobre' : 'About'} description={metaDescription} jsonLd={[getPersonSchema(), breadcrumbSchema]} />
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-display text-4xl md:text-5xl font-semibold mb-16 text-center animate-fade-in-up">
          {t.about.title}
        </h1>

        {/* Introduction with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="group overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={joanaPortrait}
                alt="Joana Leitão"
                className="w-full h-auto object-cover img-zoom"
              />
            </div>
          </div>
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
          <Card className="mb-12 border-none shadow-2xl bg-secondary/10 hover-lift">
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
          <Card className="mb-12 border-none shadow-2xl bg-primary/5 hover-lift">
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
