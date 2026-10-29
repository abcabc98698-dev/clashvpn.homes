export interface RuleResource {
  name: string;
  author: string;
  category: "分流规则集" | "GeoIP/GeoSite数据库" | "平台专项分流" | "去广告与隐私";
  supportedClients: string[];
  updateFrequency: string;
  repoUrl: string;
  copyUrl: string;
  description: string;
  bestFor: string;
}

export interface DiagnosticTool {
  name: string;
  category: "IP纯净度与风控" | "DNS与WebRTC泄漏" | "带宽与路由追踪" | "AI与流媒体可用性";
  url: string;
  keyMetric: string;
  summary: string;
  passCriteria: string;
}

export interface DnsEndpoint {
  provider: string;
  zone: "国内直连 (Direct)" | "海外代理 (Proxy)";
  dohUrl: string;
  dotHost: string;
  ipv4: string;
  features: string;
}

export const RULE_RESOURCES: RuleResource[] = [
  {
    name: "Loyalsoldier / clash-rules",
    author: "Loyalsoldier",
    category: "分流规则集",
    supportedClients: ["Clash Verge Rev", "Mihomo Party", "FlClash", "OpenClash", "Stash"],
    updateFrequency: "每日北京时间 06:30 自动构建",
    repoUrl: "https://github.com/Loyalsoldier/clash-rules",
    copyUrl: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    description:
      "中文 Clash 社区使用最广泛的经典 Rule-Provider 规则集。将域名与 IP 拆分为 direct（国内直连）、proxy（代理列表）、reject（广告拦截）、private（局域网）、apple、google、telegramcidr 等独立模块，配合 Mihomo 内核按需懒加载。",
    bestFor: "希望国内网站 100% 精准直连、被墙域名自动走代理的桌面与软路由用户",
  },
  {
    name: "ACL4SSR 在线订阅分流规则模板",
    author: "ACL4SSR 团队",
    category: "分流规则集",
    supportedClients: ["Clash 全系", "Shadowrocket (小火箭)", "Quantumult X", "Surge"],
    updateFrequency: "每日同步上游 GFWList 与流媒体域名库",
    repoUrl: "https://github.com/ACL4SSR/ACL4SSR",
    copyUrl:
      "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini",
    description:
      "经典的「全分组」分流配置模板，自带 OpenAI、Claude、Netflix、Disney+、YouTube、Bahamut、Telegram、Microsoft、Apple 等独立策略组，导入后无需手动编写规则即可按平台选节点。",
    bestFor: "使用 Sub-Store 或本地 Subconverter 进行多机场节点聚合与策略组自动生成的用户",
  },
  {
    name: "MetaCubeX / meta-rules-dat (GeoSite & GeoIP)",
    author: "MetaCubeX (Mihomo 官方团队)",
    category: "GeoIP/GeoSite数据库",
    supportedClients: ["Clash Verge Rev", "Mihomo Party", "OpenClash", "Nikki", "Sing-box"],
    updateFrequency: "每日自动编译发布",
    repoUrl: "https://github.com/MetaCubeX/meta-rules-dat",
    copyUrl:
      "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@release/geosite.dat",
    description:
      "Mihomo (Clash Meta) 与 Sing-box 核心官方维护的加强版 GeoIP 与 GeoSite 数据库，整合了 V2Fly domain-list-community 与 MaxMind ASN 数据，支持 GEOSITE,openai、GEOSITE,anthropic、GEOSITE,netflix 等极简语法。",
    bestFor: "使用现代 Mihomo 内核客户端，希望减少外部规则文件数量、提升启动速度的进阶玩家",
  },
  {
    name: "blackmatrix7 / ios_rule_script (全平台分流大全)",
    author: "blackmatrix7",
    category: "平台专项分流",
    supportedClients: ["Shadowrocket", "Quantumult X", "Stash", "Surge", "Loon", "Clash"],
    updateFrequency: "每周多次自动聚合验证",
    repoUrl: "https://github.com/blackmatrix7/ios_rule_script",
    copyUrl:
      "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml",
    description:
      "细分程度全网第一的分流仓库，收录超过 600+ 个独立应用与服务分流规则（包括 OpenAI、Claude、Gemini、Copilot、TikTok、Netflix、Disney+、Spotify、Steam、Epic、PayPal 等），同时输出 Clash YAML、圈X list 与 Surge 格式。",
    bestFor: "需要将 ChatGPT/Claude 单独固定到美国原生节点、将 Netflix 固定到新加坡节点的精细分流用户",
  },
  {
    name: "DustinWin / ruleset_geodata (轻量高效规则集)",
    author: "DustinWin",
    category: "GeoIP/GeoSite数据库",
    supportedClients: ["Mihomo (Clash Meta)", "OpenClash", "Nikki", "FlClash"],
    updateFrequency: "每日自动构建",
    repoUrl: "https://github.com/DustinWin/ruleset_geodata",
    copyUrl:
      "https://testingcf.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-ruleset/cn.mrs",
    description:
      "专为 Mihomo 最新二进制规则格式（.mrs）打造的超轻量规则库。相比传统 YAML/Text 规则集，.mrs 二进制格式内存占用降低 70% 以上，加载耗时仅数毫秒，极度适合软路由与移动端。",
    bestFor: "运行 OpenClash / Nikki 的硬路由、旁路由及追求极致低内存占用的用户",
  },
  {
    name: "anti-AD (中文区精准去广告与隐私防追踪规则)",
    author: "privacy-protection-tools",
    category: "去广告与隐私",
    supportedClients: ["Clash", "Shadowrocket", "Quantumult X", "AdGuard Home", "MosDNS"],
    updateFrequency: "每 3 天更新验证",
    repoUrl: "https://github.com/privacy-protection-tools/anti-AD",
    copyUrl: "https://anti-ad.net/clash.yaml",
    description:
      "专注于中文互联网环境的域名级广告拦截与隐私追踪防御列表，可有效屏蔽开屏广告、恶意采集 SDK 与电视盒子摇一摇弹窗，且对国内电商与视频网站误杀率极低。",
    bestFor: "iOS 小火箭/圈X 用户及家庭软路由 AdGuard Home / OpenClash 联动去广告场景",
  },
];

export const DIAGNOSTIC_TOOLS: DiagnosticTool[] = [
  {
    name: "Ping0.cc IP 纯净度与原生/广播属性检测",
    category: "IP纯净度与风控",
    url: "https://ping0.cc",
    keyMetric: "风控值 (Risk Score) / 原生 IP vs 广播 IP / 家庭宽带 vs 机房 IDC",
    summary:
      "中文区最直观的落地 IP 体检工具。打开后即可查看当前代理出口 IP 的 ASN 归属、是否为当地原生 IP（Native IP）、共有多少人共用该网段，以及综合风控评分。",
    passCriteria:
      "访问 ChatGPT/Claude 建议选择风控值低于 50%（绿/浅黄）的节点；流媒体解锁优先看是否为目标地区原生 IP。",
  },
  {
    name: "Scamalytics IP 欺诈风险数据库",
    category: "IP纯净度与风控",
    url: "https://scamalytics.com/ip",
    keyMetric: "Fraud Score (0–100 欺诈分)",
    summary:
      "Cloudflare、OpenAI、Stripe 与各大海外银行风控系统广泛参考的上游反欺诈数据库。若某机场节点在此显示 Fraud Score > 75，极易频繁触发 Cloudflare 真人验证盾。",
    passCriteria: "Fraud Score 0–25 为极度纯净（Low Risk），25–60 为正常可用。",
  },
  {
    name: "IPInfo.io 权威 ASN 与双ISP属性查询",
    category: "IP纯净度与风控",
    url: "https://ipinfo.io/what-is-my-ip",
    keyMetric: "asn.type / company.type (isp vs hosting) / privacy.vpn",
    summary:
      "全球最权威的 IP 归属与自治域（ASN）查询平台，可准确识别当前节点属于商业数据中心（hosting）还是本地住宅运营商（isp）。",
    passCriteria: "TikTok 运营或高风控账号注册建议优选 company.type 标注为 isp 或低风险机房的专线节点。",
  },
  {
    name: "BrowserLeaks WebRTC 真实公网 IP 泄漏检测",
    category: "DNS与WebRTC泄漏",
    url: "https://browserleaks.com/webrtc",
    keyMetric: "Public IP Address Leak & mDNS 状态",
    summary:
      "即使开启了系统代理，Chrome/Edge 浏览器的 WebRTC 音视频通信接口仍可能绕过 HTTP 代理直接暴露您的国内真实宽带 IP，导致海外平台判定“跨区异常”。",
    passCriteria: "开启客户端 TUN 虚拟网卡模式，或安装 WebRTC Control 插件，确保 Public IP 仅显示代理节点 IP。",
  },
  {
    name: "DNSLeakTest 全球递归 DNS 泄漏测试",
    category: "DNS与WebRTC泄漏",
    url: "https://www.dnsleaktest.com",
    keyMetric: "Extended Test 递归解析服务器归属地",
    summary:
      "检测您访问海外网站时的域名解析请求是否走漏到了国内运营商 DNS。若发生 DNS 泄漏，不仅容易遭遇域名污染，还会导致流媒体 DNS 解锁失效。",
    passCriteria: "运行 Extended Test 后，列表内不应出现中国大陆本地电信/联通/移动递归 DNS 服务器。",
  },
  {
    name: "Cloudflare SpeedTest 全维度网络质量监测",
    category: "带宽与路由追踪",
    url: "https://speed.cloudflare.com",
    keyMetric: "Download / Upload / Latency / Jitter (抖动) / Packet Loss (丢包率)",
    summary:
      "比传统 Speedtest.net 更贴近真实网页与 AI 接口体验的测试台。不仅测试大文件峰值吞吐，还测试 100kB/1MB/10MB 小包并发响应、网络抖动（Jitter）与丢包率。",
    passCriteria: "优质 IEPL 专线（如 #1 光速云）抖动 Jitter 应小于 15ms，Packet Loss 丢包率应为 0%。",
  },
  {
    name: "Fast.com (Netflix 官方 CDN 测速服务器)",
    category: "带宽与路由追踪",
    url: "https://fast.com",
    keyMetric: "Netflix Open Connect CDN 实际流媒体下行速率",
    summary:
      "由 Netflix 官方提供的测速网站，测速流量直接取自 Netflix 全球音视频分发服务器，能 100% 反映该节点晚高峰看 4K 流媒体的真实网速。",
    passCriteria: "稳定达到 35 Mbps 以上即可流畅播放 Netflix 4K HDR 杜比视界原盘画质。",
  },
  {
    name: "BGP.he.net (Hurricane Electric 全球自治域路由库)",
    category: "带宽与路由追踪",
    url: "https://bgp.he.net",
    keyMetric: "Peers / Upstream Peering (上游互联拓扑)",
    summary:
      "输入节点 IP 即可透视该机房接入了哪些国际一级运营商（如 PCCW、NTT、Cogent、Telia、Lumen、CN2），快速辨别真伪精品网。",
    passCriteria: "亚太优质落地机房通常具备多线 Tier-1 BGP 混合互联，避免单一绕美路由。",
  },
];

export const DOH_SERVERS: DnsEndpoint[] = [
  {
    provider: "阿里公共 DNS (AliDNS)",
    zone: "国内直连 (Direct)",
    dohUrl: "https://dns.alidns.com/dns-query",
    dotHost: "dns.alidns.com",
    ipv4: "223.5.5.5 / 223.6.6.6",
    features: "国内节点分布最广、响应最快（5–15ms），适合作为 Mihomo default-nameserver 与 direct-nameserver。",
  },
  {
    provider: "腾讯 DNSPod Public DNS",
    zone: "国内直连 (Direct)",
    dohUrl: "https://doh.pub/dns-query",
    dotHost: "dot.pub",
    ipv4: "119.29.29.29",
    features: "完美支持 EDNS Client Subnet (ECS)，精准调度微信、淘宝、B站等国内 CDN 节点至最近省份机房。",
  },
  {
    provider: "Cloudflare 1.1.1.1",
    zone: "海外代理 (Proxy)",
    dohUrl: "https://1.1.1.1/dns-query",
    dotHost: "one.one.one.one",
    ipv4: "1.1.1.1 / 1.0.0.1",
    features: "全球任播响应速度第一，严格承诺不记录查询隐私，适合在 proxy-server-nameserver 或海外分流中使用。",
  },
  {
    provider: "Google Public DNS",
    zone: "海外代理 (Proxy)",
    dohUrl: "https://dns.google/dns-query",
    dotHost: "dns.google",
    ipv4: "8.8.8.8 / 8.8.4.4",
    features: "对 Google 全家桶、YouTube CDN、OpenAI 与海外 SaaS 服务的权威记录同步最快。",
  },
  {
    provider: "Quad9 Security DNS",
    zone: "海外代理 (Proxy)",
    dohUrl: "https://dns.quad9.net/dns-query",
    dotHost: "dns.quad9.net",
    ipv4: "9.9.9.9",
    features: "总部位于瑞士的非营利安全 DNS，内置恶意钓鱼、木马控制端与勒索软件域名实时阻断。",
  },
];

export const MIHOMO_DNS_TEMPLATE = `# Mihomo (Clash Meta) 黄金防泄漏 DNS 覆写模板 (Fake-IP 模式)
dns:
  enable: true
  ipv6: false
  listen: 0.0.0.0:1053
  enhanced-mode: fake-ip
  fake-ip-range: 198.18.0.1/16
  fake-ip-filter:
    - "*.lan"
    - "*.local"
    - "+.msftconnecttest.com"
    - "+.msftncsi.com"
    - "time.*.com"
    - "ntp.*.com"
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
  nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  proxy-server-nameserver:
    - https://dns.alidns.com/dns-query
    - https://doh.pub/dns-query
  nameserver-policy:
    "geosite:cn,private":
      - https://dns.alidns.com/dns-query
      - https://doh.pub/dns-query`;

export const FREE_VS_PAID_ROWS = [
  {
    dimension: "跨境链路物理架构",
    freePublic: "公网普通直连（多为免费 Cloudflare Workers 或被扫出的肉鸡节点）",
    trialOrPack: "BGP 中转或 IEPL 专线按量计费（如光速云 ¥147/247GB 永久包）",
    ieplMain: "广港/沪日/沪美双 IEPL 物理内网专线（如 #1 光速云年付 ¥99，折合 ¥8.25/月）",
  },
  {
    dimension: "晚高峰 (20:00–23:30) 表现",
    freePublic: "丢包率 > 40%，延迟 400ms+，YouTube 卡 360P，频繁断流",
    trialOrPack: "与正式套餐同享高速通道，晚高峰稳定流畅",
    ieplMain: "2026-08-11 实测香港峰值 685.56Mbps，延迟稳在 22–38ms",
  },
  {
    dimension: "ChatGPT / Claude / Gemini 解锁",
    freePublic: "99% 提示 Access Denied 或无限循环 Cloudflare 验证码，极易封号",
    trialOrPack: "支持美/日/新/台解锁节点访问",
    ieplMain: "专线纯净落地 IP 优化，GPT-4o / Claude 3.5 / Cursor 秒级响应",
  },
  {
    dimension: "Netflix / Disney+ 4K 解锁",
    freePublic: "仅能看自制剧或完全无法播放",
    trialOrPack: "支持多区域原生/DNS 解锁",
    ieplMain: "港区/台区/新区/日区/美区 4K HDR 杜比视界全解锁",
  },
  {
    dimension: "数据安全与隐私风险",
    freePublic: "高危：不明来源的公共节点可能记录明文 HTTP、注入广告或嗅探 Cookie",
    trialOrPack: "正规商业机场 TLS/Trojan/VLESS 加密传输",
    ieplMain: "企业级内网物理隔离 + 现代强加密协议，零中间人劫持",
  },
  {
    dimension: "维护时间成本",
    freePublic: "极高：节点存活期往往只有几小时，每天需要花半小时到处找新节点",
    trialOrPack: "一次导入，长期有效不过期，随时作为第二备用",
    ieplMain: "自研免配置客户端 + 通用订阅自动更新，全年省心零折腾",
  },
];

export const FREE_RESOURCES_FAQ = [
  {
    q: "网上公开分享的“每日免费 Clash 订阅链接”和 Telegram 免费抓取节点能长期用吗？",
    a: "只适合临时应急几分钟下载客户端，绝不建议长期使用或登录重要账号。原因有三点：1）公开抓取的节点在同一时刻有成千上万人共用，出口 IP 欺诈分（Fraud Score）几乎都是 100 分满分，一旦用它登录 ChatGPT、Claude、PayPal 或 Apple ID，极易触发异地高危风控导致封号；2）部分恶意蜜罐节点会劫持未加密流量或替换剪贴板加密货币地址；3）现在一流的 IEPL 专线机场（如 #1 光速云使用 AMM 优惠码后年付仅 ¥99，合每月 ¥8.25，不到一杯奶茶钱）即可获得 685Mbps 峰值专线，完全没必要冒隐私风险折腾免费节点。",
  },
  {
    q: "为什么强烈不建议把购买的付费机场订阅链接粘贴到网上的“公共在线订阅转换网站”？",
    a: "当您把包含个人 Token 的机场订阅链接粘贴到不知名的第三方在线 Subconverter 网页并点击生成时，该网站的后端服务器会直接请求并缓存您的原始订阅链接。不良站长可以在后台批量收集用户的付费订阅并倒卖或共享，导致您的机场流量在不知不觉中被跑光，甚至因为设备数超限被机场封号。安全做法是：使用支持原生 Clash Meta 配置的客户端（如 Clash Verge Rev、Mihomo Party、Stash），或使用客户端内置的本地 Sub-Store / 覆写脚本功能。",
  },
  {
    q: "Loyalsoldier 规则集、ACL4SSR 和 MetaCubeX GeoSite 数据库应该选哪一个？",
    a: "如果您直接导入机场自带的 Clash 订阅链接，其实大多数成熟机场（如光速云、肥猫云、微风、星岛梦）已经在云端为您写好了包含流媒体与 AI 的分流规则，开箱即用无需修改。如果您想自己写覆写（Override）脚本：桌面端 Mihomo 用户首选 MetaCubeX 官方的 geosite.dat + Loyalsoldier 规则集；多机场节点合并用户首选内置在 Mihomo Party 中的 Sub-Store 配合 ACL4SSR 或 blackmatrix7 专项规则。",
  },
  {
    q: "Ping0.cc 检测节点显示“广播 IP”或“机房 IP”会影响使用吗？",
    a: "分场景来看：对于日常刷 Google、看 YouTube 4K、下载 GitHub 代码，机房 IP（IDC）和广播 IP 完全不影响速度，反而因为机房带宽大（1Gbps–10Gbps）速度比家庭宽带快得多；但对于 TikTok 短视频直播运营、Claude 账号注册或美区运通卡申请，则需要选择欺诈值低（Fraud Score < 25）的原生 IP（Native IP）。",
  },
  {
    q: "没有美国信用卡，怎么免费注册一个安全的美区 Apple ID 下载小火箭（Shadowrocket）？",
    a: "只需准备一个从未注册过 Apple ID 的干净邮箱（如 Outlook/Gmail）和国内手机号即可免费注册：1）在浏览器打开 appleid.apple.com 注册新账号，国家/地区选择「美国（United States）」；2）注册成功后，打开 iPhone 上的 App Store（注意：只在 App Store 商店内退出原账号登录新美区账号，千万不要在手机系统设置 iCloud 里切换！）；3）首次下载任意免费 App（如 sing-box）时会弹出补全账单地址提示，付款方式选择「None（无）」，填写免税州地址（如 Oregon 俄勒冈州或 Delaware 特拉华州）即可激活。若需购买 $2.99 的 Shadowrocket，可在苹果美国官网购买正规 $5/$10 Apple Gift Card 礼品卡充值。",
  },
  {
    q: "如何用最低的成本搭建一套“永不失联”的免费工具 + 付费专线组合？",
    a: "最佳实践是：1）客户端全部使用免费开源的顶级工具（电脑用 Clash Verge Rev / Mihomo Party，安卓用 CMFA / FlClash）；2）主力或备用至少备一份按量不限时的永久流量包（例如 #1 光速云使用 8 折码 AMM 后 ¥147 买断 247GB 永久流量，或 #7 威图云 ¥90 买断 200GB 不限时流量）；3）在浏览器收藏本页提供的 Ping0.cc、Cloudflare SpeedTest 与客户端 GitHub Releases 官方发布页，遇到任何网络异常 1 分钟即可定位原因。",
  },
];
