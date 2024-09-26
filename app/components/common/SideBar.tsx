"use client";
import { useState, useEffect } from "react";
import RoomRow from "./Row/RoomRow";
import GroupRow from "./Row/GroupRow";
import ChatRow from "./Row/ChatRow";
import BookRow from './Row/BookRow'
import { FaBook, FaSchool } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import AdminButton from "../user/adminRow/AdminButton";
import SellerButton from "../user/seller/SellerButton";

export default function SideBar() {
  const [activeTab, setActiveTab] = useState("Groups");

  useEffect(() => {
    setActiveTab(activeTab);
  }, [activeTab]);

  const renderActiveContent = () => {
    switch (activeTab) {
      case "Groups":
        return <GroupRow active={true} onSelect={() => {}} />;
      case "Rooms":
        return <RoomRow active={true} onSelect={() => {}} />;
      case "Books":
        return <BookRow active={true} onSelect={() => {}} />;
      case "Chats":
        return <ChatRow active={true} onSelect={() => {}} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <AdminButton />
      {/* <SellerButton /> */}
      <div className="flex min-h-screen w-full">
        <aside
          id="default-sidebar"
          className="w-64 bg-green-100 dark:bg-gray-800"
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto px-3 py-4">
            <ul className="space-y-2 font-medium">
              {[
                { name: "Groups", icon: <FaUserGroup />, label: "우리들의 모임" },
                { name: "Rooms", icon: <FaSchool />, label: "우리들의 공간" },
                { name: "Books", icon: <FaBook />, label: "우리들의 책" },
                { name: "Chats", icon: <MdMessage />, label: "모임채팅 보기" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    type="button"
                    className={`group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700 ${
                      activeTab === item.name
                        ? "bg-green-200 text-green-600 dark:bg-gray-700 dark:text-green-500"
                        : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                    }`}
                    onClick={() => setActiveTab(item.name)}
                  >
                    {item.icon}
                    <span className="ms-3 flex-1 whitespace-nowrap">{item.label}</span>
                    {item.name === "Chats" && (
                      <span className="ms-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                        3{/* 채팅방 갯수 ? */}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="mb-4 grid grid-cols-1 gap-4">
            {renderActiveContent()}
          </div>
        </div>
      </div>
    </div>
  );
}