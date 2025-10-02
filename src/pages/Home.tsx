import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight, Home as HomeIcon, Briefcase, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import joanaHero from '@/assets/joana-hero.jpg';
import familyHome11 from '@/assets/gallery/family-home-11.jpg';
import lisbonApt3 from '@/assets/gallery/lisbon-apt-3.jpg';
import riverApt3 from '@/assets/gallery/river-apt-3.jpg';
import kidsRoom3 from '@/assets/gallery/kids-room-3.jpg';

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
                {t.home.hero.headline}
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
                alt="Joana Leitão - Interior designer specializing in family-friendly spaces and children's rooms"
                className="w-full h-auto rounded-lg shadow-elegant animate-fade-in"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">{t.home.stats.projects}</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">{t.home.stats.years}</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl md:text-6xl font-bold mb-2">40+</div>
              <div className="text-lg opacity-90">{t.home.stats.families}</div>
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
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
          
          {/* Project thumbnails grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            <Link to="/work" className="group relative overflow-hidden rounded-lg aspect-square shadow-lg hover:shadow-xl transition-all">
              <img 
                src={familyHome11} 
                alt="Modern family home interior design with functional spaces for children and parents"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <span className="text-white font-semibold p-4 w-full">{t.home.portfolio.projects.familyHome}</span>
              </div>
            </Link>
            <Link to="/work" className="group relative overflow-hidden rounded-lg aspect-square shadow-lg hover:shadow-xl transition-all">
              <img 
                src={lisbonApt3} 
                alt="Contemporary apartment design in Lisbon with family-friendly layout"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <span className="text-white font-semibold p-4 w-full">{t.home.portfolio.projects.lisbonApt}</span>
              </div>
            </Link>
            <Link to="/work" className="group relative overflow-hidden rounded-lg aspect-square shadow-lg hover:shadow-xl transition-all">
              <img 
                src={riverApt3} 
                alt="Family apartment interior with river views, designed for comfort and functionality"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <span className="text-white font-semibold p-4 w-full">{t.home.portfolio.projects.riverApt}</span>
              </div>
            </Link>
            <Link to="/work" className="group relative overflow-hidden rounded-lg aspect-square shadow-lg hover:shadow-xl transition-all">
              <img 
                src={kidsRoom3} 
                alt="Children's room design promoting independence and organization with playful aesthetics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <span className="text-white font-semibold p-4 w-full">{t.home.portfolio.projects.kidsRoom}</span>
              </div>
            </Link>
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

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-display text-3xl md:text-4xl font-semibold mb-4">
              {t.home.process.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.home.process.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {t.home.process.steps.map((step, idx) => {
              const icons = [Briefcase, Sparkles, HomeIcon];
              const Icon = icons[idx];
              return (
                <Card 
                  key={idx} 
                  className="border-none shadow-lg hover:shadow-xl transition-all animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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
      <section className="relative py-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-display text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            {t.home.ctaBand.title}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t.home.hero.subheadline}
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={onBookCallClick}
            className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg px-8 py-6 h-auto"
          >
            {t.home.ctaBand.cta}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};
