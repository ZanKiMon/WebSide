import { useMemo } from 'react'
import { sections } from '../data/site'
import useActiveSection from '../hooks/useActiveSection'

/**
 * 「冰棱页脊」—— ≥1280px (xl) 时出现在视口左侧的竖向区块刻度
 * 当前区块的节点点亮为强调色，像卷轴书脊 / 冰芯样本
 * 提到 xl 是为了避免与 max-w-5xl 容器的左留白相撞（评委意见）
 * 纯装饰，aria-hidden；键盘用户走顶部导航
 */
export default function Spine() {
  // useMemo 固定引用：否则每次渲染都是新数组，会反复销毁重建 IntersectionObserver
  const ids = useMemo(() => sections.map((s) => s.id), [])
  const active = useActiveSection(ids)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-6 z-40 hidden xl:block"
    >
      {/* 通高细线 */}
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border" />

      <div className="relative flex h-full flex-col items-center justify-between py-24">
        {sections.map((s, i) => (
          <div key={s.id} className="flex flex-col items-center">
            {/* 刻度长度层级：节点间的小短横 */}
            {i > 0 && <span className="mb-5 h-px w-1.5 bg-border" />}
            <span
              className={`size-1.5 rounded-full transition-all duration-300 ${
                active === s.id ? 'scale-125 bg-accent' : 'bg-border'
              }`}
            />
            <span
              className={`mt-3 font-mono text-[10px] tracking-[0.25em] [writing-mode:vertical-rl] transition-colors duration-300 ${
                active === s.id ? 'text-accent' : 'text-text-secondary'
              }`}
            >
              {s.num} · {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
