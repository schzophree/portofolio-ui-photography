import { motion } from 'framer-motion'
import { Camera, Film, PenTool, Monitor, FileSpreadsheet } from 'lucide-react'

const skills = [
  { icon: <Camera size={20} />,        label: 'Photography',        level: '90%', desc: 'Editorial, Wedding, & Commercial' },
  { icon: <Film size={20} />,          label: 'Video Editing',      level: '75%', desc: 'Cinematic Color Grading & Storytelling' },
  { icon: <PenTool size={20} />,       label: 'Graphic Design',     level: '90%', desc: 'Brand Identity & Visual Assets' },
  { icon: <Monitor size={20} />,       label: 'UI Design',          level: '40%', desc: 'Modern & Minimalist Interfaces' },
  { icon: <FileSpreadsheet size={20} />, label: 'Microsoft Office', level: '89%', desc: 'Efficient Data & Task Management' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-8 md:px-16 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="section-label">Expertise</p>
        <h2 className="editorial-title">
          Hard&nbsp;Skill<br />
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="editorial-card group"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 flex items-center justify-center bg-white/5 text-accent border border-white/5 group-hover:bg-accent group-hover:text-dark group-hover:border-accent transition-all duration-500">
                {skill.icon}
              </div>
              <span className="font-mono text-[10px] text-light/20 group-hover:text-accent transition-colors">
                {skill.level}
              </span>
            </div>

            <h3 className="font-cormorant text-2xl text-light mb-3 tracking-wide group-hover:translate-x-1 transition-transform duration-500">
              {skill.label}
            </h3>
            <p className="font-dm text-sm text-light/40 leading-relaxed group-hover:text-light/60 transition-colors duration-500">
              {skill.desc}
            </p>

            {/* Corner Decor */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ fontSize: '24px' }} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
