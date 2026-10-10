import { useEffect, useState } from 'react'

/**
 * 监听各 section，返回当前压在视口中部的 section id（用于冰棱页脊高亮）
 * @param ids  section id 数组（来自 site.js 的 sections 配置；调用方用 useMemo 固定引用）
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      // 视口中带（40%–70% 区域）落在哪个 section 上，哪个就是当前项。
      // 下沿放宽到 70%：窄带（40%–50%）在高视口（内高 >1000px）下，滚到页底时页脚也够不到
      { rootMargin: '-40% 0px -30% 0px' },
    )
    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [ids])

  // 兜底：滚到页面最底时强制点亮最后一项（超高视口下观测带仍可能够不到页脚）
  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        setActive(ids[ids.length - 1])
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return active
}
