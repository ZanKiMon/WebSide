import Reveal from './Reveal'
import Petals from './Petals'
import { profile, tr } from '../data/site'
import { useLang } from '../i18n'
import { HTML_LANG, fill } from '../i18n/ui'

/** 按当前小时返回问候语文案键 */
function greetingKey(hour) {
  if (hour < 5) return 'greetingEarly'
  if (hour < 11) return 'greetingMorning'
  if (hour < 13) return 'greetingNoon'
  if (hour < 18) return 'greetingAfternoon'
  return 'greetingEvening'
}

/**
 * Hero 问候区：大标题 + 签名 + 时间问候胶囊 + CTA
 * 文字直接浮在全屏背景图上（各主题的渐变罩保证可读性）
 */
export default function Hero() {
  const { lang, t } = useLang()
  const now = new Date()
  const dateStr = now.toLocaleDateString(HTML_LANG[lang], {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  })
  const greeting = t[greetingKey(now.getHours())]

  return (
    // isolate + overflow-hidden：樱花花瓣只在本屏内飘落
    <section
      id="hero"
      className="relative isolate flex min-h-[78svh] flex-col justify-center overflow-hidden py-16"
    >
      {/* 漂落樱花花瓣：仅二次元清新主题显示 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden moe:block">
        <Petals />
      </div>

      <div>
        {/* 装饰性 kicker：与 profile.location 手工保持一致，刻意用英文缩写 */}
        <Reveal
          as="p"
          lang="en"
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent drop-shadow-sm md:text-sm"
        >
          <span className="text-accent/60">//</span> PORTFOLIO — GUANGDONG, CN
        </Reveal>

        <Reveal delay={75}>
          <h1 className="title-orbit mt-5 text-4xl font-semibold leading-[1.15] drop-shadow-sm sm:text-5xl md:text-7xl">
            {t.hello}
            <br />
            <span lang="en">Kimoe Han</span>
            {t.nameSuffix}
            <span className="text-accent">{t.namePeriod}</span>
          </h1>
        </Reveal>

        {/* 打字机签名（借鉴 Sky Blog 主题的副标题效果） */}
        <Reveal as="p" delay={140} className="mt-4">
          <span className="typewriter typewriter-caret inline-block text-lg font-medium text-text-primary/85 md:text-xl">
            {tr(profile.signature, lang)}
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={150}
          className="mt-6 max-w-xl text-base leading-loose text-text-primary/90 drop-shadow-sm md:text-lg"
        >
          {tr(profile.tagline, lang)}
        </Reveal>

        {/* 时间问候胶囊 */}
        <Reveal delay={225} className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-3 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm backdrop-blur-md">
            <span className="font-mono text-xs text-text-secondary">{dateStr}</span>
            <span aria-hidden="true" className="h-3 w-px bg-border" />
            <span className="font-medium">{greeting}</span>
          </span>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-2 backdrop-blur-md">
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
          </span>
        </Reveal>

        <Reveal delay={300} className="mt-8 flex flex-wrap gap-4">
          {/* 全站唯一一处成片实色强调色 */}
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background shadow-lg shadow-black/5 transition hover:opacity-90"
          >
            {t.viewProjects}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-border bg-surface/60 px-6 py-3 text-sm text-text-secondary backdrop-blur-md transition-colors hover:border-accent/50 hover:text-text-primary"
          >
            {t.writeEmail}
          </a>
        </Reveal>
      </div>

      {/* 底部滚动指示 */}
      <Reveal
        delay={400}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-xs tracking-[0.3em] text-text-secondary drop-shadow-sm">
          {t.scrollDown}
        </span>
        <span aria-hidden="true" className="relative h-8 w-px overflow-hidden bg-border">
          <span className="scroll-dot absolute left-0 top-0 h-3 w-px bg-accent" />
        </span>
      </Reveal>
    </section>
  )
}
