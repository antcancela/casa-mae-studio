import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent } from '@/components/ui/dialog';

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

  const Gallery = ({ images }: { images: typeof galleries.kidsRooms }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((image, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setLightboxImage(image.src)}
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white text-sm font-medium">{image.caption}</p>
            </div>
          </div>
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
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          {lightboxImage && (
            <img
              src={lightboxImage}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
