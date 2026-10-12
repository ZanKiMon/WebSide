import Reveal from './Reveal'
import GlassCard from './GlassCard'
import { profile, siteMeta, tr } from '../data/site'
import { useLang } from '../i18n'
import { MailIcon } from './Icons'

/** 站点运行天数（从 siteMeta.launchDate 起算，当天算第 1 天；日期无效时回退为 1） */
function runDays() {
  const start = new Date(`${siteMeta.launchDate}T00:00:00`).getTime()
  const days = Math.floor((Date.now() - start) / 86400000) + 1
  return Number.isFinite(days) ? Math.max(1, days) : 1
}

/**
 * 页脚 = 联系区玻璃卡 + 浮动版权栏（含运行天数）
 * 不放 GitHub 等社交图标——没有真实链接就不出现假入口
 */
export default function Footer() {
  const { lang, t } = useLang()

  return (
    <footer id="contact" aria-labelledby="contact-title" className="mt-10 scroll-mt-20 outline-none">
      <div className="mx-auto w-full max-w-4xl px-4 pb-10 sm:px-6 lg:data-[spine=open]:pl-36 xl:data-[spine=open]:pl-0">
        <Reveal>
          <GlassCard>
            <p lang="en" className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
              03 — CONTACT
            </p>
            <h2 id="contact-title" className="mt-3 text-2xl font-medium md:text-3xl">
              {t.footerLead}
              <span className="text-accent">{t.footerAccent}</span>
              {t.footerTail}
            </h2>
            <a
              href={`mailto:${profile.email}`}
              lang="en"
              className="mt-5 inline-flex items-center gap-3 font-mono text-lg text-text-primary underline decoration-accent/40 decoration-1 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-2xl md:text-3xl"
            >
              <MailIcon className="size-5 shrink-0 sm:size-6" />
              {profile.email}
            </a>
          </GlassCard>
        </Reveal>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-text-secondary drop-shadow-sm">
            © {new Date().getFullYear()} {profile.name} · {tr(profile.location, lang)} ·{' '}
            {t.statsDaysLabel} {runDays()}
          </p>
          <a
            href="#hero"
            className="self-start font-mono text-xs text-text-secondary transition-colors hover:text-accent drop-shadow-sm sm:self-auto"
          >
            {t.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
