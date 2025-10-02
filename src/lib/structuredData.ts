import { siteConfig } from '@/config/site';

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.siteName,
  "description": siteConfig.siteDescription.en,
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "telephone": siteConfig.phone,
  "email": siteConfig.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": siteConfig.location,
    "addressCountry": "PT"
  },
  "priceRange": "€€€",
  "image": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
  "sameAs": [
    siteConfig.social.instagram
  ]
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Interior Design",
  "provider": {
    "@type": "LocalBusiness",
    "name": siteConfig.siteName
  },
  "areaServed": {
    "@type": "Country",
    "name": "Portugal"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Interior Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Turnkey Interior Design",
          "description": "Complete end-to-end interior design solution with project management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Design Consultancy",
          "description": "Expert interior design guidance and documentation for your team"
        }
      }
    ]
  }
});

export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Joana Leitão",
  "jobTitle": "Interior Designer",
  "worksFor": {
    "@type": "Organization",
    "name": siteConfig.siteName
  },
  "description": "Interior designer specializing in family-friendly spaces and children's rooms",
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "sameAs": [
    siteConfig.social.instagram
  ]
});

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});