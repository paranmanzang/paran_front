"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BookRowProps {
  active: boolean;
  onSelect: () => void;
}

const BookRow: React.FC<BookRowProps> = ({ active, onSelect }) => {
  const [isActive, setIsActive] = useState<boolean>(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const handleClick = (): void => {
    onSelect();
  };

  return (
    <>
     <div
      className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ${
        isActive ? 'ring-2 ring-green-500' : 'false'
      }`}
      onClick={handleClick}
      // 전체다 map으로 돌려야 함.
    >
      <Link href={`/book/2`}>
        <Image
          width={400}
          height={330}
          className="rounded-t-lg"
          src={"https://picsum.photos/400/380"}
          alt={`cover`}
        />
      </Link>
      <div className="p-5">
        <Link href={`/book/2`}>
          <h5 className={`mb-2 text-lg font-medium tracking-tight ${
            isActive ? 'text-green-600' : 'text-gray-900'
          } dark:text-white`}>
            title
          </h5>
        </Link>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          description
        </p>
        <p className="text-sm font-medium">저자: author</p>
        <Link
          href={`/book/2`}
          className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${
            isActive
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-green-400 hover:bg-green-500'
          } dark:bg-green-400 dark:hover:bg-green-500`}
        >
          상세보기
          <svg
            className="ms-2 size-3.5 rtl:rotate-180"
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
        </Link>
      </div>
    </div>
    <div
      className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ${
        isActive ? 'ring-2 ring-green-500' : 'false'
      }`}
      onClick={handleClick}
      // 전체다 map으로 돌려야 함.
    >
      <Link href={`/book/2`}>
        <Image
          width={400}
          height={330}
          className="rounded-t-lg"
          src={"https://picsum.photos/400/380"}
          alt={`cover`}
        />
      </Link>
      <div className="p-5">
        <Link href={`/book/2`}>
          <h5 className={`mb-2 text-lg font-medium tracking-tight ${
            isActive ? 'text-green-600' : 'text-gray-900'
          } dark:text-white`}>
            title
          </h5>
        </Link>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          description
        </p>
        <p className="text-sm font-medium">저자: author</p>
        <Link
          href={`/book/2`}
          className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${
            isActive
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-green-400 hover:bg-green-500'
          } dark:bg-green-400 dark:hover:bg-green-500`}
        >
          상세보기
          <svg
            className="ms-2 size-3.5 rtl:rotate-180"
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
        </Link>
      </div>
    </div>
    <div
      className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ${
        isActive ? 'ring-2 ring-green-500' : 'false'
      }`}
      onClick={handleClick}
      // 전체다 map으로 돌려야 함.
    >
      <Link href={`/book/2`}>
        <Image
          width={400}
          height={330}
          className="rounded-t-lg"
          src={"https://picsum.photos/400/380"}
          alt={`cover`}
        />
      </Link>
      <div className="p-5">
        <Link href={`/book/2`}>
          <h5 className={`mb-2 text-lg font-medium tracking-tight ${
            isActive ? 'text-green-600' : 'text-gray-900'
          } dark:text-white`}>
            title
          </h5>
        </Link>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          description
        </p>
        <p className="text-sm font-medium">저자: author</p>
        <Link
          href={`/book/2`}
          className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${
            isActive
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-green-400 hover:bg-green-500'
          } dark:bg-green-400 dark:hover:bg-green-500`}
        >
          상세보기
          <svg
            className="ms-2 size-3.5 rtl:rotate-180"
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
        </Link>
      </div>
    </div>
    <div
      className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 ${
        isActive ? 'ring-2 ring-green-500' : 'false'
      }`}
      onClick={handleClick}
      // 전체다 map으로 돌려야 함.
    >
      <Link href={`/book/2`}>
        <Image
          width={400}
          height={330}
          className="rounded-t-lg"
          src={"https://picsum.photos/400/380"}
          alt={`cover`}
        />
      </Link>
      <div className="p-5">
        <Link href={`/book/2`}>
          <h5 className={`mb-2 text-lg font-medium tracking-tight ${
            isActive ? 'text-green-600' : 'text-gray-900'
          } dark:text-white`}>
            title
          </h5>
        </Link>
        <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
          description
        </p>
        <p className="text-sm font-medium">저자: author</p>
        <Link
          href={`/book/2`}
          className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${
            isActive
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-green-400 hover:bg-green-500'
          } dark:bg-green-400 dark:hover:bg-green-500`}
        >
          상세보기
          <svg
            className="ms-2 size-3.5 rtl:rotate-180"
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
        </Link>
      </div>
    </div>
    </>
   
  );
};

export default BookRow;