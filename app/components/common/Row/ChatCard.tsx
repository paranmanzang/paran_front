import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeartCheckbox from "./HeartCheckBox";

interface ChatCardProps {
  chat: any; // 타입을 더 구체적으로 정의할 수 있습니다.
  active: boolean;
  onSelect: () => void;
}

const ChatCard = ({ chat, active, onSelect }: ChatCardProps) => {
  const handleLikeChange = (isLiked: boolean) => {
    console.log('좋아요 상태:', isLiked);
    // 여기에서 필요한 로직을 수행 (예: API 호출)
  };

  return (
    <div className="relative max-w-sm">
      <form className="absolute top-2 w-full px-3">
        <div className="flex justify-between">
          <div id="likeBtn">
            <HeartCheckbox onChange={handleLikeChange} />
          </div>
          <div id="selectBtn">
            <input 
              id="select" 
              type="checkbox" 
              className="size-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" 
            />
            <label htmlFor="select" hidden>chatSelect</label>
          </div>
        </div>
      </form>
      <div
        className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow ${
          active ? 'ring-2 ring-green-500' : ''
        }`}
        onClick={onSelect}
      >
        <Link href={`/chats/${chat.id}`}>
          <Image
            width={400}
            height={330}
            className="rounded-t-lg"
            src={chat.imageUrl || "https://picsum.photos/400/380"}
            alt={`chat cover`}
            priority
          />
        </Link>
        <div className="p-5">
          <Link href={`/chats/${chat.id}`}>
            <h5 className={`mb-2 text-lg font-medium tracking-tight ${
              active ? 'text-green-600' : 'text-gray-900'
            }`}>
              {chat.title}
            </h5>
          </Link>
          <p className="mb-3 text-sm font-medium text-gray-700">
            {chat.content}
          </p>
          <p className="text-sm font-medium">채팅 목록</p>
          <Link
            href={`/chats/${chat.id}`}
            className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${
              active ? 'bg-green-600 hover:bg-green-700' : 'bg-green-400 hover:bg-green-500'
            }`}
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
    </div>
  );
};

export default ChatCard;