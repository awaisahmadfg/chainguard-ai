"use client";

import { useState } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

type ApiCredential = {
  created: string;
  key: string;
  lastUsed: string;
  status: string;
};

const initialCredentials: ApiCredential[] = [
  {
    created: "2024-07-10",
    key: "cg-live-81f3a2",
    lastUsed: "2 min ago",
    status: "Active",
  },
  {
    created: "2024-07-02",
    key: "cg-staging-92b8f1",
    lastUsed: "12 hours ago",
    status: "Rotating",
  },
];

function createCredential(): ApiCredential {
  const suffix = Math.random().toString(16).slice(2, 8);

  return {
    created: new Date().toISOString().slice(0, 10),
    key: `cg-${suffix}`,
    lastUsed: "Unused",
    status: "New",
  };
}

export function ApiCredentials() {
  const [credentials, setCredentials] = useState(initialCredentials);

  return (
    <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
      <div className="mb-5 flex items-center justify-between border-b border-[#353437] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <DashboardIcon className="size-4 text-emerald-400" name="reports" />
            <h2 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-[#e5e1e4]">
              API Credentials
            </h2>
          </div>
          <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
            Generate and revoke service keys for the workspace.
          </p>
        </div>

        <button
          className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-[12px] font-bold leading-5 text-black transition-colors hover:bg-emerald-300"
          onClick={() => setCredentials((current) => [createCredential(), ...current])}
          type="button"
        >
          <DashboardIcon className="size-4" name="review" />
          Generate Key
        </button>
      </div>

      <div className="overflow-hidden rounded-md border border-[#27272a]">
        <table className="min-w-full divide-y divide-[#27272a]">
          <thead className="bg-[#131315] text-left text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
            <tr>
              <th className="px-4 py-3">Credential</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Last Used</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1c1b1d] bg-[#0c0c0e]">
            {credentials.map((credential) => (
              <tr key={credential.key}>
                <td className="px-4 py-3 font-mono text-[13px] leading-5 text-[#e5e1e4]">
                  {credential.key}
                </td>
                <td className="px-4 py-3 text-[13px] leading-5 text-[#bbcabf]">
                  {credential.created}
                </td>
                <td className="px-4 py-3 text-[13px] leading-5 text-[#bbcabf]">
                  {credential.lastUsed}
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full border border-[#3c4a42] bg-[#18181b] px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
                    {credential.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="rounded-md border border-[#3c4a42] px-3 py-2 text-[12px] font-medium leading-5 text-[#bbcabf] transition-colors hover:border-[#ffb4ab]/50 hover:text-[#ffb4ab]"
                    onClick={() =>
                      setCredentials((current) =>
                        current.filter((entry) => entry.key !== credential.key),
                      )
                    }
                    type="button"
                  >
                    Revoke
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
