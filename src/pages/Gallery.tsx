import React from 'react';
import LazyImage from '@/components/LazyImage';

const galleryItems = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  imageUrl: `https://placehold.co/600x400/cccccc/FFFFFF/png?text=Gallery+Image+${i + 1}`,
  caption: `This is a caption for image ${i + 1}, describing the event or initiative shown.`,
}));

const Gallery = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
            <LazyImage src={item.imageUrl} alt={`Gallery image ${item.id}`} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;