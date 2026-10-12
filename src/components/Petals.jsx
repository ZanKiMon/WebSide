/** 漂落的樱花花瓣：纯 CSS 动画，二次元清新主题专属装饰（moe: 下才显示） */

const PETALS = [
  { left: '5%', color: '#ffc9db', size: 12, drift: '26px', duration: '12s', delay: '-2s', opacity: 0.7 },
  { left: '14%', color: '#ffb0c9', size: 9, drift: '-18px', duration: '15s', delay: '-7s', opacity: 0.5 },
  { left: '26%', color: '#ffe1ea', size: 14, drift: '34px', duration: '11s', delay: '-5s', opacity: 0.65 },
  { left: '38%', color: '#ffb0c9', size: 10, drift: '-26px', duration: '14s', delay: '-11s', opacity: 0.55 },
  { left: '52%', color: '#ffc9db', size: 13, drift: '20px', duration: '13s', delay: '-4s', opacity: 0.6 },
  { left: '64%', color: '#ffe1ea', size: 9, drift: '-30px', duration: '16s', delay: '-9s', opacity: 0.5 },
  { left: '76%', color: '#ffb0c9', size: 12, drift: '28px', duration: '12.5s', delay: '-13s', opacity: 0.65 },
  { left: '88%', color: '#ffc9db', size: 10, drift: '-22px', duration: '14.5s', delay: '-6s', opacity: 0.55 },
]

export default function Petals() {
  return (
    <>
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            opacity: p.opacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
            '--drift': p.drift,
          }}
        >
          {/* 花瓣形状：对角圆角的水滴形，边飘落边旋转（见 index.css 的 petal-fall） */}
          <span
            className="block rounded-[100%_0_100%_0]"
            style={{ width: p.size, height: p.size, background: `linear-gradient(135deg, ${p.color}, #ffb6cd)` }}
          />
        </span>
      ))}
    </>
  )
}
