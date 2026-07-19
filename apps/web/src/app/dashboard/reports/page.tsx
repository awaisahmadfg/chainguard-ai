import { Suspense } from "react";
import { ReportDetail } from "@/components/reports/report-detail";

export default function ReportsPage() {
  return (
    <Suspense
      fallback={
        <div className="h-64 w-full animate-pulse rounded-lg border border-[#27272a] bg-[#131315]" />
      }
    >
      <ReportDetail />
    </Suspense>
  );
}
