export interface FaqWikiItem {
  id: string;
  category: string;
  question: string;
  shortAnswer: string;
  detailedExplanation: string;
  commandOrConfig?: string;
  tags: string[];
  relatedLinks?: { label: string; href: string }[];
}

export interface FaqCategoryMeta {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
}

export interface LineComparisonRow {
  type: string;
  fullName: string;
  crossGfwMethod: string;
  eveningPacketLoss: string;
  latencyHkSg: string;
  multiplierRange: string;
  priceTier: string;
  bestFor: string;
  repBrands: { name: string; slug: string }[];
}

export interface ProtocolComparisonRow {
  protocol: string;
  transportLayer: string;
  encryptionAndStealth: string;
  udpAndQuicSupport: string;
  cpuOverhead: string;
  antiBlockingScore: string;
  supportedClients: string;
  bestScenario: string;
}

export const FAQ_CATEGORIES: FaqCategoryMeta[] = [
  {
    id: 'cat-line',
    title: '一、线路架构与跨境传输篇（IEPL / IPLC / BGP / CN2）',
    badge: 'Network Architecture',
    subtitle: '搞懂物理内网专线、BGP 入口与公网直连的本质区别',
    description:
      '决定机场晚高峰（20:00–23:30）是否卡顿、丢包的唯一底层因素就是物理传输链路。本章节从运营商路由、过境防火墙机制到中转入口架构，彻底拆解机场行业常见的线路术语。',
  },
  {
    id: 'cat-protocol',
    title: '二、传输协议与加密演进篇（VLESS / Trojan / Hysteria2 / SS）',
    badge: 'Transport Protocols',
    subtitle: '深度对比主流代理协议的抗封锁能力、握手延迟与 CPU 开销',
    description:
      '不同协议在 TCP/UDP 传输效率、TLS 指纹伪装及弱网重传机制上差异巨大。选对协议能直接降低 15%–30% 的首屏握手延迟并显著提升流媒体拖动响应。',
  },
  {
    id: 'cat-client',
    title: '三、客户端与内核实战篇（Mihomo / Sing-box / TUN / Fake-IP）',
    badge: 'Client & Kernel',
    subtitle: '解决系统代理、虚拟网卡接管、DNS 泄露与局域网共享的核心机制',
    description:
      '同样一条 IEPL 专线，在不同客户端内核或错误的 DNS 模式下表现可能天差地别。本章节系统解答 Clash Verge Rev、Flclash、Shadowrocket 与 Sing-box 的核心配置疑问。',
  },
  {
    id: 'cat-ai',
    title: '四、AI 大模型与开发者解锁篇（ChatGPT / Claude / Gemini / Cursor）',
    badge: 'AI & Dev Unlock',
    subtitle: '规避 OpenAI 降智、Anthropic 封号、Google 地区拦截与 GitHub SSH 超时',
    description:
      'AI 平台对 IP 欺诈分（Fraud Score）、ASN 属性与 WebRTC/DNS 一致性有着极其严苛的校验。掌握专属 AI 分流组与纯净住宅/ISP 落地策略是重度开发者的必修课。',
  },
  {
    id: 'cat-media',
    title: '五、4K 流媒体与游戏联机篇（Netflix / Disney+ / TikTok / FullCone）',
    badge: 'Streaming & Gaming',
    subtitle: '非自制剧解锁原理、DNS 媒体内网分流与 UDP NAT 类型深度科普',
    description:
      '为什么能打开 Netflix 却搜不到《绝命毒师》？为什么 TikTok 刷不出视频？为什么 Apex/Valorant 语音连不上？本章节全部给出底层技术答案。',
  },
  {
    id: 'cat-billing',
    title: '六、套餐计费、倍率算法与账号审计篇',
    badge: 'Billing & Multiplier',
    subtitle: '算清节点倍率真实扣费、并发设备数计算方式与不限时按量包选购逻辑',
    description:
      '避开“低价高倍率”文字游戏，理解双向流量计费、账单日流量重置机制与家庭路由器共享下的设备数审计规则。',
  },
  {
    id: 'cat-troubleshoot',
    title: '七、高频故障与急救排障篇（订阅失败 / 连上没网 / 证书报错）',
    badge: 'Troubleshooting',
    subtitle: '涵盖 99% 日常断网、端口冲突、Git 代理失效与系统开机断网的排错手册',
    description:
      '遇到节点全红 Timeout、更新订阅报错或退出客户端后浏览器无法上网时，按本章节提供的终端命令与步骤即可在 1 分钟内恢复。',
  },
  {
    id: 'cat-security',
    title: '八、隐私安全边界与防失联避坑篇',
    badge: 'Privacy & Anti-Scam',
    subtitle: '机场主到底能看到什么？如何构建零焦虑的“主力+永久备份”网络架构',
    description:
      '客观拆解 TLS/HTTPS 端到端加密的安全边界、审计规则的作用原理，以及防范跑路、钓鱼假站与隐私泄露的铁律。',
  },
];

export const LINE_COMPARISON_TABLE: LineComparisonRow[] = [
  {
    type: 'IEPL 以太网专线',
    fullName: 'International Ethernet Private Line',
    crossGfwMethod: '物理二层以太网内网过境，完全绕过公网 GFW 审查与国际出口拥堵',
    eveningPacketLoss: '< 0.2%（全天候零抖动）',
    latencyHkSg: '广港 8–22ms / 沪日 35–55ms / 新加坡 42–48ms',
    multiplierRange: '1.0x（不限设备）',
    priceTier: '¥8.25–¥25/月（光速云年付 ¥99 折算）',
    bestFor: '主力全天候办公、AI 大模型高频调用、4K/8K 流媒体、跨国视频会议、外服联机',
    repBrands: [
      { name: '#1 光速云 (双专线)', slug: 'guangsuyun' },
      { name: '#3 微风网络', slug: 'weifeng' },
      { name: '#6 星岛梦', slug: 'xingdaomeng' },
      { name: '#7 二猫云', slug: 'ermaoyun' },
    ],
  },
  {
    type: 'IPLC 国际私用专线',
    fullName: 'International Private Leased Circuit',
    crossGfwMethod: '传统 TDM/SDH 点对点物理专线过境，不经过公网国际出口防火墙',
    eveningPacketLoss: '< 0.3%（极高稳定性）',
    latencyHkSg: '深港 15–27ms / 日本 45–57ms / 新加坡 42–46ms',
    multiplierRange: '1.0x（不限设备）',
    priceTier: '¥6.66–¥19.9/月',
    bestFor: '低延迟金融交易、跨国远程桌面（RDP/SSH）、高要求流媒体与商务稳定连接',
    repBrands: [
      { name: '#9 唯兔云', slug: 'weituyun' },
      { name: '#10 Firefly', slug: 'firefly' },
    ],
  },
  {
    type: 'BGP 智能调度 + 专线出口',
    fullName: 'Multi-ISP BGP Smart Routing + Dedicated Exit',
    crossGfwMethod: '国内三网 BGP 多线智能接入，汇聚后通过专线级隧道出口转发至海外原生节点',
    eveningPacketLoss: '0.5% – 1.8%（多端在线稳定）',
    latencyHkSg: '香港 21–26ms / 日本 53–55ms / 新加坡 42–45ms',
    multiplierRange: '1.0x',
    priceTier: '¥7.0–¥9.08/月',
    bestFor: '多设备全平台（Win/Mac/iOS/Android/Linux）同时在线、新手免配置一键直连',
    repBrands: [
      { name: '#2 飞猫云', slug: 'feimaoyun' },
      { name: '#4 暮光加速', slug: 'muguang' },
      { name: '#8 无忧链接', slug: 'wuyou' },
    ],
  },
  {
    type: '平价入门 IEPL / 中转',
    fullName: 'Entry-Level IEPL & Public Relay',
    crossGfwMethod: '轻量入门专线或国内公网中转汇聚，满足日常基础网页与轻度视频需求',
    eveningPacketLoss: '1.5% – 5.0%（视晚高峰负载波动）',
    latencyHkSg: '香港 28–50ms / 日本 55–85ms / 新加坡 50–90ms',
    multiplierRange: '1.0x',
    priceTier: '¥5.6–¥8.0/月',
    bestFor: '预算敏感的学生党日常查阅资料、1080P/4K 轻度观影与低成本备用线路',
    repBrands: [
      { name: '#5 大佬云 (¥5.6/月)', slug: 'dalaoyun' },
      { name: '#11 宇宙云', slug: 'yuzhouyun' },
    ],
  },
  {
    type: '海外公网直连',
    fullName: 'Direct Overseas Public Internet Connection',
    crossGfwMethod: '本地宽带直接连接海外 VPS IP，全程裸奔经过公网 GFW 与运营商国际出口',
    eveningPacketLoss: '10.0% – 45.0%（晚高峰易断流、IP/端口频繁被墙）',
    latencyHkSg: '香港 45–120ms / 美西 180–350ms（绕路严重）',
    multiplierRange: '0.1x – 1.0x',
    priceTier: '¥3–¥10/月（超低价灵车常见）',
    bestFor: '仅适合冷门地区探针测试或对延迟/丢包完全不敏感的后台低优下载任务',
    repBrands: [{ name: '查看 42 家品牌线路分级库', slug: '' }],
  },
];

export const PROTOCOL_COMPARISON_TABLE: ProtocolComparisonRow[] = [
  {
    protocol: 'VLESS + Reality (Xray/Mihomo)',
    transportLayer: 'TCP / HTTP2 / gRPC',
    encryptionAndStealth: '零自签证书开销，直接借用真实权威大站 TLS 1.3 握手与真实指纹，消除 TLS in TLS 特征',
    udpAndQuicSupport: '支持 XUDP / Vision 流控',
    cpuOverhead: '极低（省电、高吞吐）',
    antiBlockingScore: '★★★★★（公网与专线通吃）',
    supportedClients: 'Mihomo (Clash Verge Rev / Flclash)、Sing-box、Shadowrocket、v2rayN',
    bestScenario: '强封锁网络环境、高吞吐 4K/8K 传输、追求极低首包延迟',
  },
  {
    protocol: 'Trojan (Trojan-Go / Trojan-TLS)',
    transportLayer: 'TCP + 标准 TLS 1.3',
    encryptionAndStealth: '完全模拟标准 HTTPS Web 服务流量，主动探测时返回真实伪装站点',
    udpAndQuicSupport: '支持 UDP over TCP 封装',
    cpuOverhead: '低（支持硬件 AES-NI 加速）',
    antiBlockingScore: '★★★★☆（成熟稳定）',
    supportedClients: '几乎全系客户端（Mihomo、Stash、Surge、Quantumult X、Shadowrocket）',
    bestScenario: 'IEPL/IPLC 专线机场主力协议，全平台兼容性最佳',
  },
  {
    protocol: 'Hysteria 2 (歇斯底里 2)',
    transportLayer: '基于定制 QUIC (UDP)',
    encryptionAndStealth: '标准 HTTP/3 伪装 + Brutal 恒定速率拥塞控制算法（暴力发包抢占带宽）',
    udpAndQuicSupport: '原生 UDP 多路复用，0-RTT 握手',
    cpuOverhead: '中等偏高（高并发 UDP 处理）',
    antiBlockingScore: '★★★★☆（需防范运营商 QoS 限速 UDP）',
    supportedClients: 'Mihomo、Sing-box、Shadowrocket、NekoBox、Karing',
    bestScenario: '恶劣公网直连、高丢包海外链路、跨国大文件高速拉取',
  },
  {
    protocol: 'Shadowsocks 2022 (SS-2022)',
    transportLayer: 'TCP + 原生 UDP',
    encryptionAndStealth: '2022-blake3-aes-128/256-gcm 全新 AEAD 规范，消除重放攻击与包长特征，无额外 TLS 握手延迟',
    udpAndQuicSupport: '原生真 UDP（支持 FullCone NAT）',
    cpuOverhead: '最低（路由器/低功耗设备首选）',
    antiBlockingScore: '★★★★☆（强烈建议配合 IEPL/IPLC 内网专线使用）',
    supportedClients: '全平台客户端 100% 原生支持',
    bestScenario: 'IEPL/IPLC 专线内部承载（握手最快、延迟最低、游戏联机首选）',
  },
  {
    protocol: 'TUIC v5',
    transportLayer: 'QUIC (UDP)',
    encryptionAndStealth: '基于 QUIC 0-RTT 握手，支持 BBR 温和拥塞控制，心跳过期自动清理',
    udpAndQuicSupport: '支持 Native UDP 与 QUIC 流模式切换',
    cpuOverhead: '中低',
    antiBlockingScore: '★★★★☆',
    supportedClients: 'Mihomo、Sing-box、Shadowrocket、Stash',
    bestScenario: '移动蜂窝网络（5G/Wi-Fi 频繁切换不断连）与低延迟音视频通话',
  },
  {
    protocol: 'VMess (AEAD)',
    transportLayer: 'TCP / WebSocket (WS) + TLS',
    encryptionAndStealth: '早期 V2Ray 核心协议，常搭配 WS+TLS+CDN 使用，系统时间误差需在 90 秒内',
    udpAndQuicSupport: '支持 UDP over TCP',
    cpuOverhead: '中高（帧封装较重）',
    antiBlockingScore: '★★★☆☆（逐步被 VLESS/Trojan 替代）',
    supportedClients: '全平台兼容',
    bestScenario: '老牌机场兼容层或套用 Cloudflare CDN 的救砖备用节点',
  },
];

export const FAQ_WIKI_ITEMS: FaqWikiItem[] = [
  // ==================== 一、线路架构与跨境传输篇 ====================
  {
    id: 'line-01',
    category: 'cat-line',
    question: '什么是 IEPL 和 IPLC 内网专线？为什么它们在晚高峰（20:00–23:30）不会卡顿？',
    shortAnswer:
      'IEPL（国际以太网专线）与 IPLC（国际私用出租线路）是运营商为跨国企业铺设的点对点物理内网通道，流量完全不经过公网国际出口防火墙（GFW），因此彻底免疫晚高峰公网拥堵与敏感期封锁。',
    detailedExplanation:
      '普通公网直连或普通中转机场的流量必须挤过三大运营商的国际公网出口（如广州、上海、北京出口），在每晚 20:00–23:30 国际出口带宽饱和时，会出现高达 15%–40% 的丢包与 QoS 劣化。而 IEPL（二层以太网）与 IPLC（物理点对点）相当于在深圳/上海机房与香港/东京机房之间拉了一根独立的私有光纤内网：你的设备先通过国内 BGP 高速接入深圳入口机房，随后通过内网专线 8ms 直达香港落地机房，全程不经过公网 GFW 审查，也不受国际公网出口拥堵影响。这也是为什么本站实测榜首的 #1 光速云、#2 幻网等全线采用 IEPL/IPLC 架构。',
    tags: ['IEPL', 'IPLC', '内网专线', '晚高峰不卡'],
    relatedLinks: [
      { label: '#1 光速云 IEPL 实测报告', href: '/brands/guangsuyun/' },
      { label: 'IEPL/IPLC 专线严选专题', href: '/services/iepl-iplc-line/' },
    ],
  },
  {
    id: 'line-02',
    category: 'cat-line',
    question: 'IEPL 和 IPLC 两者之间有什么技术区别？选哪个更好？',
    shortAnswer:
      '两者同属不过墙物理内网专线；IPLC 基于传统 SDH/TDM 点对点电路，IEPL 基于现代二层以太网（MPLS/EVPL），扩容更灵活、抖动更低且支持多落地灵活调度。',
    detailedExplanation:
      '在实际科学上网体验中，真 IEPL 与真 IPLC 都属于顶级 T0 梯队线路。微小区别在于：传统 IPLC 是固定带宽的端到端电路，端到端延迟极稳但单线带宽成本极高；现代 IEPL 基于二层以太网交换技术，机场主可以在广港、沪日、深新多条冗余内网通道上做动态负载均衡与大带宽突发扩容。因此目前主流旗舰机场（如光速云、极速云）多以高带宽 IEPL 为主干、IPLC 为核心冗余。',
    tags: ['IEPL', 'IPLC', '专线对比'],
    relatedLinks: [{ label: '42家品牌线路对比库', href: '/brands/' }],
  },
  {
    id: 'line-03',
    category: 'cat-line',
    question: '什么是“国内三网 BGP 入口”？为什么入口机房和跨境专线一样重要？',
    shortAnswer:
      'BGP（边界网关协议）多线机房同时接入电信、联通、移动、教育网与广电骨干网，确保无论你用哪家宽带，从你家到机场国内入口这一段都能实现同城/邻省最低延迟直连。',
    detailedExplanation:
      '一条完整的专线机房链路分为三段：①「你家宽带 → 国内中转入口」+ ②「国内入口 → 海外入口（IEPL/IPLC）」+ ③「海外入口 → 落地机房」。如果机场只有单线电信入口，移动或联通用户连接入口时就会发生跨网绕路甚至省际阻塞。采用“国内三网八线 BGP 入口”的机场会自动通过 BGP 路由宣告，让电信走电信、移动走移动、联通走联通直达广州/上海/北京入口，将第一跳延迟控制在 5–15ms 以内。',
    tags: ['BGP入口', '三网优化', '跨网延迟'],
  },
  {
    id: 'line-04',
    category: 'cat-line',
    question: '什么是 CN2 GIA 和 CN2 GT？它们算不算专线？',
    shortAnswer:
      'CN2 GIA 是中国电信最高等级的公网精品国际路由，虽然仍经过公网防火墙（不算物理内网专线），但拥有独立轻载的海外回国通道，晚高峰表现远优于普通 163 骨干网。',
    detailedExplanation:
      '中国电信传统的国际出口是 AS4134（俗称 163 骨干网），晚高峰极其拥堵。为此电信推出了下一代承载网 AS4809（即 CN2）：其中 CN2 GT 在国内段仍与 163 混用，改善有限；而 CN2 GIA（Global Internet Access）从国内省级节点开始就全程走独立的 AS4809 轻载高速通道，并具备双程优先级保障。不过需要注意，CN2 GIA 依然属于公网范畴，流量会经过 GFW，因此在特殊时期抗封锁能力略逊于物理不过墙的 IEPL/IPLC 专线。',
    tags: ['CN2 GIA', 'AS4809', '电信精品网'],
  },
  {
    id: 'line-05',
    category: 'cat-line',
    question: '如何用 Traceroute / MTR 鉴别一家机场是“真 IEPL/IPLC 专线”还是“假专线（普通公网中转）”？',
    shortAnswer:
      '真专线在入口机房采用端口转发或内网隧道隐藏路由，且在特殊敏感期与每晚 21:00 高峰期对香港/日本节点进行持续 Ping + 大文件拉取测试时，丢包率稳定在 0.5% 以下且无断流。',
    detailedExplanation:
      '由于中转机场的入口服务器承接了用户的代理连接，你在本地直接 ping 节点域名测出的其实是「本地到国内 BGP 入口」的延迟（通常 10–25ms）。鉴别真假专线的核心方法有三点：① 在客户端开启真延迟测试（URL Test `https://www.gstatic.com/generate_204`），观察深港专线端到端 HTTP 握手是否在 80–140ms 以内；② 晚高峰 21:30 同时开启 4K YouTube 视频（Stats for Nerds 查看 Connection Speed 是否稳定在 80,000 Kbps 以上）并持续 ping 网关观察是否有周期性断流；③ 在重大会议或敏感期，公网直连和劣质公网中转会大批红一片，而真 IEPL 专线因物理不过墙完全无感。',
    tags: ['真假专线鉴别', 'MTR路由追踪', 'URL-Test'],
    relatedLinks: [{ label: '免费路由追踪与测速脚本', href: '/free-resources/#sec-scripts' }],
  },
  {
    id: 'line-06',
    category: 'cat-line',
    question: '为什么测速软件里看节点 Ping 值只有 15ms，但打开海外网页却要等 2 秒？',
    shortAnswer:
      '软件显示的 ICMP/TCP Ping 往往只测到了机场的“国内中转入口服务器”，而决定网页打开速度的是包含跨境传输、TLS 握手与远端 DNS 解析在内的 HTTP URL-Test 真延迟。',
    detailedExplanation:
      '在中转架构下，你的客户端是和深圳/上海的 BGP 入口建立 TCP 连接，因此简单的 TCP Ping 测出来只有 15ms，这被称为“入口假延迟”。如果该机场后端跨境段用的是劣质公网，或者落地机房 DNS 解析极慢，真正发起 HTTPS 请求时就会卡上 1–2 秒。请务必在 Clash Verge Rev / Flclash 设置中将测速 URL 设为 `https://www.gstatic.com/generate_204` 并开启“统一延迟（Unified Delay）”，排除握手干扰看真实传输延迟。',
    tags: ['TCP Ping', 'URL-Test', '统一延迟', '首屏卡顿'],
  },
  {
    id: 'line-07',
    category: 'cat-line',
    question: '什么是“广港 IEPL”、“沪日 IEPL”和“深新专线”？我人在北方（如北京/东北）该选哪个节点？',
    shortAnswer:
      '它们分别代表广州→香港、上海→日本、深圳→新加坡的跨境出口。北方用户建议优先选择“沪日（上海→东京）”或带有京津冀/多地 BGP 接入的广港节点，延迟更低且路由更顺直。',
    detailedExplanation:
      '国内三大跨境物理走廊分工明确：① 广港/深港（广州/深圳→香港）：物理距离最近，专线延迟仅 5–10ms，珠三角用户总延迟可压到 15ms 内，全国通用；② 沪日（上海→东京/大阪）：华东、华北及东北用户连上海 BGP 入口比南下广州少走 1500 公里，连日本节点往往比连香港还快；③ 深新/广新（深圳→新加坡）：面向东南亚、流媒体及全球 AI 服务的黄金枢纽。',
    tags: ['广港专线', '沪日专线', '北方选节点'],
  },
  {
    id: 'line-08',
    category: 'cat-line',
    question: '什么是落地机房的“原生 IP（Native IP）”、“广播 IP”与“双栈住宅 ISP IP”？',
    shortAnswer:
      '原生 IP 指 IP 的注册国家（Whois）与机房物理所在地完全一致；广播 IP 则是从其他国家宣告过来的 IP；住宅 ISP IP 则属于当地家庭宽带运营商属性，解锁流媒体与 AI 权重最高。',
    detailedExplanation:
      '像 Netflix、Disney+、TikTok 和 ChatGPT 都会通过 MaxMind / IPinfo 数据库核验访问者 IP 的注册归属地与 ASN 类型（机房 Hosting 还是家庭宽带 ISP）。广播 IP 虽然物理服务器在香港，但 Whois 注册地可能在美国，容易触发地区错乱或解锁失败；原生 IP 确保地区精准识别；而双栈住宅 ISP 落地则能彻底绕过 Cloudflare 五秒盾与 AI 平台对数据中心（Hosting）IP 的风控拦截。',
    tags: ['原生IP', '广播IP', '住宅ISP', 'ASN类型'],
    relatedLinks: [{ label: 'IP 纯净度与欺诈分自检工具', href: '/free-resources/#sec-ip-audit' }],
  },

  // ==================== 二、传输协议与加密演进篇 ====================
  {
    id: 'proto-01',
    category: 'cat-protocol',
    question: 'Shadowsocks (SS)、VMess、Trojan、VLESS Reality 和 Hysteria2 到底哪个最快、最安全？',
    shortAnswer:
      '在 IEPL/IPLC 内网专线机场中，Shadowsocks 2022 与 Trojan 因握手开销最小、延迟最低而表现最佳；在公网直连或强封锁环境下，VLESS Reality 与 Hysteria2 抗封锁与抗丢包能力最强。',
    detailedExplanation:
      '协议没有绝对的优劣，关键看承载它的物理线路：① 如果你购买的是真 IEPL/IPLC 专线机场（如光速云、幻网），跨境段本身已经在物理内网里不过 GFW，此时使用过重的伪装协议反而增加 CPU 与握手延迟，轻量的 Shadowsocks 2022（AEAD）或成熟稳定的 Trojan 协议能跑出最高吞吐量与最低游戏延迟；② 如果使用的是公网直连节点，必须依赖 VLESS + XTLS-Vision + Reality 消除 TLS 指纹特征，或使用基于 QUIC 的 Hysteria2 在高丢包链路上强行抢占带宽。',
    tags: ['协议对比', 'VLESS Reality', 'Trojan', 'Hysteria2', 'SS2022'],
  },
  {
    id: 'proto-02',
    category: 'cat-protocol',
    question: '为什么以前的 Shadowsocks 容易被封，而现在的 SS-2022 却成为高端专线机场的标配？',
    shortAnswer:
      '早期 SS 流加密算法存在重放攻击与包长度特征漏洞；而 Shadowsocks 2022（SIP022）引入了定长盐值、时间戳校验与 BLAKE3 密钥派生，彻底堵死了主动探测漏洞，且兼具 0 握手延迟。',
    detailedExplanation:
      '2022 年发布的 SIP022 规范（如 `2022-blake3-aes-128-gcm` 和 `2022-blake3-aes-256-gcm`）对每个数据包进行了严格的会话 ID 与时间戳验证，任何偏离系统时间超过 30 秒的重放探测包都会被静默丢弃。配合机场国内 BGP 入口加密接入 + 后端 IEPL 专线，SS-2022 既有 HTTPS 级别的安全性，又省去了 TLS 三次往返握手的额外 50–100ms 延迟，看视频秒开、打游戏指哪打哪。',
    tags: ['SS-2022', 'AEAD加密', '抗重放攻击'],
  },
  {
    id: 'proto-03',
    category: 'cat-protocol',
    question: 'Hysteria2（歇斯底里 2）为什么能在垃圾公网线路上跑出几百兆带宽？有什么副作用？',
    shortAnswer:
      'Hysteria2 基于 UDP QUIC 协议并采用 Brutal 拥塞控制算法，无视链路丢包按预设速率强行发包；副作用是容易触发国内运营商对 UDP 流量的 QoS 限速或端口临时屏蔽。',
    detailedExplanation:
      '传统 TCP 协议一旦遇到 2% 的丢包就会成倍缩减发送窗口，导致晚高峰公网速度暴跌。Hysteria2 反其道而行之：只要你告诉它你有 300Mbps 带宽，哪怕链路丢包 15%，它也会以恒定高速率发包填满管道。但正因为它基于高频 UDP 发包，部分省份运营商的光猫或城域网会将其识别为异常 P2P/DDoS 流量并进行 UDP QoS 断流，此时需要客户端开启端口跳跃（Port Hopping）才能缓解。',
    tags: ['Hysteria2', 'QUIC', 'Brutal拥塞控制', 'UDP限速'],
  },
  {
    id: 'proto-04',
    category: 'cat-protocol',
    question: '什么是 VLESS Reality？它为什么不需要自己买域名和申请 SSL 证书？',
    shortAnswer:
      'Reality 直接借用目标权威大网站（如 Apple、Microsoft、lovelive 等）真实的 TLS 1.3 证书与指纹进行握手，在审查者眼中与正常访问大厂官网毫无二致，且无法被主动爬虫识别。',
    detailedExplanation:
      '传统 Trojan 或 VMess+TLS 需要节点部署自己的域名与 Let’s Encrypt 证书，审查系统可以通过证书透明度日志（CT Log）或主动扫描 IP 段发现代理节点。VLESS Reality 在客户端携带特定 ShortId 与公钥时才建立代理通道；任何第三方爬虫或审查探针主动访问该 IP 时，服务器直接将流量无感透明转发给真实的海外大厂官网，返回百分百真实的证书链与网页内容。',
    tags: ['VLESS', 'Reality', 'TLS指纹', '抗主动探测'],
  },
  {
    id: 'proto-05',
    category: 'cat-protocol',
    question: '为什么有些老旧客户端导入新机场订阅后节点列表为空，或者提示“Unsupported cipher”？',
    shortAnswer:
      '这是因为旧版 Clash Premium（已停更）或老版本 v2rayN 不支持 SS-2022、VLESS Reality、Hysteria2 等新协议，升级至搭载 Mihomo（Clash.Meta）内核的新客户端即可完美识别。',
    detailedExplanation:
      '2023 年底原版 Clash 与 Clash for Windows 归档停更后，开源社区由 Mihomo（原 Clash.Meta）与 Sing-box 全面接棒。现代一线机场广泛采用了 `2022-blake3-aes-256-gcm`、VLESS、Hysteria2 与 TUIC v5 协议，旧内核解析 YAML 时遇到不认识的协议会自动跳过，导致导入后看到 0 个节点或仅剩几个备用节点。请立即前往本站「客户端大全」升级至 Clash Verge Rev 或 Flclash。',
    tags: ['Mihomo内核', '订阅节点为空', 'Unsupported cipher'],
    relatedLinks: [{ label: '全平台 Mihomo/Sing-box 客户端下载', href: '/clients/' }],
  },
  {
    id: 'proto-06',
    category: 'cat-protocol',
    question: '什么是 XTLS-RPRX-Vision 流控？为什么可以解决“TLS in TLS”特征？',
    shortAnswer:
      '当你用代理访问 HTTPS 网站时，内层网页 TLS 与外层代理 TLS 会产生明显的嵌套包长度特征；Vision 流控在识别到内层 TLS 1.3 握手完成后不再重复加密，既消除特征又降低 CPU 占用。',
    detailedExplanation:
      '“TLS in TLS”是深度包检测（DPI）识别加密代理的重要线索：因为 TLS 握手包的 Record 长度固定且具有规律，再套一层代理加密会让外层包长呈现特定偏移。XTLS Vision 能够智能识别内层 HTTPS 流量并直接透传已加密的数据块，同时对握手阶段做随机长度填充（Padding），兼顾了极致隐蔽性与高吞吐性能。',
    tags: ['XTLS-Vision', 'TLS in TLS', 'DPI深度包检测'],
  },
  {
    id: 'proto-07',
    category: 'cat-protocol',
    question: '开启 IPv6 会让机场速度变快还是变慢？为什么很多教程建议关掉代理的 IPv6？',
    shortAnswer:
      '国内家庭宽带普遍分配了原生公网 IPv6，若客户端未正确接管 IPv6 路由或机场节点不支持 IPv6 落地，会导致海外请求绕过代理直接走国内 IPv6 裸连，从而造成网页打不开、DNS 泄露或地区识别暴露。',
    detailedExplanation:
      '除非你确认所用机场节点明确标注“双栈 IPv4/IPv6 落地”且你的客户端已在配置文件中开启 `ipv6: true`，否则建议在 Clash Verge Rev / Mihomo 配置中保持 `ipv6: false`，让所有海外双栈域名优先解析并走稳定的 IPv4 IEPL 专线通道，避免因为 IPv6 抢答导致 ChatGPT 报地区不支持或 Netflix 掉解锁。',
    tags: ['IPv6泄露', '双栈网络', 'DNS抢答'],
  },

  // ==================== 三、客户端与内核实战篇 ====================
  {
    id: 'client-01',
    category: 'cat-client',
    question: '为什么强烈建议卸载老版 Clash for Windows (CFW)，改用 Clash Verge Rev 或 Flclash？',
    shortAnswer:
      '原版 CFW 已于 2023 年 11 月彻底停更，不仅无法支持新协议，且旧版 Electron 框架存在已知安全与内存占用问题；Clash Verge Rev 基于 Tauri (Rust) 构建，体积小 80%、内存占用极低且内置最新 Mihomo 内核。',
    detailedExplanation:
      'Clash Verge Rev 是目前桌面端（Windows / macOS / Linux）最活跃的开源旗舰客户端：它弃用了臃肿的 Chromium/Electron，改用操作系统原生 WebView 与 Rust 后端，安装包仅 10MB 左右，完美支持 Sub-Store 规则覆写、TUN 虚拟网卡一键开启、WebDAV 配置云同步以及 VLESS/Hysteria2/SS-2022 全协议栈。若你还需要手机与电脑 UI 完全一致，则推荐同样开源的 Flclash。',
    tags: ['Clash Verge Rev', 'Flclash', 'CFW停更', 'Rust客户端'],
    relatedLinks: [{ label: '6大平台客户端参数与下载大全', href: '/clients/' }],
  },
  {
    id: 'client-02',
    category: 'cat-client',
    question: '客户端里的「系统代理（System Proxy）」和「TUN 模式（虚拟网卡）」有什么区别？平时该开哪个？',
    shortAnswer:
      '日常浏览器上网、看视频开「系统代理」即可（最省资源）；遇到终端命令行（Git/Docker/npm）、UWP 应用、Telegram 语音、Cursor IDE 或外服端游不走代理时，开启「TUN 模式」在网卡层全局接管。',
    detailedExplanation:
      '「系统代理」本质上只是修改了操作系统的 HTTP/SOCKS5 环境变量注册表，浏览器（Chrome/Edge）会自动遵守，但很多命令行工具、游戏客户端或桌面软件会直接忽略系统代理直连网卡。而「TUN 模式」会在系统中创建一个名为 `Meta` 或 `utun` 的三层虚拟网卡，将整机所有 TCP/UDP/ICMP 流量在操作系统内核路由层统一捕获并按规则分流，做到真正的无死角接管。',
    tags: ['系统代理', 'TUN模式', '虚拟网卡', '三层接管'],
  },
  {
    id: 'client-03',
    category: 'cat-client',
    question: '什么是 Fake-IP 和 Redir-Host？为什么开启 Fake-IP 后网页秒开，但有时 ping 域名会看到 198.18.x.x？',
    shortAnswer:
      'Fake-IP 会在应用发起域名请求时立即返回一个 `198.18.0.1/16` 保留段的虚拟 IP 骗过应用先建立连接，把真正的 DNS 解析交给远端代理服务器完成，从而消灭本地 DNS 污染并减少一次网络往返延迟。',
    detailedExplanation:
      '在传统 Redir-Host 模式下，你的电脑必须先等 DNS 服务器返回真实 IP，才能根据 IP 判断走直连还是走代理，不仅慢一拍，还容易遭遇本地运营商 DNS 抢答污染。Fake-IP 模式下，客户端拿到域名立刻匹配分流规则并返回 `198.18.x.x` 假地址，将域名直接封装进加密隧道发往香港/日本落地机房解析，网页首屏响应可提速 40–120ms。如果个别内网开发工具或游戏反作弊不喜欢虚拟 IP，将其域名加入 `fake-ip-filter` 即可恢复真实 IP 解析。',
    tags: ['Fake-IP', 'Redir-Host', '198.18.0.1', 'fake-ip-filter'],
    relatedLinks: [{ label: 'Mihomo 防泄漏覆写模板一键复制', href: '/free-resources/#sec-dns' }],
  },
  {
    id: 'client-04',
    category: 'cat-client',
    question: 'Rule（规则分流）、Global（全局代理）和 Direct（全部直连）三种模式该怎么选？',
    shortAnswer:
      '99% 的时间请保持在「Rule（规则模式）」，它能实现国内微信/淘宝/B站高速直连不扣流量、海外网站与 AI 自动走代理；仅在测试单个节点或访问冷门未收录海外站时临时切到「Global（全局模式）」。',
    detailedExplanation:
      '很多新手以为开「Global（全局）」网速更快，结果导致访问国内百度网盘、哔哩哔哩、Steam 国区下载也绕道香港服务器，不仅把国内访问延迟从 10ms 拉高到 60ms，还白白消耗了宝贵的机场套餐流量，甚至导致国内网银/APP 触发异地登录风控。保持「Rule（规则分流）」并配合 Loyalsoldier / blackmatrix7 规则集才是最科学的用法。',
    tags: ['Rule规则模式', 'Global全局模式', '智能分流'],
  },
  {
    id: 'client-05',
    category: 'cat-client',
    question: 'iOS 苹果手机端的小火箭（Shadowrocket）、Stash、Quantumult X 和 Loon 该怎么选？',
    shortAnswer:
      '追求性价比与全协议最快跟进选 Shadowrocket（美区 $2.99）；追求与桌面 Clash YAML 配置 100% 通用选 Stash；喜欢折腾脚本重写与精美 UI 选 Loon 或 Quantumult X；预算为 0 可选免费的 Sing-box 或 Karing。',
    detailedExplanation:
      'iOS 端由于 App Store 国区下架了所有代理工具，必须准备一个美区或港区 Apple ID（可参考本站《免费资源》栏目零成本注册教程）。对于绝大多数用户，Shadowrocket（小火箭）仅售 $2.99 买断，更新极其勤快，支持 VLESS Reality、Hysteria2、TUIC v5 等所有新协议，是装机量第一的国民级工具。',
    tags: ['Shadowrocket', 'Stash', 'Quantumult X', 'Loon', 'iOS客户端'],
    relatedLinks: [
      { label: '零成本美区/港区 Apple ID 注册教程', href: '/free-resources/#sec-apple-id' },
      { label: 'iOS 客户端横评与下载指南', href: '/clients/#ios' },
    ],
  },
  {
    id: 'client-06',
    category: 'cat-client',
    question: '如何在电脑开启 Clash 后，把科学上网共享给同一 Wi-Fi 下的 PS5、Switch、Quest 3 或手机？',
    shortAnswer:
      '在电脑客户端开启「允许局域网连接（Allow LAN）」，查看电脑内网 IP（如 `192.168.1.100`）与混合端口（通常为 `7890` 或 `7897`），在游戏机或手机 Wi-Fi 代理设置中填入该 IP 和端口即可。',
    detailedExplanation:
      '以 PS5 / Switch 下载提速与联机为例：① 在电脑 Clash Verge Rev 设置中打开 `Allow LAN`（允许局域网连接），并确认防火墙放行了 Mihomo 内核；② 记录电脑局域网 IP（如 `192.168.31.88`）和 Mixed Port（如 `7897`）；③ 在 PS5/Switch 的网络设置中选择手动设置代理服务器，地址填 `192.168.31.88`，端口填 `7897`；④ 满速拉满千兆宽带下载游戏更新。',
    tags: ['Allow LAN', '局域网共享', 'PS5加速', 'Switch代理', 'Quest 3激活'],
  },
  {
    id: 'client-07',
    category: 'cat-client',
    question: '软路由（OpenWrt）上的 OpenClash、PassWall 和 Nikki (MihomoTProxy) 哪个更好用？',
    shortAnswer:
      'N100 等 x86 软路由追求精细分流与面板可视化推荐 OpenClash 或 Nikki；MT7981/MT7986 等 ARM 硬路由追求低内存占用与极致转发性能推荐 PassWall 2 或 HomeProxy。',
    detailedExplanation:
      '软路由透明代理的核心痛点是 DNS 防泄漏与国内外 UDP 分流。OpenClash 功能最全，直接兼容机场提供的 Clash 订阅，但配置项繁多；Nikki（原 MihomoTProxy）采用全新 TProxy 架构，配置极简且原生贴合最新 Mihomo 内核；建议软路由用户在 OpenClash 中开启 Fake-IP（增强模式）并关闭路由器自带的运营商 DNS 转发，确保全家苹果电视 Apple TV 与智能家居丝滑无感解锁。',
    tags: ['OpenWrt', 'OpenClash', 'PassWall', '软路由透明代理'],
    relatedLinks: [{ label: 'RouterOS / OpenWrt 客户端指南', href: '/clients/#router' }],
  },
  {
    id: 'client-08',
    category: 'cat-client',
    question: '为什么同时安装两个 VPN 或安全卫士会导致 Clash 开启 TUN 模式失败？',
    shortAnswer:
      'Windows 系统的 Wintun 驱动或系统路由表在同一时间只能由一个高优先级虚拟网卡接管，多个 VPN 客户端或国产杀毒软件的“网络防护驱动”会劫持 LSP/WFP 过滤器导致冲突。',
    detailedExplanation:
      '如果你同时开着公司内网 VPN（如 EasyConnect、深信服、Cisco AnyConnect）、游戏加速器（UU/雷神）或 360/火绒的流量监控，再开启 Clash 的 TUN 模式就会出现路由环路或虚拟网卡启动失败。正确做法是：日常关闭其他 VPN，或在 Clash Verge Rev 中点击「服务模式（Service Mode）」安装系统服务并以管理员权限运行内核。',
    tags: ['TUN模式失败', 'Wintun冲突', '服务模式'],
  },

  // ==================== 四、AI 大模型与开发者解锁篇 ====================
  {
    id: 'ai-01',
    category: 'cat-ai',
    question: '为什么连上代理后访问 ChatGPT 还是提示“Access Denied (Error 1020)”或“Unable to load site”？',
    shortAnswer:
      '这是因为当前节点的落地 IP 被 Cloudflare 标记为高风险机房段，或者分流规则未把 `chatgpt.com` / `oaistatic.com` / `oaiusercontent.com` 完整纳入纯净 AI 专属节点组。',
    detailedExplanation:
      'OpenAI 启用了 Cloudflare 高级企业级风控，普通万人骑的廉价机房 IP 一旦发起大量并发请求就会被封禁 ASN。解决办法：① 切换到机场专门提供的「AI 专线 / 原生解锁节点」（优先选美国、日本、新加坡或台湾原生落地）；② 检查客户端分流规则是否包含了最新的 `chatgpt.com` 及静态资源域名；③ 清除浏览器针对 `openai.com` 和 `chatgpt.com` 的 Cookie 后用无痕模式重试。',
    tags: ['ChatGPT解锁', 'Access Denied', 'Cloudflare拦截', 'AI分流'],
    relatedLinks: [{ label: 'AI 与流媒体原生解锁机场推荐', href: '/services/ai-chatgpt-unlock/' }],
  },
  {
    id: 'ai-02',
    category: 'cat-ai',
    question: '什么是 ChatGPT“降智（PoW 算力难度飙升）”？如何检测并恢复 GPT-4o / o3 的满血推理能力？',
    shortAnswer:
      '当 OpenAI 检测到你的 IP 风险值较高或存在多人共用特征时，虽然不封号，但会将 Sentinel Proof-of-Work 难度调至极高（如 `00000` 级别），并暗中关闭高阶联网搜索、Canvas 与深度推理能力。',
    detailedExplanation:
      '判断 ChatGPT 是否被降智的最准方法：在浏览器按 F12 打开开发者工具 → Network（网络）面板，发送一条消息后查看 `sentinel/chat-requirements` 请求返回的 `proofofwork.difficulty` 字段。如果数值大于 `00003`（例如只有 4 位如 `05a2`），说明当前 IP 极度危险已被降智；如果难度为 `00000` 或 `000000` 开头且支持完整推理，说明 IP 纯净。切换至 #1 光速云、#3 微风网络或 #6 星岛梦的低欺诈分原生节点即可秒回满血。',
    tags: ['ChatGPT降智', 'PoW难度检测', '满血GPT-4o', '欺诈分'],
    relatedLinks: [{ label: '免费 IP 欺诈分与纯净度检测工具', href: '/free-resources/#sec-diagnostic' }],
  },
  {
    id: 'ai-03',
    category: 'cat-ai',
    question: '为什么 Claude (Anthropic) 注册或登录最容易秒封号？用机场访问 Claude 有哪些铁律？',
    shortAnswer:
      'Anthropic 的风控是全球大模型中最严苛的，严禁频繁切换国家节点、严禁香港/大陆地区 IP 沾边、严禁高欺诈分机房 IP；必须固定使用同一个美西/日本/新加坡低风险原生节点组。',
    detailedExplanation:
      '保护 Claude Pro 账号不封号的三大铁律：① 在 Clash 分流规则中建立独立的 `AI-Claude` 策略组（使用本站免费资源提供的 `Claude.list`），将其死死绑定在某一条固定的美国或日本原生节点上，切忌挂在每 5 分钟自动切换节点的 ` URL-Test 自动测速` 组下！一旦你的会话在 10 分钟内从日本跳到新加坡又跳到美国，必触发异地风控秒封；② 绝对不要让香港节点流量触碰 `anthropic.com` 和 `claude.ai`（Anthropic 官方不支持香港地区）；③ 确保浏览器关闭 WebRTC 泄漏。',
    tags: ['Claude防封号', 'Anthropic风控', '固定节点策略', '禁止自动切换'],
    relatedLinks: [{ label: '下载 AI 大模型精细分流规则集', href: '/free-resources/#sec-rules' }],
  },
  {
    id: 'ai-04',
    category: 'cat-ai',
    question: '为什么访问 Google Gemini 或 NotebookLM 总是提示“目前不支持你所在的国家/地区”，明明我已经挂了美国节点？',
    shortAnswer:
      '因为 Google 会通过 Google 账号位置历史、Google 搜索重定向域名（如被分流到香港 `.com.hk`）或 IP 送中（Google 误将某海外 IP 定位为中国大陆/香港）来综合判定地区。',
    detailedExplanation:
      '排查与修复只需三步：① 访问 `https://www.google.com/ncr`（强制禁止国家重定向）；② 在 Clash 规则中确保 `gemini.google.com`、`notebooklm.google.com`、`bard.google.com`、`makersuite.google.com` 以及 `googleapis.com` 走美国、日本或新加坡原生节点（避开香港节点，因为 Google Gemini 网页版同样未对香港开放）；③ 访问 `https://policies.google.com/terms` 查看页面底部 Google 识别出的你当前国家/地区，若显示“中国”说明该节点 IP 被送中，更换一条非送中节点即可。',
    tags: ['Google Gemini', 'NotebookLM', 'IP送中修复', '地区不支持'],
  },
  {
    id: 'ai-05',
    category: 'cat-ai',
    question: '开发者使用 Cursor IDE、Windsurf 或 GitHub Copilot 时频繁报连接超时或卡在 Generating 怎么办？',
    shortAnswer:
      'AI 编程 IDE 底层大量使用 HTTP/2 流式长连接与 gRPC 双向通信，普通系统代理或开启了 QUIC 阻断的节点会导致流中断；开启客户端 TUN 模式并将 IDE 域名指定给低延迟 IEPL 节点即可根治。',
    detailedExplanation:
      '对于 Cursor 用户：① 在 Clash Verge Rev 中开启「TUN 模式」，确保 Cursor 的 Node.js 子进程与扩展宿主全部走代理；② 若仍偶发断流，在 Cursor 设置（Settings → General → Network）中将 `HTTP Compatibility Mode` 切换为 `HTTP/1.1`；③ 将 `cursor.sh`、`cursor.com`、`cursorapi.com` 加入 AI 专线分流组，选择延迟低于 50ms 的日本或新加坡 IEPL 节点。',
    tags: ['Cursor设置', 'GitHub Copilot', 'Windsurf', 'HTTP/2长连接'],
  },
  {
    id: 'ai-06',
    category: 'cat-ai',
    question: '开了 Clash 后，终端里的 `git clone` / `git push` 用 HTTPS 正常，但用 SSH (`git@github.com`) 却连接超时？',
    shortAnswer:
      '因为 SSH 默认走 TCP 22 端口，不读取系统的 HTTP 代理环境变量；只需开启 TUN 模式，或者在 `~/.ssh/config` 中配置 `ProxyCommand` 走本地 Clash 端口并与 443 端口通信即可。',
    detailedExplanation:
      'GitHub 官方专门在 `ssh.github.com` 的 443 端口提供了 SSH 服务。你可以在 `~/.ssh/config` 中添加以下四行配置，让 Git SSH 永久丝滑走 Clash 代理且永不被封端口：',
    commandOrConfig: `Host github.com
  HostName ssh.github.com
  Port 443
  User git
  # Windows 用户将 nc 替换为 connect.exe -S 127.0.0.1:7897 %h %p
  ProxyCommand nc -X 5 -x 127.0.0.1:7897 %h %p`,
    tags: ['GitHub SSH', '22端口超时', 'ProxyCommand', '开发者排障'],
  },
  {
    id: 'ai-07',
    category: 'cat-ai',
    question: '调用 OpenAI / Anthropic 官方 API 开发应用时，机场节点的延迟与稳定性有什么特殊要求？',
    shortAnswer:
      'API 调用直接按 Token 计费且对 TLS 握手与 SSE（Server-Sent Events）流式传输极其敏感，任何中途 RST 断连都会导致 Token 白白扣费却拿不到完整返回，必须使用 0 丢包的 IEPL 专线。',
    detailedExplanation:
      '如果你在本地运行 LangChain、Dify、NextChat 或 Claude Code CLI，强烈建议选用具备 SLA 级晚高峰稳定性的 IEPL 专线机场（如 #1 光速云、#3 飞鸟云），并将 `api.openai.com`、`api.anthropic.com`、`openrouter.ai` 固定在美西或东京专线节点上，避免因节点抖动引发 `APIConnectionError` 重试风暴。',
    tags: ['OpenAI API', 'Claude Code', 'SSE流式传输', 'API开发'],
  },

  // ==================== 五、4K 流媒体与游戏联机篇 ====================
  {
    id: 'media-01',
    category: 'cat-media',
    question: '什么是 Netflix“自制剧（Originals Only）”与“全解锁（非自制剧解锁）”？为什么有的节点搜不到《绝命毒师》？',
    shortAnswer:
      'Netflix 会将已知的数据中心/机房 IP 列入代理名单，此时只会向你展示 Netflix 自己拥有全球版权的自制剧（如《怪奇物语》），而隐藏《绝命毒师》《老友记》等第三方版权非自制剧。',
    detailedExplanation:
      '只有当机场节点使用的是未被 Netflix 标记的“原生 IP / 住宅 ISP IP”，或者机场在落地机房部署了“DNS 媒体内网解锁分流”时，才能看到对应国家完整的非自制剧片库并开启 4K HDR / Dolby Vision。你只需在浏览器访问 Netflix 剧集编号 `https://www.netflix.com/title/70143836`（绝命毒师）：如果能正常打开详情页说明是真全解锁；如果提示 `Error NSES-404` 则说明该节点仅支持自制剧。',
    tags: ['Netflix非自制剧', '70143836检测', '原生解锁', '4K HDR'],
    relatedLinks: [
      { label: '#1 光速云 全节点流媒体解锁实测矩阵', href: '/brands/guangsuyun/' },
      { label: '一键流媒体解锁检测脚本', href: '/free-resources/#sec-scripts' },
    ],
  },
  {
    id: 'media-02',
    category: 'cat-media',
    question: '什么是机场的“DNS 媒体内网解锁”？为什么用机房 IP 也能全解锁 Disney+ 和 Netflix？',
    shortAnswer:
      '机场主在海外大带宽机房旁额外部署了一台拥有原生家庭宽带/住宅 IP 的解锁服务器，仅当检测到 Netflix/Disney+ 的鉴权域名请求时才通过内网转发给原生 IP 完成认证，兼顾了大带宽与全解锁。',
    detailedExplanation:
      '纯净原生住宅 IP 往往带宽昂贵且较小（如 100Mbps），而顶级大机房（如 Equinix/Cogent）带宽高达 10Gbps 却容易被流媒体拉黑。成熟的头牌机场通过智能 SNI Proxy + 内网 DNS 分流技术，让鉴权走原生 IP、让大流量的视频分片（`nflxvideo.net`）走 10Gbps 高速机房，从而让每一个普通 1x 节点都能实现 4K 秒拖动且永不掉解锁。',
    tags: ['DNS内网解锁', 'SNI Proxy', 'Disney+解锁', '10Gbps带宽'],
  },
  {
    id: 'media-03',
    category: 'cat-media',
    question: '为什么手机刷 TikTok 国际版总是黑屏、无网络连接，或者怎么刷都是同一个地区的内容？',
    shortAnswer:
      'TikTok 早期通过读取手机 SIM 卡运营商代码（MCC/MNC，如中国移动 46000）锁区；新版客户端配合 Clash/Shadowrocket 的 TikTok 重写规则或使用免拔卡版 + 台湾/日本/美区节点即可正常刷视频与直播。',
    detailedExplanation:
      '如果使用网页版 `tiktok.com` 或桌面端，只要节点不是香港/大陆（TikTok 已停止在香港运营，因此香港节点无法使用 TikTok！）即可直接观看；因此请务必在客户端的 `TikTok` 分流策略组中选择台湾、日本、新加坡或美国节点，千万不要选香港节点。',
    tags: ['TikTok黑屏', '香港节点不支持TikTok', '台湾日本节点', 'SIM锁区'],
  },
  {
    id: 'media-04',
    category: 'cat-media',
    question: '为什么 YouTube 看 4K/8K 视频时，明明测速有 500Mbps，但进度条拖动还是会转圈缓冲？',
    shortAnswer:
      '这是因为浏览器默认启用了基于 UDP 的 QUIC (HTTP/3) 协议，部分中转节点对高频 UDP 做了限速或丢包重传不佳；在浏览器禁用 QUIC 或在客户端开启 `Disable QUIC` 后强制走 TCP HTTP/2 即可秒拖动。',
    detailedExplanation:
      '打开 Chrome / Edge 浏览器地址栏输入 `chrome://flags/#enable-quic`，将其设置为 `Disabled` 重启浏览器，你会发现 YouTube 右键「详细统计信息（Stats for Nerds）」里的连接速度瞬间翻倍且拖动进度条零等待。此外，在 Mihomo 配置中屏蔽 UDP 443 端口同样可以全局自动回退到极速稳定的 TCP 传输。',
    tags: ['YouTube 4K卡顿', '禁用QUIC', 'HTTP/3回退', 'Stats for Nerds'],
  },
  {
    id: 'media-05',
    category: 'cat-media',
    question: '为什么用 YouTube 香港节点看视频没有广告？什么是“送中节点”？',
    shortAnswer:
      '当一个海外 IP 被海量中国大陆用户高频使用并携带中文定位信息时，Google 会将该 IP 的地理位置标记为中国大陆（即“送中”）；由于 Google 未在中国大陆投放 YouTube 广告，该节点便成了天然的“免广告节点”。',
    detailedExplanation:
      '“送中节点”是一把双刃剑：好处是无需开通 YouTube Premium 会员就能享受后台零贴片广告的清爽体验；坏处是 Google 搜索会强制开启安全搜索，且 Google Gemini 等锁区服务会拒绝访问。因此高端机场通常会同时提供“原生非送中节点（用于 AI 与 Google 服务）”和“免广告送中节点（专供 YouTube）”。',
    tags: ['YouTube免广告', 'IP送中', 'Google定位'],
  },
  {
    id: 'media-06',
    category: 'cat-media',
    question: 'IEPL 专线机场可以代替 UU/雷神等游戏加速器打外服游戏（如 Apex、Valorant、CS2、战地）吗？',
    shortAnswer:
      '只要机场节点支持真 UDP 转发（最好是 FullCone NAT 全圆锥形 NAT）且客户端开启 TUN 模式，广港/沪日 IEPL 专线的物理延迟（8–35ms）完全可以平替甚至超越传统游戏加速器。',
    detailedExplanation:
      '传统游戏加速器本质上也是租用国内 BGP + 跨境 IPLC/IEPL 专线，但只能加速白名单内的游戏进程，无法兼顾 Discord 语音、Twitch 直播与外服官网注册。使用支持 FullCone UDP 的 IEPL 机场（如 #1 光速云、#2 幻网）配合 Clash Verge Rev 的 TUN 模式或 Netch/Proxifier，不仅能把港服/日服 Ping 值稳定压在 20–45ms，还能让 Discord 语音零丢包。',
    tags: ['外服游戏加速', 'UDP FullCone', 'NAT类型', 'Discord语音'],
    relatedLinks: [{ label: 'IEPL/IPLC 低延迟专线专题', href: '/services/iepl-iplc-line/' }],
  },
  {
    id: 'media-07',
    category: 'cat-media',
    question: '如何让 Apple TV、Sony 电视或安卓电视盒子直接看 Netflix、Disney+ 和 YouTube 4K？',
    shortAnswer:
      '方案一：在 Apple TV (tvOS 17+) 上直接安装 Stash、Shadowrocket 或 Sing-box 客户端；方案二：在家里部署一台 OpenWrt 软路由或将电脑开启「允许局域网连接」把电视网关指向电脑/旁路由。',
    detailedExplanation:
      '自 tvOS 17 起，苹果正式开放了 Apple TV 的 Network Extension VPN 接口，你可以用同一个美区/港区 Apple ID 在电视上直接免费下载已购的 Shadowrocket 或 Stash，扫码导入机场订阅后即可躺在沙发上享受杜比视界 4K 家庭影院，无需折腾复杂的旁路由。',
    tags: ['Apple TV', 'tvOS 17', '家庭影院4K', '旁路由网关'],
  },

  // ==================== 六、套餐计费、倍率算法与账号审计篇 ====================
  {
    id: 'bill-01',
    category: 'cat-billing',
    question: '什么是机场节点的“流量倍率（0.5x / 1x / 2x）”？真实流量是怎么扣减的？',
    shortAnswer:
      '实际扣除流量 = 真实产生流量 × 节点倍率。例如使用 1x 标准节点看 10GB 视频扣 10GB；使用 2x 高级节点看 10GB 扣 20GB；使用 0.5x 福利节点看 10GB 仅扣 5GB。',
    detailedExplanation:
      '为什么会有倍率区分？因为不同跨境线路与落地 IP 的采购成本相差十倍以上（例如普通 BGP 成本极低，而顶级原生双栈 IEPL 成本高昂）。需要警惕的是部分“套路机场”表面宣传 10 元 500GB，进去后发现所有能用的节点全是 5x 甚至 10x 倍率，实际可用流量缩水 90%。本站实测榜首的 #1 光速云 全线主力 IEPL 节点均为良心 1.0x 标准倍率，所见即所得。',
    tags: ['节点倍率', '流量扣减公式', '防高倍率套路'],
  },
  {
    id: 'bill-02',
    category: 'cat-billing',
    question: '机场流量是单向计费（只算下载）还是双向计费（上传 + 下载）？',
    shortAnswer:
      '行业 99% 的正规机场均采用「双向计费（实际消耗 = 上传流量 + 下载流量）」，因为上游机房与专线运营商向机场主收取的也是双向流量费用。',
    detailedExplanation:
      '在日常刷网页、看 4K 视频、用 AI 时，上传流量通常只占总流量的 3%–5%，几乎可以忽略不计；但如果你的电脑后台开着 BT/PT 下载软件（如迅雷、qBittorrent、百度网盘 P2P 加速）且未分流直连，疯狂做种上传会瞬间跑光你的机场套餐流量！因此请务必确认 BT 软件走 DIRECT 直连。',
    tags: ['双向计费', '上传下载流量', 'BT做种防偷跑'],
  },
  {
    id: 'bill-03',
    category: 'cat-billing',
    question: '普通用户一个月到底需要多少 GB 的机场流量？100GB / 200GB 够用吗？',
    shortAnswer:
      '轻度办公/AI/查资料每月 30–60GB 绰绰有余；每天看 1–2 小时 1080P/4K 视频每月约需 100–200GB；全家共享或高频 4K 影音重度用户建议选择 300GB–600GB/月。',
    detailedExplanation:
      '具体换算参考：① 纯文字与代码开发（ChatGPT/Claude/GitHub/Google）：1GB 可以发送数万条对话，一个月用不完 15GB；② 刷社交媒体（X/Twitter、Instagram、TikTok 手机端）：约 1.5GB/小时；③ YouTube / Netflix 1080P 视频：约 2.5GB/小时；④ YouTube / Netflix 4K 60fps HDR 视频：约 12–18GB/小时。对于大多数人，#1 光速云 年付 ¥99（折合 ¥8.25/月）或极速版 ¥25/月（168GB）是最具性价比的黄金档位。',
    tags: ['月流量估算', '100GB够用吗', '4K视频耗流量'],
    relatedLinks: [{ label: '#1 光速云 套餐档位与优惠码详情', href: '/brands/guangsuyun/' }],
  },
  {
    id: 'bill-04',
    category: 'cat-billing',
    question: '什么是“按量付费 / 永久不限时流量包”？它和包月/包年套餐怎么搭配最划算？',
    shortAnswer:
      '永久不限时流量包指一次购买后没有每月清零限制，流量用完为止；最科学的方案是“包月/包年主力 + 永久不限时备用包”，既保证主力划算，又拥有永不失联的第二通道。',
    detailedExplanation:
      '两类人群最适合购买不限时按量包：① 流量消耗极少（每月 < 15GB）的轻度查资料用户，买一个 #1 光速云 ¥147/247GB 或 #7 二猫云 ¥99/100GB（或 #9 唯兔云 ¥100/100GB）永久包可以用上整整两三年，折合每月仅三四块钱；② 已经有主力包月机场的专业用户，备一个不同上游机房的永久不限时流量包放在客户端里，一旦主力机场半夜维护，切过去就能立刻救急，且平时不用一分钱不浪费。',
    tags: ['不限时流量包', '永久套餐', '按量计费', '主备双保险'],
    relatedLinks: [{ label: '按量付费与轻量高性价比专题', href: '/services/pay-as-you-go-traffic/' }],
  },
  {
    id: 'bill-05',
    category: 'cat-billing',
    question: '机场套餐写的“不限设备数”和“限 3/5 台设备同时在线”是怎么统计的？家里挂软路由算几台？',
    shortAnswer:
      '机场后端统计的是“同时发起连接的不同公网出口 IP 数量”；因此家里所有手机、电脑、电视连在同一个 Wi-Fi（或同一台软路由）下出门，在机场看来只有 1 个家庭宽带公网 IP，仅算作 1 台设备！',
    detailedExplanation:
      '这是一个非常实用的冷知识：假设你在家里路由器上配置了 Clash，家里 10 部手机电脑同时连 Wi-Fi 科学上网，只占用 1 个并发 IP 名额；你出门在外用手机 5G 流量上网，占用第 2 个 IP 名额；公司在工位电脑上用，占用第 3 个 IP 名额。像 #1 光速云 全线套餐默认不限制个人与家庭合理并发设备数，彻底告别多设备焦虑。',
    tags: ['并发设备数', '公网IP计数', '软路由算几台'],
  },
  {
    id: 'bill-06',
    category: 'cat-billing',
    question: '包月/包年套餐的流量是“每月 1 号重置”还是“按购买账单日重置”？当月流量提前用完了怎么办？',
    shortAnswer:
      '主流 SSPanel / V2Board 机场均按你的「购买账单日」每 30 天自动重置流量（例如 15 号买，则每月 15 号清零补满）；若当月临时用超，可在后台点击“重置当期流量”或购买叠加流量包。',
    detailedExplanation:
      '在机场用户面板首页通常会清晰显示“下次流量重置时间”。如果你因为下载大型 AI 模型或看 4K 比赛提前用完了当月额度，无需重新注册新号，直接在后台「我的订阅」或「商店」中选择“重置当前周期流量”（通常仅需月费的 70%–80%）即可立即恢复满额。',
    tags: ['流量重置时间', '账单日', '流量用完怎么办'],
  },
  {
    id: 'bill-07',
    category: 'cat-billing',
    question: '什么是机场的“审计规则（Audit Rules）”？为什么机场会屏蔽 BT 迅雷、垃圾邮件端口和部分政治/轮系网站？',
    shortAnswer:
      '审计规则是机场在服务端设置的自动拦截列表，目的是防止个别用户用海外落地 IP 进行 BT 盗版下载（触发海外机房 DMCA 版权投诉封机）或发垃圾邮件/网络攻击，从而保护全体用户的节点存活率。',
    detailedExplanation:
      '海外顶级机房（尤其是美国、日本、新加坡原生 ISP 机房）对 DMCA 版权投诉和 Spamhaus 垃圾邮件举报是零容忍的：只要有 1 个用户挂着美国节点用迅雷/BitTorrent 下载好莱坞电影，机房收到版权方律师函就会在 24 小时内拔掉整台服务器的网线。因此正规机场都会在服务端拦截 BitTorrent 协议、SMTP 25 发信端口以及高危违法站点，这是衡量一家机场能否长期稳定运营的重要风控机制。',
    tags: ['审计规则', 'DMCA版权保护', '禁止BT下载', '节点存活率'],
  },

  // ==================== 七、高频故障与急救排障篇 ====================
  {
    id: 'fix-01',
    category: 'cat-troubleshoot',
    question: '点击“更新订阅（Update Subscription）”提示失败、Timeout 或 Network Error 怎么办？',
    shortAnswer:
      '按顺序排查：① 先关闭当前客户端的「系统代理」与「TUN 模式」后用直连更新；② 将电脑本地 DNS 改为 `223.5.5.5`；③ 登录机场官网后台复制最新的备用订阅链接重新导入。',
    detailedExplanation:
      '90% 的订阅更新失败是因为“死锁”：你当前选中的节点已经失效断网，而客户端又试图通过这个失效的节点去拉取订阅链接。因此第一步永远是先关掉代理开关，用国内宽带直连更新。如果直连依然失败，说明原订阅域名被本地运营商 DNS 污染，在网卡设置中将首选 DNS 改为阿里 `223.5.5.5` / 腾讯 `119.29.29.29` 并执行 `ipconfig /flushdns` 即可恢复。',
    tags: ['更新订阅失败', 'Timeout排错', 'DNS刷新'],
    relatedLinks: [{ label: '跑路预警与假失联 6 步自检法', href: '/runaway-watch/#sec-troubleshoot' }],
  },
  {
    id: 'fix-02',
    category: 'cat-troubleshoot',
    question: '所有节点测速全部显示红色 `Timeout`（超时），一条都连不上，到底是怎么回事？',
    shortAnswer:
      '三大最常见原因：① 你的电脑/手机系统时间误差超过 60 秒；② 机场套餐到期或当月流量已用尽；③ 机场更换了入口 IP，需要关闭代理后更新一次订阅。',
    detailedExplanation:
      '排障优先级第一条就是**检查系统时间**！现代代理协议（SS-2022、VMess、Trojan TLS 1.3）对时间戳校验精确到秒，如果你的电脑主板电池没电或 Windows 时间同步关闭导致慢了 2 分钟，全世界的节点都会直接拒绝你的握手请求。请立即打开系统「日期和时间设置」点击「立即同步（Sync Now）」，90% 的全红 Timeout 会瞬间变绿。',
    tags: ['节点全红', 'Timeout超时', '系统时间同步', '流量用尽'],
  },
  {
    id: 'fix-03',
    category: 'cat-troubleshoot',
    question: '关闭 Clash 客户端或电脑异常关机重启后，国内网页（微信/百度/B站）也全部打不开怎么办？',
    shortAnswer:
      '这是因为客户端非正常退出时，没来得及把 Windows/macOS 的「系统代理注册表」还原为关闭状态，导致浏览器仍在往已经关闭的 `127.0.0.1:7890` 端口发请求。',
    detailedExplanation:
      '两种 10 秒急救法：① 重新打开一次 Clash 客户端，先点开「系统代理」再手动关掉它，然后正常退出软件；② 直接打开 Windows「设置 → 网络和 Internet → 代理」，将“使用代理服务器”开关手动拨到「关闭（Off）」即可立即恢复正常上网。',
    tags: ['关掉代理上不了网', '系统代理残留', '127.0.0.1拒绝连接'],
  },
  {
    id: 'fix-04',
    category: 'cat-troubleshoot',
    question: '浏览器可以正常打开 Google 和 YouTube，但微信电脑版、企业微信、网易云音乐或微软商店却连不上网？',
    shortAnswer:
      'UWP 应用（如微软商店）受 Windows AppContainer 沙盒限制禁止访问本地回环地址 `127.0.0.1`；微信则可能因为分流规则误伤。使用 Clash Verge Rev 内置的「UWP 回环解除工具」并将国内软件设为 DIRECT 即可。',
    detailedExplanation:
      '对于 Windows 10/11 上的 Microsoft Store、Xbox App、邮件等 UWP 应用，打开 Clash Verge Rev 的「设置 → 系统设置 → UWP 工具（Open UWP Tool）」，勾选所有应用点击 `Save Changes` 解除本地回环隔离即可正常联网。',
    tags: ['UWP无法联网', '微软商店打不开', '微信连不上', '回环限制'],
  },
  {
    id: 'fix-05',
    category: 'cat-troubleshoot',
    question: '打开海外网站时浏览器弹出红色警告 `NET::ERR_CERT_AUTHORITY_INVALID`（您的连接不是私密连接）是怎么回事？',
    shortAnswer:
      '这说明你的请求没有走代理隧道，或者本地 DNS 被运营商污染返回了伪造的抢答 IP；开启客户端的 Fake-IP + DoH 加密 DNS 并确认该域名命中 PROXY 规则后刷新即可消除。',
    detailedExplanation:
      '当一个未收录进规则集的冷门海外域名走本地直连 DNS 解析时，GFW 或运营商拦截系统会返回一个错误的假 IP，浏览器在与其进行 HTTPS 握手时发现对方拿不出合法的域名证书，从而阻断连接保护你的安全。千万不要强行点击“继续前往”，而是将该域名加入代理规则或临时切到 Global 全局模式。',
    tags: ['证书报错', 'ERR_CERT_AUTHORITY_INVALID', 'DNS抢答劫持'],
  },
  {
    id: 'fix-06',
    category: 'cat-troubleshoot',
    question: '使用 Telegram (电报) 时一直转圈显示 `Connecting...` 或 `Updating...`，明明浏览器能翻墙？',
    shortAnswer:
      'Telegram 桌面端与移动端默认使用自研的 MTProto 协议直接连接电报数据中心 IP 段（而非域名），默认不读系统 HTTP 代理；需在 Telegram 内置设置中添加 SOCKS5 代理或开启客户端 TUN 模式。',
    detailedExplanation:
      '最快修复方法：① 在 Telegram 设置（Settings → Advanced → Connection type）中选择 `Use custom proxy`，添加 `SOCKS5` 代理，地址填 `127.0.0.1`，端口填 Clash 的混合端口（如 `7897` 或 `7890`）；② 确保你的 Clash 订阅中包含完整的 `Telegram.list` IP-CIDR 规则（涵盖 `91.108.0.0/16`、`149.154.160.0/20` 等电报核心网段）。',
    tags: ['Telegram连不上', 'MTProto', 'SOCKS5设置', '电报IP段'],
    relatedLinks: [{ label: '获取 Telegram 完整 IP-CIDR 规则集', href: '/free-resources/#sec-rules' }],
  },
  {
    id: 'fix-07',
    category: 'cat-troubleshoot',
    question: '手机（iOS/Android）连着 VPN 锁屏待机十几分钟后，再亮屏发现 VPN 自动断开了是怎么回事？',
    shortAnswer:
      '这是手机操作系统的后台省电策略杀死了 VPN 守护进程，或节点心跳超时；在安卓中将客户端设为“电池无限制 + 锁定后台”，在 iOS 小火箭中开启“按需连接（On Demand）”即可24小时保活。',
    detailedExplanation:
      'iOS 用户打开 Shadowrocket → 设置 → 按需连接（On Demand），开启「始终开启」，这样即使系统内存紧张重启了网络扩展，也会在 0.5 秒内自动无感重连。安卓用户（尤其是小米 MIUI/澎湃 OS、华为鸿蒙、OPPO ColorOS）务必在系统设置中进入「应用管理 → Flclash/Clash → 省电策略」，勾选「无限制（No restrictions）」并开启「自启动」。',
    tags: ['手机锁屏断连', '后台保活', '按需连接', '安卓省电策略'],
  },
  {
    id: 'fix-08',
    category: 'cat-troubleshoot',
    question: '开启代理后访问淘宝、京东、12306 或国内银行网站极其缓慢甚至报错验证码异常？',
    shortAnswer:
      '这是因为你误开了 Global（全局模式）或规则集缺失，导致国内网站流量绕道海外再回国；切回 Rule（规则模式）并启用 ` ChinaMax / Direct ` 国内域名直连规则集即可秒开。',
    detailedExplanation:
      '国内电商与票务系统对海外机房 IP 有极强的防爬虫拦截。请立即检查客户端顶部模式是否处于「规则（Rule）」，并在连接面板（Connections）中搜索 `taobao.com` 或 `jd.com`，确认其匹配的规则链末尾显示为 `DIRECT`（直连）。',
    tags: ['国内网站变慢', '淘宝验证报错', 'DIRECT直连分流'],
  },

  // ==================== 八、隐私安全边界与防失联避坑篇 ====================
  {
    id: 'sec-01',
    category: 'cat-security',
    question: '使用机场科学上网时，机场主到底能看到我的哪些信息？我的银行密码和聊天记录安全吗？',
    shortAnswer:
      '只要你访问的是 HTTPS 网站或使用端到端加密软件（Telegram/WhatsApp/网银），机场主只能看到“你连接了哪个目标域名（SNI）”和“传输了多少字节流量”，绝对无法看到你的账号密码、网页具体内容或聊天记录！',
    detailedExplanation:
      '这是由现代密码学 TLS 1.3 协议在数学上保障的：HTTPS 加密发生在你的浏览器与目标网站服务器（如 Google、GitHub、网银）之间，机场服务器只是一条透明的搬运管道。除非你在浏览器弹出红色“证书无效”警告时强行安装来历不明的自签根证书，否则任何中间节点都无法解密 HTTPS 负载内容。',
    tags: ['HTTPS加密边界', '机场能看到什么', 'TLS 1.3安全', 'SNI原理'],
  },
  {
    id: 'sec-02',
    category: 'cat-security',
    question: '注册和购买机场订阅时，有哪些保护个人隐私的铁律？',
    shortAnswer:
      '建议使用海外邮箱（Gmail / Outlook / ProtonMail）或随手填写的虚拟邮箱前缀注册，切勿使用与国内实名手机号强绑定的 QQ 邮箱或企业邮箱，且每个机场设置独立随机密码。',
    detailedExplanation:
      '很多优质的免邮箱验证机场（或仅用于登录凭证的面板）甚至不需要你接收验证码。即便需要验证邮箱，也推荐使用 ProtonMail、Outlook、Gmail 或 Apple 的“隐藏邮件地址（Hide My Email）”，并且永远不要在机场注册时复用你常用的国内支付/社交主密码，从源头杜绝撞库风险。',
    tags: ['注册隐私保护', '禁止QQ邮箱', '独立密码', '防撞库'],
  },
  {
    id: 'sec-03',
    category: 'cat-security',
    question: '为什么绝对不要把自己的机场订阅链接（Subscription URL）发到公开论坛、GitHub 仓库或借给陌生人？',
    shortAnswer:
      '机场订阅链接里包含你账号唯一的 Token 密钥；一旦泄露到公网，爬虫会在几分钟内抓取并分发给成百上千人白嫖，瞬间耗尽你的全部流量并触发机场后台的“恶意共享封号”机制。',
    detailedExplanation:
      '如果你不小心把包含订阅链接的截图或配置文件上传到了公开仓库，不要慌张：立即登录机场官网后台，在用户中心点击「重置订阅链接（Reset Subscription URL / 更换 UUID）」，旧链接会在 1 秒内彻底作废，随后把新链接重新导入自己的客户端即可。',
    tags: ['订阅链接保密', '重置UUID', '防白嫖封号'],
  },
  {
    id: 'sec-04',
    category: 'cat-security',
    question: '为什么在网上用百度/必应搜知名机场名字，排在第一名的往往是山寨钓鱼假网站？',
    shortAnswer:
      '很多不法分子会抢注与老牌机场高度相似的李鬼域名（如多一个字母或换后缀）并投放竞价广告，诱导用户充值后根本不给有效节点；务必通过可信评测导航站（如本站 42 家品牌库）核验唯一官方入口。',
    detailedExplanation:
      '李鬼钓鱼网站的典型特征是：首页做得和正版一模一样，但进去后只有年付套餐、客服永远不回、且节点列表全是无法连接的假地址。建议收藏本站 `clashvpn.homes/brands/` 档案页，并在首次登录正版机场后台后将其官方「防失联发布页」保存至本地书签。',
    tags: ['防钓鱼假站', '李鬼域名', '正版官网入口'],
    relatedLinks: [{ label: '42家机场正版官方入口档案库', href: '/brands/' }],
  },
  {
    id: 'sec-05',
    category: 'cat-security',
    question: '如何构建一套“永远不怕任何机场维护或跑路”的终极双保险网络方案？',
    shortAnswer:
      '黄金公理是「1 家高性价比 IEPL 包年/季付主力 + 1 家不同上游机房的永久不限时按量备用包」，年度总成本不到 ¥190，却能实现 365 天 99.99% 的跨网冗余可用性。',
    detailedExplanation:
      '任何单一机房或海底光缆都存在物理维护周期。将 #1 光速云 的 IEPL 包年套餐（¥99/年，常规套餐可用 8 折券 `AMM`）设为主力日常使用，同时在客户端里导入一份 #1 光速云 不限时永久包（¥147/247GB）或 #7 二猫云永久包（¥99/100GB）、#9 唯兔云永久包（¥100/100GB）作为 Fallback 灾备组，不仅省心省钱，更能彻底告别断联焦虑。',
    tags: ['主备双保险', '防失联架构', 'Fallback自动切换'],
    relatedLinks: [
      { label: '查看跑路预警与双保险配置指南', href: '/runaway-watch/' },
      { label: '#1 光速云 实测与优惠码详情', href: '/brands/guangsuyun/' },
    ],
  },
];
