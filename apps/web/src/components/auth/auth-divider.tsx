type AuthDividerProps = {
  label: string;
};

export function AuthDivider({ label }: AuthDividerProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-[#27272a]" />
      <span className="text-[11px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#bbcabf]">
        {label}
      </span>
      <div className="h-px flex-1 bg-[#27272a]" />
    </div>
  );
}
