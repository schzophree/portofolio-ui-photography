import { motion } from 'framer-motion'
import { Camera, Film, PenTool, Monitor, FileSpreadsheet } from 'lucide-react'

const skills = [
  { icon: <Camera size={20} />,        label: 'Photography',        level: 90 },
  { icon: <Film size={20} />,          label: 'Video Editing',      level: 75 },
  { icon: <PenTool size={20} />,       label: 'Graphic Design',     level: 90 },
  { icon: <Monitor size={20} />,       label: 'UI Design',          level: 40 },
  { icon: <FileSpreadsheet size={20} />, label: 'Microsoft Office', level: 89 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mono text-xs text-accent tracking-[0.3em] uppercase mb-4">//KEAHLIAN</p>
        <h2 className="font-cormorant font-light text-5xl md:text-7xl text-light leading-none">
          Hard<br />
          <span className="italic text-accent">Skills.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`bg-card p-10 group relative transition-all duration-500 ${
              i === 0 ? 'md:col-span-2 lg:col-span-1 border-2 border-accent/20 shadow-[0_0_50px_-12px_rgba(201,169,110,0.1)]' : 'border border-white/5 opacity-80 hover:opacity-100'
            }`}
          >
            <div className="flex items-start justify-between mb-12">
              <div className={`w-12 h-12 flex items-center justify-center transition-all duration-500 ${
                i === 0 ? 'bg-accent text-dark' : 'border border-white/10 text-accent group-hover:bg-accent group-hover:text-dark'
              }`}>
                {skill.icon}
              </div>
              <span className="font-cormorant text-4xl text-white/[0.03] group-hover:text-accent/10 transition-colors pointer-events-none">
                0{i + 1}
              </span>
            </div>

            <h3 className="font-cormorant text-2xl text-light mb-6 tracking-wide">{skill.label}</h3>

            {/* Progress bar */}
            <div className="h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                className="h-full bg-accent absolute top-0 left-0"
              />
            </div>
            <p className="mono text-[10px] text-light/20 mt-3 tracking-[0.2em] uppercase">{skill.level}% Mastery</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
