"use client";

import Link from "next/link";
import { ApiCredentials } from "./api-credentials";
import { AuthMethodsCard } from "./auth-methods-card";
import { IdentityClusters } from "./identity-clusters";
import { OrgStructure } from "./org-structure";
import { ProfileCard } from "./profile-card";

export function SettingsPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <header className="w-full border-b border-[#3c4a42] pb-6">
        <h1 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#e5e1e4]">
          Account Settings
        </h1>
        <p className="mt-2 max-w-3xl text-base leading-6 text-[#bbcabf]">
          Manage profile details, authentication methods, verified identity
          clusters, API credentials, and workspace structure from one secure
          control surface.
        </p>
      </header>

      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
          <ProfileCard />
          <AuthMethodsCard />
        </div>

        <div className="col-span-12 flex flex-col gap-6 lg:col-span-8">
          <IdentityClusters />
          <ApiCredentials />
          <OrgStructure />
        </div>
      </section>

      <footer className="mt-auto w-full border-t border-[#3c4a42] pt-4">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#e5e1e4]">
            © 2026 ChainGuard AI. Secure Audit Protocol.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-[11px] font-semibold leading-4 tracking-[0.05em] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
              href="/terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
