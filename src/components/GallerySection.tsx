import React from 'react';
import { Image } from 'lucide-react';

const galleryImages = [
  { url: 'https://ibb.co/GPD96mK', title: 'Gallery Image 1' },
  { url: 'https://ibb.co/JQ7yS6N', title: 'Gallery Image 2' },
  { url: 'https://ibb.co/T0pVSnc', title: 'Gallery Image 3' },
  { url: 'https://ibb.co/j4jtLX7', title: 'Gallery Image 4' },
  { url: 'https://ibb.co/sjKD1Sv', title: 'Gallery Image 5' },
  { url: 'https://ibb.co/F3PqmDz', title: 'Gallery Image 6' },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
          Gallery
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <a
              key={index}
              href={image.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-black bg-opacity-50 p-6 rounded-lg border border-green-500 hover:border-green-400 transition-colors">
                <div className="flex items-center justify-center space-x-3">
                  <Image className="h-8 w-8 text-green-500 group-hover:text-green-400" />
                  <span className="text-white font-medium group-hover:text-green-400 transition-colors">
                    {image.title}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}