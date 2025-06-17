'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Orbitron } from 'next/font/google';

const orbitron = Orbitron({ subsets: ["latin"] });

const Navigation = () => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Достижения', path: '/achievements' },
    { name: 'Обучение', path: '/education' },
    { name: 'Учащиеся', path: '/students' },
    { name: 'Новости', path: '/news' },
  ];

  const handleAuthClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAuthModal(true);
  };

  return (
    <>
      <div className="fixed right-0 top-0 h-full z-50">
        {/* Навигационные элементы */}
        <div className="absolute right-8 top-4 flex items-center gap-8">
          {/* Кнопка Войти с цепью */}
          <div className="relative w-24 h-24" onClick={handleAuthClick}>
            {/* Анимированная цепь */}
            <svg 
              className="absolute inset-0 w-full h-full text-white/20 animate-spin-slow" 
              viewBox="0 0 100 100"
            >
              <path 
                d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            <button className={`absolute inset-0 flex items-center justify-center text-white hover:text-white/80 transition-colors ${orbitron.className}`}>
              Войти
            </button>
          </div>

          {/* Шестеренка "О нас" */}
          <div 
            className="w-20 h-20 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg 
              className="w-20 h-20 text-white/20 animate-spin-slow" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path d="M12 2L12 4M12 20L12 22M4 12L2 12M22 12L20 12M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93" />
              <circle cx="12" cy="12" r="3" fill="none" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <span className={`absolute text-base font-bold text-white ${orbitron.className}`}>О нас</span>
          </div>
        </div>

        {/* Меню */}
        <div 
          className={`fixed right-0 top-0 h-full bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isHovered ? 'w-64' : 'w-0'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <nav className="pt-24 px-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path} 
                    className={`block py-2 px-4 rounded-lg transition-colors ${
                      pathname === item.path
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/20'
                    } ${orbitron.className}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Модальное окно авторизации */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20 w-96">
            <div className="flex justify-between mb-6">
              <button 
                className={`px-4 py-2 rounded-lg ${isLogin ? 'bg-white/20 text-white' : 'text-white/60'} ${orbitron.className}`}
                onClick={() => setIsLogin(true)}
              >
                Вход
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${!isLogin ? 'bg-white/20 text-white' : 'text-white/60'} ${orbitron.className}`}
                onClick={() => setIsLogin(false)}
              >
                Регистрация
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <input 
                  type="password" 
                  placeholder="Пароль" 
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
              </div>
              {!isLogin && (
                <div>
                  <input 
                    type="password" 
                    placeholder="Подтвердите пароль" 
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                </div>
              )}
              <button 
                type="submit" 
                className="w-full py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </form>

            <button 
              className="absolute top-4 right-4 text-white/60 hover:text-white"
              onClick={() => setShowAuthModal(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation; 