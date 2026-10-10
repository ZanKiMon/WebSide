import { profile } from '../data/site'
import { MailIcon } from './Icons'

/** 顶部导航：毛玻璃细线条，链接 hover 时画一条 1px 强调色下划线 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <nav aria-label="主导航" className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-10">
        <a
          href="#hero"
          lang="en"
          className="text-sm font-medium transition-colors hover:text-accent"
        >
          <span className="text-accent">K.</span> Kimoe Han
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          {/* relative 让 after: 伪元素的包含块回到链接自身，下划线宽度才等于文字宽度 */}
          <a
            href="#projects"
            className="relative text-sm text-text-secondary transition-colors after:absolute after:mt-1 after:block after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-text-primary hover:after:scale-x-100"
          >
            项目
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <MailIcon />
            联系
          </a>
        </div>
      </nav>
    </header>
  )
}
