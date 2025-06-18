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
  const [showDescription, setShowDescription] = useState(false);

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
        <div className="relative w-[45%] ml-8 mt-16">
          {/* Previous button */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#3e2828]/50 hover:bg-[#3e2828]/70 p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-[#3e2828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative w-full h-[60vh]">
            {/* Mechanical Border */}
            <div className="absolute inset-0 border-2 border-[#3e2828] rounded-lg">
              {/* Corner Decorations */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-[#3e2828] rounded-tl-lg"></div>
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-[#3e2828] rounded-tr-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-[#3e2828] rounded-bl-lg"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-[#3e2828] rounded-br-lg"></div>
              
              {/* Side Decorations */}
              <div className="absolute top-1/2 -left-1 w-3 h-6 border-l-2 border-[#3e2828]"></div>
              <div className="absolute top-1/2 -right-1 w-3 h-6 border-r-2 border-[#3e2828]"></div>
              <div className="absolute -top-1 left-1/2 w-6 h-3 border-t-2 border-[#3e2828]"></div>
              <div className="absolute -bottom-1 left-1/2 w-6 h-3 border-b-2 border-[#3e2828]"></div>
            </div>
            <div 
              className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setShowDescription(!showDescription)}
            >
              <Image
                src={images[currentImageIndex]}
                alt="Технопарк"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Next button */}
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#3e2828]/50 hover:bg-[#3e2828]/70 p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6 text-[#3e2828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentImageIndex === index ? 'bg-[#3e2828]' : 'bg-[#3e2828]/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description Panel */}
        <div 
          className={`absolute left-[calc(45%+2rem)] top-1/2 -translate-y-1/2 w-[400px] transition-all duration-500 ease-in-out ${
            showDescription ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="bg-[#3e2828]/50 backdrop-blur-sm p-6 rounded-lg border-2 border-[#3e2828]">
            <h2 className={`text-2xl font-bold mb-4 text-white ${orbitron.className}`}>
              О нашем технопарке
            </h2>
            <p className="text-white/90 mb-3">
              Технопарк Центра образования "ВОСХОД" - это инновационная площадка, где создаются условия для развития технологического предпринимательства и реализации инновационных проектов.
            </p>
            <p className="text-white/90 mb-3">
              Мы предоставляем резидентам современное оборудование, образовательные программы и менторскую поддержку, помогая им превратить идеи в успешные бизнес-проекты.
            </p>
            <p className="text-white/90">
              Наша миссия - создавать экосистему для развития технологического предпринимательства и способствовать формированию нового поколения инноваторов.
            </p>
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
