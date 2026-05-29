import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTopButton from "@/components/BackToTopButton";
import { siteConfig } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.siteName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description:
    "Ruta turística comunitaria Eco-cabañas CECASEM: experiencias por Galilea, San Antonio, Campo Bello y Monte Rosa desde San Borja, Beni.",
  keywords: [
    "Eco-cabañas CECASEM",
    "ruta turística comunitaria",
    "San Borja",
    "Monte Rosa",
    "Campo Bello",
    "San Antonio",
    "Galilea",
    "turismo comunitario",
    "Bolivia",
    "cabañas eco turísticas",
  ],
  openGraph: {
    title: `${siteConfig.siteName} | Ruta turística comunitaria`,
    description:
      "Experiencias comunitarias por la ruta San Borja - Monte Rosa.",
    type: "website",
    locale: "es_BO",
    siteName: siteConfig.siteName,
    images: [{ url: "/assets/hero/hero-placeholder.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${nunito.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <BackToTopButton />
      </body>
    </html>
  );
}
