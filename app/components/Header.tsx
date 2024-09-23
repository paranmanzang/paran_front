"use client";
import { DarkThemeToggle } from "flowbite-react";

import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import paranLogo from "@/app/assets/paranLogo.png"

export default function Header() {
  const openHandler = () => {

  }

  return (
    <header className="border-gray-400 bg-white dark:bg-gray-900 border-b shadow-sm">
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

        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link
            href="/users/login"
            className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600"
          >
            로그인
          </Link>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
