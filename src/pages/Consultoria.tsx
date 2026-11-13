import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, X, MessageCircle, ArrowDown, ArrowRight } from 'lucide-react';
import { consultoria, type Lang } from '@/content/consultoria';
import { siteConfig } from '@/config/site';

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3">{children}</p>
);

export const Consultoria = ({ lang }: { lang: Lang }) => {
  const c = consultoria[lang];
  const wa = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(c.waMessage)}`;

  useEffect(() => {
    document.title = c.seoTitle;
    document.documentElement.lang = lang;
  }, [c, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-28">
      <div className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border/50">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link to="/links" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Atelier Casa Mãe
          </Link>
          <div className="flex rounded-full border border-border p-0.5 text-xs font-medium">
            {(['pt', 'en'] as const).map((l) => (
              <Link
                key={l}
                to={l === 'pt' ? '/consultoria' : '/consultoria/en'}
                className={`px-3 py-1 rounded-full transition-colors ${l === lang ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5">
        {/* Cover */}
        <section className="py-16 md:py-24 text-center">
          <motion.div {...fade}>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 className="text-display text-4xl md:text-6xl font-bold leading-tight">{c.title}</h1>
            <p className="mt-6 text-lg md:text-xl italic text-primary">{c.subtitle}</p>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">{c.lead}</p>
            <ArrowDown className="mx-auto mt-10 h-5 w-5 text-muted-foreground animate-bounce" />
          </motion.div>
        </section>

        {/* Who */}
        <section className="py-12">
          <motion.div {...fade}>
            <h2 className="text-display text-3xl font-bold">{c.who.title}</h2>
            <p className="mt-3 text-muted-foreground">{c.who.intro}</p>
          </motion.div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {c.who.items.map(([label, text], i) => (
              <motion.div key={label} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
                <p className="mt-2 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* For who */}
        <section className="py-12">
          <motion.div {...fade}>
            <h2 className="text-display text-3xl font-bold">{c.forWho.title}</h2>
            <p className="mt-3 text-muted-foreground">{c.forWho.intro}</p>
            <p className="mt-2 text-sm italic">{c.forWho.note}</p>
          </motion.div>
          {[
            { label: c.forWho.stageLabel, items: c.forWho.stages, cls: 'bg-primary/5 border-primary/20' },
            { label: c.forWho.warnLabel, items: c.forWho.warns, cls: 'bg-card border-border' },
          ].map((g) => (
            <div key={g.label} className="mt-6 grid gap-3 md:grid-cols-3">
              {g.items.map((t, i) => (
                <motion.div key={t} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }} className={`rounded-2xl border p-5 ${g.cls}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{g.label}</p>
                  <p className="mt-2 text-sm leading-relaxed">{t}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </section>

        {/* Process */}
        <section className="py-12">
          <motion.div {...fade}>
            <Eyebrow>{c.process.eyebrow}</Eyebrow>
            <h2 className="text-display text-3xl font-bold">{c.process.title}</h2>
            <p className="mt-3 text-muted-foreground">{c.process.intro}</p>
          </motion.div>
          <ol className="mt-8 relative border-l-2 border-primary/30 ml-3 space-y-8">
            {c.process.steps.map((s, i) => (
              <motion.li key={s.title} {...fade} transition={{ ...fade.transition, delay: i * 0.1 }} className="pl-7 relative">
                <span className="absolute -left-[13px] top-0 h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold grid place-items-center">{i + 1}</span>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{s.tag}</p>
                <h3 className="text-display text-xl font-bold mt-1">{s.title}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.meta}</p>
                <p className="mt-3 text-sm leading-relaxed">{s.text}</p>
                {s.extra && <p className="mt-3 text-sm rounded-xl bg-muted p-3">{s.extra}</p>}
              </motion.li>
            ))}
          </ol>
        </section>

        {/* Delivery */}
        <section className="py-12">
          <motion.div {...fade}>
            <Eyebrow>{c.delivery.eyebrow}</Eyebrow>
            <h2 className="text-display text-3xl font-bold">{c.delivery.title}</h2>
          </motion.div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <motion.div {...fade} className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-semibold mb-4">{c.delivery.inLabel}</h3>
              <ul className="space-y-3">
                {c.delivery.included.map((t) => (
                  <li key={t} className="flex gap-3 text-sm"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fade} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">{c.delivery.outLabel}</h3>
              <ul className="space-y-3">
                {c.delivery.excluded.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground"><X className="h-4 w-4 shrink-0 mt-0.5" />{t}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic">{c.delivery.note}</p>
            </motion.div>
          </div>
        </section>

        {/* Terms */}
        <section className="py-12">
          <motion.div {...fade}>
            <Eyebrow>{c.terms.eyebrow}</Eyebrow>
            <h2 className="text-display text-3xl font-bold">{c.terms.title}</h2>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {c.terms.stats.map(([v, l], i) => (
              <motion.div key={v} {...fade} transition={{ ...fade.transition, delay: i * 0.08 }} className="rounded-2xl border border-border bg-card p-5 text-center">
                <p className="text-display text-2xl md:text-3xl font-bold text-primary">{v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fade} className="mt-6 text-sm text-muted-foreground">{c.terms.note}</motion.p>
        </section>

        {/* Quote */}
        <section className="py-16 text-center">
          <motion.blockquote {...fade}>
            <p className="text-display text-2xl md:text-3xl italic leading-snug">“{c.quote[0]}”</p>
            <p className="mt-4 text-muted-foreground">{c.quote[1]}</p>
          </motion.blockquote>
          <p className="mt-10 text-sm">Joana Leitão · <a className="text-primary" href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer">@atelier_casamae</a> · <a className="text-primary" href="https://ateliercasamae.pt">ateliercasamae.pt</a></p>
          <p className="mt-1 text-xs text-muted-foreground">{c.footer}</p>
        </section>
      </main>

      <div className="fixed bottom-0 inset-x-0 z-40 p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
        <a href={wa} target="_blank" rel="noopener noreferrer"
          className="max-w-md mx-auto flex items-center justify-center gap-2 h-14 rounded-2xl bg-primary text-primary-foreground font-medium shadow-xl active:scale-[0.98] transition-transform">
          <MessageCircle className="h-5 w-5" /> {c.cta} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};
