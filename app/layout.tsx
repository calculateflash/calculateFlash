
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

export const metadata = {
  title: "Calculate Flash",
  description: "Simple tools for finance, student life & health.",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className="bg-slate-50">
          
          <Header />
          
          <main className="min-h-[80vh] max-w-6xl mx-auto p-4">
            {children}
          </main>
          
          <Footer />

        </body>
      </html>
    );
}