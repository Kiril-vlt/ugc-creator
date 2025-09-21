export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white flex flex-col items-center px-6">
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
            className="px-6 py-3 rounded-full bg-accent text-white font-medium hover:brightness-95"
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
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
            🎬
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Storyboard automatisch</h3>
          <p className="text-slate-600 text-sm mt-2">
            Visuelle Szenenideen sofort generiert.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
            🗣️
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Voiceover-Text</h3>
          <p className="text-slate-600 text-sm mt-2">
            Fertige Skripte für KI-TTS und Sprecher.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
            ✍️
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Captions + Hashtags</h3>
          <p className="text-slate-600 text-sm mt-2">
            Optimiert für Reichweite & Engagement.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white border rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition">
          <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent text-xl">
            💳
          </div>
          <h3 className="font-semibold mt-4 text-lg text-slate-900">Stripe Credits</h3>
          <p className="text-slate-600 text-sm mt-2">
            Monetarisierung mit Pay-per-Use.
          </p>
        </div>
      </section>

      {/* ✅ Testimonials */}
      <section id="testimonials" className="w-full max-w-5xl text-center mb-24">
        <h2 className="text-3xl font-bold mb-12 text-slate-900">Was unsere Nutzer sagen</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition text-left">
            <p className="text-slate-600 mb-4">
              ⭐⭐⭐⭐⭐ <br />
              „In 5 Minuten ein komplettes TikTok-Skript erstellt – genial! Hat mir
              viel Zeit gespart.“
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>
              <div>
                <p className="font-semibold text-slate-900">Lisa M.</p>
                <p className="text-slate-500 text-sm">Content Creator</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition text-left">
            <p className="text-slate-600 mb-4">
              ⭐⭐⭐⭐⭐ <br />
              „Perfekt für schnelle UGC-Videos. Ich kann sofort Captions und Hashtags
              übernehmen.“
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>
              <div>
                <p className="font-semibold text-slate-900">Tom K.</p>
                <p className="text-slate-500 text-sm">Freelancer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6 bg-white border rounded-2xl shadow-sm hover:shadow-md transition text-left">
            <p className="text-slate-600 mb-4">
              ⭐⭐⭐⭐⭐ <br />
              „Wir nutzen es im Team für Instagram Ads – spart uns locker mehrere
              Stunden pro Woche.“
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-200"></div>
              <div>
                <p className="font-semibold text-slate-900">Sophie R.</p>
                <p className="text-slate-500 text-sm">Marketing Managerin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="w-full max-w-5xl text-center mb-24">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">Preise</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Starter */}
          <div className="p-8 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Starter</h3>
            <p className="text-4xl font-bold mb-4 text-slate-900">0€</p>
            <p className="text-slate-600 mb-6">Ideal zum Testen</p>
            <ul className="text-slate-600 text-sm mb-6 space-y-2">
              <li>✅ 5 kostenlose Storyboards</li>
              <li>✅ Basis-Funktionen</li>
            </ul>
            <a
              href="/studio"
              className="block w-full px-4 py-2 bg-primary text-white rounded-lg hover:brightness-95"
            >
              Kostenlos starten
            </a>
          </div>

          {/* Pro */}
          <div className="p-8 bg-white border rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-4 text-slate-900">Pro</h3>
            <p className="text-4xl font-bold mb-4 text-slate-900">29€/Monat</p>
            <p className="text-slate-600 mb-6">Für Creator & Teams</p>
            <ul className="text-slate-600 text-sm mb-6 space-y-2">
              <li>✅ Unbegrenzte Storyboards</li>
              <li>✅ Voiceover-Export</li>
              <li>✅ Priorisierter Support</li>
            </ul>
            <a
              href="/studio"
              className="block w-full px-4 py-2 bg-accent text-white rounded-lg hover:brightness-95"
            >
              Upgrade wählen
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="w-full max-w-3xl text-center mb-24">
        <h2 className="text-3xl font-bold mb-6 text-slate-900">Kontakt</h2>
        <p className="text-slate-600 mb-6">
          Hast du Fragen? Schreib uns einfach eine Nachricht:
        </p>

        <form className="grid gap-4 text-left">
          <input
            type="text"
            placeholder="Dein Name"
            className="px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Deine E-Mail"
            className="px-4 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Deine Nachricht"
            rows={4}
            className="px-4 py-2 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:brightness-95"
          >
            Nachricht senden
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center border-t py-6 text-slate-500 text-sm">
        © {new Date().getFullYear()} UGC Creator – Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
