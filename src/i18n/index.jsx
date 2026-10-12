import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ui, LANGS, HTML_LANG } from './ui'

/**
 * 轻量多语言：Context + 词典，零外部依赖
 * - 初始语言：localStorage 记忆 → 浏览器语言探测 → 默认中文
 * - 切换时同步 <html lang> 与 document.title
 */

const LangContext = createContext(null)
const STORAGE_KEY = 'kimoe-lang'

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

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectLang)

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

  const value = useMemo(() => ({ lang, setLang, t: ui[lang] }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

/** 组件里取 { lang, setLang, t } —— t 是当前语言的文案对象 */
export function useLang() {
  return useContext(LangContext)
}
