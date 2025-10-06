'use client';

import Image from "next/image";
import { Orbitron, Playfair_Display } from "next/font/google";
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
      <div className="fixed top-4 left-4 z-30 max-w-[90vw] sm:static sm:top-2 sm:left-2">
        <div className="flex flex-col items-start">
          <h1 className={`text-3xl sm:text-4xl font-bold text-transparent [-webkit-text-stroke:_0.5px_white] ${orbitron.className}`}>
            Технопарк
          </h1>
          <span className={`text-base sm:text-lg text-white ${playfair.className}`}>
            Центра образования «ВОСХОД»
          </span>
        </div>
      </div>

      {/* Hero Section with Gallery */}
      <section className="relative h-screen flex flex-col sm:flex-row items-center">
        {/* Diagonal Background */}
        <div className="absolute top-0 right-0 w-full sm:w-[55%] h-[40vh] sm:h-screen bg-black origin-top-left transform sm:-skew-x-[20deg] z-0"></div>
        
        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row items-center">
          <div className="relative w-full sm:w-[45%] mx-2 mt-8 sm:ml-8 sm:mt-16">
            {/* Previous button */}
            <button 
              onClick={prevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-[#3e2828]/50 hover:bg-[#3e2828]/70 p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-[#3e2828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="relative w-full h-[40vh] sm:h-[60vh]">
              <div 
                className="relative w-full h-full overflow-hidden rounded-lg cursor-pointer border-2 border-white"
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
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-[#3e2828]/50 hover:bg-[#3e2828]/70 p-2 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-[#3e2828]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
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
            className={`absolute sm:static left-0 sm:left-[calc(45%+2rem)] top-[53.5%] sm:-translate-y-1/2 w-full sm:w-[400px] h-[40vh] sm:h-[60vh] transition-all duration-500 ease-in-out ${
              showDescription ? 'opacity-100 translate-x-0' : 'opacity-0 sm:-translate-x-8'
            }`}
          >
            <div className="bg-white/35 backdrop-blur-sm p-4 sm:p-6 rounded-lg border-2 border-white h-full overflow-y-auto">
              <h2 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white ${orbitron.className}`}>
                О нашем технопарке
              </h2>
              <p className="text-white/90 mb-2 sm:mb-3 text-sm sm:text-base">
                Технопарк школы — это площадка будущего уже сегодня.<br/>
                Здесь школьники получают доступ к современному компьютерному оборудованию, участвуют в реальных инженерных и научных проектах, осваивают технологии искусственного интеллекта, робототехники и программирования.
              </p>
              <p className="text-white/90 text-sm sm:text-base">
                Для учеников мы организуем обучение по инновационным программам, поддерживаем исследовательские инициативы и помогаем создавать собственные проекты. Здесь рождаются идеи, которые меняют мир.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Info */}
      <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 text-white/60 text-xs sm:text-sm">
        <p>Проект находится в разработке.</p>
        <p>Разработчик Кропачева Е.Н.</p>
      </div>
    </main>
  );
}
