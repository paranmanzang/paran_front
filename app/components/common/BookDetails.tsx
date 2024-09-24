"use client";

import { BookResponseModel, LikeBookModel } from "@/app/model/group/group.model";
import { findOneByBookId } from "@/app/service/group/book.service";
import { likeBook } from "@/app/service/group/likeBook.service";
import { useEffect, useState } from "react";

interface DetailsProps {
  bookId: string; 
}

export default function Details({ bookId }: DetailsProps) {
  const [book, setBook] = useState<BookResponseModel | null>(null);
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
        const response = await findOneByBookId(Number(bookId));
        if (typeof response === 'boolean' && !response) {
          throw new Error('책을 찾을 수 없습니다.');
        }
        setBook(response as BookResponseModel);
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
  if (!book) {
    return <div>책 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div>
      <div className="h-[300px] w-full justify-center bg-gray-400">
     <p>메인 상세보기 - {book.title}</p> 
      <p>저자: {book.author}</p>
      <p>카테고리: {book.categoryName || '카테고리 없음'}</p>
      <p>좋아요 수: {book.likeBookCount}</p>
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

      <div className="mx-auto flex h-[20px] w-full max-w-sm items-end">
        <button type="button" className="mx-2 rounded-full border px-3 py-2" onClick={handleLikeBook}>
          🥰 찜하기 🥰
        </button>
        <button type="button" className="mx-2 rounded-full border px-3 py-2">
          예약하기
        </button>
        <button type="button" className="mx-2 rounded-full border px-3 py-2">
          뒤로가기
        </button>
      </div>
    </div>
  );
}
