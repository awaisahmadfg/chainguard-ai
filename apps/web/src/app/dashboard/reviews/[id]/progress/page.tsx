import { ReviewProgress } from "@/components/review/review-progress";

type ReviewProgressPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ReviewProgressPage({
  params,
}: ReviewProgressPageProps) {
  const { id } = await params;

  return <ReviewProgress reviewId={id} />;
}
