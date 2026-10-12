import Reveal from './Reveal'
import GlassCard from './GlassCard'
import { gallery, tr } from '../data/site'
import { useLang } from '../i18n'
import { fill } from '../i18n/ui'
import { ImageIcon } from './Icons'

/** 图库：相册分类卡片（数据在 site.js 的 gallery，封面图以后自己放） */
export default function Gallery() {
  const { lang, t } = useLang()

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
              <GlassCard className="group h-full overflow-hidden p-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {g.cover ? (
                    <img
                      src={g.cover}
                      alt={tr(g.title, lang)}
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
                <div className="flex items-center justify-between p-4">
                  <h3 className="truncate text-sm font-medium">{tr(g.title, lang)}</h3>
                  <span className="shrink-0 font-mono text-xs text-text-secondary">
                    {fill(t.galleryCount, { count: g.count })}
                  </span>
                </div>
              </GlassCard>
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
    </section>
  )
}
