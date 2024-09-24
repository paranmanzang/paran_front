"use client";
import { useState } from "react";
import Link from "next/link";

interface CardRowProps {
  roomId: string;
  name: string;
  userCount: number;
  unReadMessageCount: number;
}

//Path variable 로 받은 id 값으로 연결하기
export default function CardRow({
  roomId,
  name,
  userCount,
  unReadMessageCount,
}: CardRowProps) {
  const [id, setId] = useState();

  return (
    <div>
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
        <Link href="/chats">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {userCount}명이 참여 중 읽지 않은 메시지 {unReadMessageCount}개
        </p>
        <Link
          // href 주소에 link로 변경하기
          href={{
            pathname:'/chats',
            query: {roomId, name, userCount, unReadMessageCount },
          }}
          className="inline-flex items-center rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          입장하기
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
  );
}
