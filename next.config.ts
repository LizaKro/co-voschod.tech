import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Говорим Next.js, что нужно экспортировать в статику
  images: {
    unoptimized: true, // Отключаем серверную оптимизацию картинок, т.к. сервера не будет
  },
};

export default nextConfig;
