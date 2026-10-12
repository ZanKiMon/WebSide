/**
 * 词典奇偶校验：确保四种语言的键完全一致，防止某语言漏翻
 * 用法：node scripts/check-i18n.mjs
 */
import { ui, LANGS } from '../src/i18n/ui.js'

const base = Object.keys(ui.zh)
let failed = false

for (const { code } of LANGS) {
  const keys = Object.keys(ui[code])
  const missing = base.filter((k) => !keys.includes(k))
  const extra = keys.filter((k) => !base.includes(k))
  if (missing.length || extra.length) {
    failed = true
    console.error(`[${code}] 缺少: ${missing.join(', ') || '无'} | 多余: ${extra.join(', ') || '无'}`)
  } else {
    console.log(`[${code}] ${keys.length} 个键，与 zh 完全一致 ✓`)
  }
}

// 数据文件的多语言字段也做同样校验
const { profile, projects, gallery, sections } = await import('../src/data/site.js')
const LANG_CODES = LANGS.map((l) => l.code)

function checkValue(name, value) {
  if (typeof value === 'string') return
  const missing = LANG_CODES.filter((l) => !value[l])
  if (missing.length) {
    failed = true
    console.error(`[data] ${name} 缺少语言: ${missing.join(', ')}`)
  }
}

checkValue('profile.tagline', profile.tagline)
checkValue('profile.signature', profile.signature)
checkValue('profile.bio', profile.bio)
checkValue('profile.location', profile.location)
checkValue('profile.major', profile.major)
projects.forEach((p, i) => {
  checkValue(`projects[${i}].title`, p.title)
  checkValue(`projects[${i}].description`, p.description)
  p.tags.forEach((t, j) => checkValue(`projects[${i}].tags[${j}]`, t))
})
gallery.forEach((g, i) => checkValue(`gallery[${i}].title`, g.title))
sections.forEach((s, i) => checkValue(`sections[${i}].label`, s.label))

if (failed) {
  console.error('✗ 校验未通过')
  process.exit(1)
}
console.log('✓ 全部语言键位一致')
