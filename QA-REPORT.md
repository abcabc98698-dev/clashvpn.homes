# ClashVPN.homes 工程质量、SEO/GEO 内容矩阵与合规审计报告 (QA-REPORT)

- **站点域名**：`https://clashvpn.homes`
- **构建框架**：Astro 6 + Tailwind CSS 4 + TypeScript（100% 静态预渲染 SSG）
- **最近审计日期**：`2026-10-29`
- **核验通过标准**：`npm run check` (0 errors, 0 warnings) & `npm run build` (0 errors, 0 warnings)

---

## 一、全站路由架构与内部链接矩阵表 (Internal Link Matrix)

| 页面层级 | 路由路径 (URL) | 页面定位 | 链入来源 (Inbound Links) | 链出目标 (Outbound Internal Links) |
| :--- | :--- | :--- | :--- | :--- |
| 首页总榜 | `/` | 3D 交互叙事 + #1 光速云重点推荐 + TOP 10 总榜 + 6 大专题 + 全球节点图 + GEO 问答 | 全站 Header Logo、主导航第1项、Footer、面包屑根路径、404/Thanks | `/brands/`, `/brands/guangsuyun/` 及 TOP 10 详情页, `/services/[slug]/`, `/clients/`, `/contact/#quote` |
| 42家品牌库 | `/brands/` | 全网 42 家机场交互式筛选、搜索、价格排序与数据状态图例中心 | 主导航第2项、首页 Hero/总榜 CTA、详情页侧栏与面包屑、Footer | 全部 42 个 `/brands/[slug]/` 独立评测页、`/contact/#quote` |
| 品牌独立评测页 (×42) | `/brands/[slug]/` | 单品牌深度评测：套餐价格表、3大可观测性图表、2026-08-11 原始测速图、GEO 问答 | `/brands/` 卡片、首页 TOP 10 表格、同类品牌推荐矩阵、`/about/` 归档表、Footer | `#1 光速云 (/brands/guangsuyun/)` 同场对比、4 家同类 `/brands/[slug]/`、`/clients/`、4 个 `/services/[slug]/`、`/about/` |
| 场景专题中心 | `/services/` | 6 大跨境加速与订阅选型核心专题聚合页 | 主导航第3项、首页专题区、Footer | 6 个 `/services/[slug]/`、`/contact/#quote` |
| 场景专题详情 (×6) | `/services/[slug]/` | IEPL专线、AI解锁、4K流媒体、平价订阅、永久流量包、客户端选型指南 | `/services/`、首页 `ServiceCard`、品牌详情页侧栏、Footer | `/brands/guangsuyun/`、`/brands/feimaoyun/`、`/brands/weifeng/`、`/brands/xingdaomeng/`、`/clients/`、其他 3 个 `/services/[slug]/` |
| 客户端大全 | `/clients/` | Windows / macOS / Android / iOS / Linux / OpenWrt 6 大平台客户端百科与排障 | 主导航第4项、首页总榜按钮、全部 42 个品牌详情页侧栏、Footer | `/brands/guangsuyun/`、`/brands/`、各平台锚点 `#platform-*` |
| 免费资源中心 | `/free-resources/` | 万字级开源分流规则集、Sub-Store 防泄密指南、IP 欺诈分检测矩阵、Mihomo DoH 模板与美区 Apple ID 教程 | 主导航第5项、`/services/` 旗舰横幅、42个品牌详情页侧栏、Footer | `/brands/guangsuyun/`、`/brands/`、`/faq-wiki/`、`/runaway-watch/`、`/clients/` |
| 机场FAQ百科 | `/faq-wiki/` | 万字级机场与 Clash 技术全书：五级线路横评表、六大协议对比表、8 大分类 60+ 深度技术问答与排障 | 主导航第6项、`/services/` 旗舰横幅、42个品牌详情页侧栏、Footer | `/brands/guangsuyun/`、`/brands/`、`/free-resources/`、`/runaway-watch/`、`/services/[slug]/` |
| 跑路预警中心 | `/runaway-watch/` | 万字级防跑路与风险监测中心：互动式 10 项跑路评分计算器、假失联 6 步自检、42 家状态监控总表与双保险架构 | 主导航第7项、`/services/` 旗舰横幅、42个品牌详情页侧栏、Footer | `/brands/guangsuyun/`、`/brands/weituyun/`、全部 42 个 `/brands/[slug]/`、`/services/pay-as-you-go-traffic/` |
| 评测标准 | `/about/` | 可观测性评测方法论、四级数据状态定义、16 份原始测速图核验索引 | 品牌详情页侧栏、Footer | 16 个含实测原图的 `/brands/[slug]/`、`/brands/` |

---

## 二、42 家机场品牌数据审计、SEO 关键词与 GEO 问题映射表

> **数据状态分级说明**：
> - `measured`：包含 `2026-08-11` 原始未裁剪测速截图（位于 `public/images/speedtests/`）及节点吞吐量数据。
> - `historical`：包含历史归档测速文本记录（主要为 #10、#17–#28 部分品牌及 #29–#42 历史品牌）。
> - `unverified`：资料缺失或待独立核验，页面显式标注「待核实 (`Pending Verification`)」，绝不编造参数。

| 排名 | 品牌名称 | 路由 (`/brands/[slug]/`) | 测速状态 | 原始测速图 (`public/images/speedtests/`) | 目标主关键词 (Primary Keyword) | 次关键词 (Secondary Keywords) | GEO 结构化问答数量 | 优惠码 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| #1 | 光速云 | `/brands/guangsuyun/` | `measured` | `guangsuyun-speedtest.png` | 光速云机场怎么样 | 光速云优惠码 AMM、光速云147永久套餐、光速云测速 | 4 | `AMM` (8折) |
| #2 | 肥猫云 | `/brands/feimaoyun/` | `measured` | `feimaoyun-speedtest.png` | 肥猫云机场评测 | 肥猫云优惠码、肥猫云IEPL专线、不限设备数机场 | 2 | `feimao888` / `feimao999` |
| #3 | 微风 | `/brands/weifeng/` | `measured` | `weifeng-speedtest.png` | 微风机场怎么样 | 微风Breeze机场优惠码、微风客户端下载、IEPL年付99机场 | 2 | `855` (折上85折) |
| #4 | 暮光云 | `/brands/muguang/` | `measured` | `muguang-speedtest.png` | 暮光云机场评测 | 幕光加速测速、暮光云年付100元、Trojan中转机场 | 2 | `官网直减` |
| #5 | 大佬云 | `/brands/dalaoyun/` | `historical` | 历史归档 | 大佬云机场怎么样 | 大佬云优惠码、大佬云评测 | 2 | `官网活动` |
| #6 | 星岛梦 | `/brands/xingdaomeng/` | `measured` | `xingdaomeng-speedtest.png` | 星岛梦机场怎么样 | 星岛梦优惠码 XDM666、星岛梦IEPL测速、老牌专线机场 | 2 | `XDM666` / `XDM888` |
| #7 | 二猫云 | `/brands/ermaoyun/` | `measured` | `ermaoyun-speedtest.png` | 二猫云机场评测 | 二猫云优惠码 ermao85、二猫云测速、VLESS专线机场 | 2 | `ermao85` / `ermao8` |
| #8 | 无忧云 | `/brands/wuyou/` | `historical` | 历史归档 | 无忧云机场怎么样 | 无忧云IEPL专线、老牌机场无忧云 | 2 | `官网直减` |
| #9 | 威图云 | `/brands/weituyun/` | `measured` | `weituyun-speedtest.png` | 威图云机场怎么样 | 威图云不限时流量包、威图云优惠码 weitu85、威图云测速 | 2 | `weitu85` |
| #10 | 萤火虫 (Firefly) | `/brands/firefly/` | `historical` | 历史归档 | 萤火虫Firefly机场评测 | Firefly按量付费、萤火虫机场 | 2 | `官网活动` |
| #11 | 宇宙云 | `/brands/yuzhouyun/` | `measured` | `yuzhouyun-speedtest.png` | 宇宙云机场评测 | 宇宙云优惠码 yuzhou8、宇宙云测速、Hysteria2专线机场 | 2 | `yuzhou8` |
| #12 | 有一说一 | `/brands/u1s1/` | `measured` | `u1s1-speedtest.png` | 有一说一机场怎么样 | u1s1机场优惠码、有一说一测速、15元IEPL专线机场 | 2 | `u1s185` / `u1s18` |
| #13 | 灵猫云 | `/brands/lingmao/` | `measured` | `lingmao-speedtest.png` | 灵猫云机场评测 | 灵猫机场测速、灵猫云20元套餐 | 2 | 待核实 |
| #14 | 极连云 | `/brands/jilianyun/` | `measured` | `jilianyun-speedtest.png` | 极连云机场怎么样 | 极连云年付88元、极连云客户端、极连云测速 | 2 | `官网直减` |
| #15 | 光年梯 | `/brands/guangnianti/` | `measured` | `guangnianti-speedtest.png` | 光年梯机场评测 | 光年梯优惠码 gnt85、光年梯测速、15元IEPL机场 | 2 | `gnt85` / `gnt8` |
| #16 | 一帆云 | `/brands/yifanyun/` | `measured` | `yifanyun-speedtest.png` | 一帆云机场怎么样 | 一帆云专属客户端、一帆云测速 | 2 | `官网活动` |
| #17 | 搜狗云 (SogoYun) | `/brands/sogoyun/` | `measured` | `sogoyun-speedtest.png` | 搜狗云SogoYun评测 | SogoYun机场测速、搜狗云价格 | 2 | `官网活动` |
| #18 | 可信云 | `/brands/kexinyun/` | `measured` | `kexinyun-speedtest.png` | 可信云机场评测 | 可信云不限时流量包、可信云测速 | 2 | `官网直减` |
| #19 | 速捷云 | `/brands/sujie/` | `measured` | `sujie-speedtest.png` | 速捷云机场怎么样 | 速捷云优惠码 sujie7、便宜年付机场推荐 | 2 | `sujie7` (7折) |
| #20 | 山月 | `/brands/shanyue/` | `unverified` | 无（标注待核实） | 山月机场怎么样 | 山月便宜订阅、山月评测 | 2 | 待核实 |
| #21 | 全球云 | `/brands/quanqiuyun/` | `measured` | `quanqiuyun-speedtest.png` | 全球云机场评测 | 全球云自研客户端、全球云测速 | 2 | `官网直减` |
| #22–#28 | 闪电鼠、云界线、榴莲云、神行、环球梯、隐形人、梯子云 | `/brands/shandianshu/` 等 7 个独立路由 | `unverified` | 无（标注待核实） | `[品牌名]机场怎么样` | `[品牌名]订阅`、`[品牌名]评测` | 各 2 个 | 标注待核实 |
| #29–#42 | WgetCloud、白月光、FlyingBird、CyberGuard、龙猫云、FatCat、TNTCloud、青云梯、山水云、灵动云、狼王、EdgeNova、萤火虫老版、SSLAR | `/brands/wgetcloud/` 等 14 个独立路由 | `historical` | 历史文本归档 | `[品牌名]机场怎么样` | `[品牌名]评测`、`[品牌名]历史归档` | 各 2 个 | 标注待核实 |

---

## 三、专题页与功能页 SEO / GEO 映射表

| 页面路径 | 目标主关键词 | 次关键词 | 核心解决的搜索意图与 GEO 问题 |
| :--- | :--- | :--- | :--- |
| `/services/iepl-iplc-line/` | IEPL专线机场推荐 | IPLC和IEPL区别、晚高峰不卡的机场、广港IEPL低延迟 | 解释为什么普通直连晚高峰丢包，对比 IEPL/IPLC 物理专线与公网中转，给出 2026 实测 TOP 专线推荐。 |
| `/services/ai-chatgpt-unlock/` | ChatGPT解锁机场推荐 | Claude 3.5封号原因、OpenAI原生IP节点、Cursor TUN模式配置 | 解答为什么香港节点无法访问 ChatGPT/Claude，指导选择美/日/新/台纯净落地与开启客户端 TUN 模式。 |
| `/services/streaming-4k-unlock/` | 奈飞4K解锁机场 | Netflix非自制剧节点、Disney+解锁机场、TikTok免拔卡节点 | 梳理港区/台区/新区流媒体版权差异与 2026-08-11 大带宽（500–818Mbps）实测推荐。 |
| `/services/budget-clash-picks/` | 便宜高性价比机场推荐 | 10元以内机场、年付99元IEPL机场、Clash便宜订阅 | 按 ¥8–15/月黄金专线档与 ¥5.6–10/月入门备用档分层对比，附完整折扣码清单。 |
| `/services/pay-as-you-go-traffic/` | 按量付费不限时机场推荐 | 永久流量包机场、光速云147永久套餐、防失联备用机场 | 对比光速云 ¥147/247GB 永久流量包、威图云 ¥90/200GB 与可信云 ¥158/200GB 不限时包。 |
| `/services/client-setup-guide/` | 机场自研客户端与Clash对比 | 新手免配置科学上网客户端、Clash订阅导入教程 | 帮助零基础新手与多机场玩家在官方一键客户端与第三方通用客户端之间做出选择。 |
| `/clients/` | 第三方代理客户端大全 | Clash Verge Rev下载、小火箭Shadowrocket教程、OpenClash软路由 | 汇总 Windows / Mac / Android / iOS / Linux / OpenWrt 6 大平台 26+ 款客户端架构提示与排障问答。 |
| `/free-resources/` | 免费Clash资源与分流规则集 | Loyalsoldier规则集、Sub-Store订阅转换、IP纯净度欺诈分检测、美区Apple ID注册 | 提供真正安全的开源分流规则集、IP 风险检测台、Mihomo DoH 防泄漏模板、测速脚本及零成本美区 Apple ID 指南。 |
| `/faq-wiki/` | 机场FAQ百科与Clash技术全书 | IEPL和IPLC区别、VLESS Reality原理、ChatGPT降智检测、Clash更新订阅失败 | 8 大篇章 60+ 深度技术问答，配五级跨境线路横评表、六大传输协议对比表、即时搜索与一键复制排障代码。 |
| `/runaway-watch/` | 机场跑路预警与防失联中心 | 机场跑路前兆、节点全红Timeout排错、42家机场运营状态、防失联备用机场 | 提供互动式 10 项跑路风险评分计算器、假失联 6 步自检流、42 家机场实时监控总表及「IEPL主力+永久包」双保险方案。 |

---

## 四、推广链接与外链合规检查表 (Affiliate & Outbound Link Audit)

1. **配置源唯一性**：所有机场注册/推广 URL 均集中存储在 `src/data/brands-part1.ts`、`brands-part2.ts`、`brands-part3.ts` 结构化数据文件中，未在任何 Markdown 正文中硬编码推广链接。
2. **`rel` 属性合规**：全站所有指向机场注册页的 `<a>` 标签（位于 `src/components/sections/TopBrandsRanking.astro`、`src/pages/brands/index.astro`、`src/pages/brands/[slug].astro`、`src/pages/services/[slug].astro`）均强制带有：
   ```html
   target="_blank" rel="nofollow sponsored noopener"
   ```
3. **显著利益披露**：所有推广按钮旁均显示统一披露文案（`AFFILIATE_DISCLOSURE`）：
   > `含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格`
4. **原始测速图完整性**：`public/images/speedtests/` 下的 17 张 PNG 文件均通过字节级原样拷贝（`Copy-Item`）自 `extracted/` 目录，未进行任何裁剪、压缩或涂改，并在 `SpeedtestReportChart.astro` 中附带单次采样局限性说明。
