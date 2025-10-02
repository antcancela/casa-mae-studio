import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/site';
import { SEO } from '@/components/SEO';
import { getBreadcrumbSchema } from '@/lib/structuredData';

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
    <div className="min-h-screen py-16">
      <SEO 
        title={locale === 'pt' ? 'Contacto' : 'Contact'}
        description={metaDescription}
        jsonLd={breadcrumbSchema}
      />
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center space-y-12">
          <div>
            <h1 className="text-display text-4xl md:text-5xl font-semibold mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.lead}
            </p>
          </div>

          <div className="flex justify-center">
            <Button onClick={onBookCallClick} size="lg" className="text-lg px-8 py-6">
              {t.contact.cta}
            </Button>
          </div>

          {/* Instagram Section */}
          <div className="pt-12 max-w-2xl mx-auto">
            <div className="bg-muted/30 rounded-lg p-8 space-y-4">
              <h2 className="text-display text-2xl font-semibold">
                {t.contact.instagram.title}
              </h2>
              <p className="text-muted-foreground">
                {t.contact.instagram.description}
              </p>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="gap-2"
              >
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

          <div className="pt-12 border-t border-border max-w-xl mx-auto">
            <h2 className="text-display text-2xl font-semibold mb-2">
              Contact Information
            </h2>
            <p className="text-muted-foreground mb-8">
              Feel free to send me an e-mail with your questions
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
    </div>
  );
};
