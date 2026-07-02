import { AuthIcon } from "./auth-icons";

type AuthInputProps = {
  icon: "lock" | "mail" | "refresh" | "user";
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

export function AuthInput({
  icon,
  label,
  name,
  placeholder,
  type = "text",
}: AuthInputProps) {
  return (
    <label className="block space-y-1">
      <span className="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]">
        {label}
      </span>
      <span className="relative block">
        <span
          aria-hidden="true"
          className="absolute left-3 top-1/2 flex size-[18px] -translate-y-1/2 items-center justify-center text-[#bbcabf]"
        >
          <AuthIcon className="size-[18px]" name={icon} />
        </span>
        <input
          className="h-10 w-full rounded border border-[#27272a] bg-[#09090b] py-2 pl-10 pr-3 text-sm leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/50 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </span>
    </label>
  );
}
