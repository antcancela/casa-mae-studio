import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/site';
import { getCanonicalUrl, primarySiteUrl } from '@/lib/seo-url';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: object | object[];
  language?: 'pt' | 'en';
}

export const SEO = ({ title, description, image, type = 'website', jsonLd, language }: SEOProps) => {
  const { locale: selectedLocale } = useLanguage();
  const locale = language || selectedLocale;
  const { pathname } = useLocation();
  
  const fullTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const defaultDescription = siteConfig.siteDescription[locale as 'en' | 'pt'];
  const siteUrl = primarySiteUrl;
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}/logo.png`;
  const currentUrl = getCanonicalUrl(pathname);

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
      <link rel="canonical" href={currentUrl} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}
        </script>
      )}
    </Helmet>
  );
};