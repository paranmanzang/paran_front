"use client";
import { useState } from "react";
import Link from "next/link";
export default function Chat() {
  // 팝업 창 상태 관리
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  // 팝업 열기 및 닫기 함수
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
    const url = "/chats";
    const popup = window.open(
      url,
      "_blank",
      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=0, resizable=0, width=450, height=600, top=30, left=30",
    );
  };

  return (
    <div className="relative w-full">
      <div id="btnWrap">
        {/* PopUp 버튼 */}
        <button
          type="button"
          onClick={togglePopUp}
          className="absolute right-10 top-[-100px] z-30 mb-2 me-2 rounded-full bg-green-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
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
          href="/"
          className="absolute right-0 top-[-100px] z-30 mb-2 me-2 rounded-full bg-red-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          X
        </Link>
      </div>
      <div className="absolute left-0 top-[-60px] z-30 mx-auto flex h-[90dvh] w-full justify-center rounded-lg bg-gray-100">
        <div id="chatHead" className=""></div>
        <section className="w-[18%] bg-gray-900 text-white">
          <h5 className="font-bold">참여중인 대화방 이름 {">"} </h5>
        </section>
        <article className="flex w-[60%] flex-col bg-blue-400 ">
          <div className="h-[85%] w-full">채팅하는 공간</div>
          <aside className="h-[15%] w-full bg-green-400"></aside>
        </article>
      </div>
      <p
        id="theme"
        className="z-1 fixed left-0 top-0 min-h-screen w-full bg-gray-100 bg-opacity-90 text-black"
      >
        theme
      </p>
    </div>
  );
}
