"use client";

import { FileModel } from "@/app/model/file.model";
import { BookResponseModel, LikeBookModel } from "@/app/model/group/book.model";
import { selectFileList } from "@/app/service/File/file.service";
import { likeBook } from "@/app/service/group/likeBook.service";
import { useEffect, useState } from "react";
import DetailButton from "./DetailButton";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { getCurrentBook } from "@/lib/features/group/book.Slice";

interface DetailsProps {
  bookId: string;
}

export default function Details({ bookId }: DetailsProps) {
  const [images, setImages] = useState<FileModel[]>([]);
  const book = useSelector((state: RootState) => getCurrentBook(state));


  // 로딩 중일 때
  if (book == null) {
    return <div>Loading...</div>;
  }

  // book 데이터가 없을 때
  if (!images) {
    return <div>책 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div>
      <div className="h-[300px] w-full justify-center bg-gray-400">
        {images.map(file => (
          <img key={file.id} src={`http://localhost:8000/api/files/one?path=${file.path}`} alt={file.path} />
        ))}
        {/* <p>메인 상세보기 - {book.title}</p>
        <p>저자: {book.author}</p>
        <p>카테고리: {book.categoryName || '카테고리 없음'}</p>
        <p>좋아요 수: {book.likeBookCount}</p> */}
      </div>
      <div className="my-6 grid min-h-screen grid-cols-2 place-items-center">
        <div className="h-[70%] w-4/5 bg-gray-400"> 안에 내용 넣기</div>
        <div className="h-[70%] w-4/5 bg-gray-400"> 안에 내용 넣기</div>
        <div className="col-span-2 h-[70%] w-[90%] bg-gray-400">
          안에 내용 넣기
        </div>
        <div className="h-[70%] w-4/5 bg-gray-400"> 안에 내용 넣기</div>
        <div className="h-[70%] w-4/5 bg-gray-400"> 안에 내용 넣기</div>
        <div className="col-span-2 h-[70%] w-full bg-gray-400">
          안에 내용 넣기
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm">
        <DetailButton thisPage={'/books'} displayReview="none" displayReservation="none" />
      </div>
    </div>
  );
}
