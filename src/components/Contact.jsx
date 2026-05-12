import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, Camera, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid lg:grid-cols-12 gap-20">
        
        {/* Left: Headline & Description */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-label">Connect</p>
            <h2 className="editorial-title mb-12">
              Let's create<br />
              <span className="italic text-accent">something legendary.</span>
            </h2>
            
            <p className="text-light/40 font-dm text-xl leading-relaxed max-w-xl mb-16">
              Terbuka untuk kolaborasi kreatif, project fotografi, desain, 
              hingga pengembangan konsep visual yang mendalam. 
              Mari bicarakan visi Anda.
            </p>

            <div className="grid sm:grid-cols-2 gap-12">
              {[
                { label: 'EMAIL', value: 'moch.danuhdyt@gmail.com', href: 'mailto:moch.danuhdyt@gmail.com' },
                { label: 'WHATSAPP', value: '+62 8-5175-363668', href: 'https://wa.me/6285175363668' },
                { label: 'instagram', value: '@moonchi.xd', href: 'https://instagram.com/moonchi.xd' },
                { label: 'Adress', value: 'Pontianak, Indonesia', href: null },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="font-mono text-[10px] text-accent/40 tracking-[0.2em] uppercase mb-2">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-dm text-lg text-light/80 hover:text-accent flex items-center gap-2 transition-colors group">
                      {item.value}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
                    </a>
                  ) : (
                    <p className="font-dm text-lg text-light/80">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Big CTA Link */}
        <div className="lg:col-span-5 flex items-end">
          <motion.a
            href="mailto:moch.danuhdyt@gmail.com"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="w-full aspect-square bg-accent flex flex-col justify-between p-12 group transition-transform duration-500"
          >
            <div className="flex justify-between items-start">
              <span className="font-mono text-dark text-xs tracking-widest uppercase">Start a Project</span>
              <div className="w-12 h-12 rounded-full border border-dark/20 flex items-center justify-center text-dark">
                <ArrowUpRight size={24} />
              </div>
            </div>
            
            <h3 className="font-cormorant text-dark text-5xl md:text-6xl leading-[1.1] font-light">
              Let's Create Together and<br />
              <span className="italic">Hire Me.</span>
            </h3>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
