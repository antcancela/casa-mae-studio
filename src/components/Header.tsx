import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
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
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Atelier Casa Mãe" className="h-16 lg:h-24 w-auto transition-all duration-300 group-hover:scale-[1.02]" />
          </Link>

          {/* Desktop Navigation - Refined */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg hover:bg-primary/5 ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right side: Language toggle + CTA */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:bg-primary/10 transition-all duration-300 rounded-lg px-3"
              aria-label={`Switch to ${locale === 'en' ? 'Portuguese' : 'English'}`}
            >
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-semibold tracking-wider text-muted-foreground">{locale.toUpperCase()}</span>
            </Button>

            <Button
              onClick={onBookCallClick}
              className="hidden md:inline-flex shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
              size="default"
            >
              {t.nav.bookCall}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/10 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            <Button onClick={() => { onBookCallClick(); setMobileMenuOpen(false); }} className="w-full">
              {t.nav.bookCall}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
