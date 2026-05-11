import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Foto + dekorasi */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-full h-full border border-accent/20 z-0" />
          <img
            src="/assets/foto-profil.jpg"
            alt="Moch Danu Hidayat"
            className="relative z-10 w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-4 right-4 z-20 bg-dark/80 backdrop-blur-sm border border-white/10 px-4 py-3">
            <p className="mono text-xs text-accent tracking-widest">Owner — Cinegraph.id</p>
            <p className="font-cormorant text-lg text-light italic mt-0.5">Fotografer & Videografer</p>
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
          <p className="mono text-[10px] text-accent tracking-[0.4em] uppercase mb-8 opacity-80">✦ Fragmen Kisah</p>

          <h2 className="font-cormorant font-light text-5xl md:text-7xl text-light leading-[1.1] mb-10">
            Penutur Visual<br />
            <span className="italic text-accent text-right block pr-4">lewat bidikan presisi.</span>
          </h2>

          <div className="space-y-6 text-light/60 text-base leading-relaxed font-light">
            <p>
              Saya adalah seorang <span className="text-light font-medium">Photographer & Freelance Visual Creative</span> yang
              berpengalaman di dunia fotografi, videografi, dan desain grafis. Dengan mata yang terlatih menangkap momen
              terbaik, saya mengabadikan setiap frame menjadi karya yang bercerita — dari sesi portrait, event besar,
              hingga konten visual untuk kebutuhan media sosial.
            </p>

            <p>
              Didukung penguasaan mendalam atas <span className="text-accent/80 font-medium">Adobe Lightroom, Photoshop, Illustrator,
              dan Premiere Pro</span>, saya menghadirkan hasil visual yang tajam, estetis, dan berdampak. Setiap karya
              adalah perpaduan antara kepekaan artistik dan presisi teknis.
            </p>

            <p>
              Tak hanya di balik kamera — saya juga berpengalaman dalam desain grafis percetakan, UI Design, video editing, 
              hingga music arranging. Kreatifitas saya tidak berhenti pada satu medium.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { num: '3+', label: 'Tahun Pengalaman' },
              { num: '∞', label: 'Frame Diabadikan' },
              { num: '3', label: 'Komunitas Aktif' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="font-cormorant text-4xl text-accent font-light">{stat.num}</p>
                <p className="mono text-xs text-light/30 tracking-wider mt-1 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
