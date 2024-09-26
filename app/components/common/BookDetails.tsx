"use client";

import { FileModel } from "@/app/model/file.model";
import { BookResponseModel, LikeBookModel } from "@/app/model/group/book.model";
import { selectFileList } from "@/app/service/File/file.service";
import { likeBook } from "@/app/service/group/likeBook.service";
import { useEffect, useState } from "react";
import DetailButton from "./DetailButton";

interface DetailsProps {
  bookId: string;
}

export default function Details({ bookId }: DetailsProps) {
  const [images, setImages] = useState<FileModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [likeBookModel, setLikeBookModel] = useState<LikeBookModel>({
    bookId: Number(bookId),
    nickname: 'A'
  });

  useEffect(() => {
    // bookId에 해당하는 도서 정보를 가져옴
    const fetchBook = async () => {
      try {
        const response = await selectFileList(Number(bookId), "book");
        if (typeof response === 'boolean' && !response) {
          throw new Error('책을 찾을 수 없습니다.');
        }
        setImages(response as FileModel[]);
      } catch (error) {
        setError(error instanceof Error ? error.message : '오류 발생');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  const handleLikeBook = async () => {
    try {
      const response = await likeBook(likeBookModel);

      if (typeof response === 'boolean' && response) {
        alert('책에 성공적으로 좋아요를 추가했습니다!');
      } else {
        alert('좋아요 추가에 실패했습니다.');
      }
    } catch (error) {
      console.error('좋아요 처리 중 오류 발생:', error);
      alert('좋아요 처리 중 오류가 발생했습니다.');
    }
  };

  // 로딩 중일 때
  if (loading) {
    return <div>Loading...</div>;
  }

  // 오류 발생 시
  if (error) {
    return <div>Error: {error}</div>;
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
      <DetailButton thisPage={'/books'} displayReview="none" displayReservation="none"/>
      </div>
    </div>
  );
}
