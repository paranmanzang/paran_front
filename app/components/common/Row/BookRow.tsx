"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { BookState } from "@/app/model/group/book.model";
import { getBooks, getIsLoading, getError } from "@/lib/features/group/book.Slice";
import { useAppDispatch } from "@/lib/store";
import { selectFileList } from "@/app/service/File/file.service";
import { defaultFile, FileType } from "@/app/model/file.model";
import { getFiles } from "@/lib/features/file.Slice";
import { bookService } from "@/app/service/group/book.service";

interface BookRowProps {
  active: boolean;
  onSelect: () => void;
}

const BookRow = ({ active, onSelect }: BookRowProps) => {
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
    selectFileList(bookIds, FileType.BOOK, dispatch)
  }, [active, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} active={active} file={files.bookFiles.find(file => file.refId === book.id) ?? defaultFile(FileType.BOOK, book.id)} />
      ))}
    </div>
  );
};

export default BookRow;