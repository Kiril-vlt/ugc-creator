'use client'
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-primary">
          UGC Creator
        </a>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-slate-600 hover:text-primary">
            Features
          </a>
          <a href="#preise" className="text-slate-600 hover:text-primary">
            Preise
          </a>
          <a href="#kontakt" className="text-slate-600 hover:text-primary">
            Kontakt
          </a>
          <a
            href="/studio"
            className="px-4 py-2 rounded-full bg-primary text-white font-medium hover:brightness-95"
          >
            Jetzt starten
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="sm:hidden text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menü */}
      {mobileOpen && (
        <div className="sm:hidden border-t bg-white px-6 py-4 flex flex-col gap-4">
          <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#preise" onClick={() => setMobileOpen(false)}>Preise</a>
          <a href="#kontakt" onClick={() => setMobileOpen(false)}>Kontakt</a>
          <a
            href="/studio"
            className="px-4 py-2 rounded-full bg-primary text-white font-medium hover:brightness-95 text-center"
            onClick={() => setMobileOpen(false)}
          >
            Jetzt starten
          </a>
        </div>
      )}
    </header>
  );
}