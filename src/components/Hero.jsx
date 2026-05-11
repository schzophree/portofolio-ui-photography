import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background — ganti src dengan foto terbaik kamu */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gallery-1.jpg"
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent" />
      </div>

      {/* Top-right label */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-24 right-6 md:right-16 text-right z-10"
      >
        <p className="mono text-[10px] text-light/20 tracking-[0.2em] uppercase font-light">Pontianak, West Kalimantan</p>
        <p className="mono text-[10px] text-accent/40 tracking-[0.2em] uppercase mt-1.5 font-light">EST — 2025</p>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-16 pb-20 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mono text-[10px] text-accent tracking-[0.4em] uppercase mb-8 font-light"
        >
          ✦ Photographer & Visual Creative
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-6xl md:text-[8.5vw] leading-[0.9] text-light mb-10 tracking-tight"
        >
          Moch Danu<br />
          <span className="italic text-accent">Hidayat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-light/40 text-sm md:text-base max-w-sm leading-relaxed mb-12 font-light"
        >
          Mengabadikan setiap momen menjadi karya visual yang bercerita — dari frame yang tepat hingga visual yang memukau.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-10"
        >
          <a
            href="#gallery"
            className="bg-accent text-dark font-dm font-semibold text-[11px] px-10 py-4 tracking-[0.2em] uppercase hover:bg-light transition-all duration-500"
          >
            Explore Works
          </a>
          <a
            href="#contact"
            className="mono text-[10px] text-light/30 hover:text-accent transition-all duration-300 tracking-[0.2em] uppercase flex items-center gap-3 font-light"
          >
            <ArrowDown size={12} /> Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-accent/80 to-transparent"
        />
        <p className="mono text-xs text-light/20 tracking-widest uppercase rotate-90 origin-center mt-4">Scroll</p>
      </motion.div>
    </section>
  )
}
