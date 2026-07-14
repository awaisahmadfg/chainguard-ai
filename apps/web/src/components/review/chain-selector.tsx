import { reviewChains } from "@/lib/review-chains";
import type { ReviewChainId } from "@/lib/review-chains";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

type ChainSelectorProps = {
  onChange: (chain: ReviewChainId) => void;
  value: ReviewChainId;
};

export function ChainSelector({ onChange, value }: ChainSelectorProps) {
  return (
    <div className="space-y-3 border-t border-[#353437] pt-4">
      <label className="block text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]">
        Target Network context
      </label>
      <div className="flex flex-wrap gap-3">
        {reviewChains.map((chain) => (
          <label className="cursor-pointer" key={chain.id}>
            <input
              checked={value === chain.id}
              className="peer sr-only"
              name="chain"
              onChange={() => onChange(chain.id)}
              type="radio"
            />
            <div className="flex items-center gap-2 rounded-md border border-[#2a2a2c] bg-[#09090b] px-4 py-2 text-[#bbcabf] transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-500/5 peer-checked:text-emerald-400">
              <DashboardIcon className="size-4" name={chain.icon} />
              <span className="text-[13px] font-medium leading-[18px] tracking-[0.01em]">
                {chain.label}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
