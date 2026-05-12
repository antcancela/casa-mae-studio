import { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  description?: string;
  children?: ReactNode;
  align?: 'center' | 'left';
}

/**
 * Shared hero header used across inner pages — matches the Home "Premium Family Atelier" aesthetic:
 * eyebrow line + uppercase label, display headline with the last word italicised and a squiggly
 * accent underline, decorative blurred background accents, and a soft subheadline.
 */
export const PageHero = ({ eyebrow, headline, description, children, align = 'center' }: PageHeroProps) => {
  const words = headline.trim().split(' ');
  const last = words.pop() ?? '';
  const rest = words.join(' ');

  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  const eyebrowJustify = align === 'center' ? 'justify-center' : 'justify-start';

  return (
    <section className="relative overflow-hidden">
      {/* Decorative blurred background accents */}
      <div className="absolute -top-32 right-0 w-[520px] h-[520px] bg-accent/40 rounded-full blur-[120px] opacity-60 -z-10 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[380px] h-[380px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className={`max-w-3xl space-y-7 animate-fade-in-up flex flex-col ${alignment}`}>
        <div className={`flex items-center gap-3 ${eyebrowJustify}`}>
          <div className="h-px w-10 bg-primary" />
          <span className="text-primary font-semibold tracking-[0.2em] text-[11px] uppercase">
            {eyebrow}
          </span>
          <div className="h-px w-10 bg-primary" />
        </div>

        <h1 className="text-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight text-foreground">
          {rest}
          {rest && ' '}
          <span className="relative inline-block">
            <span className="italic font-normal">{last}</span>
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-accent -z-10"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {description}
          </p>
        )}

        {children && (
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
};
