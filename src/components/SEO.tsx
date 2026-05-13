import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: object | object[];
}

export const SEO = ({ title, description, image, type = 'website', jsonLd }: SEOProps) => {
  const { locale } = useLanguage();
  
  const fullTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const defaultDescription = siteConfig.siteDescription[locale as 'en' | 'pt'];
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/logo.png`;
  const currentUrl = typeof window !== 'undefined' ? window.location.href.split('?')[0].split('#')[0] : siteUrl;

  return (
    <Helmet>
      <html lang={locale} />
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content={locale === 'pt' ? 'pt_PT' : 'en_US'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : siteUrl} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
};