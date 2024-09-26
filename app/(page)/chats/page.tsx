"use client";

import ChatDetails from "@/app/components/chat/ChatDetails";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import { ChatRoomModel } from "@/app/model/chat/chat.model";

export default function Chat() {
  return (
    <div className="relative w-full">
      <div id="btn-wrap">
        <Link
          href="/" // 내가 접속했던 곳으로 그대로 뱉어주기
          className="absolute right-10 top-[-2.4rem] z-30 mb-2 me-2 rounded-full bg-red-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          X
        </Link>
      </div>
      <Suspense fallback={<p>Loading chat...</p>}>
        <ChatContent />
      </Suspense>
      <p
        id="theme"
        className="opacity-92 fixed left-0 top-0 min-h-screen w-full bg-green-100 text-black"
      />
    </div>
  );
}

function ChatContent() {
  const searchParams = useSearchParams();
  const chatRoom = JSON.parse(searchParams.get('chatRoom') ?? '') as ChatRoomModel ?? '';

  return (
    <div className="absolute left-1/2 top-1/2 z-30 mx-auto flex h-[50dvh] w-2/5 translate-x-[-50%] justify-center rounded-lg bg-green-700 p-6 text-white">
      <section>
        <ChatDetails chatRoom={chatRoom} />
      </section>
    </div>
  );
}
