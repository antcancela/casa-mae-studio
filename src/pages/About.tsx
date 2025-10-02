import { useLanguage } from '@/i18n/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import joanaPortrait from '@/assets/joana-portrait.jpg';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-display text-4xl md:text-5xl font-semibold mb-16 text-center">
          {t.about.title}
        </h1>

        {/* Introduction with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <img
              src={joanaPortrait}
              alt="Joana Leitão"
              className="rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xl text-foreground/90 leading-relaxed font-medium">
              {t.about.paragraphs[0]}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.paragraphs[1]}
            </p>
          </div>
        </div>

        {/* Journey section */}
        <Card className="mb-12 border-none shadow-elegant bg-secondary/10">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
              A Minha Jornada
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {t.about.paragraphs[2]}
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                {t.about.paragraphs[3]}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Personal project section */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t.about.paragraphs[4]}
            </p>
          </div>
        </div>

        {/* Mission card */}
        <Card className="mb-12 border-none shadow-elegant bg-primary/5">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-display text-2xl md:text-3xl font-semibold mb-6 text-primary">
              Atelier Casa Mãe
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                {t.about.paragraphs[5]}
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed italic border-l-4 border-primary pl-6">
                {t.about.paragraphs[6]}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
