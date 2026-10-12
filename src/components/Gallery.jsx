import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import GlassCard from './GlassCard'
import { gallery, tr } from '../data/site'
import { useLang } from '../i18n'
import { ImageIcon } from './Icons'

/**
 * 灯箱：点击缩略图后全屏放大查看
 * 点击遮罩/× 关闭，‹ › 或键盘 ← → 切换，Esc 关闭；打开时锁定页面滚动
 */
function Lightbox({ items, index, onClose, onNav }) {
  const { lang } = useLang()
  const item = items[index]
  const full = item.full || item.src
  const caption = item.title ? tr(item.title, lang) : ''

  // 键盘操作 + 打开时锁滚动
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, onNav])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption || 'photo'}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <figure className="relative flex max-h-full flex-col items-center gap-3" onClick={(e) => e.stopPropagation()}>
        <img
          src={full}
          alt={caption}
          className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
        />
        {caption && (
          <figcaption className="font-mono text-xs text-white/70">{caption}</figcaption>
        )}
      </figure>

      {/* 关闭 */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
      >
        ×
      </button>

      {/* 左右切换（多于一张时才显示） */}
      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNav(-1)
            }}
            aria-label="Previous"
            className="absolute left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 md:left-6"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onNav(1)
            }}
            aria-label="Next"
            className="absolute right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 md:right-6"
          >
            ›
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white/80">
            {index + 1} / {items.length}
          </div>
        </>
      )}
    </div>
  )
}

/** 图库：缩略图照片墙，点击放大查看（数据在 site.js 的 gallery） */
export default function Gallery() {
  const { lang, t } = useLang()
  const [active, setActive] = useState(null)
  const nav = (dir) => setActive((i) => (i + dir + gallery.length) % gallery.length)

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      tabIndex={-1}
      className="mt-10 scroll-mt-20 outline-none"
    >
      <Reveal>
        <p lang="en" className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:text-sm">
          02 — GALLERY
        </p>
        <h2 id="gallery-title" className="mt-2 text-2xl font-medium drop-shadow-sm md:text-3xl">
          {t.galleryTitle}
        </h2>
      </Reveal>

      {gallery.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 75} className="h-full">
              {/* 缩略图按钮：点击打开灯箱看原图 */}
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={g.title ? tr(g.title, lang) : t.galleryTitle}
                className="h-full w-full cursor-zoom-in appearance-none border-0 bg-transparent p-0 text-left"
              >
                <GlassCard className="group h-full overflow-hidden p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {g.src ? (
                      <img
                        src={g.src}
                        alt={g.title ? tr(g.title, lang) : ''}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                        style={{
                          background:
                            'linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 16%, transparent), color-mix(in srgb, var(--color-accent) 5%, transparent))',
                        }}
                      >
                        <ImageIcon className="size-8 text-accent/60" />
                        <span className="font-mono text-xs text-text-secondary">
                          {t.galleryPlaceholder}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* 标题可选：不填就不渲染标题栏，纯图卡片 */}
                  {g.title && (
                    <div className="p-3">
                      <h3 className="truncate font-mono text-xs text-text-secondary">
                        {tr(g.title, lang)}
                      </h3>
                    </div>
                  )}
                </GlassCard>
              </button>
            </Reveal>
          ))}
        </div>
      ) : (
        // 空态也保留区块与锚点，避免导航/页脊的 #gallery 悬空
        <Reveal className="mt-5">
          <GlassCard>
            <p className="py-8 text-center font-mono text-xs text-text-secondary">
              {t.galleryPlaceholder}
            </p>
          </GlassCard>
        </Reveal>
      )}

      {active !== null && (
        <Lightbox items={gallery} index={active} onClose={() => setActive(null)} onNav={nav} />
      )}
    </section>
  )
}
