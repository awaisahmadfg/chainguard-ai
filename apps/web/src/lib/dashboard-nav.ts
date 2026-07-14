import type { DashboardIconName } from "@/components/dashboard/dashboard-icons";

export type DashboardNavItem = {
  href: string;
  icon: DashboardIconName;
  label: string;
  match?: "exact" | "prefix";
};

export const dashboardNavItems: DashboardNavItem[] = [
  {
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
    match: "exact",
  },
  {
    href: "/dashboard/reviews/new",
    icon: "review",
    label: "New Review",
    match: "prefix",
  },
  {
    href: "/dashboard/reports",
    icon: "reports",
    label: "Reports",
    match: "prefix",
  },
  {
    href: "/dashboard/chat",
    icon: "ai",
    label: "AI Chatbot",
    match: "prefix",
  },
  {
    href: "/dashboard/registry",
    icon: "risk",
    label: "Risk Registry",
    match: "prefix",
  },
  {
    href: "/dashboard/settings",
    icon: "settings",
    label: "Settings",
    match: "prefix",
  },
];

export function isNavItemActive(
  pathname: string,
  item: DashboardNavItem,
): boolean {
  if (item.match === "exact") {
    return pathname === item.href;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
