export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex flex-col items-center px-6">
      {/* Hero-Bereich */}
      <section className="w-full max-w-4xl text-center py-24">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Erstelle UGC-Ads mit KI – in Minuten 🚀
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Gib dein Produkt ein und erhalte sofort Skript, Storyboard, Voiceover-Text
          und Captions. Perfekt für TikTok, Instagram Reels und YouTube Shorts.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/studio"
            className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:brightness-95"
          >
            Jetzt ausprobieren
          </a>
          <a
            href="#features"
            className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="w-full max-w-5xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
      >
        {/* Card 1 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
            🎬
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Storyboard automatisch</h3>
          <p className="text-slate-600 text-sm mt-2">
            Visuelle Szenenideen sofort generiert.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
            🗣️
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Voiceover-Text</h3>
          <p className="text-slate-600 text-sm mt-2">
            Fertige Skripte für KI-TTS und Sprecher.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
            ✍️
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Captions + Hashtags</h3>
          <p className="text-slate-600 text-sm mt-2">
            Optimiert für Reichweite & Engagement.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
            💳
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Stripe Credits</h3>
          <p className="text-slate-600 text-sm mt-2">
            Monetarisierung mit Pay-per-Use.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center border-t py-6 text-slate-500 text-sm">
        © {new Date().getFullYear()} UGC Creator – Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
