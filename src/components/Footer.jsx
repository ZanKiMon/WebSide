import Reveal from './Reveal'
import { profile, tr } from '../data/site'
import { useLang } from '../i18n'
import { fill } from '../i18n/ui'
import { MailIcon } from './Icons'

/**
 * 页脚 = 联系区：大邮箱 mailto + 版权栏
 * 不放 GitHub 等社交图标——没有真实链接就不出现假入口
 */
export default function Footer() {
  const { lang, t } = useLang()

  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-10 md:py-28 lg:data-[spine=open]:pl-36 xl:data-[spine=open]:pl-0">
        <Reveal>
          <p lang="en" className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
            02 — CONTACT
          </p>
          <h2 id="contact-title" className="mt-4 text-2xl font-medium md:text-4xl">
            {t.footerLead}
            <span className="text-accent">{t.footerAccent}</span>
            {t.footerTail}
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <a
            href={`mailto:${profile.email}`}
            lang="en"
            className="inline-flex items-center gap-3 font-mono text-xl text-text-primary underline decoration-accent/40 decoration-1 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-3xl md:text-4xl"
          >
            <MailIcon className="size-5 shrink-0 sm:size-6" />
            {profile.email}
          </a>
        </Reveal>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-text-secondary">
            {fill(t.copyright, {
              year: new Date().getFullYear(),
              name: profile.name,
              location: tr(profile.location, lang),
            })}
          </p>
          <a
            href="#hero"
            className="self-start font-mono text-xs text-text-secondary transition-colors hover:text-accent sm:self-auto"
          >
            {t.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
