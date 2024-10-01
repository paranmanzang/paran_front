"use client";
import { useState } from "react";
import SideBarTab from "./SideBarTab";
import ContentArea from "./ContentArea";
import AdminButton from "../../user/adminRow/AdminButton";
import { FaBook, FaSchool,  } from "react-icons/fa";
import {FaUserGroup} from "react-icons/fa6"
import { MdMessage } from "react-icons/md";

const tabs = [
  { name: "Groups", icon: <FaUserGroup />, label: "우리들의 모임" },
  { name: "Rooms", icon: <FaSchool />, label: "우리들의 공간" },
  { name: "Books", icon: <FaBook />, label: "우리들의 책" },
  // { name: "Chats", icon: <MdMessage />, label: "모임채팅 보기" },
];

export default function SideBar() {
  const [activeTab, setActiveTab] = useState("Groups");

  return (
    <div>
      <AdminButton />
      <div className="flex min-h-screen w-full">
        <aside id="default-sidebar" className="w-64 bg-green-100" aria-label="Sidebar">
          <div className="h-full overflow-y-auto px-3 py-4">
            <ul className="space-y-2 font-medium">
              {tabs.map((tab) => (
                <SideBarTab
                  key={tab.name}
                  tab={tab}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </ul>
          </div>
        </aside>
        <ContentArea activeTab={activeTab} />
      </div>
    </div>
  );

}