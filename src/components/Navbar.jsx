import { profile } from '../data/site'
import { useLang } from '../i18n'
import { LANGS } from '../i18n/ui'
import { MailIcon } from './Icons'

/**
 * 顶部导航：毛玻璃细线条
 * 右侧为锚点链接 + 语言切换（中 / 日 / 한 / EN，当前语言亮强调色）
 * 360px 窄屏：联系只留图标、间距收紧，保证 ja/ko 长词也不溢出
 */
export default function Navbar() {
  const { lang, setLang, t } = useLang()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav
        aria-label={t.navLabel}
        className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-10"
      >
        <a
          href="#hero"
          lang="en"
          className="text-sm font-medium transition-colors hover:text-accent"
        >
          <span className="text-accent">K.</span> Kimoe Han
        </a>

        <div className="flex items-center gap-2.5 md:gap-8">
          <a
            href="#projects"
            className="relative text-sm text-text-secondary transition-colors after:absolute after:mt-1 after:block after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-text-primary hover:after:scale-x-100"
          >
            {t.navProjects}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <MailIcon />
            {/* 窄屏只留图标，防止日文「お問い合わせ」等长词撑爆导航栏 */}
            <span className="hidden sm:inline">{t.navContact}</span>
          </a>

          {/* 语言切换：当前语言加粗 + 亮强调色（不只靠颜色区分）；负 margin 扩大命中区而不占版面 */}
          <div
            role="group"
            aria-label={t.langGroupLabel}
            className="flex items-center font-mono text-xs"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={`-mx-0.5 px-1.5 py-2 transition-colors ${
                  lang === l.code
                    ? 'font-semibold text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
