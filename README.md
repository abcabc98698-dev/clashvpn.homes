<div align="center">

# 🌐 ClashVPN.homes · 机场评测与订阅实验室

**基于 Astro 7 + Tailwind CSS 4 构建的超高性能、SEO & GEO 深度优化的现代跨境网络技术评测与选型站点**

[![Astro](https://img.shields.io/badge/Astro-7.3.7-ff5d01.svg?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38bdf8.svg?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178c6.svg?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![SEO & GEO Health](https://img.shields.io/badge/SEO%20Health-98.5%2F100-10b981.svg?style=flat-square&logo=google&logoColor=white)](https://clashvpn.homes)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

[🌐 访问官网](https://clashvpn.homes) · [📊 42家品牌库](https://clashvpn.homes/brands/) · [💡 免费资源](https://clashvpn.homes/free-resources/) · [📖 机场FAQ百科](https://clashvpn.homes/faq-wiki/) · [⚠️ 跑路预警](https://clashvpn.homes/runaway-watch/)

</div>

---

## 📌 项目概述 (Overview)

**ClashVPN.homes** 是一套面向跨境网络运维、开发者与重度流媒体/AI 用户的现代化静态评测与选型站点。不同于充斥夸张宣传词的传统导购站，本项目以**“网络监控台与数据可观测性”**为核心标准，建立了严谨的四级数据可信度隔离机制，并留存了多份原始测速图档。

全站基于 **Astro 7 (SSG)** 构建，实现 100% 静态预渲染与极速首屏直出，并深度适配 Google、Bing、百度及神马（UC/夸克）等主流搜索引擎与 GEO（生成式引擎）。

---

## ✨ 核心特性与专题矩阵 (Core Features)

### 1. 🏆 42 家机场品牌结构化数据库 (`/brands/`)
- **四级数据状态标注**：明确区分「实测数据（Measured · 16家含 2026-08-11 原始测速截图）」「历史实测（Historical Archive）」「品牌资料显示（Vendor Data）」与「待核实（Pending Verification）」。
- **毫秒级即时筛选**：支持按线路架构（IEPL / IPLC / BGP）、客户端支持模式、数据状态及月均门槛多维组合筛选与排序。
- **差异化深度档案**：每家品牌独立页面包含价格套餐、实测原图、ChatGPT/Claude/Netflix 4K 解锁状态及 GEO 选型 Q&A。

### 2. 📚 三大万字旗舰 Mega-Hub 矩阵
- **[免费资源与开源规则中心 (`/free-resources/`)](https://clashvpn.homes/free-resources/)**：
  - 汇总 Loyalsoldier、ACL4SSR、MetaCubeX、blackmatrix7 核心分流规则集。
  - Sub-Store 本地订阅转换防泄密实操、IP 纯净度与欺诈分风控检测矩阵、Mihomo Fake-IP + DoH 加密 DNS 防污染模板、美区 Apple ID 零成本注册流程。
- **[机场 FAQ 百科与 Clash 技术全书 (`/faq-wiki/`)](https://clashvpn.homes/faq-wiki/)**：
  - 超 30,000 字深度百科，收录 60+ 高频技术问答。
  - 包含 IEPL vs IPLC 物理专线对比表、VLESS Reality / Hysteria 2 / SS-2022 协议对比表，支持实时即时搜索与分类筛选。
- **[机场跑路预警与防失联监控中心 (`/runaway-watch/`)](https://clashvpn.homes/runaway-watch/)**：
  - 内置交互式 10 项高危跑路信号自测计算器（实时动态计分）。
  - “本地假失联 vs 真跑路” 6 步应急排查法、42 家机场运营状态监控表，以及「主力 IEPL 专线 + 备用不限时流量包」0 秒无缝容灾架构。

### 3. 🎯 六大场景选型专题 (`/services/`)
- **IEPL/IPLC 物理内网专线**：晚高峰 0 丢包专线深度横评。
- **AI 生产力（ChatGPT / Claude / Gemini）**：原生 IP 分流与防封号/防降智配置。
- **4K/8K 极致流媒体解锁**：Netflix / Disney+ / YouTube / TikTok 区域解锁实测。
- **平价与百元内高性价比**：低至 ¥5.6/月年付小包与防套路避坑指南。
- **不限时按量永久流量包**：无月度清零限制，低频用户与备灾首选。
- **全平台客户端选型指南**：自研免配置客户端与第三方通用客户端深度对比。

### 4. 💻 全平台客户端大全 (`/clients/`)
- 涵盖 Windows、macOS（Apple Silicon M芯片与 Intel 双架构）、Android、iOS（Shadowrocket / Stash）、Linux 桌面与 OpenWrt 软路由插件（OpenClash / PassWall2 / Nikki）的下载渠道与选型指南。

---

## 🚀 性能与 SEO 架构 (SEO & Performance)

- **纯静态输出（SSG）**：100% 静态 HTML 直出，TTFB 极致敏捷，无数据库慢查询隐患。
- **Schema.org 结构化数据**：
  - 全站 `@graph`：`Organization` + `WebSite`
  - 列表与栏目：`CollectionPage` + `BreadcrumbList` + `ItemList`
  - 专题与文章：`TechArticle` + `FAQPage`（与页面可见内容 100% 一一对应）
- **Sitemap 双轨同步**：
  - `https://clashvpn.homes/sitemap.xml`：直出标准 `<urlset>`（含 `lastmod`），适配 Google、Bing、百度及神马。
  - `https://clashvpn.homes/sitemap-index.xml`：索引型站点地图。
- **风控与链接隔离**：
  - 所有商业引流与推广链接严格包裹 `rel="nofollow sponsored noopener"`。
  - 外部开源工具与第三方站点严格隔离 `rel="nofollow noopener noreferrer"`。
- **站长平台验证预留**：内置 Google Search Console、Bing Webmaster Tools、神马站长与百度搜索资源平台验证接口。

---

## 📂 项目结构 (Directory Structure)

```text
clashvpn.homes/
├── public/                       # 静态公共资源
│   ├── favicon.svg               # 站点矢量图标
│   ├── apple-touch-icon.png      # 移动端图标
│   ├── og.png                    # Open Graph 社交卡片
│   └── images/speedtests/        # 16 家品牌 2026-08-11 原始测速图档
├── src/
│   ├── config.ts                 # 全站中央配置（域名、元数据、品牌、导航）
│   ├── content.config.ts         # Zod 强类型内容集合模式定义
│   ├── content/                  # 内容集合源文件
│   │   ├── services/             # 场景专题 Markdown 文章
│   │   ├── faq.json              # 首页 FAQ 问答库
│   │   └── testimonials.json     # 评测用户反馈数据
│   ├── data/                     # 结构化核心业务数据
│   │   ├── brands.ts             # 42 家机场品牌核心数据与筛选逻辑
│   │   ├── clients.ts            # 全平台客户端大全数据
│   │   ├── free-resources.ts     # 免费资源、规则集与 DoH 模板
│   │   ├── faq-wiki.ts           # 机场 FAQ 百科与协议对比表
│   │   └── runaway-watch.ts      # 跑路预警指标与应急排障指南
│   ├── components/               # Astro UI 组件
│   │   ├── Head.astro            # 统一 SEO Head、Meta 与 Schema 注入
│   │   ├── Header.astro          # 单行响应式顶部导航栏
│   │   ├── Footer.astro          # 底部多列导航与合规声明
│   │   ├── QuoteForm.astro       # 无 JS 降级兼容咨询表单
│   │   └── observatory/          # 测速雷达与拓扑矢量图表组件
│   ├── layouts/
│   │   └── BaseLayout.astro      # 全局基础布局模版
│   ├── lib/
│   │   └── schema.ts             # 结构化数据 (JSON-LD) 辅助生成器
│   ├── pages/                    # 路由页面 (文件系统路由)
│   │   ├── index.astro           # 首页 (2026 订阅总榜)
│   │   ├── brands/               # 42 家品牌库及 [slug] 详情
│   │   ├── services/             # 场景专题及 [slug] 详情
│   │   ├── clients/              # 客户端大全
│   │   ├── free-resources/       # 免费资源 Mega-Hub
│   │   ├── faq-wiki/             # 机场 FAQ 百科 Mega-Hub
│   │   ├── runaway-watch/        # 跑路预警 Mega-Hub
│   │   ├── about.astro           # 评测标准与方法论
│   │   ├── sitemap.xml.ts        # 动态 Sitemap 生成器
│   │   ├── robots.txt.ts         # 动态 robots.txt 生成器
│   │   └── 404.astro             # 404 错误页
│   └── styles/
│       ├── global.css            # 全局样式与 Tailwind 4 基础层
│       └── story.css             # 交互动效与动画长手声明
├── astro.config.mjs              # Astro 核心配置与 Sitemap 过滤器
├── package.json                  # 项目依赖与运行脚本
└── README.md                     # 项目说明文档
```

---

## 🛠️ 本地开发与构建 (Getting Started)

### 环境要求
- **Node.js**: `>= 22.12.0`
- **npm** / **pnpm**

### 安装依赖
```bash
npm install
```

### 启动本地开发服务
```bash
npm run dev
```
本地服务将运行在 `http://localhost:4321`。

### 代码类型与规范检查
```bash
npm run check
```
> 执行 Astro 与 TypeScript 严格类型检查，确保 **0 errors, 0 warnings**。

### 静态生产构建
```bash
npm run build
```
构建产物输出至 `dist/` 目录，包含全站静态 HTML、Sitemap 与 robots.txt。

### 本地预览构建产物
```bash
npm run preview
```

---

## 🌐 生产部署建议 (Deployment)

本项目为纯静态站点，可直接零配置部署至任何静态托管服务：

### Cloudflare Pages
1. 连接 GitHub 仓库。
2. 构建预设选择 **Astro**。
3. 构建命令：`npm run build`
4. 输出目录：`dist`
5. 环境变量：`NODE_VERSION = 22.12.0`

### 生产域名与重定向规则
- **正式主域名**：`https://clashvpn.homes`
- **重定向建议**：在 DNS/边缘层将 `http://*` 和 `https://www.clashvpn.homes/*` 设置 **301 永久重定向** 至 `https://clashvpn.homes/$1`。

---

## ⚖️ 合规与免责声明 (Disclaimer)

1. 本站收录的评测数据均来源于公开资料、历史归档及特定采样日的网络测试记录。网络质量受运营商出口路由、物理链路波动及地理位置等客观因素影响，实测表现不构成任何绝对服务品质保证。
2. 本站部分外部链接可能包含商业推广标识（Affiliate Links）。我们秉承客观中立原则进行横评，所有推广链接均标注 `sponsored` 与相关风险提示。
3. 用户使用相关网络工具时，请严格遵守所在国家与地区的法律法规。

---

## 📄 开源许可证 (License)

本项目代码基于 [MIT License](LICENSE) 授权开源。
