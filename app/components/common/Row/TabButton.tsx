"use client";
import { useState } from "react";
import GroupRow from "./GroupRow";
import RoomRow from "./RoomRow";
import BookRow from "./BookRow";
import ChatRow from "./ChatRow";

export default function TabButton() {
  // 현재 선택된 탭 상태
  const [activeTab, setActiveTab] = useState("Groups");
  // 탭 클릭 시 상태 변경 함수
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderActiveContent = () => {
    switch (activeTab) {
      case "Groups":
        return <GroupRow active={true} onSelect={() => { }} />;
      case "Rooms":
        return <RoomRow active={true} onSelect={() => { }} />;
      case "Books":
        return <BookRow active={true} onSelect={() => { }} />;
      case "Chats":
        return <ChatRow active={true} onSelect={() => { }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          <li className="me-2">
            <button
              type="button"
              className={`inline-block rounded-t-lg border-b-2 p-4 ${activeTab === "Groups"
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
              className={`inline-block rounded-t-lg border-b-2 p-4 ${activeTab === "Chats"
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              onClick={() => handleTabClick("Chats")}
            >
              소모임-채팅
            </button>
          </li>
          <li className="me-2">
            <button
              type="button"
              className={`inline-block rounded-t-lg border-b-2 p-4 ${activeTab === "Rooms"
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              onClick={() => handleTabClick("Rooms")}
            >
              공간
            </button>
          </li>
          <li className="me-2">
            <button
              type="button"
              className={`inline-block rounded-t-lg border-b-2 p-4 ${activeTab === "Books"
                  ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                  : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                }`}
              onClick={() => handleTabClick("Books")}
            >
              도서
            </button>
          </li>
        </ul>
      </div>
      <ul className="grid h-full w-full grid-cols-3 gap-6 mt-3 mb-8 md:grid-cols-3">
        <li>{renderActiveContent()}</li>
      </ul>
    </>
  );
}
