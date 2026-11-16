export const primarySiteUrl = 'https://ateliercasamae.pt';

export function getCanonicalUrl(pathname: string): string {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  return `${primarySiteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}