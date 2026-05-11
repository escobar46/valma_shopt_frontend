import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartHydration } from "@/components/cart/CartHydration";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Valma · Cinematic essentials",
  description:
    "Valma — esenciales femeninos de inspiración mediterránea. Bodys, blusas y camisetas con caída editorial.",
  metadataBase: new URL("https://valma.shop"),
  openGraph: {
    title: "Valma",
    description: "Cinematic essentials. Mediterranean ease.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="min-h-screen antialiased">
        <AnnouncementBar />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CartDrawer />
        <CartHydration />
      </body>
    </html>
  );
}
