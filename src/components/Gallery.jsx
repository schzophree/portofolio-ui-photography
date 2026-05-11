import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

/*
  Ganti src dengan foto-foto asli kamu.
  tag: kategori foto (Portrait, Event, Street, Product, dll.)
*/
const photos = [
  { src: '/assets/gallery-1.jpg', tag: 'Portrait', span: 'md:row-span-2' },
  { src: '/assets/gallery-2.jpg', tag: 'Event',    span: '' },
  { src: '/assets/gallery-3.jpg', tag: 'Street',   span: '' },
  { src: '/assets/gallery-4.jpg', tag: 'Product',  span: 'md:col-span-2' },
  { src: '/assets/gallery-5.jpg', tag: 'Portrait', span: '' },
  { src: '/assets/gallery-6.jpg', tag: 'Event',    span: '' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="py-28 px-6 md:px-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mono text-xs text-accent tracking-[0.3em] uppercase mb-4">✦ Karya Saya</p>
        <h2 className="font-cormorant font-light text-5xl md:text-7xl text-light leading-none">
          Selected<br />
          <span className="italic text-accent">Works.</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className={`relative overflow-hidden bg-mid group cursor-zoom-in ${photo.span}`}
            onClick={() => setActive(photo)}
          >
            <img
              src={photo.src}
              alt={photo.tag}
              className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-500 flex items-end p-4">
              <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 flex items-center gap-2">
                <ZoomIn size={14} className="text-accent" />
                <span className="mono text-xs text-accent tracking-widest uppercase">{photo.tag}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9998] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-light/60 hover:text-accent hover:border-accent transition-colors"
            onClick={() => setActive(null)}
          >
            <X size={18} />
          </button>
          <img
            src={active.src}
            alt={active.tag}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  )
}
