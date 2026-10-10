import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/site'

/**
 * 项目区：双列卡片网格
 * 奇数张卡片时自动补一块虚线占位格，避免 2×2+1 的失衡收尾（评委意见）
 */
export default function Projects() {
  const hasOrphan = projects.length % 2 === 1

  return (
    // tabIndex=-1：让 skip link 点击后焦点能真正落到本区块
    <section id="projects" aria-labelledby="projects-title" tabIndex={-1} className="scroll-mt-16 outline-none">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 md:px-10 md:py-32">
        {/* 区块头：左 kicker + 标题，右计数 */}
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p lang="en" className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
              01 — PROJECTS
            </p>
            <h2 id="projects-title" className="mt-4 text-2xl font-medium md:text-4xl">
              项目与练习
            </h2>
          </div>
          <p className="font-mono text-xs text-text-secondary">
            共 {projects.length} 个 · 更多在路上
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}

          {hasOrphan && (
            <div className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border p-6 text-center">
              <span className="font-mono text-xs text-text-secondary">＋ 下一个项目，正在路上</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
