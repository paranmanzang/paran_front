"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//import Text from "@/app/components/chat/Text";
import ChatPage from "@/app/components/chat/ChatPages/ChatPage";

export default function ChatRoom() {
  // 팝업 창 상태 관리
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  // 팝업 열기 및 닫기 함수
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
    const url = "/chats/1";
    const popup = window.open(
      url,
      "작은채팅방",
      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=0, resizable=0, width=500, height=800, top=30, left=30",
    );
  };

  return (
    <div className="relative w-full">
      <div className="fixed left-0 top-0 min-h-screen w-full">
        <div
          id="chatHead"
          className="mt-1 flex justify-end bg-gray-100 bg-opacity-90 text-black"
        >
          {/* PopUp 버튼 - 모바일에서는 안보이도록 후처리 */}
          <button
            type="button"
            onClick={togglePopUp}
            className="mb-1 me-2 rounded-full bg-green-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
          >
            <svg
              className="h-4 w-4 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"></path>
              <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"></path>
            </svg>
          </button>
          <Link
            href="/chats"
            className="mb-1 me-2 rounded-full bg-red-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            X
          </Link>
        </div>
        <div className="flex h-[100dvh] justify-center rounded-lg bg-gray-100">
          <section className="w-[20%] bg-gray-900 text-white">
            <div id="chatHead" className="px-5 py-3">
              {/* onClick 시에 내가 참여하고 있는 방 확인 할 수 있도록 */}
              <button type="button" className="font-bold">
                참여중인 대화방 이름 {">"}{" "}
              </button>
              {/* 버튼 누르면 hidden 없애기 */}
              <ul className="hidden">
                <li>참여중인 대화방1</li>
                <li>참여중인 대화방2</li>
                <li>참여중인 대화방3</li>
                <li>참여중인 대화방4</li>
              </ul>
            </div>
            <ul className="px-5 py-3">
              <li>
                <button type="button" className="px-5 py-3">
                  <Image
                    src="http://via.placeholder.com/24x24"
                    alt="유저프로필"
                    width={56}
                    height={56}
                  />
                </button>
              </li>
              <li>
                <button type="button" className="px-5 py-3">
                  <Image
                    src="http://via.placeholder.com/24x24"
                    alt="유저프로필"
                    width={56}
                    height={56}
                  />
                </button>
              </li>
              <li>
                <button type="button" className="px-5 py-3">
                  <Image
                    src="http://via.placeholder.com/24x24"
                    alt="유저프로필"
                    width={56}
                    height={56}
                  />
                </button>
              </li>
              <li>
                <button type="button" className="px-5 py-3">
                  <Image
                    src="http://via.placeholder.com/24x24"
                    alt="유저프로필"
                    width={56}
                    height={56}
                  />
                </button>
              </li>
              <li>
                <button type="button" className="px-5 py-3">
                  <Image
                    src="http://via.placeholder.com/24x24"
                    alt="유저프로필"
                    width={56}
                    height={56}
                  />
                </button>
              </li>
              <li>
                <button type="button" className="px-5 py-3">
                  <Image
                    src="http://via.placeholder.com/24x24"
                    alt="유저프로필"
                    width={56}
                    height={56}
                  />
                </button>
              </li>
            </ul>
          </section>
          <article className="flex w-[80%] flex-col bg-blue-200 ">
            <aside className="w-full]">
              <ChatPage />
            </aside>
          </article>
        </div>
      </div>
    </div>
  );
}
