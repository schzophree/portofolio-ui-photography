import { Aperture } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border border-accent/40 rounded-full flex items-center justify-center">
            <Aperture size={13} className="text-accent" />
          </div>
          <span className="font-cormorant text-lg text-light tracking-widest">Moch Danu Hidayat</span>
        </div>
        <p className="mono text-xs text-light/20">
          © 2026 · Built with React + Tailwind + Framer Motion
        </p>
        <p className="mono text-xs text-accent/40 tracking-widest uppercase">
          Photographer & Visual Creative
        </p>
      </div>
    </footer>
  )
}
