import Reveal from './Reveal'
import { profile, tr } from '../data/site'
import { useLang } from '../i18n'
import { fill } from '../i18n/ui'

/**
 * Hero 区：大标题 + 简介 + 状态行 + CTA + 滚动指示
 * 全站唯一装饰是右上角那一枚冰面反光光晕
 */
export default function Hero() {
  const { lang, t } = useLang()

  return (
    // isolate 创建层叠上下文：否则 -z-10 的光晕会画在不透明 body 背景之下，永远不可见
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden border-b border-border"
    >
      {/* 冰面反光光晕（纯 CSS，克制到 6% 透明度） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(110,231,216,0.06),transparent)]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 md:px-10">
        <div>
          {/* 装饰性 kicker：与 profile.location 手工保持一致，刻意用英文缩写 */}
          <Reveal
            as="p"
            lang="en"
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm"
          >
            <span className="text-accent/60">//</span> PORTFOLIO — GUANGDONG, CN
          </Reveal>

          <Reveal delay={75}>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.15] sm:text-5xl md:text-7xl">
              {t.hello}
              <br />
              <span lang="en">Kimoe Han</span>
              {t.nameSuffix}
              <span className="text-accent">{t.namePeriod}</span>
            </h1>
          </Reveal>

          <Reveal
            as="p"
            delay={150}
            className="mt-8 max-w-xl text-base leading-loose text-text-secondary md:text-lg"
          >
            {tr(profile.tagline, lang)}
          </Reveal>

          <Reveal delay={225} className="mt-6 flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="size-2 animate-pulse rounded-full bg-accent motion-reduce:animate-none"
            />
            <span className="font-mono text-xs tracking-wider text-text-secondary">
              {fill(t.statusLine, {
                major: tr(profile.major, lang),
                location: tr(profile.location, lang),
              })}
            </span>
          </Reveal>

          <Reveal delay={300} className="mt-10 flex flex-wrap gap-4">
            {/* 全站唯一一处成片实色强调色 */}
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              {t.viewProjects}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border px-6 py-3 text-sm text-text-secondary transition-colors hover:border-accent/50 hover:text-text-primary"
            >
              {t.writeEmail}
            </a>
          </Reveal>
        </div>
      </div>

      {/* 底部滚动指示 */}
      <Reveal delay={400} className="flex flex-col items-center gap-3 pb-10">
        <span className="font-mono text-xs tracking-[0.3em] text-text-secondary">{t.scrollDown}</span>
        <span aria-hidden="true" className="relative h-8 w-px overflow-hidden bg-border">
          <span className="scroll-dot absolute left-0 top-0 h-3 w-px bg-accent" />
        </span>
      </Reveal>
    </section>
  )
}
