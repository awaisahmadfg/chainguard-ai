"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { establishClientSession } from "@/lib/auth-session";

type EnterDemoButtonProps = {
  className?: string;
  label?: string;
};

export function EnterDemoButton({
  className = "",
  label = "Enter live demo",
}: EnterDemoButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleEnter() {
    setLoading(true);
    establishClientSession();
    await new Promise((resolve) => window.setTimeout(resolve, 250));
    router.push("/dashboard");
  }

  return (
    <button
      className={className}
      disabled={loading}
      onClick={handleEnter}
      type="button"
    >
      {loading ? "Opening demo…" : label}
    </button>
  );
}
