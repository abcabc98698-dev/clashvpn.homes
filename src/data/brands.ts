import type { AirportBrand, BrandPlan, SpeedNode, GeoQA } from "./brands-types";
import { BRANDS_PART1 } from "./brands-part1";
import { BRANDS_PART2 } from "./brands-part2";
import { BRANDS_PART3 } from "./brands-part3";

export type { AirportBrand, BrandPlan, SpeedNode, GeoQA };

export const ALL_BRANDS: AirportBrand[] = [
  ...BRANDS_PART1,
  ...BRANDS_PART2,
  ...BRANDS_PART3,
].sort((a, b) => a.rank - b.rank);

export const FEATURED_BRAND: AirportBrand = ALL_BRANDS[0]!;
export const TOP10_BRANDS: AirportBrand[] = ALL_BRANDS.slice(0, 10);
export const CORE28_BRANDS: AirportBrand[] = ALL_BRANDS.slice(0, 28);
export const ARCHIVE14_BRANDS: AirportBrand[] = ALL_BRANDS.slice(28);

export const AFFILIATE_DISCLOSURE =
  "含推广链接，通过链接注册可能为本站带来佣金，不影响用户支付价格";

export const DATA_DISCLAIMER =
  "本站为网络可观测性评测档案库，套餐价格、节点速率与流媒体/AI解锁状态随上游机房及区域风控策略动态变化，实测截图仅反映测试时点（2026-08-11）单次样本表现，下单前请以服务商官网最新面板公告为准。";

export function getBrandBySlug(slug: string): AirportBrand | undefined {
  return ALL_BRANDS.find((b) => b.slug === slug);
}

export function getRelatedBrands(brand: AirportBrand, count = 4): AirportBrand[] {
  const candidates = ALL_BRANDS.filter((b) => b.slug !== brand.slug && b.slug !== "guangsuyun");
  const sameLine = candidates.filter((b) => b.lineFilter === brand.lineFilter);
  const others = candidates.filter((b) => b.lineFilter !== brand.lineFilter);
  return [...sameLine, ...others].slice(0, count);
}

export function getSpeedtestStatusMeta(status: AirportBrand["speedtest"]["status"]) {
  switch (status) {
    case "measured":
      return {
        label: "Measured Data · 2026-08-11 实测归档",
        shortLabel: "实测数据",
        color: "#10B981",
        bg: "rgba(16, 185, 129, 0.14)",
        border: "rgba(16, 185, 129, 0.35)",
      };
    case "historical":
      return {
        label: "Historical Archive · 历史实测归档",
        shortLabel: "历史实测",
        color: "#06B6D4",
        bg: "rgba(6, 182, 212, 0.14)",
        border: "rgba(6, 182, 212, 0.35)",
      };
    case "unverified":
    default:
      return {
        label: "Pending Verification · 待核实",
        shortLabel: "待核实",
        color: "#94A3B8",
        bg: "rgba(148, 163, 184, 0.14)",
        border: "rgba(148, 163, 184, 0.35)",
      };
  }
}

export function getUnlockStatusMeta(status: AirportBrand["unlock"]["status"]) {
  switch (status) {
    case "vendor":
      return {
        label: "Vendor Data · 品牌资料显示",
        shortLabel: "品牌资料显示",
        color: "#F59E0B",
        bg: "rgba(245, 158, 11, 0.14)",
        border: "rgba(245, 158, 11, 0.35)",
      };
    case "historical":
      return {
        label: "Historical Data · 历史资料归档",
        shortLabel: "历史资料",
        color: "#06B6D4",
        bg: "rgba(6, 182, 212, 0.14)",
        border: "rgba(6, 182, 212, 0.35)",
      };
    case "unverified":
    default:
      return {
        label: "Pending Verification · 待核实",
        shortLabel: "待核实",
        color: "#94A3B8",
        bg: "rgba(148, 163, 184, 0.14)",
        border: "rgba(148, 163, 184, 0.35)",
      };
  }
}
