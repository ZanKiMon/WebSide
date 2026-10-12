/** 通用毛玻璃卡片：全站卡片流的统一容器 */
export default function GlassCard({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag
      {...rest}
      className={`rounded-2xl border border-border bg-surface/80 p-6 shadow-lg shadow-black/5 backdrop-blur-md md:p-8 ${className}`}
    >
      {children}
    </Tag>
  )
}
