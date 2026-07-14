import type { ReactNode } from "react";

type PipelineCheckboxProps = {
  checked: boolean;
  children: ReactNode;
  onChange: (checked: boolean) => void;
  showDivider?: boolean;
};

export function PipelineCheckbox({
  checked,
  children,
  onChange,
  showDivider = false,
}: PipelineCheckboxProps) {
  return (
    <label
      className={`group flex cursor-pointer items-center gap-3 ${
        showDivider ? "mt-4 border-t border-[#353437] pt-4" : ""
      }`}
    >
      <input
        checked={checked}
        className="review-checkbox"
        onChange={(event) => onChange(event.target.checked)}
        type="checkbox"
      />
      <span className="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4] transition-colors group-hover:text-emerald-400">
        {children}
      </span>
    </label>
  );
}
