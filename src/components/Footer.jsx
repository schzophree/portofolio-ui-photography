export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="mono text-xs text-light tracking-widest" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>Moch Danu Hidayat</span>
        </div>
        <p className="mono text-xs text-light/20">
          © 2026 · Built with React + Tailwind + Framer Motion
        </p>
        <p className="mono text-xs text-accent/40 tracking-widest uppercase">
          Photographer & MEDIA Creative
        </p>
      </div>
    </footer>
  )
}
