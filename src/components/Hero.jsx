import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background — ganti src dengan foto terbaik kamu */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/sampul.jpeg"
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-transparent" />
      </div>

      {/* Top-right label */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-20 right-6 md:top-24 md:right-16 text-right z-10"
      >
        <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase font-light drop-shadow-lg" style={{ color: 'rgba(166, 166, 166, 1)' }}>Pontianak, West Kalimantan</p>
        <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase mt-1.5 font-light drop-shadow-lg" style={{ color: 'rgba(166, 166, 166, 1)' }}>EST - 2026</p>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 pb-20 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.6em] uppercase mb-6 md:mb-10 font-light drop-shadow-lg"
          style={{ marginLeft: '23px', marginRight: '23px', color: 'rgba(166, 166, 166, 1)' }}
        >
          // Photographer & Media Creative
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-5xl sm:text-7xl md:text-[8.5vw] leading-[1.1] md:leading-[0.9] text-light mb-8 md:mb-10 tracking-tight drop-shadow-2xl"
          style={{ marginLeft: '20px', marginRight: '20px' }}
        >
          Muhammad<br />
          <span className="italic text-accent">Danu Hidayat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xs md:text-base max-w-[280px] md:max-w-sm leading-relaxed mb-10 md:mb-12 font-light bg-dark/40 backdrop-blur-sm px-5 py-3 rounded-full border border-white/5 inline-block drop-shadow-lg"
          style={{ marginLeft: '23px', marginRight: '23px', color: 'rgba(233, 233, 233, 1)' }}
        >
          Capturing Moment and Cinema Partner.
        </motion.p>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 right-6 md:bottom-8 md:right-16 z-10 flex flex-col items-center gap-3"
      >
        <motion.p
          animate={{ x: [-4, 4, -4] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="font-mono text-[10px] md:text-xs tracking-widest uppercase rotate-90 origin-center whitespace-nowrap drop-shadow-lg"
          style={{ marginLeft: 'auto', minHeight: '66px', color: 'rgba(166, 166, 166, 1)', transform: 'translateX(2.45989px) rotateZ(90deg)' }}
        >
          Scroll &gt;&gt;
        </motion.p>
      </motion.div>
    </section>
  )
}
