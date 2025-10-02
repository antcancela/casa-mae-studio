import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import joanaHero from '@/assets/joana-hero.jpg';

interface HomeProps {
  onBookCallClick: () => void;
}

export const Home = ({ onBookCallClick }: HomeProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-semibold animate-fade-in">
                Sou a Joana Leitão, designer de interiores.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t.home.hero.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={onBookCallClick}>
                  {t.home.hero.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/work">{t.home.hero.secondaryCta}</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={joanaHero}
                alt="Joana Leitão, designer de interiores"
                className="w-full h-auto rounded-lg shadow-elegant animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Nova Fase */}
            <Card className="border-none shadow-elegant bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
                  Para quem vai entrar numa nova fase:
                </h3>
                <ul className="space-y-4">
                  {t.home.intro.list1.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Card 2: Casa Adaptada */}
            <Card className="border-none shadow-elegant bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
                  Para quem quer uma casa mais adaptada à família:
                </h3>
                <ul className="space-y-4">
                  {t.home.intro.list2.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display text-3xl md:text-4xl font-semibold mb-4">
              {t.home.portfolio.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.home.portfolio.description}
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/work">
                {t.home.portfolio.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-display text-3xl md:text-4xl font-semibold text-center mb-12">
            {t.home.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.home.testimonials.items.map((testimonial, idx) => (
              <Card key={idx} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm font-medium text-foreground">
                    — {testimonial.author}
                    {testimonial.lang && (
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({testimonial.lang.toUpperCase()})
                      </span>
                    )}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display text-3xl md:text-4xl font-semibold mb-6">
            {t.home.ctaBand.title}
          </h2>
          <Button
            size="lg"
            variant="secondary"
            onClick={onBookCallClick}
          >
            {t.home.ctaBand.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};
