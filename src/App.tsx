import React from 'react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Header />
      <main>
        <AboutSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;