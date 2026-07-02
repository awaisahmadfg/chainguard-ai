import { AuthIcon } from "./auth-icons";

export function AuthLogo() {
  return (
    <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-[#3c4a42] bg-[#2a2a2c] text-emerald-400">
      <AuthIcon className="size-6" name="shield" />
    </div>
  );
}
