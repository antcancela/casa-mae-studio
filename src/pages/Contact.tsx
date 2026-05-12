import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/site';
import { SEO } from '@/components/SEO';
import { getBreadcrumbSchema } from '@/lib/structuredData';
import { PageHero } from '@/components/PageHero';

interface ContactProps {
  onBookCallClick: () => void;
}

export const Contact = ({ onBookCallClick }: ContactProps) => {
  const { t, locale } = useLanguage();

  const metaDescription = locale === 'pt'
    ? 'Entre em contacto com o Atelier Casa Mãe. Marque uma conversa de 30 minutos para discutir o seu projeto de design de interiores.'
    : 'Get in touch with Atelier Casa Mãe. Book a 30-minute conversation to discuss your interior design project.';

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: typeof window !== 'undefined' ? `${window.location.origin}/` : '' },
    { name: locale === 'pt' ? 'Contacto' : 'Contact', url: typeof window !== 'undefined' ? window.location.href : '' }
  ]);

  return (
    <div className="min-h-screen py-16 overflow-hidden">
      <SEO 
        title={locale === 'pt' ? 'Contacto' : 'Contact'}
        description={metaDescription}
        jsonLd={breadcrumbSchema}
      />
      <div className="container mx-auto max-w-4xl px-4 relative">
        <div className="mb-12">
          <PageHero
            eyebrow={locale === 'pt' ? 'Vamos Conversar' : "Let's Talk"}
            headline={t.contact.title}
            description={t.contact.lead}
          >
            <Button
              onClick={onBookCallClick}
              size="lg"
              className="group rounded-2xl px-10 py-6 text-base font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-500 shine-cta press-tactile"
            >
              {t.contact.cta}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </PageHero>
        </div>

        {/* Instagram glass card */}
        <div className="pt-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="glass-card rounded-2xl p-8 space-y-4 text-center hover-lift">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Instagram className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-display text-2xl font-semibold">
              {t.contact.instagram.title}
            </h2>
            <p className="text-muted-foreground">
              {t.contact.instagram.description}
            </p>
            <Button variant="outline" size="lg" asChild className="gap-2 rounded-2xl press-tactile">
              <a
                href="https://www.instagram.com/atelier_casamae/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                {t.contact.instagram.cta}
              </a>
            </Button>
          </div>
        </div>

        {/* Contact info */}
        <div className="pt-16 max-w-xl mx-auto animate-fade-in-up text-center" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary font-semibold tracking-[0.2em] text-[11px] uppercase">
              {locale === 'pt' ? 'Informação de Contacto' : 'Contact Information'}
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>
          <p className="text-muted-foreground mb-8">
            {locale === 'pt'
              ? 'Sinta-se à vontade para enviar um e-mail com as suas questões.'
              : 'Feel free to send me an e-mail with your questions.'}
          </p>
          <div className="space-y-6 text-foreground/80">
            <div className="flex items-start justify-center space-x-3">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-primary transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="hover:text-primary transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
