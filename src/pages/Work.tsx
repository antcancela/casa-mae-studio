import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { SEO } from '@/components/SEO';
import { getBreadcrumbSchema } from '@/lib/structuredData';

// Import gallery images
import kidsRoom1 from '@/assets/gallery/kids-room-1.jpg';
import kidsRoom2 from '@/assets/gallery/kids-room-2.jpg';
import kidsRoom3 from '@/assets/gallery/kids-room-3.jpg';
import kidsRoom4 from '@/assets/gallery/kids-room-4.jpg';
import kidsRoom5 from '@/assets/gallery/kids-room-5.jpg';
import kidsRoom6 from '@/assets/gallery/kids-room-6.jpg';
import kidsRoom7 from '@/assets/gallery/kids-room-7.jpg';
import kidsRoom8 from '@/assets/gallery/kids-room-8.jpg';
import familyHome3 from '@/assets/gallery/family-home-3.jpg';
import familyHome4 from '@/assets/gallery/family-home-4.jpeg';
import familyHome5 from '@/assets/gallery/family-home-5.jpg';
import familyHome7 from '@/assets/gallery/family-home-7.jpg';
import familyHome8 from '@/assets/gallery/family-home-8.jpg';
import familyHome9 from '@/assets/gallery/family-home-9.jpg';
import familyHome10 from '@/assets/gallery/family-home-10.jpg';
import familyHome11 from '@/assets/gallery/family-home-11.jpg';
import lisbonApt1 from '@/assets/gallery/lisbon-apt-1.jpg';
import lisbonApt2 from '@/assets/gallery/lisbon-apt-2.jpg';
import lisbonApt3 from '@/assets/gallery/lisbon-apt-3.jpg';
import lisbonApt4 from '@/assets/gallery/lisbon-apt-4.jpg';
import lisbonApt5 from '@/assets/gallery/lisbon-apt-5.jpg';
import lisbonApt6 from '@/assets/gallery/lisbon-apt-6.jpg';
import riverApt1 from '@/assets/gallery/river-apt-1.jpg';
import riverApt2 from '@/assets/gallery/river-apt-2.jpg';
import riverApt3 from '@/assets/gallery/river-apt-3.jpg';
import riverApt4 from '@/assets/gallery/river-apt-4.jpg';
import riverApt5 from '@/assets/gallery/river-apt-5.jpg';

const galleries = {
  kidsRooms: [
    { src: kidsRoom1, caption: "Kids' Room Design 1" },
    { src: kidsRoom2, caption: "Kids' Room Design 2" },
    { src: kidsRoom3, caption: "Kids' Room Design 3" },
    { src: kidsRoom4, caption: "Kids' Room Design 4" },
    { src: kidsRoom5, caption: "Kids' Room Design 5" },
    { src: kidsRoom6, caption: "Kids' Room Design 6" },
    { src: kidsRoom7, caption: "Kids' Room Design 7" },
    { src: kidsRoom8, caption: "Kids' Room Design 8" },
  ],
  familyHome: [
    { src: familyHome11, caption: 'Family Home Interior 11' },
    { src: familyHome3, caption: 'Family Home Interior 3' },
    { src: familyHome4, caption: 'Family Home Interior 4' },
    { src: familyHome5, caption: 'Family Home Interior 5' },
    { src: familyHome7, caption: 'Family Home Interior 7' },
    { src: familyHome8, caption: 'Family Home Interior 8' },
    { src: familyHome9, caption: 'Family Home Interior 9' },
    { src: familyHome10, caption: 'Family Home Interior 10' },
  ],
  lisbon: [
    { src: lisbonApt1, caption: 'Lisbon Apartment 1' },
    { src: lisbonApt2, caption: 'Lisbon Apartment 2' },
    { src: lisbonApt3, caption: 'Lisbon Apartment 3' },
    { src: lisbonApt4, caption: 'Lisbon Apartment 4' },
    { src: lisbonApt5, caption: 'Lisbon Apartment 5' },
    { src: lisbonApt6, caption: 'Lisbon Apartment 6' },
  ],
  river: [
    { src: riverApt1, caption: 'River Apartment 1' },
    { src: riverApt2, caption: 'River Apartment 2' },
    { src: riverApt3, caption: 'River Apartment 3' },
    { src: riverApt4, caption: 'River Apartment 4' },
    { src: riverApt5, caption: 'River Apartment 5' },
  ],
};

export const Work = () => {
  const { t, locale } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ src: string; caption: string } | null>(null);
  const [currentGallery, setCurrentGallery] = useState<{ src: string; caption: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const openLightbox = (images: { src: string; caption: string }[], index: number) => {
    setCurrentGallery(images);
    setCurrentIndex(index);
    setCurrentImage(images[index]);
    setLightboxOpen(true);
    setImageLoading(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentImage(null);
    setCurrentGallery([]);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => {
      const nextIndex = (prev + 1) % currentGallery.length;
      setCurrentImage(currentGallery[nextIndex]);
      setImageLoading(true);
      return nextIndex;
    });
  }, [currentGallery]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => {
      const prevIndex = (prev - 1 + currentGallery.length) % currentGallery.length;
      setCurrentImage(currentGallery[prevIndex]);
      setImageLoading(true);
      return prevIndex;
    });
  }, [currentGallery]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, goToNext, goToPrevious, closeLightbox]);

  const metaDescription = locale === 'pt'
    ? 'Portfólio de projetos de design de interiores para famílias. Veja casas, apartamentos e quartos de crianças projetados pelo Atelier Casa Mãe.'
    : 'Portfolio of interior design projects for families. See homes, apartments and children\'s rooms designed by Atelier Casa Mãe.';

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: typeof window !== 'undefined' ? window.location.origin : '' },
    { name: locale === 'pt' ? 'Portfólio' : 'Work', url: typeof window !== 'undefined' ? window.location.href : '' }
  ]);

  const Gallery = ({ images }: { images: typeof galleries.kidsRooms }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
      {images.map((image, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-elegant animate-fade-in-up"
          style={{ animationDelay: `${Math.min(idx * 70, 500)}ms` }}
          onClick={() => openLightbox(images, idx)}
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full h-80 object-cover img-zoom"
            loading="lazy"
          />
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <SEO 
        title={locale === 'pt' ? 'Portfólio' : 'Work'}
        description={metaDescription}
        type="website"
        jsonLd={breadcrumbSchema}
      />
      
      <h1 className="text-display text-4xl md:text-5xl font-semibold mb-6 text-center">
        {t.work.title}
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        {t.work.intro}
      </p>

      <Tabs defaultValue="familyHome" className="w-full">
        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 h-auto bg-muted/60 rounded-xl">
            <TabsTrigger 
              value="familyHome" 
              className="px-3 py-2.5 text-xs sm:text-sm font-medium text-center rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              {t.work.categories.familyHome}
            </TabsTrigger>
            <TabsTrigger 
              value="lisbon"
              className="px-3 py-2.5 text-xs sm:text-sm font-medium text-center rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              {t.work.categories.lisbon}
            </TabsTrigger>
            <TabsTrigger 
              value="river"
              className="px-3 py-2.5 text-xs sm:text-sm font-medium text-center rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              {t.work.categories.river}
            </TabsTrigger>
            <TabsTrigger 
              value="kidsRooms"
              className="px-3 py-2.5 text-xs sm:text-sm font-medium text-center rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              {t.work.categories.kidsRooms}
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="familyHome">
          <Gallery images={galleries.familyHome} />
        </TabsContent>
        <TabsContent value="lisbon">
          <Gallery images={galleries.lisbon} />
        </TabsContent>
        <TabsContent value="river">
          <Gallery images={galleries.river} />
        </TabsContent>
        <TabsContent value="kidsRooms">
          <Gallery images={galleries.kidsRooms} />
        </TabsContent>
      </Tabs>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-7xl w-full h-[90dvh] md:h-[90vh] p-0 overflow-hidden bg-black/95 gap-0">
          <DialogTitle className="sr-only">
            {locale === 'pt' ? 'Visualizador de imagem' : 'Image viewer'}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {locale === 'pt'
              ? 'Use as setas para navegar e Esc para fechar.'
              : 'Use arrow keys to navigate and Esc to close.'}
          </DialogDescription>
          
          <div 
            className="grid h-full w-full min-h-0 grid-rows-[minmax(0,1fr)_auto]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image viewport (row 1) */}
            <div className="relative w-full h-full min-h-0 overflow-hidden flex items-center justify-center">
              {/* Previous button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              {/* Spinner */}
              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Image */}
              {currentImage && (
                <img
                  src={currentImage.src}
                  alt={currentImage.caption}
                  className="block max-w-full max-h-full object-contain select-none transition-opacity duration-300"
                  style={{ opacity: imageLoading ? 0 : 1 }}
                  onLoad={() => setImageLoading(false)}
                  loading="eager"
                  draggable={false}
                />
              )}

              {/* Next button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            {/* Caption row (row 2) - no longer overlays the image */}
            {currentImage && (
              <div className="flex items-center justify-center gap-3 py-2 px-4 text-center text-white/90 bg-black/60 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]">
                <div className="text-sm">
                  {currentImage.caption} ({currentIndex + 1} / {currentGallery.length})
                </div>
                <div className="text-white/60 text-xs md:hidden">
                  {locale === 'pt' ? 'Deslize para navegar' : 'Swipe to navigate'}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};