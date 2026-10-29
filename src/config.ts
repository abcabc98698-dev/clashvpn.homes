/**
 * Site configuration — central source of truth for clashvpn.homes.
 */

export type Day = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

export interface OpeningHours {
  /** Shown on the page, e.g. "周一至周五". */
  label: string;
  days: Day[];
  /** 24h "HH:MM". Leave both out for a closed day. */
  opens?: string;
  closes?: string;
}

export const SITE = {
  name: "ClashVPN.homes 机场评测与订阅实验室",
  /** Short name for the logo on small screens. */
  shortName: "ClashVPN.homes",
  tagline: "2026 专线机场订阅推荐 · 42家节点测速与流媒体/AI解锁实测",
  description:
    "ClashVPN.homes 收录 42 家主流机场品牌实测数据与 Clash 订阅推荐。榜首主推光速云（2020年老牌 IEPL+企业内网双专线、VLESS 协议、年付99元折合8元/月、147元永久流量包，优惠码 AMM），涵盖节点延迟吞吐、ChatGPT/Netflix 解锁矩阵与全平台客户端教程。",
  /** Production canonical URL. Used for canonical links, Open Graph, the sitemap and the form redirect. */
  url: "https://clashvpn.homes",
  lang: "zh-CN",
  locale: "zh_CN",
  /** schema.org type for the JSON-LD block. */
  schemaType: "Organization",
  priceRange: "¥5.6 - ¥680",

  phone: { display: "400-0199-888", tel: "+864000199888" },
  emergencyPhone: { display: "400-0199-999", tel: "+864000199999" },
  email: "lab@clashvpn.homes",

  address: {
    street: "Network Observatory Lab · 亚太骨干测速节点",
    city: "香港 / 东京 / 新加坡",
    region: "APAC",
    postalCode: "999077",
    country: "HK",
  },

  /** Core node regions covered. The first eight are plotted on the vector topology map. */
  serviceAreas: [
    "香港 IEPL ×20",
    "日本东京 ×10",
    "新加坡 ×10",
    "中国台湾 ×5",
    "美国西岸 ×10",
    "马来西亚 ×2",
    "英国伦敦",
    "德国法兰克福",
    "法国巴黎",
    "土耳其 / 泰国 / 巴西",
  ],

  hours: [
    { label: "节点监控巡检", days: ["Mo", "Tu", "We", "Th", "Fr"], opens: "00:00", closes: "23:59" },
    { label: "晚高峰压力复测", days: ["Sa"], opens: "20:00", closes: "23:30" },
    { label: "品牌库数据归档", days: ["Su"], opens: "10:00", closes: "22:00" },
  ] as OpeningHours[],
  /** One line under the hours. Set to "" to hide. */
  hoursNote: "光速云等主力 IEPL 专线提供 7×24 小时在线客服与运维值守。",

  /** Official social profile URLs included in footer and schema.org sameAs. */
  social: [] as { label: string; href: string; icon: "facebook" | "instagram" | "youtube" }[],

  /** Operational metrics displayed in the Stats strip. */
  trust: {
    license: "OBS-LAB-2026",
    years: 42,
    jobs: 42000,
    rating: 4.9,
    reviewCount: 42,
    responseMinutes: 22,
    /** Entry price highlight shown in the hero and FAQ. */
    callOut: "¥99/年 (¥8.25/月)",
    /** Optional supplemental note under the trust strip. */
    note: "",
  },

  /**
   * Primary brand accent for highlighted words, buttons and solid service cards.
   * `accentText` is the text color on accent fills (minimum 4.5:1 contrast ratio).
   */
  theme: { accent: "#ff7a29", accentText: "#0b0e1c" },

  /**
   * Search engine webmaster verification tokens.
   * Leave empty ("") until verified; non-empty values render directly as <meta> tags in static HTML <head>.
   */
  verification: {
    google: "", // Google Search Console: google-site-verification
    bing: "", // Bing Webmaster Tools: msvalidate.01
    shenma: "", // 神马站长平台 (UC/夸克): shenma-site-verification
    baidu: "", // 百度搜索资源平台: baidu-site-verification
  },

  /**
   * Quote / consultation form POST endpoint configuration.
   */
  formgong: {
    accessKey: "pk_live_clashvpn_homes_form",
    endpoint: "https://clashvpn.homes/submit",
    subject: "New subscription consultation from clashvpn.homes",
  },

  nav: [
    { label: "订阅总榜", href: "/" },
    { label: "42家品牌库", href: "/brands/" },
    { label: "场景专题", href: "/services/" },
    { label: "客户端大全", href: "/clients/" },
    { label: "免费资源", href: "/free-resources/" },
    { label: "机场FAQ", href: "/faq-wiki/" },
    { label: "跑路预警", href: "/runaway-watch/" },
  ],
} as const;

export type SiteConfig = typeof SITE;
