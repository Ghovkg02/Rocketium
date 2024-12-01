import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const mockAds = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&q=80',
    title: 'Summer Campaign',
    performance: '1.2M impressions',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1570857502809-08184874388e?auto=format&fit=crop&q=80',
    title: 'Holiday Special',
    performance: '2.5M impressions',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1561657819-51c0511e35ab?auto=format&fit=crop&q=80',
    title: 'Product Launch',
    performance: '3.1M impressions',
  },
];

interface AdCarouselProps {
  company: {
    name: string;
    color: string;
  };
}

export const AdCarousel = ({ company }: AdCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mockAds.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + mockAds.length) % mockAds.length);
  };

  return (
    <div className="flex-1 relative group">
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="h-full relative overflow-hidden">
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {mockAds.map((ad) => (
            <div
              key={ad.id}
              className="w-full h-full flex-shrink-0"
            >
              <div className="relative h-full">
                <img
                  src={ad.imageUrl}
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{ad.title}</h3>
                  <p className="text-white/80">{ad.performance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {mockAds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};