import { motion } from 'framer-motion'

const tools = [
  { name: 'Adobe Lightroom',   icon: 'https://cdn.simpleicons.org/adobelightroom/c9a96e' },
  { name: 'Adobe Photoshop',   icon: 'https://cdn.simpleicons.org/adobephotoshop/c9a96e' },
  { name: 'Adobe Illustrator', icon: 'https://cdn.simpleicons.org/adobeillustrator/c9a96e' },
  { name: 'Adobe Premiere Pro',icon: 'https://cdn.simpleicons.org/adobepremierepro/c9a96e' },
  { name: 'Figma',             icon: 'https://cdn.simpleicons.org/figma/c9a96e' },
  { name: 'CorelDraw',         icon: 'https://cdn.simpleicons.org/coreldraw/c9a96e' },
  { name: 'Canva',             icon: 'https://cdn.simpleicons.org/canva/c9a96e' },
  { name: 'FL Studio',         icon: 'https://cdn.simpleicons.org/flstudio/c9a96e' },
  { name: 'Microsoft Office',  icon: 'https://cdn.simpleicons.org/microsoft/c9a96e' }, // Simplified slug
  { name: 'CapCut',            icon: 'https://cdn.simpleicons.org/capcut/c9a96e' },
]

/* 
   To ensure a truly seamless loop:
   1. Use only TWO copies for the loop (original + clone).
   2. Ensure container gap is consistent and included in width calculations.
   3. Framer Motion is more reliable for pixel-perfect seamless looping than CSS keyframes in some browsers.
*/
const doubled = [...tools, ...tools]

export default function ToolsTicker() {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden bg-dark/50 backdrop-blur-sm relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-20" />
      
      <div className="mb-12 px-6 md:px-16 text-center">
        <p className="mono text-[10px] text-accent/40 tracking-[0.5em] uppercase">✦ Essential Creative Stack</p>
      </div>

      <div className="flex relative overflow-hidden">
        <motion.div 
          className="flex items-center gap-16 md:gap-24 px-8 md:px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-4 shrink-0 group grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={tool.icon} 
                alt={tool.name} 
                className="w-8 h-8 md:w-9 md:h-9 object-contain"
                loading="lazy"
                onError={(e) => { 
                  // Fallback for icons that might fail
                  e.target.src = 'https://cdn.simpleicons.org/adobe/c9a96e';
                }}
              />
              <span className="mono text-[11px] text-light font-light tracking-widest whitespace-nowrap uppercase">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
