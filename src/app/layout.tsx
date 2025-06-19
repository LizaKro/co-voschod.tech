import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Gears from "./components/Gears";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Технопарк ВОСХОД",
  description: "Технопарк Центра образования ВОСХОД",
  icons: {
    icon: '/gear.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Gears />
        <Navigation />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
