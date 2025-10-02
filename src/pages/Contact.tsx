import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface ContactProps {
  onBookCallClick: () => void;
}

export const Contact = ({ onBookCallClick }: ContactProps) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
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

          <div className="pt-12 border-t border-border max-w-xl mx-auto">
            <h2 className="text-display text-2xl font-semibold mb-8">
              {t.contact.info.location}
            </h2>
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
