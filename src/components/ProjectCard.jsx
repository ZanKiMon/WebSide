import Reveal from './Reveal'
import { ArrowIcon } from './Icons'

/**
 * 项目卡片：扁平墨面，无阴影，hover 只做三件事——
 * 换底色、边框染强调色、箭头斜向位移
 * 没有真实链接的卡片渲染为 <article>，绝不放假链接
 */
export default function ProjectCard({ project, index }) {
  const { title, en, description, tags, year, link, repo, placeholder } = project
  const href = link || repo
  const Tag = href ? 'a' : 'article'

  return (
    <Reveal delay={(index % 2) * 75} className="h-full">
      <Tag
        {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
        className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40 hover:bg-surface-hover md:p-8"
      >
        {/* 首行：序号 + 外链箭头 */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          {href && (
            <>
              <ArrowIcon className="size-4 text-text-secondary transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              <span className="sr-only">（在新标签页打开）</span>
            </>
          )}
        </div>

        {/* 标题 + 英文装饰副标 */}
        <h3 className="mt-5 text-xl font-medium md:text-2xl">{title}</h3>
        <p lang="en" className="mt-1.5 font-mono text-xs uppercase tracking-widest text-text-secondary">
          {en}
        </p>

        {/* 描述 */}
        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
          {description}
        </p>

        {/* 底行：标签 + WIP 徽章 + 年份 */}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-xs tracking-wider text-text-secondary"
            >
              {t}
            </span>
          ))}
          {placeholder && (
            <span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs tracking-wider text-accent">
              施工中 WIP
            </span>
          )}
          <span className="ml-auto font-mono text-xs text-text-secondary">{year}</span>
        </div>
      </Tag>
    </Reveal>
  )
}
