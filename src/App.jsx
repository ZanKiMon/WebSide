import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Spine from './components/Spine'

export default function App() {
  return (
    <>
      {/* 键盘用户跳转捷径 */}
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
      >
        跳到项目
      </a>

      <Spine />
      <Navbar />

      <main>
        <Hero />
        <Projects />
      </main>

      <Footer />
    </>
  )
}
