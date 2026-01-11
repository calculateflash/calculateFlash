import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
//@ts-ignore
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calculateflash.com"),

  title: {
    default: "CalculateFlash – Financial, Health & Utility Calculators",
    template: "%s | CalculateFlash",
  },

  description: "Simple tools for finance, student life & health.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "CalculateFlash",
    url: "https://calculateflash.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Header />

        <main className="min-h-[80vh] max-w-6xl mx-auto p-4">
          {children}
          <Analytics />
        </main>

        <Footer />
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
