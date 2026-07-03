import { AuthIcon } from "./auth-icons";

type AuthInputProps = {
  autoComplete?: string;
  error?: string;
  icon: "lock" | "mail" | "refresh" | "user";
  id?: string;
  label: string;
  labelClassName?: string;
  name: string;
  onChange?: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  value?: string;
};

export function AuthInput({
  autoComplete,
  error,
  icon,
  id,
  label,
  labelClassName = "text-[13px] font-medium leading-[18px] tracking-[0.01em] text-[#e5e1e4]",
  name,
  onChange,
  placeholder,
  required = false,
  type = "text",
  value,
}: AuthInputProps) {
  const inputId = id ?? name;

  return (
    <div className="block space-y-1">
      <label
        className={`block ${labelClassName}`}
        htmlFor={inputId}
      >
        {label}
      </label>
      <span className="relative block">
        <span
          aria-hidden="true"
          className="absolute left-3 top-1/2 flex size-[18px] -translate-y-1/2 items-center justify-center text-[#bbcabf]"
        >
          <AuthIcon className="size-[18px]" name={icon} />
        </span>
        <input
          aria-invalid={Boolean(error)}
          autoComplete={autoComplete}
          className={`h-10 w-full rounded border bg-[#09090b] py-2 pl-10 pr-3 text-sm leading-5 text-[#e5e1e4] outline-none transition-all placeholder:text-[#bbcabf]/50 focus:ring-1 ${
            error
              ? "border-red-400 focus:border-red-400 focus:ring-red-400"
              : "border-[#27272a] focus:border-emerald-400 focus:ring-emerald-400"
          }`}
          id={inputId}
          name={name}
          onChange={(event) => onChange?.(event.target.value)}
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
      </span>
      {error ? <p className="text-xs leading-5 text-red-300">{error}</p> : null}
    </div>
  );
}
