"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: '/images/sports-viewing.svg',
      alt: 'Sports viewing area with multiple TVs showing games',
      caption: 'Our main viewing area with 25+ HDTVs'
    },
    {
      src: '/images/hero-bg.svg',
      alt: 'Bar area with customers enjoying drinks',
      caption: 'Our fully stocked bar with craft beers on tap'
    },
    {
      src: '/images/logo.svg',
      alt: 'Landshark Sports Bar logo',
      caption: 'The iconic Landshark Sports Bar logo'
    }
    // Note: In a real implementation, you would add more actual gallery photos here
  ];
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 text-center">Photo Gallery</h1>
        
        <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-12">
          Take a look at what makes Landshark Sports Bar Miami's premier sports viewing destination.
        </p>
        
        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto mb-12 relative">
          {/* Main Image */}
          <div className="aspect-w-16 aspect-h-9 bg-blue-900 rounded-lg overflow-hidden relative">
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image 
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-blue-900/80 text-white p-4 text-center">
              <p className="text-lg">{images[currentIndex].caption}</p>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full shadow-md transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-900 p-2 rounded-full shadow-md transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Thumbnail Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Fallback Grid for Non-JS or for showing more images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48 mb-2">
                <Image 
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-gray-700 text-center">{image.caption}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Follow us on social media to see more photos and stay updated with our latest events!
          </p>
        </div>
      </div>
    </div>
  );
} 