import { useMemo } from 'react'
import { sections, tr } from '../data/site'
import { useLang } from '../i18n'
import useActiveSection from '../hooks/useActiveSection'

/**
 * 左侧悬浮玻璃导航（原「冰棱页脊」进化版）：
 * ≥1280px (xl) 时固定在视口左侧、垂直居中，半透明毛玻璃
 * 实时高亮当前所在栏目，点击可平滑跳转；可从顶部导航栏开关
 * 窄屏隐藏：1280px 时容器左缘距视口 128px，96px 宽的面板刚好让出空间
 * 区块列表由 site.js 的 sections 驱动，与顶部导航同源
 * @param open 由顶部导航开关控制（记忆在 localStorage）
 */
export default function Spine({ open = true }) {
  const { lang, t } = useLang()
  // useMemo 固定引用：否则每次渲染都是新数组，会反复销毁重建 IntersectionObserver
  const ids = useMemo(() => sections.map((s) => s.id), [])
  const active = useActiveSection(ids)

  if (!open) return null

  return (
    <nav
      aria-label={t.spineLabel}
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <div className="flex flex-col gap-1 rounded-2xl border border-border bg-background/70 p-1.5 backdrop-blur-md">
        {sections.map((s) => {
          const isActive = active === s.id
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={`flex w-24 flex-col items-center rounded-xl py-2 transition-colors duration-300 ${
                isActive
                  ? 'bg-accent/10 text-accent'
                  : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
              }`}
            >
              <span className="font-mono text-[10px] tracking-widest opacity-80">{s.num}</span>
              <span className="mt-0.5 whitespace-nowrap text-[10px] leading-tight">
                {tr(s.label, lang)}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
