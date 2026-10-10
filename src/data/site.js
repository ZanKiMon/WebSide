/**
 * ============================================
 *  站点数据 —— 修改个人信息 / 项目只需要改这个文件
 * ============================================
 */

/** 基本信息（来自 Personal.md） */
export const profile = {
  /** 网名 */
  name: 'Kimoe Han',
  /** 一句话简介（Hero 区大标题下面那段） */
  tagline: '网络工程专业在读，来自中国广东。喜欢把想法拆成一行行可运行的东西——写一些小工具，也折腾服务器与网络。',
  /** 补充介绍（预留，后续做「关于我」区块时使用） */
  bio: '来自中国广东，目前主修网络工程。平时喜欢研究网络协议、折腾服务器，也会写一些小工具和网站。',
  /** 所在地 */
  location: '中国广东',
  /** 专业 */
  major: '网络工程',
  /** 邮箱 */
  email: '1090975911@qq.com',
}

/**
 * 项目列表 —— 卡片按数组顺序渲染
 *
 * ⚠️ 除了第一个，下面目前都是【示例占位项目】，把 placeholder 改为 false 或直接替换成你的真实项目：
 *   - title:       项目名
 *   - en:          英文装饰副标（大写等宽字显示）
 *   - description: 一两句话介绍
 *   - tags:        技术标签
 *   - year:        年份
 *   - link:        演示/详情链接（没有就留空字符串，卡片就不会渲染成超链接）
 *   - repo:        仓库链接（没有就留空字符串）
 *   - placeholder: true 时卡片会显示「施工中 WIP」小徽章
 */
export const projects = [
  {
    title: '个人作品集网站',
    en: 'PORTFOLIO SITE',
    description: '你现在看到的这个网站——React + Tailwind CSS 构建的响应式深色主题单页。',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    year: '2026',
    link: '',
    repo: '',
    placeholder: false,
  },
  {
    title: '校园网抓包分析实验',
    en: 'PACKET CAPTURE LAB',
    description: '用 Wireshark 对校园网流量做抓包分析，梳理 TCP 三次握手、DNS 解析等协议细节的实验记录。',
    tags: ['Wireshark', 'TCP/IP', '网络协议'],
    year: '2026',
    link: '',
    repo: '',
    placeholder: true,
  },
  {
    title: 'OpenWrt 软路由折腾记录',
    en: 'HOME ROUTER NOTES',
    description: '把闲置小主机刷成 OpenWrt 软路由的过程：VLAN 划分、多拨、内网服务部署等踩坑笔记。',
    tags: ['OpenWrt', 'Linux', 'VLAN'],
    year: '2025',
    link: '',
    repo: '',
    placeholder: true,
  },
  {
    title: 'Linux 服务器运维笔记',
    en: 'SERVER OPS NOTES',
    description: '从零开始管理一台云服务器：Nginx 配置、防火墙规则、定时备份脚本的整理与沉淀。',
    tags: ['Linux', 'Nginx', 'Shell'],
    year: '2025',
    link: '',
    repo: '',
    placeholder: true,
  },
]

/**
 * 页面区块目录 —— 顶部导航与「冰棱页脊」都由这里驱动
 * 新增区块时：在这里加一行，再在 App.jsx 里渲染对应 section 即可
 */
export const sections = [
  { id: 'hero', num: '00', label: '首页' },
  { id: 'projects', num: '01', label: '项目' },
  { id: 'contact', num: '02', label: '联系' },
]
