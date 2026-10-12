import { profile } from '../data/site'
import { useLang } from '../i18n'
import { LANGS } from '../i18n/ui'
import { MailIcon, MoonIcon, SidebarIcon, SparklesIcon } from './Icons'

/**
 * 顶部导航：毛玻璃细线条
 * 最左侧为侧边导航开关 + 主题切换（纯图标）
 * 右侧为锚点链接 + 语言切换（中 / 日 / 한 / EN）
 * 360px 窄屏：联系只留图标、主题切换 sm 起显示，保证日韩长词不溢出
 */
export default function Navbar({ spineOpen, onToggleSpine }) {
  const { lang, setLang, t, theme, setTheme } = useLang()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav
        aria-label={t.navLabel}
        className="mx-auto flex h-16 w-full max-w-4xl items-center justify-between px-4 sm:px-6 lg:group-data-[spine=open]:pl-36 xl:group-data-[spine=open]:pl-0"
      >
        <div className="flex items-center gap-4">
          {/* 侧边导航开关：纯图标，开启时亮强调色 */}
          <button
            type="button"
            onClick={onToggleSpine}
            aria-pressed={spineOpen}
            aria-label={t.toggleSpine}
            title={t.toggleSpine}
            className={`hidden rounded-full border border-border p-1.5 transition-colors lg:block ${
              spineOpen
                ? 'text-accent'
                : 'text-text-secondary hover:border-accent/50 hover:text-text-primary'
            }`}
          >
            <SidebarIcon className="size-4" />
          </button>

          {/* 主题切换：墨与冰 ⇄ 二次元清新（图标 = 可切换到的那个主题） */}
          <button
            type="button"
            onClick={() => setTheme(theme === 'ink' ? 'moe' : 'ink')}
            aria-pressed={theme === 'moe'}
            aria-label={t.toggleTheme}
            title={t.toggleTheme}
            className={`hidden rounded-full border border-border p-1.5 transition-colors sm:block ${
              theme === 'moe'
                ? 'text-accent'
                : 'text-text-secondary hover:border-accent/50 hover:text-text-primary'
            }`}
          >
            {theme === 'ink' ? <SparklesIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </button>

          <a
            href="#hero"
            lang="en"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            <span className="text-accent">K.</span> Kimoe Han
          </a>
        </div>

        <div className="flex items-center gap-2.5 md:gap-8">
          <a
            href="#projects"
            className="relative text-sm text-text-secondary transition-colors after:absolute after:mt-1 after:block after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-text-primary hover:after:scale-x-100"
          >
            {t.navProjects}
          </a>
          {/* 图库链接：窄屏隐藏（手机靠滚动浏览，避免日韩长词撑爆导航栏） */}
          <a
            href="#gallery"
            className="relative hidden text-sm text-text-secondary transition-colors after:absolute after:mt-1 after:block after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-text-primary hover:after:scale-x-100 md:inline"
          >
            {t.galleryTitle}
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
