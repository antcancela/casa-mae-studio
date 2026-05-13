import { useState } from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CalendlyModal } from '@/components/CalendlyModal';
import { siteConfig } from '@/config/site';
import logo from '@/assets/logo-circle.png';

export const Links = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  const primaryLinks = [
    {
      label: 'Book a 30-min Conversation',
      onClick: () => setCalendlyOpen(true),
      variant: 'default' as const,
    },
    {
      label: 'View My Work',
      href: '/work',
      variant: 'secondary' as const,
    },
    {
      label: 'About Me',
      href: '/about',
      variant: 'secondary' as const,
    },
  ];

  const socialLinks = [
    {
      label: 'Instagram',
      href: siteConfig.social.instagram,
      icon: Instagram,
    },
    {
      label: 'Pinterest',
      href: siteConfig.social.pinterest,
      icon: Instagram,
    },
  ];

  const contactInfo = [
    {
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
    },
    {
      label: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
      icon: Phone,
    },
    {
      label: siteConfig.location,
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="Atelier Casa Mãe" 
              className="h-40 w-40 rounded-full"
            />
          </div>
          <div>
            <h1 className="text-display text-2xl font-bold">Atelier Casa Mãe — Interior Design for Family Homes in Lisbon</h1>
            <p className="text-body text-muted-foreground mt-2">
              Beautiful, functional spaces for families
            </p>
          </div>
        </div>

        {/* Primary Links */}
        <div className="space-y-3">
          {primaryLinks.map((link) => (
            <Button
              key={link.label}
              variant={link.variant}
              size="lg"
              className="w-full h-14 text-base font-medium"
              onClick={link.onClick}
              asChild={!!link.href}
            >
              {link.href ? (
                <a href={link.href}>{link.label}</a>
              ) : (
                <span>{link.label}</span>
              )}
            </Button>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 pt-4 border-t border-border">
          {contactInfo.map((info) => (
            <div key={info.label} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <info.icon className="h-4 w-4" />
              {info.href ? (
                <a href={info.href} className="hover:text-primary transition-colors">
                  {info.label}
                </a>
              ) : (
                <span>{info.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
    </div>
  );
};
