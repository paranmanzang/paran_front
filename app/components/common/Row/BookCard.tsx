import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import HeartCheckbox from "./HeartCheckBox";
import { saveCurrentBook } from "@/lib/features/group/book.Slice";
import { saveCurrentFile } from "@/lib/features/file.Slice";
import { BookState } from "@/app/model/group/book.model";
import { useBookImage } from "@/app/hooks/useBookImage";
import { useAppDispatch } from "@/lib/store";

interface BookCardProps {
  book: BookState;
  active: boolean;
}

const BookCard = ({ book, active }: BookCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const bookImage = useBookImage(book.id);

  const handleLikeChange = (active: boolean) => {
    console.log("좋아요 상태:", active);
    // 여기에서 필요한 로직을 수행 (예: API 호출)
  };

  const onClickToDetail = () => {
    useAppDispatch(saveCurrentBook(book));
    useAppDispatch(saveCurrentFile({ refId: book.id, path: bookImage }));
    router.push(`/books/${book.id}`);
  };

  return (
    <div className="relative max-w-sm">
      <form className="absolute top-2 w-full px-3">
        <div className="flex justify-between">
          <div id={`likeBtn-${book.id}`}>
            <HeartCheckbox onChange={handleLikeChange} />
          </div>
        </div>
      </form>
      <div className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow ${active ? "ring-2 ring-green-500" : ""}`}>
        <Link href={`/books/${book.id}`} passHref>
          <Image
            width={400}
            height={380}
            className="rounded-t-lg cursor-pointer"
            src={bookImage}
            alt={`cover of ${book.title}`}
            priority
          />
        </Link>
        <div className="p-5">
          <Link href={`/books/${book.id}`} passHref>
            <h5 className={`mb-2 text-lg font-medium tracking-tight ${active ? "text-green-600" : "text-gray-900"} dark:text-white cursor-pointer`}>
              {book.title}
            </h5>
          </Link>
          <p className="text-sm font-medium">저자: {book.author}</p>
          <p className="text-sm font-medium">출판사: {book.publisher}</p>
          <p className="text-sm font-medium">카테고리: {book.categoryName}</p>
          <button
            onClick={onClickToDetail}
            className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${
              active ? 'bg-green-600 hover:bg-green-700' : 'bg-green-400 hover:bg-green-500'
            }`}
          >
            상세보기
            <svg
              className="ms-2 h-4 w-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;