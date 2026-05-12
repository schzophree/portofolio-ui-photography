import { motion } from 'framer-motion'

const experiences = [
  {
    org:      'Cinegraph.id',
    role:     'Fotografer & Videografer',
    badge:    'Owner',
    period:   'Juni 2025 - Sekarang',
    active:   true,
  },
  {
    org:      'Neoteric Department',
    role:     'Graphic Designer & Photographer',
    period:   'November 2023 - Sekarang',
    active:   true,
  },
  {
    org:      'CV. Setengah Sodare',
    role:     'Desainer Grafis (Kontrak)',
    badge:    'Pontianak (WFH)',
    period:   'Mei 2023 - Juni 2023',
    active:   false,
  },
  {
    org:      'Percetakkan Media Grafika',
    role:     'Desainer Grafis',
    badge:    'Singkawang',
    period:   'Januari 2022 - Desember 2022',
    active:   false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left: Title */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <p className="section-label">Experience</p>
            <h2 className="editorial-title mb-8">
              Professional<br />
              <span className="italic text-accent">Journey.</span>
            </h2>
            <p className="text-light/40 font-dm text-lg leading-relaxed max-w-sm">
              Membangun narasi visual melalui lensa dan desain sejak 2022. 
              Fokus pada kualitas editorial dan dampak emosional.
            </p>
          </motion.div>
        </div>

        {/* Right: Timeline */}
        <div className="lg:col-span-7 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative pl-8 border-l border-white/10 hover:border-accent/40 transition-colors duration-500 pb-12 last:pb-0"
            >
              {/* Animated Dot */}
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-dark border border-white/20 group-hover:bg-accent group-hover:border-accent transition-all duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <h3 className="font-cormorant text-3xl text-light group-hover:text-accent transition-colors duration-500">
                    {exp.org}
                  </h3>
                  {exp.active && (
                    <span className="font-mono text-[10px] text-accent border border-accent/20 px-2 py-0.5 rounded-full bg-accent/5">
                      ACTIVE
                    </span>
                  )}
                </div>
                <span className="font-mono text-[10px] text-light/20 tracking-widest uppercase">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="font-dm text-light/60 text-base">{exp.role}</p>
                {exp.badge && (
                  <span className="font-dm text-xs text-light/30 italic">
                    - {exp.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
