"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthButton } from "@/components/auth/auth-button";
import { AuthIcon } from "@/components/auth/auth-icons";
import { establishClientSession } from "@/lib/auth-session";

export function SignMessageButton() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSign() {
    setIsLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    establishClientSession();
    router.push("/dashboard");
  }

  return (
    <AuthButton
      className="font-bold active:scale-[0.98]"
      isLoading={isLoading}
      loadingLabel="Signing message…"
      onClick={handleSign}
      type="button"
    >
      <AuthIcon className="size-[18px]" name="signature" />
      Sign Message
    </AuthButton>
  );
}
