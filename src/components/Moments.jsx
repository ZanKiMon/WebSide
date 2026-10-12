import Reveal from './Reveal'
import GlassCard from './GlassCard'
import { moments, profile } from '../data/site'
import { useLang } from '../i18n'

/** 瞬间说说：随手记录的心情流（数据在 site.js 的 moments，新的在上） */
export default function Moments() {
  const { t } = useLang()
  if (moments.length === 0) return null

  return (
    <section aria-labelledby="moments-title" className="mt-4 scroll-mt-20">
      <Reveal>
        <p lang="en" className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
          MOMENTS
        </p>
        <h2 id="moments-title" className="mt-2 text-2xl font-medium drop-shadow-sm md:text-3xl">
          {t.momentsTitle}
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-5">
        <GlassCard>
          {moments.map((m, i) => (
            <article key={i} className={i > 0 ? 'mt-6 border-t border-border pt-6' : ''}>
              <div className="flex items-center gap-3">
                {/* 头像：未设置时用名字首字母徽标 */}
                {profile.avatar ? (
                  <img src={profile.avatar} alt="" className="size-10 rounded-full object-cover" />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-mono text-sm font-semibold text-accent"
                  >
                    K
                  </span>
                )}
                <div className="flex min-w-0 flex-col">
                  <span className="truncate text-sm font-medium">{profile.name}</span>
                  <time className="font-mono text-xs text-text-secondary" dateTime={m.datetime}>
                    {m.date}
                  </time>
                </div>
                {m.placeholder && (
                  <span className="ml-auto rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs tracking-wider text-accent">
                    {t.exampleBadge}
                  </span>
                )}
              </div>
              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-text-secondary md:text-base">
                {m.text}
              </p>
            </article>
          ))}
        </GlassCard>
      </Reveal>
    </section>
  )
}
