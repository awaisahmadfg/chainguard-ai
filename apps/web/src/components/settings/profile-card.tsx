"use client";

import { useState } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

export function ProfileCard() {
  const [fullName, setFullName] = useState("Admin Zero");
  const [email, setEmail] = useState("admin.zero@chainguard.ai");
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
      <div className="mb-5 border-b border-[#353437] pb-4">
        <div className="flex items-center gap-2">
          <DashboardIcon className="size-4 text-emerald-400" name="user" />
          <h2 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-[#e5e1e4]">
            Profile
          </h2>
        </div>
        <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
          Admin Zero, Security Lead
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block space-y-2">
          <span className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
            Full Name
          </span>
          <input
            className="w-full rounded-md border border-[#2a2a2c] bg-[#09090b] px-4 py-3 text-[13px] leading-5 text-[#e5e1e4] outline-none transition-colors placeholder:text-[#bbcabf]/60 focus:border-emerald-500"
            onChange={(event) => setFullName(event.target.value)}
            type="text"
            value={fullName}
          />
        </label>

        <label className="block space-y-2">
          <span className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
            Email
          </span>
          <input
            className="w-full rounded-md border border-[#2a2a2c] bg-[#09090b] px-4 py-3 text-[13px] leading-5 text-[#e5e1e4] outline-none transition-colors placeholder:text-[#bbcabf]/60 focus:border-emerald-500"
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
          />
        </label>

        <button
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-3 text-[13px] font-bold leading-[18px] text-black shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-colors hover:bg-emerald-300"
          type="submit"
        >
          <DashboardIcon className="size-4" name="shield" />
          Save Profile
        </button>

        {saved ? (
          <p className="text-[12px] leading-5 text-emerald-400">
            Profile changes saved locally.
          </p>
        ) : null}
      </form>
    </section>
  );
}
