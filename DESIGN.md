# 📸 Portofolio Moch Danu Hidayat — Blueprint & Source Code

> **Tipe:** Web Portofolio Pribadi — Photographer & Visual Creative
> **Stack:** React + Tailwind CSS + Framer Motion + Lucide React
> **Design Vibe:** Cinematic Editorial — Dark Luxury, Full-Bleed Photography, Elegant Asymmetry

---

## 🗂️ Struktur Folder

```
portofolio-danu/
├── public/
│   └── assets/
│       ├── foto-profil.jpg          ← Foto diri (profesional / editorial)
│       ├── gallery-1.jpg            ← Foto hasil jepretan 1
│       ├── gallery-2.jpg            ← Foto hasil jepretan 2
│       ├── gallery-3.jpg            ← Foto hasil jepretan 3
│       ├── gallery-4.jpg            ← Foto hasil jepretan 4
│       ├── gallery-5.jpg            ← Foto hasil jepretan 5
│       ├── gallery-6.jpg            ← Foto hasil jepretan 6
│       └── logo-cinegraph.png       ← Logo Cinegraph.id (opsional)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ToolsTicker.jsx          ← Animasi logo berjalan horizontal
│   │   ├── Gallery.jsx              ← Grid foto hasil jepretan
│   │   ├── Experience.jsx           ← Pengalaman & Komunitas
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Setup & Instalasi

```bash
# 1. Buat project Vite + React
npm create vite@latest portofolio-danu -- --template react
cd portofolio-danu

# 2. Install dependencies
npm install
npm install tailwindcss @tailwindcss/vite framer-motion lucide-react

# 3. Jalankan dev server
npm run dev
```

---

## 📄 `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

## 📄 `src/index.css`

```css
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap');

:root {
  --accent: #c9a96e;       /* Gold — tone hangat fotografer */
  --dark:   #080808;
  --card:   #111111;
  --mid:    #1c1c1c;
  --light:  #f0ede8;       /* Warm off-white / cream */
  --muted:  rgba(240,237,232,0.45);
}

* { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }

body {
  background-color: var(--dark);
  color: var(--light);
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Cormorant Garamond', serif;
}

.mono {
  font-family: 'Space Mono', monospace;
}

/* Ticker animation */
@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ticker-track {
  display: flex;
  animation: ticker 28s linear infinite;
  width: max-content;
}
.ticker-track:hover {
  animation-play-state: paused;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: var(--dark); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }

/* Grain texture overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.03;
  pointer-events: none;
  z-index: 9999;
}
```

---

## 📄 `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#c9a96e",
        dark: "#080808",
        card: "#111111",
        mid: "#1c1c1c",
        light: "#f0ede8",
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        dm: ["DM Sans", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
```

---

## 📄 `src/App.jsx`

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ToolsTicker from './components/ToolsTicker'
import Gallery from './components/Gallery'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-dark text-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ToolsTicker />
      <Gallery />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
```

---

## 📄 `src/components/Navbar.jsx`

```jsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Aperture, Menu, X } from 'lucide-react'

const links = ['Gallery', 'Experience', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-accent/60 rounded-full flex items-center justify-center">
            <Aperture size={14} className="text-accent" />
          </div>
          <span className="font-cormorant text-xl font-semibold tracking-widest text-light uppercase">
            MDH
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mono text-xs tracking-widest text-light/40 hover:text-accent transition-colors duration-300 uppercase"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-accent/60 text-accent font-mono text-xs px-6 py-2.5 tracking-widest uppercase hover:bg-accent hover:text-dark transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-light/70 hover:text-accent transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-card/95 backdrop-blur-xl border-b border-white/5 flex flex-col items-center gap-8 py-10"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-cormorant text-3xl italic text-light hover:text-accent transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

---

## 📄 `src/components/Hero.jsx`

```jsx
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background — ganti src dengan foto terbaik kamu */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/gallery-1.jpg"
          alt="hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 to-transparent" />
      </div>

      {/* Top-right label */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-24 right-6 md:right-16 text-right z-10"
      >
        <p className="mono text-xs text-light/30 tracking-widest uppercase">Pontianak, Kalimantan Barat</p>
        <p className="mono text-xs text-accent/60 tracking-widest uppercase mt-1">© 2025 — Sekarang</p>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-16 pb-16 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mono text-xs text-accent tracking-[0.3em] uppercase mb-6"
        >
          ✦ Photographer & Visual Creative
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-cormorant font-light text-6xl md:text-[9vw] leading-none text-light mb-6"
        >
          Moch Danu<br />
          <span className="italic text-accent">Hidayat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-light/50 text-sm md:text-base max-w-md leading-relaxed mb-10"
        >
          Mengabadikan setiap momen menjadi karya visual yang bercerita —<br className="hidden md:block" />
          dari frame yang tepat hingga visual yang memukau.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="#gallery"
            className="bg-accent text-dark font-dm font-semibold text-sm px-8 py-3.5 tracking-wider uppercase hover:bg-light transition-colors duration-300"
          >
            Lihat Karya
          </a>
          <a
            href="#contact"
            className="mono text-xs text-light/40 hover:text-accent transition-colors tracking-widest uppercase flex items-center gap-2"
          >
            <ArrowDown size={14} /> Kontak Saya
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-accent/80 to-transparent"
        />
        <p className="mono text-xs text-light/20 tracking-widest uppercase rotate-90 origin-center mt-4">Scroll</p>
      </motion.div>
    </section>
  )
}
```

---

## 📄 `src/components/About.jsx`

> **Bio Photography-Focused** — Teks ini yang menggantikan bio lama.

```jsx
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
        >
          <p className="mono text-xs text-accent tracking-[0.3em] uppercase mb-6">✦ Tentang Saya</p>

          <h2 className="font-cormorant font-light text-5xl md:text-6xl text-light leading-tight mb-8">
            Visual Storyteller<br />
            <span className="italic text-accent">di balik lensa.</span>
          </h2>

          {/*
            ═══════════════════════════════════════════════════
            BIO PHOTOGRAPHY-FOCUSED (ganti dari bio lama)
            ═══════════════════════════════════════════════════
          */}
          <p className="text-light/60 text-base leading-relaxed mb-5">
            Saya adalah seorang <span className="text-light font-medium">Photographer & Freelance Visual Creative</span> yang
            berpengalaman di dunia fotografi, videografi, dan desain grafis. Dengan mata yang terlatih menangkap momen
            terbaik, saya mengabadikan setiap frame menjadi karya yang bercerita — dari sesi portrait, event besar,
            hingga konten visual untuk kebutuhan media sosial.
          </p>

          <p className="text-light/60 text-base leading-relaxed mb-5">
            Didukung penguasaan mendalam atas <span className="text-accent">Adobe Lightroom, Photoshop, Illustrator,
            dan Premiere Pro</span>, saya menghadirkan hasil visual yang tajam, estetis, dan berdampak. Setiap karya
            adalah perpaduan antara kepekaan artistik dan presisi teknis.
          </p>

          <p className="text-light/60 text-base leading-relaxed mb-10">
            Tak hanya di balik kamera — saya juga berpengalaman dalam desain grafis percetakan (spanduk, stiker,
            papan iklan, cetak ID card), UI Design, video editing, hingga music arranging. Kreatifitas saya tidak
            berhenti pada satu medium.
          </p>

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
```

---

## 📄 `src/components/ToolsTicker.jsx`

> Animasi logo/nama tools berjalan horizontal — terinspirasi dari getdesign.md

```jsx
import { motion } from 'framer-motion'

/*
  Tools yang ditampilkan dalam ticker.
  Bisa tambahkan SVG logo atau icon dari CDN, atau cukup teks + emoji.
*/
const tools = [
  { name: 'Adobe Lightroom',   icon: '🌅' },
  { name: 'Adobe Photoshop',   icon: '🎨' },
  { name: 'Adobe Illustrator', icon: '✏️' },
  { name: 'Adobe Premiere Pro',icon: '🎬' },
  { name: 'Figma',             icon: '🖥️' },
  { name: 'CorelDraw',         icon: '🔷' },
  { name: 'Canva',             icon: '🎭' },
  { name: 'FL Studio',         icon: '🎵' },
  { name: 'Microsoft Word',    icon: '📄' },
  { name: 'Microsoft Excel',   icon: '📊' },
  { name: 'CapCut',            icon: '✂️' },
]

/* Duplikat list supaya ticker seamless */
const doubled = [...tools, ...tools]

export default function ToolsTicker() {
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden bg-card">
      <div className="mb-6 px-6 md:px-16">
        <p className="mono text-xs text-accent/50 tracking-[0.3em] uppercase">✦ Tools & Software</p>
      </div>

      {/* Ticker row 1 — kiri ke kanan */}
      <div className="overflow-hidden mb-4">
        <div className="ticker-track gap-0">
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-3 border-r border-white/5 shrink-0 group cursor-default"
            >
              <span className="text-xl">{tool.icon}</span>
              <span className="font-cormorant text-xl text-light/50 group-hover:text-accent transition-colors duration-300 whitespace-nowrap tracking-wide">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker row 2 — kanan ke kiri (reverse) */}
      <div className="overflow-hidden">
        <div
          className="ticker-track gap-0"
          style={{ animationDirection: 'reverse', animationDuration: '22s' }}
        >
          {doubled.map((tool, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-3 border-r border-white/5 shrink-0 group cursor-default"
            >
              <span className="mono text-xs text-accent/30 mr-1">◆</span>
              <span className="font-cormorant text-xl text-light/30 group-hover:text-light transition-colors duration-300 whitespace-nowrap italic tracking-wide">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

> **Catatan**: Jika ingin pakai logo SVG asli (Lightroom, Photoshop, dll.), simpan file SVG di `/public/assets/logos/` dan ganti `icon` dengan `<img src="/assets/logos/lightroom.svg" className="w-6 h-6" />`.

---

## 📄 `src/components/Gallery.jsx`

> Section galeri foto hasil jepretan — masonry-style grid

```jsx
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
```

---

## 📄 `src/components/Experience.jsx`

> Pengalaman & Komunitas — Timeline vertikal elegan

```jsx
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
```

---

## 📄 `src/components/Skills.jsx`

> Hard Skills dalam bentuk badge visual

```jsx
import { motion } from 'framer-motion'
import { Camera, Film, PenTool, Monitor, FileSpreadsheet } from 'lucide-react'

const skills = [
  { icon: <Camera size={20} />,        label: 'Photography',        level: 90 },
  { icon: <Film size={20} />,          label: 'Video Editing',      level: 82 },
  { icon: <PenTool size={20} />,       label: 'Graphic Design',     level: 88 },
  { icon: <Monitor size={20} />,       label: 'UI Design',          level: 72 },
  { icon: <FileSpreadsheet size={20} />, label: 'Microsoft Office', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mono text-xs text-accent tracking-[0.3em] uppercase mb-4">✦ Keahlian</p>
        <h2 className="font-cormorant font-light text-5xl md:text-7xl text-light leading-none">
          Hard<br />
          <span className="italic text-accent">Skills.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            className="bg-card border border-white/5 p-6 group hover:border-accent/40 transition-colors duration-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-dark transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="font-cormorant text-2xl text-white/10 group-hover:text-accent/20 transition-colors">
                0{i + 1}
              </span>
            </div>

            <h3 className="font-cormorant text-xl text-light mb-4">{skill.label}</h3>

            {/* Progress bar */}
            <div className="h-px bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: 'easeOut' }}
                className="h-full bg-accent absolute top-0 left-0"
              />
            </div>
            <p className="mono text-xs text-light/20 mt-2 tracking-wider">{skill.level}%</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

---

## 📄 `src/components/Contact.jsx`

> Info kontak & CTA — Versi web portofolio (tanpa lamaran Pi Photo Studio)

```jsx
import { motion } from 'framer-motion'
import { Mail, Instagram, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-16 max-w-7xl mx-auto">
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
            { icon: <Instagram size={16} />, label: 'Instagram', value: '@moonchi.xd',               href: 'https://instagram.com/moonchi.xd' },
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
```

---

## 📄 `src/components/Footer.jsx`

```jsx
import { Aperture } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 border border-accent/40 rounded-full flex items-center justify-center">
            <Aperture size={13} className="text-accent" />
          </div>
          <span className="font-cormorant text-lg text-light tracking-widest">Moch Danu Hidayat</span>
        </div>
        <p className="mono text-xs text-light/20">
          © 2026 · Built with React + Tailwind + Framer Motion
        </p>
        <p className="mono text-xs text-accent/40 tracking-widest uppercase">
          Photographer & Visual Creative
        </p>
      </div>
    </footer>
  )
}
```

---

## 📄 `src/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## 📄 `index.html`

```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Moch Danu Hidayat — Photographer, Videographer & Visual Creative | Pontianak" />
    <title>Moch Danu Hidayat | Photographer & Visual Creative</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 📄 `package.json` (referensi dependencies)

```json
{
  "name": "portofolio-danu",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.383.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@vitejs/plugin-react": "^4.3.1",
    "tailwindcss": "^4.0.0",
    "vite": "^5.4.0"
  }
}
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Ganti `/assets/foto-profil.jpg` dengan foto profesional kamu (portrait/editorial)
- [ ] Masukkan 6 foto terbaik hasil jepretan kamu ke `/assets/gallery-1.jpg` s/d `gallery-6.jpg`
- [ ] Sesuaikan tag galeri (`Portrait`, `Event`, `Street`, dll.) di `Gallery.jsx`
- [ ] Verifikasi nomor WhatsApp di `Contact.jsx` (+62 8-5175-363668)
- [ ] Verifikasi handle Instagram di `Contact.jsx` (@moonchi.xd)
- [ ] Verifikasi email di `Contact.jsx` (moch.danuhdyt@gmail.com)
- [ ] (Opsional) Tambah logo SVG tools di `ToolsTicker.jsx` untuk tampilan lebih profesional
- [ ] Test di mobile (`npm run dev` → buka di HP)
- [ ] Build production: `npm run build`

---

## 🎨 Design Summary

| Elemen       | Pilihan                                          |
|---|---|
| **Vibe**     | Cinematic Editorial — Dark Luxury Photography    |
| **Font H1**  | Cormorant Garamond (serif elegan, italic dramatis)|
| **Font Body**| DM Sans (bersih, modern, readable)               |
| **Font Code**| Space Mono (label, tag, badge)                   |
| **Warna**    | `#080808` dark · `#f0ede8` cream · `#c9a96e` gold|
| **Ticker**   | 2 baris, arah berlawanan, hover = pause          |
| **Gallery**  | Masonry grid + lightbox klik fullscreen          |
| **Motion**   | Framer Motion — staggered reveal + grain overlay |
