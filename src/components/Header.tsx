import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/logo.jpg';

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
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3 transition-all">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src={logo} 
                alt="Atelier Casa Mãe - Interior Design Studio" 
                className="relative h-14 w-14 rounded-full object-cover border-2 border-primary/20 shadow-md group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300" 
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                Atelier Casa Mãe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language toggle + CTA */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hidden sm:flex"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm font-medium">{locale.toUpperCase()}</span>
            </Button>

            <Button
              onClick={onBookCallClick}
              className="hidden md:inline-flex"
              size="default"
            >
              {t.nav.bookCall}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="justify-start"
            >
              <Globe className="h-5 w-5 mr-2" />
              {locale === 'en' ? 'Português' : 'English'}
            </Button>
            <Button onClick={() => { onBookCallClick(); setMobileMenuOpen(false); }} className="w-full">
              {t.nav.bookCall}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
