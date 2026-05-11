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
