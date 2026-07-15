import { DashboardIcon } from "@/components/dashboard/dashboard-icons";

const teamMembers = [
  { initials: "AZ", name: "Admin Zero" },
  { initials: "SL", name: "Security Lead" },
  { initials: "RC", name: "Risk Captain" },
  { initials: "AV", name: "Audit Vault" },
];

export function OrgStructure() {
  return (
    <section className="rounded-lg border border-[#27272a] bg-[#0c0c0e] p-5">
      <div className="mb-5 border-b border-[#353437] pb-4">
        <div className="flex items-center gap-2">
          <DashboardIcon className="size-4 text-emerald-400" name="dashboard" />
          <h2 className="text-xl font-semibold leading-7 tracking-[-0.01em] text-[#e5e1e4]">
            Organization Structure
          </h2>
        </div>
        <p className="mt-1 text-sm leading-5 text-[#bbcabf]">
          Workspace Alpha and team access overview.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-md border border-[#27272a] bg-[#131315] p-4">
          <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
            Workspace
          </p>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-medium leading-[18px] text-[#e5e1e4]">
                Workspace Alpha
              </p>
              <p className="mt-1 text-[12px] leading-5 text-[#bbcabf]">
                Audit-ready production environment
              </p>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-emerald-400">
              Active
            </span>
          </div>
        </div>

        <div className="rounded-md border border-[#27272a] bg-[#131315] p-4">
          <p className="text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf]">
            Team Management
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {teamMembers.map((member) => (
              <div
                className="flex items-center gap-2 rounded-full border border-[#27272a] bg-[#0c0c0e] px-2 py-1"
                key={member.name}
              >
                <span className="flex size-8 items-center justify-center rounded-full border border-[#3c4a42] bg-[#18181b] text-[11px] font-semibold text-[#e5e1e4]">
                  {member.initials}
                </span>
                <span className="pr-2 text-[12px] font-medium leading-5 text-[#bbcabf]">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
