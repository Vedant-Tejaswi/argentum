import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="font-bebas bg-white text-black min-h-screen">

      <nav className="fixed top-0 w-full px-10 py-6 flex justify-between items-center bg-white/90 backdrop-blur border-b z-50">
        <div className="text-2xl tracking-widest">ARGENTUM</div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[clamp(4rem,12vw,9rem)] tracking-widest leading-none mb-6"
        >
          ARGENTUM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-gray-600 text-lg max-w-xl mb-12"
        >
          AI-powered financial intelligence driven by market sentiment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-full max-w-5xl aspect-[16/10] bg-black rounded-[2rem] shadow-2xl border-8 border-gray-200 overflow-hidden"
        >
          <div className="absolute inset-2 bg-white rounded-2xl p-6 grid grid-cols-3 gap-4 font-sans">
            {["AAPL", "TSLA", "NVDA", "MSFT", "META", "AMZN"].map((s, i) => (
              <div key={i} className="border rounded-xl p-4 text-center">
                <div className="font-bold">{s}</div>
                <div className="text-2xl font-bold text-green-600">+2.3%</div>
              </div>
            ))}
          </div>
        </motion.div>

      </section>

    </div>
  );
}
