'use client';

import Image from "next/image";
import { Orbitron, Playfair_Display } from "next/font/google";
import { touraine } from "./fonts";
import { useState } from "react";

const orbitron = Orbitron({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: "700"
});

const images = [
  '/images/techpark1.jpg',
  '/images/techpark2.jpg',
  '/images/techpark3.jpg',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="min-h-screen">
      {/* Logo */}
      <div className="fixed top-6 left-6 z-30">
        <div className="flex flex-col items-start">
          <h1 className={`text-4xl font-bold text-transparent [-webkit-text-stroke:_0.5px_white] ${orbitron.className}`}>
            Технопарк
          </h1>
          <span className={`text-lg text-white ${playfair.className}`}>
            Центра образования "ВОСХОД"
          </span>
        </div>
      </div>

      {/* Hero Section with Gallery */}
      <section className="relative h-screen flex items-center">
        <div className="relative w-1/2 h-[70vh] mx-auto">
          {/* Previous button */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#725f40]/50 hover:bg-[#725f40]/70 p-2 rounded-full transition-colors"
          >
            <svg className="w-8 h-8 text-[#725f40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image and Text Container */}
          <div className="relative w-full h-full">
            {/* Image */}
            <div 
              className="relative w-full h-full cursor-pointer overflow-hidden"
              onClick={() => setShowText(!showText)}
            >
              <Image
                src={images[currentImageIndex]}
                alt="Технопарк"
                fill
                className="object-cover rounded-lg transition-opacity duration-300"
                priority
              />
            </div>

            {/* Text Panel */}
            <div 
              className={`absolute top-0 right-0 h-full bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-sm transition-all duration-500 ease-in-out ${
                showText ? 'w-[200%] opacity-100' : 'w-0 opacity-0'
              }`}
            >
              <div className="p-8 h-full flex items-center">
                <div className="max-w-xl">
                  <h2 className={`text-3xl font-bold mb-6 text-white ${orbitron.className}`}>
                    О нашем технопарке
                  </h2>
                  <p className="text-white/80 mb-4">
                    Технопарк Центра образования "ВОСХОД" - это инновационная площадка, где создаются условия для развития технологического предпринимательства и реализации инновационных проектов.
                  </p>
                  <p className="text-white/80 mb-4">
                    Мы предоставляем резидентам современное оборудование, образовательные программы и менторскую поддержку, помогая им превратить идеи в успешные бизнес-проекты.
                  </p>
                  <p className="text-white/80">
                    Наша миссия - создавать экосистему для развития технологического предпринимательства и способствовать формированию нового поколения инноваторов.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#725f40]/50 hover:bg-[#725f40]/70 p-2 rounded-full transition-colors"
          >
            <svg className="w-8 h-8 text-[#725f40]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentImageIndex === index ? 'bg-[#725f40]' : 'bg-[#725f40]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Developer Info */}
      <div className="fixed bottom-4 right-4 text-white/60 text-sm">
        <p>Проект находится в разработке.</p>
        <p>Разработчик Кропачева Е.Н.</p>
      </div>
    </main>
  );
}
