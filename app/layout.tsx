import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "UGC Creator",
  description: "KI-gestützte UGC Ads erstellen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {/* ✅ Header mit Logo + Navigation */}
        <header className="w-full border-b bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg"></div>
              <span className="font-bold text-xl">UGC Creator</span>
            </a>

            {/* Navigation */}
            <nav className="hidden sm:flex gap-6 text-sm font-medium text-slate-600">
              <a href="#features" className="hover:text-primary">
                Features
              </a>
              <a href="#testimonials" className="hover:text-primary">
                Bewertungen
              </a>
              <a href="#preise" className="hover:text-primary">
                Preise
              </a>
              <a href="#kontakt" className="hover:text-primary">
                Kontakt
              </a>
              <a
                href="/studio"
                className="px-4 py-2 rounded-full bg-primary text-white hover:brightness-95"
              >
                Studio
              </a>
            </nav>
          </div>
        </header>

        {/* Seiten-Inhalt */}
        <main>{children}</main>

        {/* ✅ Footer */}
        <footer className="w-full border-t py-6 text-center text-slate-500 text-sm mt-24">
          © {new Date().getFullYear()} UGC Creator – Alle Rechte vorbehalten.
        </footer>
      </body>
    </html>
  );
}
