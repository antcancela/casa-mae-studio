# Architecture rules

- Public page metadata uses the shared SEO component with route paths and the primary domain, never the browser origin or tracking parameters, so preview and campaign URLs cannot become canonical URLs.
- Keep replaceable static head metadata marked for Helmet ownership and omit a static canonical; this preserves fallback metadata without duplicate page tags.
- Keep the existing static sitemap mechanism; omit lastmod unless an authoritative page-specific content timestamp exists.
- Import uploaded site logos through Lovable Assets pointers and keep the favicon as a real public file, so media stays CDN-hosted while browsers can resolve the favicon directly.