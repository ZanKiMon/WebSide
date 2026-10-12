import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ui, LANGS, HTML_LANG } from './ui'

/**
 * 轻量站点偏好：多语言 + 主题，零外部依赖
 * - 语言：localStorage 记忆 → 浏览器语言探测 → 默认中文；切换时同步 <html lang> 与 document.title
 * - 主题：'ink'（墨与冰，默认）/ 'moe'（二次元清新）；切换时同步 <html data-theme>
 */

const LangContext = createContext(null)
const STORAGE_KEY = 'kimoe-lang'
const THEME_KEY = 'kimoe-theme'

const SUPPORTED = LANGS.map((l) => l.code)

function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(saved)) return saved
  } catch {
    /* 隐私模式等场景下 localStorage 不可用，走浏览器语言探测 */
  }
  const browser = navigator.language?.toLowerCase() ?? 'zh'
  if (browser.startsWith('zh')) return 'zh'
  if (browser.startsWith('ja')) return 'ja'
  if (browser.startsWith('ko')) return 'ko'
  return 'en'
}

function detectTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'ink' || saved === 'moe' || saved === 'p5') return saved
  } catch {
    /* 存储不可用时用默认主题 */
  }
  return 'ink'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectLang)
  const [theme, setTheme] = useState(detectTheme)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* 忽略存储失败，仅影响下次访问的记忆 */
    }
    document.documentElement.lang = HTML_LANG[lang]
    document.title = ui[lang].pageTitle
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', ui[lang].metaDescription)
  }, [lang])

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* 忽略存储失败 */
    }
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(() => ({ lang, setLang, t: ui[lang], theme, setTheme }), [lang, theme])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

/** 组件里取 { lang, setLang, t, theme, setTheme } —— t 是当前语言的文案对象 */
export function useLang() {
  return useContext(LangContext)
}
