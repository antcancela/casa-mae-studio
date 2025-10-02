import { useLanguage } from '@/i18n/LanguageContext';
import joanaPortrait from '@/assets/joana-portrait.jpg';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-display text-4xl md:text-5xl font-semibold mb-12 text-center">
          {t.about.title}
        </h1>

        <div className="mb-12 flex justify-center">
          <img
            src={joanaPortrait}
            alt="Joana Leitão"
            className="rounded-2xl shadow-lg max-w-md w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          {t.about.paragraphs.map((paragraph, idx) => (
            <p key={idx} className="text-lg text-foreground/90 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
