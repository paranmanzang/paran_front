"use Client"
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import HeartCheckbox from "./HeartCheckBox";
import { saveCurrentBook } from "@/lib/features/group/book.Slice";
import { saveCurrentFile } from "@/lib/features/file.Slice";
import { BookResponseModel } from "@/app/model/group/book.model";
import { FileModel } from "@/app/model/room/file.model";
import { likeBook, removeLikeBook } from "@/app/service/group/likeBook.service";
import { useRouter } from "next/navigation";

interface BookCardProps {
  book: BookResponseModel;
  active: boolean;
  file: FileModel;
}

const BookCard = ({ book, active, file }: BookCardProps) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const nickname = 'A' // 임의로 넣어둠

  const handleLikeChange = (active: boolean, bookId: number, dispatch: any, nickname: string) => {
    switch (active) {
      case true:
        console.log("좋아요 상태: 활성화");
        likeBook({ bookId, nickname }, dispatch);
        break;
      case false:
        console.log("좋아요 상태: 비활성화");
        removeLikeBook({ bookId, nickname }, dispatch);
        break;
    }
  };

  const onClickToDetail = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(saveCurrentBook(book));
    dispatch(saveCurrentFile(file));
    router.push(`/books/${book.id}`);
  };

  return (
    <div className="relative max-w-sm">
      <div className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow ${active ? "ring-2 ring-green-500" : ""}`}>
        <Image
          width={400}
          height={380}
          className="rounded-t-lg cursor-pointer"
          src={file.path === process.env.NEXT_PUBLIC_IMAGE_DEFAULT ? process.env.NEXT_PUBLIC_IMAGE_DEFAULT : `http://localhost:8000/api/files/one?path=${file.path}`}
          alt={`cover of ${book.title}`}
          priority
        />
        <div className="p-5">
          <h5 className={`mb-2 text-lg font-medium tracking-tight ${active ? "text-green-600" : "text-gray-900"} dark:text-white cursor-pointer`}>
            {book.title}
          </h5>
          <p className="text-sm font-medium">저자: {book.author}</p>
          <div className="w-full">
            <span className="text-xs bg-green-400 p-1 text-white rounded-full my-4">
              {book.categoryName}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClickToDetail(e);
            }}
            className="mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700"
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