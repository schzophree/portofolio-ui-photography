import { motion } from 'framer-motion'

/*
  ═════════════════════════════════════════════════════
  DATA PENGALAMAN — Sesuaikan nama/jabatan/tahun
  *) Neoteric: tampilkan tanpa deskripsi panjang
     (hanya nama, jabatan, periode)
  ═════════════════════════════════════════════════════
*/
const experiences = [
  {
    org:      'Cinegraph.id',
    role:     'Fotografer & Videografer',
    badge:    'Owner',
    period:   'Juni 2025 — Sekarang',
    active:   true,
    desc: [
      'Mendirikan dan mengelola studio fotografi & videografi independen.',
      'Menangani berbagai project: portrait, event, dokumentasi, dan konten kreatif.',
      'Menghadirkan visual storytelling berkualitas tinggi untuk klien personal maupun korporat.',
    ],
  },
  {
    org:      'Neoteric Department',
    role:     'Graphic Designer & Photographer',
    badge:    null,
    period:   'November 2023 — Sekarang',
    active:   true,
    desc: [],   // Kosong = hanya tampilkan nama, jabatan, periode
  },
  {
    org:      'Percetakkan Media Grafika',
    role:     'Desainer Grafis',
    badge:    'Singkawang, Indonesia',
    period:   'Januari 2022 — Desember 2022',
    active:   false,
    desc: [
      'Merancang materi cetak profesional: spanduk, stiker, papan iklan, dan cetak ID card.',
      'Bekerja dengan klien bisnis lokal untuk kebutuhan branding dan promosi visual.',
      'Mengoperasikan software desain grafis: Photoshop, Illustrator, CorelDraw.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-16 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mono text-xs text-accent tracking-[0.3em] uppercase mb-4">✦ Pengalaman & Komunitas</p>
        <h2 className="font-cormorant font-light text-5xl md:text-7xl text-light leading-none">
          Journey<br />
          <span className="italic text-accent">&amp; Growth.</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Garis vertikal */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 ml-1.5" />

        <div className="space-y-16 pl-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative"
            >
              {/* Dot */}
              <div className={`absolute -left-10 top-1.5 w-3 h-3 rounded-full border-2 ${
                exp.active
                  ? 'border-accent bg-accent/30'
                  : 'border-white/30 bg-transparent'
              }`} />

              {/* Konten */}
              <div className="flex flex-wrap items-start gap-3 mb-2">
                <h3 className="font-cormorant text-2xl md:text-3xl text-light font-light">
                  {exp.org}
                </h3>
                {exp.active && (
                  <span className="mono text-xs text-green-400 border border-green-400/30 bg-green-400/5 px-2 py-0.5 rounded-full">
                    ● Aktif
                  </span>
                )}
                {exp.badge && (
                  <span className="mono text-xs text-accent/60 border border-accent/20 px-2 py-0.5 rounded-full">
                    {exp.badge}
                  </span>
                )}
              </div>

              <p className="font-dm text-light/50 text-sm mb-1">{exp.role}</p>
              <p className="mono text-xs text-light/25 tracking-wider mb-4 uppercase">{exp.period}</p>

              {exp.desc.length > 0 && (
                <ul className="space-y-2">
                  {exp.desc.map((d, j) => (
                    <li key={j} className="flex gap-3 text-light/40 text-sm leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
