/** 飘落的银杏叶：扇形叶 + 叶柄，纯 CSS 动画（复用 petal-fall），银杏秋日主题专属 */

const LEAVES = [
  { left: '4%', color: '#ffc93c', size: 16, drift: '30px', duration: '11s', delay: '-2s', opacity: 0.85 },
  { left: '13%', color: '#f5b914', size: 13, drift: '-22px', duration: '14s', delay: '-8s', opacity: 0.7 },
  { left: '24%', color: '#ffde7a', size: 18, drift: '34px', duration: '10.5s', delay: '-5s', opacity: 0.8 },
  { left: '36%', color: '#ffc93c', size: 12, drift: '-28px', duration: '13s', delay: '-11s', opacity: 0.7 },
  { left: '48%', color: '#f5b914', size: 17, drift: '24px', duration: '12s', delay: '-4s', opacity: 0.75 },
  { left: '60%', color: '#ffde7a', size: 12, drift: '-32px', duration: '15s', delay: '-9s', opacity: 0.65 },
  { left: '72%', color: '#ffc93c', size: 16, drift: '28px', duration: '11.5s', delay: '-13s', opacity: 0.8 },
  { left: '84%', color: '#f5b914', size: 13, drift: '-24px', duration: '13.5s', delay: '-6s', opacity: 0.7 },
  { left: '93%', color: '#ffde7a', size: 15, drift: '26px', duration: '12.5s', delay: '-10s', opacity: 0.75 },
]

export default function GinkgoLeaves() {
  return (
    <>
      {LEAVES.map((l, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: l.left,
            opacity: l.opacity,
            animationDuration: l.duration,
            animationDelay: l.delay,
            '--drift': l.drift,
          }}
        >
          <svg viewBox="0 0 24 28" className="block" style={{ width: l.size, height: l.size * 1.15 }} aria-hidden="true">
            <path d="M12 26v-8" stroke="#c9a227" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path
              d="M12 18C5.5 18 2.5 11.5 2 4.5 8 3 11 6.5 12 10c1-3.5 4-7 10-5.5-.5 7-3.5 13.5-10 13.5Z"
              fill={l.color}
            />
          </svg>
        </span>
      ))}
    </>
  )
}
