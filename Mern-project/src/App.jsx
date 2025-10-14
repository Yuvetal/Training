import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#1e1b4b] to-[#0a0f1f] text-[#e0e7ff] overflow-hidden relative">
      {/* Subtle glowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, -40, 0],
              x: [0, 10, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 text-center pt-32 pb-16">
        <motion.h1
          className="font-[Cinzel] text-5xl font-semibold tracking-wider mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Traveler’s Archive
        </motion.h1>
        <p className="text-sm opacity-70">Developer | Creator | Seeker of Balance</p>
      </header>

      {/* Project Cards */}
      <section className="relative z-10 max-w-6xl mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Voice Assistant",
            desc: "A Python-based voice automation system with AI integration.",
          },
          {
            title: "Sentiment Analyzer",
            desc: "Machine learning model predicting tone and emotion of text.",
          },
          {
            title: "Supply Chain Optimizer",
            desc: "Flask-based predictive logistics system using data analytics.",
          },
        ].map((proj, i) => (
          <motion.div
            key={i}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2 font-[Cinzel]">{proj.title}</h3>
            <p className="text-sm opacity-80">{proj.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center mt-20 pb-10 opacity-60 text-sm">
        © {new Date().getFullYear()} The Traveler
      </footer>
    </div>
  );
}
