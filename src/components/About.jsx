import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Foto + dekorasi */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <img
            src="/assets/foto-profil.jpg"
            alt="Moch Danu Hidayat"
            className="relative z-10 w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            style={{ marginTop: '1px' }}
          />
          <div className="absolute bottom-4 right-4 z-20 bg-dark/80 backdrop-blur-sm border px-4 py-3" style={{ borderColor: 'rgba(2, 2, 2, 1)' }}>
            <p className="font-mono text-xs tracking-widest" style={{ color: 'rgba(219, 219, 219, 1)' }}>Owner - Cinegraph.id</p>
            <p className="font-cormorant text-lg text-light italic mt-0.5">Photographer & Videographer</p>
          </div>
        </motion.div>

        {/* Teks Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="max-w-xl"
        >
          <p className="font-mono text-[14px] text-accent tracking-[0.4em] uppercase mb-8 opacity-80" style={{ paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }}>//About Me</p>

          <h2 className="font-cormorant font-light text-5xl md:text-7xl text-light leading-[1.1] mb-10">
            Biografi<br />
            <span className="italic text-accent text-left block pr-4">Tentang Saya</span>
          </h2>

          <div className="space-y-6 text-light/60 text-base leading-relaxed font-light">
            <p>
              Halo, perkenalkan nama saya <span className="text-light font-medium">Muhammad Danu Hidayat</span> yang
              berpengalaman di dunia multimedia seperti fotografi, videografi, dan desain grafis.
            </p>

            <p>
              Dengan berbagai pengalaman, fokus utama saya sekarang ada di balik lensa <span className="font-medium" style={{ color: '#8e8c88' }}>(penguasaan penuh kamera APSC/FF)</span> dan manipulasi digital tingkat lanjut menggunakan <span className="font-medium" style={{ color: '#8f8d89' }}>Adobe Photoshop dan Adobe Lightroom.</span>
            </p>

            <p>
              Tak hanya di balik kamera, saya juga berpengalaman dalam desain grafis percetakan, UI Design, video editing, 
              hingga music arranging. Kreatifitas saya tidak berhenti pada satu medium. Dan juga saya sudah terbiasa mengelola workflow menggunakan ekosistem Google (Drive, Spreadsheet, Docs), yang selalu menjadi
              alat bantu saya untuk mengelola file-file yang saya butuhkan.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { num: '5+', label: 'Tahun Pengalaman' },
              { num: '∞', label: 'Frame Diabadikan' },
              { num: '3', label: 'Komunitas Aktif' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="mono text-accent font-light" style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '25px' }}>{stat.num}</p>
                <p className="font-mono text-xs text-light/30 tracking-wider mt-1 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
