"use client";
import { LuBellRing } from "react-icons/lu";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import paranLogo from "@/app/assets/paranLogo.png";
import { logout } from "@/app/service/user/logout.service";
import BellService from "./BellService";

export default function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const popupOpen = () => {
    setIsHidden((prevState) => !prevState);
  };
  const onlogout = () => {
    logout().then(data => "로그아웃됨")
  }

  return (
    <header className="border-b border-gray-400 bg-white shadow-sm">
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
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            Paranmanzang
          </span>
        </Link>

        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <Nav />
        </div>

        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div className="relative">
            {/* {user.info === admin ?  */}
            <button
              type="button"
              id="popUpBtn"
              className="mx-3 rounded-lg bg-green-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
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
              <BellService />
            </ul>
            <Link
              href="/logout"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
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
            <button onClick={() => onlogout()}
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              로그아웃
            </button>
            <Link
              href="/users/getMyPage"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              마이페이지
            </Link>
            <button
              type="button"
              id="popUpBtn"
              className="mx-3 rounded-lg bg-green-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
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
             <BellService />
            </ul>
            :
            <Link
              href="/users/login"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              로그인
            </Link>
            {/* } */}
          </div>
        </div>
      </div>
    </header>
  )
}
