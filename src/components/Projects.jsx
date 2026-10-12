import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/site'
import { useLang } from '../i18n'
import { fill } from '../i18n/ui'

/**
 * 项目区：玻璃卡片双列网格（悬浮在背景图上）
 * 奇数张卡片时自动补一块虚线占位格，避免 2×2+1 的失衡收尾（评委意见）
 */
export default function Projects() {
  const { t } = useLang()
  const hasOrphan = projects.length % 2 === 1

  return (
    // tabIndex=-1：让 skip link 点击后焦点能真正落到本区块
    <section id="projects" aria-labelledby="projects-title" tabIndex={-1} className="mt-10 scroll-mt-20 outline-none">
      {/* 区块头：左 kicker + 标题，右计数 */}
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p lang="en" className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
            01 — PROJECTS
          </p>
          <h2 id="projects-title" className="mt-2 text-2xl font-medium drop-shadow-sm md:text-3xl">
            {t.projectsTitle}
          </h2>
        </div>
        <p className="font-mono text-xs text-text-secondary drop-shadow-sm">
          {fill(t.projectsMeta, { count: projects.length })}
        </p>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.subtitle} project={p} index={i} />
          ))}

          {hasOrphan && (
            <div className="flex min-h-40 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border p-6 text-center">
              <span className="font-mono text-xs text-text-secondary">{t.orphanCell}</span>
            </div>
          )}
      </div>
    </section>
  )
}
