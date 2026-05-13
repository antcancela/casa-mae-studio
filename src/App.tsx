import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CalendlyModal } from "@/components/CalendlyModal";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import { Links } from "./pages/Links";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <MotionConfig reducedMotion="user" transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <TooltipProvider>
          <SmoothScroll />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Links page without Header/Footer */}
              <Route path="/links" element={<Links />} />
              
              {/* Main layout with Header/Footer */}
              <Route path="*" element={
                <div className="flex flex-col min-h-screen">
                  <Header onBookCallClick={() => setCalendlyOpen(true)} />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/" element={<Home onBookCallClick={() => setCalendlyOpen(true)} />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/work" element={<Work />} />
                      <Route path="/contact" element={<Contact onBookCallClick={() => setCalendlyOpen(true)} />} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer onBookCallClick={() => setCalendlyOpen(true)} />
                  <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
                </div>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
        </MotionConfig>
      </LanguageProvider>
    </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
