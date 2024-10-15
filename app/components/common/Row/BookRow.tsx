"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { getBooks, getIsLoading, getError, getTotalPage } from "@/lib/features/group/book.slice";
import { useAppDispatch } from "@/lib/store";
import { defaultFile, FileType } from "@/app/model/file/file.model";
import { bookService } from "@/app/service/group/book.service";
import { getFiles } from "@/lib/features/file/file.slice";
import LoadingSpinner from "../status/LoadingSpinner";
import ErrorMessage from "../status/ErrorMessage";
import Pagination from "./pagination/Pagination";

interface BookRowProps {
  active: boolean;
  onSelect: () => void;
}

export default function BookRow({ active, onSelect }: BookRowProps) {
  const dispatch = useAppDispatch();
  const books = useSelector(getBooks);
  const files = useSelector(getFiles);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const totalPage = useSelector(getTotalPage)

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  useEffect(() => {
    bookService.findList(currentPage, pageSize, dispatch)
  }, [active, dispatch, currentPage, pageSize]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(0);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div className="w-[92%] mb-4 ml-4 grid grid-cols-4 gap-8 md:grid-cols-3">
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            active={active}
            file={files.bookFiles.find(file => file.refId === book.id) ?? defaultFile(FileType.BOOK, book.id)}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        totalItems={totalPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </>
  );
};