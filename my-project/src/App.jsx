import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-bebas bg-white text-black overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full px-10 py-6 flex justify-between items-center bg-white/90 backdrop-blur border-b z-50">
        <div className="text-2xl tracking-widest">ARGENTUM</div>

        <div className="hidden md:flex gap-10 text-sm tracking-widest">
          <a href="#about" className="hover:opacity-60 transition">ABOUT</a>
          <a href="#features" className="hover:opacity-60 transition">FEATURES</a>
          <a href="#contact" className="hover:opacity-60 transition">CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[clamp(4rem,12vw,9rem)] tracking-widest leading-none mb-6"
        >
          ARGENTUM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-sans text-gray-600 text-lg max-w-xl mb-12"
        >
          AI-powered financial intelligence driven by market sentiment.
        </motion.p>

        {/* MACBOOK MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-5xl aspect-[16/10] bg-black rounded-[2rem] shadow-2xl border-8 border-gray-200 overflow-hidden"
        >
          {/* Screen */}
          <div className="absolute inset-2 bg-white rounded-2xl p-6 grid grid-cols-3 gap-4 text-left font-sans">

            {[
              { s: "AAPL", p: "+2.4%", c: "text-green-600" },
              { s: "TSLA", p: "-1.2%", c: "text-red-600" },
              { s: "NVDA", p: "+3.1%", c: "text-green-600" },
              { s: "MSFT", p: "+1.5%", c: "text-green-600" },
              { s: "META", p: "+0.9%", c: "text-green-600" },
              { s: "AMZN", p: "-0.4%", c: "text-red-600" },
            ].map((stock) => (
              <div
                key={stock.s}
                className="border rounded-xl p-4 flex flex-col justify-between hover:scale-[1.02] transition"
              >
                <div className="font-bold">{stock.s}</div>
                <div className={`text-2xl font-bold ${stock.c}`}>
                  {stock.p}
                </div>
              </div>
            ))}
          </div>

          {/* Keyboard Base */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[120%] h-24 bg-gray-300 rounded-b-[3rem]"></div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 py-32 text-center"
      >
        <h2 className="text-6xl tracking-widest mb-6">ABOUT</h2>
        <p className="font-sans text-gray-600 text-lg leading-relaxed">
          Argentum combines transformer-based NLP, financial sentiment analysis,
          and quantitative modeling to deliver real-time market intelligence.
        </p>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        id="features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-12 text-center"
      >
        {[
          "SENTIMENT ANALYSIS",
          "RISK METRICS",
          "PRICE FORECASTING",
        ].map((feature) => (
          <div
            key={feature}
            className="border p-10 rounded-2xl hover:scale-[1.02] transition"
          >
            <h3 className="text-3xl tracking-widest mb-4">{feature}</h3>
            <p className="font-sans text-gray-600">
              Advanced AI models analyze market data in real-time to deliver
              actionable insights.
            </p>
          </div>
        ))}
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 py-32 text-center"
      >
        <h2 className="text-6xl tracking-widest mb-6">CONTACT</h2>
        <p className="font-sans text-gray-600 mb-8">
          Built by Vedant Tejaswi
        </p>
        <p className="font-sans text-gray-500">
          vedant.tejaswi@example.com
        </p>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t py-12 text-center text-sm text-gray-500 font-sans">
        © 2026 ARGENTUM — All rights reserved
      </footer>

    </div>
  );
}
