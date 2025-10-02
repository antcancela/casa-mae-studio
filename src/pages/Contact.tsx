import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { MapPin, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { supabase } from '@/integrations/supabase/client';

interface ContactProps {
  onBookCallClick: () => void;
}

export const Contact = ({ onBookCallClick }: ContactProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error(t.contact.error);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast.success(t.contact.success);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(t.contact.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-display text-4xl md:text-5xl font-semibold mb-6 text-center">
          {t.contact.title}
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12">
          {t.contact.lead}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t.contact.form.name}</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">{t.contact.form.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">{t.contact.form.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">{t.contact.form.message}</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-display text-2xl font-semibold mb-6">
                {t.contact.info.location}
              </h2>
              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span>{siteConfig.location}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
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

            <div className="pt-6 border-t border-border">
              <h3 className="text-display text-xl font-semibold mb-4">
                {t.contact.cta}
              </h3>
              <div className="space-y-3">
                <Button onClick={onBookCallClick} size="lg" className="w-full">
                  {t.contact.cta}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full"
                >
                  <a href={`mailto:${siteConfig.email}`}>
                    {t.contact.emailCta}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
