"use client";
import { useState } from "react";
import TabRow from "./TabRow";

export default function TabButton() {
  // 현재 선택된 탭 상태
  const [activeTab, setActiveTab] = useState("All");
  // 탭 클릭 시 상태 변경 함수
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          <li className="me-2">
            <button
              type="button"
              className={`inline-block rounded-t-lg border-b-2 p-4 ${
                activeTab === "All"
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
              onClick={() => handleTabClick("All")}
            >
              전체
            </button>
          </li>
          <li className="me-2">
            <button
              type="button"
              className={`inline-block rounded-t-lg border-b-2 p-4 ${
                activeTab === "Groups"
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
              onClick={() => handleTabClick("Groups")}
            >
              소모임
            </button>
          </li>
          <li className="me-2">
            <button
              type="button"
              className={`inline-block rounded-t-lg border-b-2 p-4 ${
                activeTab === "Books"
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
              onClick={() => handleTabClick("Books")}
            >
              도서
            </button>
          </li>
          <li className="me-2">
            <button
              type="button"
              className={`inline-block rounded-t-lg border-b-2 p-4 ${
                activeTab === "Rooms"
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
              }`}
              onClick={() => handleTabClick("Rooms")}
            >
              공간
            </button>
          </li>
        </ul>

        <ul className="grid h-full grid-cols-2 gap-6 md:grid-cols-3">
          <li><TabRow /></li>
          <li><TabRow /></li>
          <li><TabRow /></li>
          <li><TabRow /></li>
        </ul>
      </div>
    </div>
  );
}
