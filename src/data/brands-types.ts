export interface BrandPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  cycle: string;
}

export interface SpeedNode {
  region: string;
  latency: string;
  download: string;
}

export interface GeoQA {
  q: string;
  a: string;
}

export interface AirportBrand {
  rank: number;
  slug: string;
  name: string;
  badge?: string;
  tier: "featured-top1" | "top10" | "core28" | "archive14";
  accentColor: string;
  foundedYear: string;
  registerUrl: string | null;
  couponCode: string | null;
  couponNote: string;
  entryPriceLabel: string;
  monthlyPriceNum: number;
  lineType: string;
  lineFilter: "IEPL" | "IPLC" | "BGP/中转" | "待核实";
  protocols: string[];
  clientSupport: "自研+通用订阅" | "仅专属客户端" | "通用订阅" | "待核实";
  deviceLimit: string;
  paymentMethods: string;
  nodeRegions: string[];
  summary: string;
  coreFeatures: string[];
  plans: BrandPlan[];
  speedtest: {
    date: string;
    status: "measured" | "historical" | "unverified";
    note: string;
    image?: string;
    imageTestedAt?: string;
    imageProtocol?: string;
    nodes: SpeedNode[];
  };
  unlock: {
    status: "vendor" | "historical" | "unverified";
    aiSupported: string[];
    aiConditional: string[];
    mediaSupported: string[];
    mediaConditional: string[];
    note: string;
  };
  pros: string[];
  cons: string[];
  suitableFor: string[];
  notSuitableFor: string[];
  riskNotice: string;
  comparisonNote: string;
  seo: {
    primaryKeyword: string;
    secondaryKeywords: string[];
    searchIntent: string;
    decisionStage: string;
    cluster: string;
    geoQuestions: GeoQA[];
  };
  dataSource: string;
  verifiedAt: string;
  updatedAt: string;
}
