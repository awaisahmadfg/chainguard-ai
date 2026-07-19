"use client";

import { useState } from "react";
import { AuthButton } from "./auth-button";
import { AuthIcon } from "./auth-icons";

export function DemoGoogleButton() {
  const [note, setNote] = useState("");

  return (
    <div className="space-y-2">
      <AuthButton
        onClick={() =>
          setNote(
            "Google OAuth is not wired in this prototype. Use email or wallet instead.",
          )
        }
        type="button"
        variant="secondary"
      >
        <AuthIcon className="size-5" name="google" />
        Continue with Google
      </AuthButton>
      {note ? (
        <p className="text-center text-[12px] leading-5 text-amber-400/90">
          {note}
        </p>
      ) : null}
    </div>
  );
}
