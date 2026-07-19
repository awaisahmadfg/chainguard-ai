import Link from "next/link";
import type { Review } from "@/lib/mock-reviews";
import { Badge } from "./badge";

const tableHeadings = [
  "Project Name",
  "Chain",
  "Risk Score",
  "Status",
  "Last Reviewed",
  "Action",
] as const;

type ReviewsTableProps = {
  reviews: Review[];
};

export function ReviewsTable({ reviews }: ReviewsTableProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-[#27272a] bg-[#0c0c0e]">
      <div className="flex items-center justify-between border-b border-[#27272a] px-6 py-4">
        <h3 className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#e5e1e4]">
          Recent Reviews
        </h3>
        <Link
          className="text-[13px] font-medium leading-[18px] tracking-[0.01em] text-emerald-400 transition-colors hover:text-emerald-300"
          href="/dashboard/reports"
        >
          View All
        </Link>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[880px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#27272a] bg-[#18181b]">
              {tableHeadings.map((heading) => (
                <th
                  className={`px-6 py-3 text-[11px] font-semibold uppercase leading-4 tracking-[0.12em] text-[#bbcabf] ${
                    heading === "Action" ? "text-right" : ""
                  }`}
                  key={heading}
                  scope="col"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm leading-5 text-[#e5e1e4]">
            {reviews.map((review, index) => (
              <tr
                className={`transition-colors hover:bg-[#18181b] ${
                  index === reviews.length - 1
                    ? ""
                    : "border-b border-[#27272a]"
                }`}
                key={review.project}
              >
                <td className="px-6 py-3 font-medium">{review.project}</td>
                <td className="px-6 py-3 text-[#bbcabf]">{review.chain}</td>
                <td className="px-6 py-3">
                  <Badge tone={review.riskTone}>{review.risk}</Badge>
                </td>
                <td className="px-6 py-3">
                  <Badge tone={review.statusTone}>{review.status}</Badge>
                </td>
                <td className="px-6 py-3 text-[#bbcabf]">
                  {review.reviewedAt}
                </td>
                <td className="px-6 py-3 text-right">
                  <Link
                    className="inline-flex rounded border border-[#3f3f46] px-3 py-1 text-[13px] font-medium leading-[18px] text-[#bbcabf] transition-colors hover:text-[#e5e1e4]"
                    href="/dashboard/reports"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
