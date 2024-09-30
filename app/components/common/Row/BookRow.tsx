"use client";
import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { BookState } from "@/app/model/group/book.model";
import { getBooks, getIsLoading, getError } from "@/lib/features/group/book.Slice";

interface BookRowProps {
    active: boolean;
    onSelect: () => void;
}

const BookRow = ({ active, onSelect }: BookRowProps) => {
  const books = useSelector(getBooks);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {books.map((book: BookState) => (
        <BookCard key={book.id} book={book} active={active} />
      ))}
    </div>
  );
};

export default BookRow;