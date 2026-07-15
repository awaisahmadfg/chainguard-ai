"use client";

import { useState } from "react";
import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

type IdentityNode = {
  address: string;
  label: string;
  status: "Verified" | "Pending";
};

const initialNodes: IdentityNode[] = [
  {
    address: "0x71C...976F",
    label: "Main Deployment Node",
    status: "Verified",
  },
  {
    address: "0x4B2...11A8",
    label: "Secondary Node",
    status: "Pending",
  },
];

export function IdentityClusters() {
  const [nodes, setNodes] = useState(initialNodes);

  function handleAddNode() {
    setNodes((current) => [
      ...current,
      {
        address: `0x${Math.random().toString(16).slice(2, 5).toUpperCase()}...${
          Math.random().toString(16).slice(2, 6).toUpperCase()
        }`,
        label: `Cluster Node ${current.length + 1}`,
        status: "Pending",
      },
    ]);
  }

  return (
    <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
      <div className="mb-5 flex items-center justify-between border-b border-[#353437] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <DashboardIcon className="size-4 text-emerald-400" name="shield" />
            <h2 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-[#e5e1e4]">
              Verified Identity Clusters
            </h2>
          </div>
          <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
            Add trusted nodes to the verified deployment graph.
          </p>
        </div>

        <button
          className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-3 py-2 text-[12px] font-bold leading-5 text-black transition-colors hover:bg-emerald-300"
          onClick={handleAddNode}
          type="button"
        >
          <DashboardIcon className="size-4" name="link" />
          Add Node
        </button>
      </div>

      <div className="space-y-3">
        {nodes.map((node) => (
          <div
            className="flex items-center justify-between rounded-md border border-[#27272a] bg-[#131315] p-3"
            key={node.address}
          >
            <div>
              <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                {node.label}
              </p>
              <p className="mt-1 font-mono text-[12px] leading-5 text-[#bbcabf]">
                {node.address}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] ${
                  node.status === "Verified"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-[#ffb3af]/40 bg-[#ffb3af]/10 text-[#ffb3af]"
                }`}
              >
                {node.status}
              </span>
              <button
                className="rounded-md border border-[#3c4a42] px-3 py-2 text-[12px] font-medium leading-5 text-[#bbcabf] transition-colors hover:border-[#ffb4ab]/50 hover:text-[#ffb4ab]"
                onClick={() =>
                  setNodes((current) =>
                    current.filter((entry) => entry.address !== node.address),
                  )
                }
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
