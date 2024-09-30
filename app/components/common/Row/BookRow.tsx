"use client";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import HeartCheckbox from "./HeartCheckBox";
import {useAppDispatch} from "@/lib/store";
import {useSelector} from "react-redux";
import {getBooks, getError, getIsLoading, saveCurrentBook} from "@/lib/features/group/book.Slice";
import {findBookList} from "@/app/service/group/book.service";
import {getFiles, saveCurrentFile} from "@/lib/features/file.Slice"; // 추가: 파일을 저장하는 액션
import {selectFileList} from "@/app/service/File/file.service";
import {FileType} from "@/app/model/file.model";
import {useRouter} from "next/navigation";
import {likeBook, removeLikeBook} from "@/app/service/group/likeBook.service";

interface BookRowProps {
    active: boolean;
    onSelect: () => void;
}

const BookRow = ({active, onSelect}: BookRowProps) => {
    const [isActive, setIsActive] = useState<boolean>(active);
    const dispatch = useAppDispatch();
    const books = useSelector(getBooks);
    const loading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const files = useSelector(getFiles);
    const router = useRouter()

    const page = 5; // 임의로 넣어둠
    const size = 5; // 임의로 넣어둠

    const nickname = 'A' // 임의로 넣어둠

    useEffect(() => {
        setIsActive(active);
        findBookList(page, size, dispatch)
        const bookIds = books.map(book => book.id);
        selectFileList(bookIds, FileType.BOOK, dispatch)
    }, [active, dispatch]);

    const handleLikeChange = (active: boolean, bookId: number, dispatch: any, nickname: string) => {
        switch (active) {
            case true:
                console.log("좋아요 상태: 활성화");
                likeBook({bookId, nickname}, dispatch);
                break;
            case false:
                console.log("좋아요 상태: 비활성화");
                removeLikeBook({bookId, nickname}, dispatch);
                break;
        }
    };

    const handleClick = (): void => {
        onSelect();
    };

    // 특정 책에 맞는 파일을 찾는 함수
    const getBookImage = (bookId: number) => {
        const bookFile = files.bookFiles.find(file => file.refId === bookId);
        return bookFile ? `http://localhost:8000/api/files/one?path=${bookFile.path}` : "https://picsum.photos/400/380"; // 기본 이미지 제공
    };

    const onClickToDetail = (currentId: number | undefined) => {
        if (currentId !== undefined) {
            const selectedBook = books.find(({id}) => id === currentId);
            const selectedFile = files.bookFiles.find(({refId}) => refId === currentId);
            if (selectedBook && selectedFile) {
                dispatch(saveCurrentBook(selectedBook));
                dispatch(saveCurrentFile(selectedFile));
                router.push(`/books/${currentId}`);
            }
        }
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            {books.map((book) => (
                <div key={book.id} className="relative max-w-sm">
                    <div className="absolute top-2 w-full px-3">
                        <div className="flex justify-between">
                            {/* 로그인을 해야 모든 유저가 좋아요 버튼을 볼 수 있음 */}
                            <div id={`likeBtn-${book.id}`}>
                                <HeartCheckbox
                                    onChange={(active) => handleLikeChange(active, book.id, dispatch, nickname)}/>
                            </div>
                        </div>
                    </div>
                    {/* 책 카드 */}
                    <div
                        className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow ${isActive ? "ring-2 ring-green-500" : ""
                        }`}
                    >
                        <Link href={`/books/${book.id}`} passHref>
                            <Image
                                width={400}
                                height={380}
                                className="rounded-t-lg cursor-pointer"
                                src={getBookImage(book.id)}
                                alt={`cover of ${book.title}`}
                                priority
                            />
                        </Link>
                        <div className="p-5">
                            <Link href={`/books/${book.id}`} passHref>
                                <h5
                                    className={`mb-2 text-lg font-medium tracking-tight ${isActive ? "text-green-600" : "text-gray-900"
                                    } dark:text-white cursor-pointer`}
                                >
                                    {book.title}
                                </h5>
                            </Link>
                            <p className="text-sm font-medium">저자: {book.author}</p>
                            <p className="text-sm font-medium">출판사: {book.publisher}</p>
                            <p className="text-sm font-medium">카테고리: {book.categoryName}</p>
                            <button
                                onClick={() => onClickToDetail(book.id)}
                                className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${isActive
                                    ? 'bg-green-600 hover:bg-green-700'
                                    : 'bg-green-400 hover:bg-green-500'
                                } `}
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
            ))}
        </div>
    );
};

export default BookRow;
