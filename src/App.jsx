import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Spine from './components/Spine'
import { useLang } from './i18n'

/** 读取侧边导航的开关记忆（默认开启） */
function readSpinePref() {
  try {
    return localStorage.getItem('kimoe-spine') !== 'off'
  } catch {
    return true
  }
}

export default function App() {
  const { t } = useLang()
  const [spineOpen, setSpineOpen] = useState(readSpinePref)

  const toggleSpine = () => {
    const next = !spineOpen
    setSpineOpen(next)
    try {
      localStorage.setItem('kimoe-spine', next ? 'on' : 'off')
    } catch {
      /* 忽略存储失败，仅影响下次访问的记忆 */
    }
  }

  return (
    <>
      {/* 键盘用户跳转捷径 */}
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
      >
        {t.skipToProjects}
      </a>

      <Spine open={spineOpen} />
      <Navbar spineOpen={spineOpen} onToggleSpine={toggleSpine} />

      <main>
        <Hero />
        <Projects />
      </main>

      <Footer />
    </>
  )
}
