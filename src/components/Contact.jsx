import { motion } from 'framer-motion'
import { Mail, Camera, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mono text-xs text-accent tracking-[0.3em] uppercase mb-4">✦ Hubungi Saya</p>
        <h2 className="font-cormorant font-light text-5xl md:text-7xl text-light leading-none">
          Let's<br />
          <span className="italic text-accent">Connect.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Kontak info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <p className="text-light/50 text-base leading-relaxed max-w-sm">
            Tertarik berkolaborasi untuk project fotografi, desain grafis, video, atau kreatif lainnya?
            Saya terbuka untuk segala peluang menarik.
          </p>

          {[
            { icon: <Mail size={16} />,      label: 'Email',     value: 'moch.danuhdyt@gmail.com',  href: 'mailto:moch.danuhdyt@gmail.com' },
            { icon: <Camera size={16} />,    label: 'Instagram', value: '@moonchi.xd',               href: 'https://instagram.com/moonchi.xd' },
            { icon: <Phone size={16} />,     label: 'WhatsApp',  value: '+62 8-5175-363668',         href: 'https://wa.me/6285175363668' },
            { icon: <MapPin size={16} />,    label: 'Lokasi',    value: 'Pontianak, Kalimantan Barat', href: null },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-5 group"
            >
              <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-accent/60 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <p className="mono text-xs text-light/20 tracking-widest uppercase">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-light/70 hover:text-accent transition-colors font-dm text-sm mt-0.5 block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-light/70 font-dm text-sm mt-0.5">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA besar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border border-accent/20 p-8 md:p-12 flex flex-col gap-8"
        >
          <p className="mono text-xs text-accent/40 tracking-widest uppercase">// open.for.work</p>
          <h3 className="font-cormorant font-light text-4xl md:text-5xl text-light leading-tight">
            Siap berkolaborasi<br />
            <span className="italic text-accent">untuk project Anda.</span>
          </h3>
          <p className="text-light/40 text-sm leading-relaxed">
            Fotografi, videografi, desain grafis, video editing, atau konten kreatif —
            mari wujudkan visi visual Anda bersama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:moch.danuhdyt@gmail.com"
              className="flex-1 text-center bg-accent text-dark font-dm font-semibold text-sm py-4 tracking-wider uppercase hover:bg-light transition-colors duration-300"
            >
              Kirim Email
            </a>
            <a
              href="https://wa.me/6285175363668"
              className="flex-1 text-center border border-white/20 text-light/70 font-dm text-sm py-4 tracking-wider uppercase hover:border-accent hover:text-accent transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
