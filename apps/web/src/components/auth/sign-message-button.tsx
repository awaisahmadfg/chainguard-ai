"use client";

import { useRouter } from "next/navigation";
import { AuthButton } from "@/components/auth/auth-button";
import { AuthIcon } from "@/components/auth/auth-icons";
import { establishClientSession } from "@/lib/auth-session";

export function SignMessageButton() {
  const router = useRouter();

  async function handleSign() {
    establishClientSession();
    router.push("/authenticated");
  }

  return (
    <AuthButton
      className="font-bold active:scale-[0.98]"
      onClick={handleSign}
      type="button"
    >
      <AuthIcon className="size-[18px]" name="signature" />
      Sign Message
    </AuthButton>
  );
}
