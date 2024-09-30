"use client";
import DetailButton from "./DetailButton";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { getCurrentBook } from "@/lib/features/group/book.Slice";
import Image from "next/image";
import { getCurrentFile } from "@/lib/features/file.Slice";

export default function Details() {
  const book = useSelector((state: RootState) => getCurrentBook(state));
  const file = useSelector((state: RootState) => getCurrentFile(state))

  // 로딩 중일 때
  if (book == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="h-[300px] w-full justify-center bg-gray-400">
      <Image
            src={`http://localhost:8000/api/files/one?path=${file.path}`}
            alt={book.title}
            width={400}
            height={380}
          />
        <p>메인 상세보기 - {book.title}</p>
        <p>저자: {book.author}</p>
        <p>카테고리: {book.categoryName || '카테고리 없음'}</p>
        <p>좋아요 수: {book.likeBookCount}</p>
      </div>
      <div className="my-6 grid min-h-screen grid-cols-2 place-items-center">

      </div>
      <div className="mx-auto w-full max-w-sm">
        <DetailButton thisPage={'/books'} displayReview="none" displayReservation="none" />
      </div>
    </div>
  );
}
