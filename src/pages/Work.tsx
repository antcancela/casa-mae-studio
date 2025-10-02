import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import gallery images
import kidsRoom1 from '@/assets/gallery/kids-room-1.jpg';
import kidsRoom2 from '@/assets/gallery/kids-room-2.jpg';
import kidsRoom3 from '@/assets/gallery/kids-room-3.jpg';
import kidsRoom4 from '@/assets/gallery/kids-room-4.jpg';
import kidsRoom5 from '@/assets/gallery/kids-room-5.jpg';
import kidsRoom6 from '@/assets/gallery/kids-room-6.jpg';
import kidsRoom7 from '@/assets/gallery/kids-room-7.jpg';
import kidsRoom8 from '@/assets/gallery/kids-room-8.jpg';
import familyHome1 from '@/assets/gallery/family-home-1.jpeg';
import familyHome2 from '@/assets/gallery/family-home-2.jpeg';
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
    { src: familyHome1, caption: 'Family Home Interior 1' },
    { src: familyHome2, caption: 'Family Home Interior 2' },
    { src: familyHome3, caption: 'Family Home Interior 3' },
    { src: familyHome4, caption: 'Family Home Interior 4' },
    { src: familyHome5, caption: 'Family Home Interior 5' },
    { src: familyHome7, caption: 'Family Home Interior 7' },
    { src: familyHome8, caption: 'Family Home Interior 8' },
    { src: familyHome9, caption: 'Family Home Interior 9' },
    { src: familyHome10, caption: 'Family Home Interior 10' },
    { src: familyHome11, caption: 'Family Home Interior 11' },
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
  const { t } = useLanguage();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [currentGallery, setCurrentGallery] = useState<typeof galleries.kidsRooms>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images: typeof galleries.kidsRooms, index: number) => {
    setCurrentGallery(images);
    setCurrentIndex(index);
    setLightboxImage(images[index].src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setCurrentGallery([]);
  };

  const goToNext = () => {
    if (currentGallery.length > 0) {
      const nextIndex = (currentIndex + 1) % currentGallery.length;
      setCurrentIndex(nextIndex);
      setLightboxImage(currentGallery[nextIndex].src);
    }
  };

  const goToPrevious = () => {
    if (currentGallery.length > 0) {
      const prevIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      setCurrentIndex(prevIndex);
      setLightboxImage(currentGallery[prevIndex].src);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, currentIndex, currentGallery]);

  const Gallery = ({ images }: { images: typeof galleries.kidsRooms }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((image, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => openLightbox(images, idx)}
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-display text-4xl md:text-5xl font-semibold mb-6 text-center">
          {t.work.title}
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {t.work.intro}
        </p>

        <Tabs defaultValue="kidsRooms" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="kidsRooms">{t.work.categories.kidsRooms}</TabsTrigger>
            <TabsTrigger value="familyHome">{t.work.categories.familyHome}</TabsTrigger>
            <TabsTrigger value="lisbon">{t.work.categories.lisbon}</TabsTrigger>
            <TabsTrigger value="river">{t.work.categories.river}</TabsTrigger>
          </TabsList>

          <TabsContent value="kidsRooms">
            <Gallery images={galleries.kidsRooms} />
          </TabsContent>
          <TabsContent value="familyHome">
            <Gallery images={galleries.familyHome} />
          </TabsContent>
          <TabsContent value="lisbon">
            <Gallery images={galleries.lisbon} />
          </TabsContent>
          <TabsContent value="river">
            <Gallery images={galleries.river} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox */}
      <Dialog open={!!lightboxImage} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-7xl p-0 bg-black/95 border-none">
          {lightboxImage && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
              
              {currentGallery.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </>
              )}

              <img
                src={lightboxImage}
                alt={currentGallery[currentIndex]?.caption || "Full size"}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              
              {currentGallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                  {currentIndex + 1} / {currentGallery.length}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
