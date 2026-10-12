/**
 * ============================================
 *  站点数据 —— 修改个人信息 / 项目只需要改这个文件
 * ============================================
 *
 * 【多语言约定】支持 zh（中文）/ ja（日本語）/ ko（한국어）/ en（English）
 * 需要翻译的内容字段写成四行对象：
 *     { zh: '...', ja: '...', ko: '...', en: '...' }
 * 不需要翻译的（如名字、邮箱、年份、英文标签）保持普通字符串即可，
 * 组件里统一用 tr() 读取：普通字符串原样返回，多语言对象按当前语言取值。
 */

/** 按当前语言取值：多语言对象取对应语言（缺失时降级到中文→英文），普通字符串原样返回 */
export const tr = (value, lang) =>
  typeof value === 'string' ? value : (value[lang] ?? value.zh ?? value.en ?? '')

/** 基本信息（来自 Personal.md） */
export const profile = {
  /** 网名（不翻译） */
  name: 'Kimoe Han',
  /** 头像图片路径（放到 src/assets/ 后填 './assets/xxx.jpg'；留空则显示名字首字母圆形徽标） */
  avatar: '',
  /** 打字机签名（Hero 大标题下面那行打字效果，短一点效果最好） */
  signature: {
    zh: '在这里记录简简单单的日常和折腾笔记~',
    ja: 'ここに日々の記録と作業メモをゆるゆる残していきます～',
    ko: '여기에 소소한 일상과 기록을 남깁니다~',
    en: 'Keeping simple notes of my days and experiments here~',
  },
  /** 一句话签名（Hero 区大标题下面那段） */
  tagline: {
    zh: '网络工程专业在读，来自中国广东。喜欢把想法拆成一行行可运行的东西——写一些小工具，也折腾服务器与网络。',
    ja: '中国・広東出身のネットワーク工学専攻の学生。アイデアを実際に動くものに変えるのが好きです——小さなツール作りから、サーバーやネットワークの実験まで。',
    ko: '중국 광둥 출신 네트워크 공학 재학생. 아이디어를 실제로 동작하는 것으로 만드는 것을 좋아합니다——작은 도구부터 서버와 네트워크 다루기까지.',
    en: 'Network engineering student from Guangdong, China. I like breaking ideas down into things that run — small tools, servers, and networks.',
  },
  /** 个人资料卡里的自我介绍 */
  bio: {
    zh: '是一个网络工程的学生吖~ 平时喜欢研究网络协议、折腾服务器，也会写一些小工具和网站。\n在这里记录简简单单的日常和折腾笔记，希望可以帮到你吖~',
    ja: 'ネットワーク工学の学生です。プロトコルの研究やサーバーいじりが好きで、小さなツールやサイトも作っています。\nここに日々の記録と作業メモを残しています。お役に立てれば嬉しいです～',
    ko: '네트워크 공학을 공부하는 학생이에요~ 프로토콜 연구와 서버 만지기를 좋아하고, 작은 도구와 웹사이트도 만듭니다.\n여기에 소소한 일상과 삽질 기록을 남깁니다. 도움이 되면 좋겠어요~',
    en: "A network engineering student. I enjoy studying protocols, tinkering with servers, and building small tools and websites.\nThis is where I keep my everyday notes and experiments — hope they help you out~",
  },
  location: { zh: '中国广东', ja: '中国・広東', ko: '중국 광둥', en: 'Guangdong, China' },
  major: { zh: '网络工程', ja: 'ネットワーク工学', ko: '네트워크 공학', en: 'Network Engineering' },
  /** 邮箱（不翻译） */
  email: '1090975911@qq.com',
}

/**
 * 瞬间说说 —— 随手记录的心情，按数组顺序显示（新的在上）
 *   - text: 说说内容，支持换行（直接在字符串里按回车写）
 *   - date: 显示的日期时间（自己填写，格式随意）
 *   - placeholder: true 时显示低调的「示例」角标，记得替换成你自己的内容
 */
export const moments = [
  {
    text: '网站今天正式上线啦！\n以后这里会记录我的日常、折腾笔记和各种各样的奇思妙想 (⁠´⁠▽⁠`⁠)ﾉ',
    date: '10-12 12:00',
    /** ISO 时间（可选）：给 <time datetime> 用的机器可读格式 */
    datetime: '2026-10-12T12:00:00',
    placeholder: true,
  },
]

/**
 * 图库 —— 照片墙（图片放 src/assets/ 后在这里填路径，按数组顺序显示）
 *   - src:   缩略图路径（网格里显示的小图，建议宽 640px）
 *   - full:  点击放大后的原图路径（省略则点击时直接用 src）
 *   - title: 可选的小标题/日期（不填就不显示标题栏）
 */
export const gallery = [
  { src: './assets/gallery-01-thumb.webp', full: './assets/gallery-01.webp', title: '2025-01-01' },
  { src: './assets/gallery-02-thumb.webp', full: './assets/gallery-02.webp', title: '2025-01-02' },
  { src: './assets/gallery-03-thumb.webp', full: './assets/gallery-03.webp', title: '2025-01-02' },
  { src: './assets/gallery-04-thumb.webp', full: './assets/gallery-04.webp', title: '2025-01-02' },
  { src: './assets/gallery-05-thumb.webp', full: './assets/gallery-05.webp', title: '2025-01-02' },
  { src: './assets/gallery-06-thumb.webp', full: './assets/gallery-06.webp', title: '2025-01-03' },
  { src: './assets/gallery-07-thumb.webp', full: './assets/gallery-07.webp', title: '2025-01-04' },
]

/** 项目列表（卡片按数组顺序渲染，字段含义见各项注释） */
export const projects = [
  {
    title: {
      zh: '个人作品集网站',
      ja: 'ポートフォリオサイト',
      ko: '포트폴리오 웹사이트',
      en: 'Portfolio Website',
    },
    subtitle: 'PORTFOLIO SITE',
    description: {
      zh: '你现在看到的这个网站——React + Tailwind CSS 构建的深色主题单页。',
      ja: '今見ているこのサイト。React + Tailwind CSS で作ったレスポンシブなダークテーマのシングルページです。',
      ko: '지금 보고 있는 이 사이트. React + Tailwind CSS로 만든 반응형 다크 테마 싱글 페이지입니다.',
      en: 'The site you are looking at — a responsive single page built with React + Tailwind CSS.',
    },
    tags: ['React', 'Tailwind CSS', 'Vite'],
    year: '2026',
    link: '',
    repo: '',
    placeholder: false,
  },
  {
    title: {
      zh: '校园网抓包分析实验',
      ja: 'キャンパスネットワーク・パケット解析実験',
      ko: '캠퍼스 네트워크 패킷 분석 실험',
      en: 'Campus Network Packet Capture',
    },
    subtitle: 'PACKET CAPTURE LAB',
    description: {
      zh: '用 Wireshark 对校园网流量做抓包分析，梳理 TCP 三次握手、DNS 解析等协议细节的实验记录。',
      ja: 'Wireshark でキャンパスネットワークの通信をキャプチャし、TCP 3-way ハンドシェイクや DNS 解決などのプロトコルの詳細を整理した実験記録。',
      ko: 'Wireshark로 캠퍼스 네트워크 트래픽을 캡처하여 TCP 3-way 핸드셰이크, DNS 조회 등 프로토콜 세부 사항을 정리한 실험 기록입니다.',
      en: 'Lab notes from capturing campus network traffic with Wireshark — TCP three-way handshake, DNS resolution, and other protocol details.',
    },
    tags: ['Wireshark', 'TCP/IP', { zh: '网络协议', ja: 'プロトコル', ko: '프로토콜', en: 'Protocols' }],
    year: '2026',
    link: '',
    repo: '',
    placeholder: true,
  },
  {
    title: {
      zh: 'OpenWrt 软路由折腾记录',
      ja: 'OpenWrt ソフトルーターいじり記録',
      ko: 'OpenWrt 소프트 라우터 만지기 기록',
      en: 'OpenWrt Soft Router Notes',
    },
    subtitle: 'HOME ROUTER NOTES',
    description: {
      zh: '把闲置小主机刷成 OpenWrt 软路由的过程：VLAN 划分、多拨、内网服务部署等踩坑笔记。',
      ja: '使っていなかったミニ PC を OpenWrt ルーター化した記録。VLAN の分割、マルチWAN、LAN 内サービスの構築など、試行錯誤のメモです。',
      ko: '군고 있던 미니 PC를 OpenWrt 라우터로 바꾼 과정의 기록: VLAN 구성, 멀티 WAN, 내부 서비스 배포 등 시행착오 노트입니다.',
      en: 'Turning an idle mini PC into an OpenWrt router — VLAN setup, multi-WAN, LAN service deployment, and other lessons learned.',
    },
    tags: ['OpenWrt', 'Linux', 'VLAN'],
    year: '2025',
    link: '',
    repo: '',
    placeholder: true,
  },
  {
    title: {
      zh: 'Linux 服务器运维笔记',
      ja: 'Linux サーバー運用メモ',
      ko: 'Linux 서버 운영 노트',
      en: 'Linux Server Ops Notes',
    },
    subtitle: 'SERVER OPS NOTES',
    description: {
      zh: '从零开始管理一台云服务器：Nginx 配置、防火墙规则、定时备份脚本的整理与沉淀。',
      ja: 'クラウドサーバーをゼロから管理する記録：Nginx の設定、ファイアウォール規則、定期バックアップスクリプトの整理。',
      ko: '클라우드 서버를 처음부터 관리한 기록: Nginx 설정, 방화벽 규칙, 주기적 백업 스크립트 정리.',
      en: 'Managing a cloud server from scratch — Nginx configuration, firewall rules, and scheduled backup scripts.',
    },
    tags: ['Linux', 'Nginx', 'Shell'],
    year: '2025',
    link: '',
    repo: '',
    placeholder: true,
  },
]

/** 站点元信息：上线日期（页脚「运行天数」从这里算起，格式 YYYY-MM-DD） */
export const siteMeta = {
  launchDate: '2026-10-12',
}

/**
 * 页面区块目录 —— 顶部导航与「冰棱页脊」都由这里驱动
 * 新增区块时：在这里加一行，再在 App.jsx 里渲染对应 section 即可
 */
export const sections = [
  { id: 'hero', num: '00', label: { zh: '首页', ja: 'ホーム', ko: '홈', en: 'Home' } },
  { id: 'projects', num: '01', label: { zh: '项目', ja: 'プロジェクト', ko: '프로젝트', en: 'Projects' } },
  { id: 'gallery', num: '02', label: { zh: '图库', ja: 'フォト', ko: '갤러리', en: 'Gallery' } },
  { id: 'contact', num: '03', label: { zh: '联系', ja: '連絡', ko: '연락', en: 'Contact' } },
]
