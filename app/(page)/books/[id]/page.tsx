"use client";

import BookDetails from "@/app/components/BookDetails"
import { useParams } from "next/navigation"

export default function Books() {
  const params = useParams();
  const id = params?.id as string;

  return (
    <div>
      <BookDetails bookId={id}/>
    </div>
  )
}
