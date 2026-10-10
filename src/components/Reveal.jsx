import { useEffect, useRef, useState } from 'react'

/**
 * 滚动淡入容器：进入视口后一次性显现（opacity-0 translate-y-4 → 归位）
 * @param delay  过渡延迟（ms），用于卡片错峰
 * @param as     渲染的标签，默认 div
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // 减少动效偏好：直接显示，不做动画
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
      className={[
        'transition duration-700 ease-out',
        // 内容尚未显现时若被键盘聚焦（focus-within），立即显形，避免焦点圈落在不可见元素上
        'focus-within:translate-y-0 focus-within:opacity-100',
        'motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      ].join(' ')}
    >
      {children}
    </Tag>
  )
}
