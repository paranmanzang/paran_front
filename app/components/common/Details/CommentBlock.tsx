import React, { useState } from "react";

interface CommentBlockProps {
  open: boolean;
}

export default function CommentBlock({ open: initialOpen }: CommentBlockProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [comments, setComments] = useState([
    { id: 1, author: "파란땅콩", content: "너무 유익한 내용이에요!" },
    { id: 2, author: "나는파란악마", content: "동의합니다.." },
    { id: 3, author: "파란몽땅", content: "좋은정보 감사합니다!!" },
  ]);

  const toggleComments = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-4 bg-green-50 rounded-lg">
      <button
        onClick={toggleComments}
        className="w-full p-4 flex justify-between items-center text-lg font-semibold"
      >
        댓글
        <svg
          className={`size-3 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-2 py-2 px-5 bg-white rounded">
              <p className="font-semibold">{comment.author}</p>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}