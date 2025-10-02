import { MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/site';

interface FooterProps {
  onBookCallClick: () => void;
}

export const Footer = ({ onBookCallClick }: FooterProps) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-display text-lg font-semibold mb-4">
              Atelier Casa Mãe
            </h3>
            <div className="space-y-3 text-sm text-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-display text-lg font-semibold mb-4">
              {t.nav.contact}
            </h3>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-display text-lg font-semibold mb-4">
              {t.nav.bookCall}
            </h3>
            <Button onClick={onBookCallClick} variant="outline" size="sm">
              {t.nav.bookCall}
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
