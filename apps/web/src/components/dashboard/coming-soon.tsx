import Link from "next/link";
import { DashboardIcon, type DashboardIconName } from "./dashboard-icons";

type ComingSoonProps = {
  description: string;
  icon: DashboardIconName;
  title: string;
};

export function ComingSoon({ description, icon, title }: ComingSoonProps) {
  return (
    <section className="flex min-h-[420px] flex-col items-center justify-center rounded-lg border border-[#27272a] bg-[#0c0c0e] px-6 py-16 text-center">
      <div className="mb-6 flex size-16 items-center justify-center rounded-full border border-[#3c4a42] bg-[#18181b] text-emerald-400">
        <DashboardIcon className="size-8" name={icon} />
      </div>
      <h2 className="text-3xl font-semibold leading-9 tracking-[-0.01em] text-[#e5e1e4]">
        {title}
      </h2>
      <p className="mt-3 max-w-lg text-base leading-6 text-[#bbcabf]">
        {description}
      </p>
      <p className="mt-6 rounded border border-[#3f3f46] bg-[#18181b] px-4 py-2 font-mono text-[13px] leading-5 text-emerald-400">
        Coming soon
      </p>
      <Link
        className="mt-8 text-[13px] font-medium leading-[18px] text-emerald-400 transition-colors hover:text-emerald-300"
        href="/dashboard"
      >
        Back to Dashboard
      </Link>
    </section>
  );
}
