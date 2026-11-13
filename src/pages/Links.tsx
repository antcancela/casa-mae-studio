import { useState } from 'react';
import { Instagram, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendlyModal } from '@/components/CalendlyModal';
import { siteConfig } from '@/config/site';
import logo from '@/assets/logo-circle.png';

export const Links = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [pdfOpen, setPdfOpen] = useState(false);

  const primaryLinks = [
    {
      label: 'Marcar uma Conversa de 30 min',
      onClick: () => setCalendlyOpen(true),
      variant: 'default' as const,
    },
    {
      label: 'Ver o Meu Trabalho',
      href: '/work',
      variant: 'secondary' as const,
    },
    {
      label: 'Sobre Mim',
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
            <h1 className="text-display text-2xl font-bold">Atelier Casa Mãe — Design de Interiores para Casas de Família em Lisboa e Cascais</h1>
            <p className="text-body text-muted-foreground mt-2">
              Espaços bonitos e funcionais para famílias
            </p>
          </div>
        </div>

        {/* Primary Links */}
        <div className="space-y-3">
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-2">
            <Button
              size="lg"
              className="w-full h-14 text-base font-medium gap-2"
              onClick={() => setPdfOpen((v) => !v)}
              aria-expanded={pdfOpen}
            >
              <FileText className="h-5 w-5" />
              Consultoria Online
            </Button>
            <AnimatePresence initial={false}>
              {pdfOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Button variant="outline" size="lg" className="h-12" asChild>
                      <Link to="/consultoria">Português</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-12" asChild>
                      <Link to="/consultoria/en">English</Link>
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
                <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
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
