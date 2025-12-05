import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight, Users, CheckCircle2, Wrench, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { getOrganizationSchema, getServiceSchema } from '@/lib/structuredData';
import joanaHero from '@/assets/joana-hero.jpg';
import familyHome11 from '@/assets/gallery/family-home-11.jpg';
import lisbonApt3 from '@/assets/gallery/lisbon-apt-3.jpg';
import riverApt3 from '@/assets/gallery/river-apt-3.jpg';
import kidsRoom3 from '@/assets/gallery/kids-room-3.jpg';
interface HomeProps {
  onBookCallClick: () => void;
}
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
          {/* Full-width parallax image */}
          <div 
            className="relative h-[50vh] w-full overflow-hidden"
            style={{
              backgroundImage: `url(${joanaHero})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
          </div>
          
          {/* Mobile content below image */}
          <div className="px-4 py-8 -mt-8 relative z-10">
            <h1 className="text-display text-3xl sm:text-4xl font-semibold leading-[1.1] animate-fade-in-up mb-5">
              {t.home.hero.headline}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              {t.home.hero.subheadline}
            </p>
            <div className="flex flex-col gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" onClick={onBookCallClick} className="group shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                {t.home.hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:bg-primary/5 transition-colors duration-300 w-full">
                <Link to="/work">{t.home.hero.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Desktop Layout: Side by side */}
        <div className="hidden md:flex min-h-[85vh] items-center relative z-10">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] animate-fade-in-up">
                  {t.home.hero.headline}
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                  {t.home.hero.subheadline}
                </p>
                <div className="flex flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <Button size="lg" onClick={onBookCallClick} className="group shadow-lg hover:shadow-xl transition-all duration-300">
                    {t.home.hero.primaryCta}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" asChild className="hover:bg-primary/5 transition-colors duration-300">
                    <Link to="/work">{t.home.hero.secondaryCta}</Link>
                  </Button>
                </div>
              </div>
              
              {/* Desktop Image */}
              <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 to-accent/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={joanaHero} 
                      alt="Joana Leitão - Interior designer specializing in family-friendly spaces and children's rooms" 
                      className="relative w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700 ease-out" 
                      loading="eager" 
                    />
                  </div>
                  {/* Decorative frame accent */}
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
                  <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-primary/10 rounded-xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary/95 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto text-center">
            <div className="animate-fade-in group">
              <div className="text-display text-5xl md:text-7xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500">50+</div>
              <div className="text-lg opacity-90 tracking-wide">{t.home.stats.projects}</div>
            </div>
            <div className="animate-fade-in group" style={{ animationDelay: '0.15s' }}>
              <div className="text-display text-5xl md:text-7xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500">15</div>
              <div className="text-lg opacity-90 tracking-wide">{t.home.stats.years}</div>
            </div>
            <div className="animate-fade-in group" style={{ animationDelay: '0.3s' }}>
              <div className="text-display text-5xl md:text-7xl font-bold mb-3 group-hover:scale-105 transition-transform duration-500">40+</div>
              <div className="text-lg opacity-90 tracking-wide">{t.home.stats.families}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-secondary/30">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Lead-in heading */}
          <h2 className="text-center text-display text-2xl sm:text-3xl md:text-5xl font-semibold mb-10 md:mb-16 animate-fade-in leading-tight px-2">
            {t.home.intro.leadIn}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Card 1: Nova Fase */}
            <Card className="relative border-0 shadow-xl bg-card/80 backdrop-blur-sm hover-lift animate-fade-in rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-primary to-primary/60" />
              <CardContent className="p-6 md:p-10 pt-8 md:pt-10">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-bold text-base md:text-xl shadow-lg mb-4 md:mb-0 md:absolute md:-top-5 md:-left-5 md:rotate-3">
                  01
                </div>
                <h3 className="text-display text-xl sm:text-2xl md:text-3xl font-semibold mb-5 md:mb-8 text-primary md:mt-4">
                  {t.home.intro.audience1.title}
                </h3>
                <ul className="space-y-3 md:space-y-5">
                  {t.home.intro.list1.map((item, idx) => <li key={idx} className="flex items-start gap-3 md:gap-4 text-foreground/80 leading-relaxed text-sm md:text-base">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>

            {/* Card 2: Casa Adaptada */}
            <Card className="relative border-0 shadow-xl bg-card/80 backdrop-blur-sm hover-lift animate-fade-in rounded-2xl overflow-hidden" style={{ animationDelay: '0.15s' }}>
              <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-primary/60 to-primary" />
              <CardContent className="p-6 md:p-10 pt-8 md:pt-10">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-bold text-base md:text-xl shadow-lg mb-4 md:mb-0 md:absolute md:-top-5 md:-left-5 md:-rotate-3">
                  02
                </div>
                <h3 className="text-display text-xl sm:text-2xl md:text-3xl font-semibold mb-5 md:mb-8 text-primary md:mt-4">
                  {t.home.intro.audience2.title}
                </h3>
                <ul className="space-y-3 md:space-y-5">
                  {t.home.intro.list2.map((item, idx) => <li key={idx} className="flex items-start gap-3 md:gap-4 text-foreground/80 leading-relaxed text-sm md:text-base">
                      <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-primary mt-0.5 md:mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl md:text-5xl font-semibold mb-6 animate-fade-in">
              {t.home.portfolio.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t.home.portfolio.description}
            </p>
          </div>
          
          {/* Project thumbnails grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14 max-w-6xl mx-auto">
            <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <img src={familyHome11} alt="Modern family home interior design with functional spaces for children and parents" className="w-full h-full object-cover img-zoom" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <span className="text-primary-foreground font-semibold p-5 w-full text-lg">{t.home.portfolio.projects.familyHome}</span>
              </div>
            </Link>
            <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img src={lisbonApt3} alt="Contemporary apartment design in Lisbon with family-friendly layout" className="w-full h-full object-cover img-zoom" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <span className="text-primary-foreground font-semibold p-5 w-full text-lg">{t.home.portfolio.projects.lisbonApt}</span>
              </div>
            </Link>
            <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img src={riverApt3} alt="Family apartment interior with river views, designed for comfort and functionality" className="w-full h-full object-cover img-zoom" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <span className="text-primary-foreground font-semibold p-5 w-full text-lg">{t.home.portfolio.projects.riverApt}</span>
              </div>
            </Link>
            <Link to="/work" className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img src={kidsRoom3} alt="Children's room design promoting independence and organization with playful aesthetics" className="w-full h-full object-cover img-zoom" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <span className="text-primary-foreground font-semibold p-5 w-full text-lg">{t.home.portfolio.projects.kidsRoom}</span>
              </div>
            </Link>
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button size="lg" variant="outline" asChild className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Link to="/work">
                {t.home.portfolio.cta}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Elegant Divider */}
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-xs mx-auto flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>

      {/* Process Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl md:text-5xl font-semibold mb-6 animate-fade-in">
              {t.home.process.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t.home.process.description}
            </p>
          </div>

          {/* Two Service Paths Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Turnkey Path */}
            <Card className="border-0 shadow-xl hover-lift animate-fade-in rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-5 animate-float">
                    <Wrench className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-display text-2xl md:text-3xl font-bold mb-3 text-primary">{t.home.process.paths.turnkey.title}</h4>
                  <p className="text-muted-foreground">{t.home.process.paths.turnkey.subtitle}</p>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent mx-auto mb-8" />
                <div className="space-y-6 mb-10 relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full" />
                  
                  {t.home.process.paths.turnkey.steps.map((step, idx) => <div key={idx} className="flex gap-5 relative group">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <h5 className="font-semibold mb-1.5 text-foreground">{step.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>)}
                </div>
                <Button className="w-full group shadow-lg hover:shadow-xl transition-all duration-300" size="lg" onClick={onBookCallClick}>
                  {t.home.process.paths.turnkey.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Consultancy Path */}
            <Card className="border-0 shadow-xl hover-lift animate-fade-in rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm" style={{ animationDelay: '0.15s' }}>
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 mb-5 animate-float" style={{ animationDelay: '0.5s' }}>
                    <Lightbulb className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-display text-2xl md:text-3xl font-bold mb-3 text-primary">{t.home.process.paths.consultancy.title}</h4>
                  <p className="text-muted-foreground">{t.home.process.paths.consultancy.subtitle}</p>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-transparent mx-auto mb-8" />
                <div className="space-y-6 mb-10 relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full" />
                  
                  {t.home.process.paths.consultancy.steps.map((step, idx) => <div key={idx} className="flex gap-5 relative group">
                      <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {idx + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <h5 className="font-semibold mb-1.5 text-foreground">{step.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>)}
                </div>
                <Button className="w-full group shadow-lg hover:shadow-xl transition-all duration-300" size="lg" onClick={onBookCallClick}>
                  {t.home.process.paths.consultancy.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-secondary/10 to-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-display text-3xl md:text-5xl font-semibold text-center mb-16 animate-fade-in">
            {t.home.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t.home.testimonials.items.map((testimonial, idx) => <Card key={idx} className="border-0 shadow-xl hover-lift animate-fade-in rounded-2xl bg-card/80 backdrop-blur-sm" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="text-6xl text-primary/20 font-serif leading-none mb-4">"</div>
                  <p className="text-foreground/80 mb-6 italic leading-relaxed text-lg -mt-8">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-0.5 bg-primary/40 rounded-full" />
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.author}
                      {testimonial.lang && <span className="ml-2 text-xs text-muted-foreground">
                          ({testimonial.lang.toUpperCase()})
                        </span>}
                    </p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="relative py-28 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float">
            <Users className="h-20 w-20 mx-auto mb-8 opacity-90" />
          </div>
          <h2 className="text-display text-3xl md:text-5xl lg:text-6xl font-bold mb-10 animate-fade-in leading-tight max-w-4xl mx-auto">
            {t.home.ctaBand.title}
          </h2>
          <Button size="lg" variant="secondary" onClick={onBookCallClick} className="group shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 text-lg px-10 py-7 h-auto rounded-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t.home.ctaBand.cta}
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>;
};