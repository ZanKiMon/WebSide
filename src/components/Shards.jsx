/** 飘落的碎片三角：红/白/黄，怪盗红主题专属装饰（p5: 下才显示） */

const SHARDS = [
  { left: '6%', color: '#ff3348', size: 12, drift: '30px', duration: '10s', delay: '-3s', opacity: 0.85 },
  { left: '15%', color: '#f5f2ef', size: 9, drift: '-24px', duration: '13s', delay: '-8s', opacity: 0.5 },
  { left: '27%', color: '#ffd84d', size: 11, drift: '26px', duration: '11.5s', delay: '-5s', opacity: 0.8 },
  { left: '39%', color: '#ff3348', size: 14, drift: '-30px', duration: '12.5s', delay: '-10s', opacity: 0.75 },
  { left: '53%', color: '#f5f2ef', size: 8, drift: '22px', duration: '14s', delay: '-2s', opacity: 0.45 },
  { left: '66%', color: '#ffd84d', size: 10, drift: '-28px', duration: '12s', delay: '-7s', opacity: 0.75 },
  { left: '78%', color: '#ff3348', size: 13, drift: '24px', duration: '10.5s', delay: '-12s', opacity: 0.8 },
  { left: '90%', color: '#f5f2ef', size: 9, drift: '-20px', duration: '13.5s', delay: '-4s', opacity: 0.5 },
]

export default function Shards() {
  return (
    <>
      {SHARDS.map((s, i) => (
        <span
          key={i}
          className="shard"
          style={{
            left: s.left,
            opacity: s.opacity,
            animationDuration: s.duration,
            animationDelay: s.delay,
            '--drift': s.drift,
          }}
        >
          {/* 三角碎片，边飘落边快旋转（见 index.css 的 shard-fall） */}
          <span
            className="block"
            style={{ width: s.size, height: s.size, background: s.color, clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }}
          />
        </span>
      ))}
    </>
  )
}
