import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* Footer */}
        <footer className="w-full max-w-5xl mx-auto text-center border-t py-6 text-slate-500 text-sm">
          © {new Date().getFullYear()} UGC Creator – Alle Rechte vorbehalten. ·{" "}
          <Link href="#features" className="hover:text-primary">
            Features
          </Link>{" "}
          ·{" "}
          <Link href="#preise" className="hover:text-primary">
            Preise
          </Link>{" "}
          ·{" "}
          <Link href="#kontakt" className="hover:text-primary">
            Kontakt
          </Link>
        </footer>
      </body>
    </html>
  );
}
