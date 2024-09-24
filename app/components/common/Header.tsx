"use client";
import { DarkThemeToggle } from "flowbite-react";
import { LuBellRing } from "react-icons/lu";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import paranLogo from "@/app/assets/paranLogo.png";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const openHandler = () => {};
  const popupOpen = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <header className="border-b border-gray-400 bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={paranLogo}
            width={24}
            height={24}
            className="size-8"
            alt="Logo"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Paranmanzang
          </span>
        </Link>

        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div className="relative">
            {/* {user.info === admin ?  */}
            <button
              type="button"
              id="popUpBtn"
              className="mx-3 rounded-lg bg-green-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
              onClick={popupOpen}
            >
              <LuBellRing />
            </button>
            <ul
              className={
                isHidden
                  ? "hidden"
                  : "absolute top-10 z-20 rounded-lg bg-green-50"
              }
              id="popUp"
            >
              <li className="px-4 py-2 hover:underline">내용1</li>
              <li className="px-4 py-2 hover:underline">내용2</li>
              <li className="px-4 py-2 hover:underline">내용3</li>
              <li className="px-4 py-2 hover:underline">내용4</li>
            </ul>
            <Link
              href="/users/logout"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
            >
              로그아웃
            </Link>
            :
            {/*   ''
          } */}
          </div>
          {/* 로그인 되면 로그아웃 버튼으로 변경 */}
          {/* 로그인 안되어있으면 로그인 띄우기 */}
          <div className="relative">
            {/* {user.login ?  */}
            <Link
              href="/users/logout"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
            >
              로그아웃
            </Link>
            <Link
              href="/users/getMyPage"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
            >
              마이페이지
            </Link>
            <button
              type="button"
              id="popUpBtn"
              className="mx-3 rounded-lg bg-green-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
              onClick={popupOpen}
            >
              <LuBellRing />
            </button>
            <ul
              className={
                isHidden
                  ? "hidden"
                  : "absolute right-0 top-10 z-20 rounded-lg bg-green-50"
              }
              id="popUp"
            >
              <li className="px-4 py-2 hover:underline">내용1</li>
              <li className="px-4 py-2 hover:underline">내용2</li>
              <li className="px-4 py-2 hover:underline">내용3</li>
              <li className="px-4 py-2 hover:underline">내용4</li>
            </ul>
            :
            <Link
              href="/users/login"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
            >
              로그인
            </Link>
            {/* } */}
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={openHandler}
            className="inline-flex size-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="mx-2 px-2">
            <DarkThemeToggle />
          </div>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <Nav />
        </div>
      </div>
    </header>
  );
}
