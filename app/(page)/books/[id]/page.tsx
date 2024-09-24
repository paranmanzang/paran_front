"use client";
import { useParams } from "next/navigation"
import BookDetails from "@/app/components/common/BookDetails";

export default function Books() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div>
      <BookDetails bookId={id}/>
    </div>
  );
}
