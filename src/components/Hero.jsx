import Reveal from './Reveal'
import Petals from './Petals'
import GinkgoLeaves from './GinkgoLeaves'
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
      {/* 主题光晕（墨与冰=极淡冰面反光；二次元=樱粉+水蓝双光晕），见 index.css 的 .hero-glow */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[36rem] rounded-full"
      />

      {/* 漂落樱花花瓣：仅二次元清新主题显示 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden moe:block overflow-hidden"
      >
        <Petals />
      </div>

      {/* 银杏秋日场景：金黄天空 + 树冠光晕 + 阳光光斑 + 树干剪影 + 飘落银杏叶（纯 CSS/SVG 氛围复刻） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hidden autumn:block overflow-hidden"
      >
        {/* 金黄天空 */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffdf8e_0%,#fff3cf_42%,#fffdf4_78%,#fff9ec_100%)]" />
        {/* 树冠：顶部成片金黄圆晕 */}
        <div className="absolute -top-24 -left-16 size-80 rounded-full bg-[#ffd44d] opacity-70 blur-3xl" />
        <div className="absolute -top-32 left-1/4 size-96 rounded-full bg-[#ffcf3d] opacity-60 blur-3xl" />
        <div className="absolute -top-20 right-1/4 size-72 rounded-full bg-[#ffd95e] opacity-70 blur-3xl" />
        <div className="absolute -top-28 -right-10 size-80 rounded-full bg-[#f5c020] opacity-60 blur-3xl" />
        {/* 阳光光斑 */}
        <div className="absolute left-[18%] top-[12%] size-24 rounded-full bg-white/70 blur-2xl" />
        <div className="absolute left-[55%] top-[6%] size-16 rounded-full bg-white/60 blur-xl" />
        <div className="absolute right-[22%] top-[24%] size-20 rounded-full bg-[#fff7d6]/80 blur-2xl" />
        {/* 树干剪影：暖棕竖条，近深远浅 */}
        <div className="absolute bottom-0 left-[8%] h-[72%] w-10 rounded-t-full bg-[linear-gradient(180deg,rgba(214,178,110,0.35),rgba(160,124,60,0.5))]" />
        <div className="absolute bottom-0 left-[30%] h-[64%] w-7 rounded-t-full bg-[linear-gradient(180deg,rgba(214,178,110,0.28),rgba(160,124,60,0.42))]" />
        <div className="absolute bottom-0 right-[24%] h-[68%] w-9 rounded-t-full bg-[linear-gradient(180deg,rgba(214,178,110,0.3),rgba(160,124,60,0.45))]" />
        <div className="absolute bottom-0 right-[6%] h-[60%] w-6 rounded-t-full bg-[linear-gradient(180deg,rgba(214,178,110,0.26),rgba(160,124,60,0.4))]" />
        {/* 地面落叶毯 */}
        <div className="absolute bottom-0 h-24 w-full bg-[linear-gradient(180deg,transparent,#f7d878)] opacity-80" />
        <GinkgoLeaves />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-1 items-center px-6 md:px-10 lg:data-[spine=open]:pl-36 xl:data-[spine=open]:pl-0">
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
