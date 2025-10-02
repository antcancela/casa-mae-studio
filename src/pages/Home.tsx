import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  onBookCallClick: () => void;
}

export const Home = ({ onBookCallClick }: HomeProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in">
            {t.home.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.home.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={onBookCallClick}>
              {t.home.hero.primaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/work">{t.home.hero.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground/90 mb-6">{t.home.intro.p1}</p>
            
            <p className="text-lg text-foreground/90 mb-4">{t.home.intro.p2}</p>
            <ul className="space-y-2 mb-6">
              {t.home.intro.list1.map((item, idx) => (
                <li key={idx} className="text-foreground/80">{item}</li>
              ))}
            </ul>
            
            <p className="text-lg text-foreground/90 mb-4">{t.home.intro.p3}</p>
            <ul className="space-y-2">
              {t.home.intro.list2.map((item, idx) => (
                <li key={idx} className="text-foreground/80">{item}</li>
              ))}
            </ul>
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
