import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTopButton from "@/components/BackToTopButton";

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
  title: {
    default: "EcoLodge Amazonia | Albergue Ecológico en la Amazonía",
    template: "%s | EcoLodge Amazonia",
  },
  description:
    "Descubre la magia de la Amazonía boliviana en nuestro albergue ecológico. Turismo comunitario, naturaleza y cultura en el corazón del parque nacional.",
  keywords: [
    "ecolodge",
    "albergue ecológico",
    "amazonía",
    "turismo comunitario",
    "Bolivia",
    "naturaleza",
    "parque nacional",
    "selva",
    "ecoturismo",
  ],
  openGraph: {
    title: "EcoLodge Amazonia | Albergue Ecológico",
    description:
      "Turismo comunitario y naturaleza en la Amazonía boliviana.",
    type: "website",
    locale: "es_BO",
    siteName: "EcoLodge Amazonia",
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
