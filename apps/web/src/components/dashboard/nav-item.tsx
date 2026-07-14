import Link from "next/link";
import { DashboardIcon, type DashboardIconName } from "./dashboard-icons";

type NavItemProps = {
  active?: boolean;
  href: string;
  icon: DashboardIconName;
  label: string;
  onNavigate?: () => void;
};

export function NavItem({
  active = false,
  href,
  icon,
  label,
  onNavigate,
}: NavItemProps) {
  return (
    <Link
      className={`flex items-center gap-3 rounded px-4 py-3 text-[13px] font-medium leading-[18px] tracking-[0.01em] transition-colors active:scale-95 ${
        active
          ? "border-r-2 border-emerald-400 bg-[#353437] font-bold text-emerald-400"
          : "text-[#bbcabf] hover:bg-[#2a2a2c] hover:text-[#e5e1e4]"
      }`}
      href={href}
      onClick={onNavigate}
    >
      <DashboardIcon className="size-5" name={icon} />
      {label}
    </Link>
  );
}
