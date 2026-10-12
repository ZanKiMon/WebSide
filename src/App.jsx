import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Moments from './components/Moments'
import AboutCard from './components/AboutCard'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
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
    // data-spine：侧边导航开启时，1024–1279px 区间的页面内容自动向右让位
    // isolate：创建层叠上下文，否则 fixed 背景层的 -z-10 会被不透明 body 背景盖死
    <div data-spine={spineOpen ? 'open' : 'closed'} className="isolate group">
      {/* 键盘用户跳转捷径 */}
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
      >
        {t.skipToProjects}
      </a>

      {/* 全屏背景：主视觉图（cover 不变形）+ 主题色渐变罩压出可读性 */}
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <div className="kv-bg absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/25 to-background/85" />
      </div>

      <Spine open={spineOpen} />
      <Navbar spineOpen={spineOpen} onToggleSpine={toggleSpine} />

      {/* 悬浮玻璃卡片流主列 */}
      <main className="mx-auto w-full max-w-4xl px-4 pt-4 sm:px-6 lg:group-data-[spine=open]:pl-36 xl:group-data-[spine=open]:pl-0">
        <Hero />
        <Moments />
        <AboutCard />
        <Projects />
        <Gallery />
      </main>

      <Footer />
    </div>
  )
}
