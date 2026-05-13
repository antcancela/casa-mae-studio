import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Magnetic } from './motion/Magnetic';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/logo-new.png';

interface HeaderProps {
  onBookCallClick: () => void;
}

export const Header = ({ onBookCallClick }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();
  const location = useLocation();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'pt' : 'en');
  };

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/work', label: t.nav.work },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/85 border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 lg:h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group flex-shrink-0">
            <img 
              src={logo} 
              alt="Atelier Casa Mãe" 
              className="h-12 sm:h-14 lg:h-24 w-auto transition-all duration-300 group-hover:scale-[1.02]" 
            />
          </Link>

          {/* Desktop Navigation - Refined */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.path) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side: Language toggle + CTA + Mobile menu */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-4">
            {/* Language toggle - compact on mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 hover:bg-primary/10 transition-all duration-300 rounded-lg px-2 sm:px-3 h-8 sm:h-9"
              aria-label={`Switch to ${locale === 'en' ? 'Portuguese' : 'English'}`}
            >
              <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-muted-foreground">{locale.toUpperCase()}</span>
            </Button>

            {/* Desktop CTA */}
            <Magnetic strength={0.2} className="hidden md:inline-flex">
              <Button
                onClick={onBookCallClick}
                className="shadow-md hover:shadow-lg transition-all duration-300 rounded-lg shine-cta press-tactile"
                size="default"
              >
                {t.nav.bookCall}
              </Button>
            </Magnetic>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10 rounded-lg h-8 w-8 sm:h-9 sm:w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-border/50 bg-background/98 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-1">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(item.path) 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button 
                onClick={() => { onBookCallClick(); setMobileMenuOpen(false); }} 
                className="w-full rounded-lg"
                size="lg"
              >
                {t.nav.bookCall}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
