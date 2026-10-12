import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import GlassCard from './GlassCard'
import { profile, projects, siteMeta, tr } from '../data/site'
import { useLang } from '../i18n'

/** 站点运行天数（从 siteMeta.launchDate 起算，当天算第 1 天；日期无效时回退为 1） */
function runDays() {
  const start = new Date(`${siteMeta.launchDate}T00:00:00`).getTime()
  const days = Math.floor((Date.now() - start) / 86400000) + 1
  return Number.isFinite(days) ? Math.max(1, days) : 1
}

/** 个人资料卡：头像 + 简介 + 统计小组件（项目数 / 访问次数 / 运行天数） */
export default function AboutCard() {
  const { lang, t } = useLang()
  // 访问次数：纯本地计数（本设备的访问回数，无任何外部统计服务）
  const [visits, setVisits] = useState(null)
  // StrictMode 下 effect 会双跑，用 ref 保证只在首次挂载时计数一次
  const counted = useRef(false)
  useEffect(() => {
    if (counted.current) return
    counted.current = true
    try {
      const v = Number(localStorage.getItem('kimoe-visits') ?? 0) + 1
      localStorage.setItem('kimoe-visits', String(v))
      setVisits(v)
    } catch {
      setVisits(null) // 存储不可用时显示占位符
    }
  }, [])

  const stats = [
    { value: projects.length, label: t.statsProjectsLabel },
    { value: visits ?? '—', label: t.statsVisits },
    { value: runDays(), label: t.statsDaysLabel },
  ]

  return (
    <section aria-labelledby="about-title" className="mt-10 scroll-mt-20">
      <Reveal>
        <p lang="en" className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
          ABOUT
        </p>
        <h2 id="about-title" className="mt-2 text-2xl font-medium drop-shadow-sm md:text-3xl">
          {t.aboutTitle}
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-5">
        <GlassCard>
          <div className="flex items-center gap-5">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt=""
                className="size-16 shrink-0 rounded-full border border-border object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex size-16 shrink-0 items-center justify-center rounded-full border border-border bg-accent/15 font-mono text-2xl font-semibold text-accent"
              >
                K
              </span>
            )}
            <h3 className="text-xl font-medium md:text-2xl">{profile.name}</h3>
          </div>

          <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-text-secondary md:text-base">
            {tr(profile.bio, lang)}
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-mono text-2xl font-semibold text-accent">{s.value}</div>
                <div className="mt-1 text-xs text-text-secondary">{s.label}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </section>
  )
}
