"use client"
import Link from "next/link"
import { useState } from "react";

export default function Nav() {
   // 현재 선택된 탭 상태
   const [activeTab, setActiveTab] = useState('All');
   // 탭 클릭 시 상태 변경 함수
   const handleTabClick = (tab: string) => {
     setActiveTab(tab);
   }
 
  return (
    <>
      <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium text-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <Link
                href="/rooms"
                className={`block rounded py-2 ${
                activeTab === 'Rooms' ? ' text-green-600 dark:text-green-500 md:hover:text-green-700 md:dark:hover:text-green-500 md:dark:hover:bg-transparent md:hover:bg-transparent' : 'dark:text-white dark:hover:text-white'
               }`}
               onClick={() => handleTabClick('Rooms')}
                aria-current="page"
              >
                공간 대여
              </Link>
            </li>
            <li>
              <Link
                href="/groups"
                className={`block rounded py-2 ${
                  activeTab === 'Groups' ? ' text-green-600 dark:text-green-500 md:hover:text-green-700 md:dark:hover:text-green-500  md:dark:hover:bg-transparent md:hover:bg-transparent' : 'dark:text-white dark:hover:text-white'
                 }`}
                 onClick={() => handleTabClick('Groups')}
                  aria-current="page"
              >
                소모임
              </Link>
            </li>
            <li>
              <Link
                href="/books"
                className={`block rounded py-2 ${
                  activeTab === 'Books' ? ' text-green-600 dark:text-green-500 md:hover:text-green-700 md:dark:hover:text-green-500  md:dark:hover:bg-transparent md:hover:bg-transparent' : 'dark:text-white dark:hover:text-white'
                 }`}
                 onClick={() => handleTabClick('Books')}
                  aria-current="page"
              >
                서점
              </Link>
            </li>
            <li>
              <Link
                href="/aboard"
                className={`block rounded py-2 ${
                  activeTab === 'Aboard' ? ' text-green-600 dark:text-green-500 md:hover:text-green-700 md:dark:hover:text-green-500  md:dark:hover:bg-transparent md:p-0 md:hover:bg-transparent' : 'dark:text-white  dark:hover:text-white'
                 }`}
                 onClick={() => handleTabClick('Aboard')}
                  aria-current="page"
              >
                공지사항
              </Link>
            </li>
          </ul>
    </>
  )
}
