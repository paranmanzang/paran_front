"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { getBooks, getIsLoading, getError } from "@/lib/features/group/book.slice";
import { useAppDispatch } from "@/lib/store";
import { defaultFile, FileType } from "@/app/model/file/file.model";
import { bookService } from "@/app/service/group/book.service";
import { fileService } from "@/app/service/File/file.service";
import { getFiles } from "@/lib/features/file/file.slice";
import LoadingSpinner from "../status/LoadingSpinner";
import ErrorMessage from "../status/ErrorMessage";

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

  const page = 5; // 임의로 넣어둠
  const size = 5; // 임의로 넣어둠

  useEffect(() => {
    bookService.findList(page, size, dispatch)
    const bookIds = books.map(book => book.id);
    fileService.selectFileList(bookIds, FileType.BOOK, dispatch)


  }, [active, dispatch]);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="grid grid-cols-1 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} active={active} file={files.bookFiles.find(file => file.refId === book.id) ?? defaultFile(FileType.BOOK, book.id)} />
      ))}
    </div>
  );
};