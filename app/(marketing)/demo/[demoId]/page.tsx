"use client";
import { useSearchParams } from "next/navigation";
export default function Page({ params }: { params: { demoId: string } }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  return (
    <div>
      My Post: {params.demoId}+ {search}
    </div>
  );
}
