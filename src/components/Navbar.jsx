import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Aperture, Menu, X } from 'lucide-react'

const links = ['Gallery', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-accent/60 rounded-full flex items-center justify-center">
            <Aperture size={14} className="text-accent" />
          </div>
          <span className="font-cormorant text-xl font-semibold tracking-widest text-light uppercase">
            MDH
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mono text-[10px] tracking-[0.2em] text-light/40 hover:text-accent transition-all duration-300 uppercase font-light"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-accent/30 text-accent mono text-[10px] px-8 py-2 tracking-[0.2em] uppercase hover:bg-accent hover:text-dark transition-all duration-500 font-medium"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-light/70 hover:text-accent transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-b border-white/5 flex flex-col items-center gap-8 py-10"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-cormorant text-3xl italic text-light hover:text-accent transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
