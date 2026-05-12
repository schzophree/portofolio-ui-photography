import { motion } from 'framer-motion'

const tools = [
  { name: 'Adobe Lightroom',   icon: '/assets/icons/lightroom.png' },
  { name: 'Adobe Photoshop',   icon: '/assets/icons/photoshop.png' },
  { name: 'Adobe Illustrator', icon: '/assets/icons/illustrator.png' },
  { name: 'Adobe Premiere Pro',icon: '/assets/icons/premiere-pro.png' },
  { name: 'Figma',             icon: 'https://cdn.simpleicons.org/figma/c9a96e' },
  { name: 'CorelDraw',         icon: 'https://cdn.simpleicons.org/coreldraw/c9a96e' },
  { name: 'Canva',             icon: '/assets/icons/canva.png' },
  { name: 'FL Studio',         icon: '/assets/icons/flstudio.png' },
  { name: 'Microsoft Office',  icon: '/assets/icons/office.png' },
  { name: 'CapCut',            icon: '/assets/icons/capcut.png' },
]

// Two copies for the seamless -50% trick
const doubled = [...tools, ...tools]

export default function ToolsTicker() {
  return (
    <section className="relative bg-dark/50 backdrop-blur-sm overflow-hidden flex flex-col">
      {/* Top Border - Clean Gray */}
      <div className="w-full border-t border-white/10" />
      
      <div className="pt-28 pb-36 relative">
        {/* Side Gradients for fading edges */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-dark to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-dark to-transparent z-20 pointer-events-none" />
        
        <div className="mb-20 px-6 md:px-16 text-center">
          <p className="font-mono text-[10px] text-accent/50 tracking-[0.6em] uppercase font-medium">✦ Essential Creative Stack</p>
        </div>

        <div className="flex relative overflow-hidden">
          <motion.div
            className="flex items-center gap-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {doubled.map((tool, i) => (
              <div
                key={i}
                className="flex items-center gap-2 shrink-0 pr-48 md:pr-80 group grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default"
                style={{ marginLeft: '50px', marginRight: '50px', alignSelf: 'stretch', justifyContent: 'flex-start' }}
              >
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { 
                    e.target.src = 'https://cdn.simpleicons.org/adobe/c9a96e';
                  }}
                />
                <span className="font-mono text-[11px] md:text-[13px] text-light font-light tracking-[0.2em] md:tracking-[0.4em] whitespace-nowrap uppercase">
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Border - Clean Gray */}
      <div className="w-full border-b border-white/10" />
    </section>
  )
}
