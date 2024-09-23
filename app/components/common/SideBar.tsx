"use client";
import { useState, useEffect } from "react";
import { fetchData } from "@/app/api/fetchData";
import Row from "./Row";
import { FaBook } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

export default function SideBar() {

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [rowData, setRowData] = useState<any[]>([]); // Row 컴포넌트로 전달할 데이터
  const [max, setMax] = useState<number>(5); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 탭 상태에 따라 다른 데이터를 가져오는 함수
  const fetchTabData = async (tab: string) => {
    let url = "";

    // 각 탭에 따라 다른 API URL을 설정
    if (tab === "Rooms") {
      url = "/api/rooms/list";
    } else if (tab === "Groups") {
      url = "/groups";
    } else if (tab === "Chats") {
      url = "/chats";
    } else if(tab === 'Books') {
      url = "/books";
    }

    // axios로 데이터 fetch
    try {
      const response = await fetchData(url);
      setRowData(response.data); // API로부터 받아온 데이터를 상태에 저장
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // activeTab이 변경될 때마다 데이터를 가져옴
  useEffect(() => {
    fetchTabData(activeTab);
  }, [activeTab]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* <AdminButton /> */}
      
      <aside
        id="default-sidebar"
        className="top-100 sticky left-0 z-40 w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="min-h-screen overflow-y-auto bg-green-100 px-3 py-4 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
                <button
                  type="button"
                  className={`group dark:hover:bg-gray-700 flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white ${
                    activeTab === "Groups"
                      ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                      : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("Groups")}
                >
                  <FaUserGroup />
                  <span className="ms-3 flex-1 whitespace-nowrap">
                    우리들의 모임
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`group dark:hover:bg-gray-700 flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white ${
                    activeTab === "Rooms"
                      ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                      : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("Rooms")}
                >
                 <FaSchool />
                  <span className="ms-3 flex-1 whitespace-nowrap">
                    우리들의 공간
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`group dark:hover:bg-gray-700 flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white ${
                    activeTab === "Books"
                      ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                      : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("Books")}
                >
                 <FaBook />
                  <span className="ms-3 flex-1 whitespace-nowrap">
                    우리들의 책
                  </span>
                </button>
              </li>
              
              <li>
                <button
                  type="button"
                  className={`group dark:hover:bg-gray-700 flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white ${
                    activeTab === "Chats"
                      ? "border-green-600 text-green-600 dark:border-green-500 dark:text-green-500"
                      : "border-transparent hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                  }`}
                  onClick={() => setActiveTab("Chats")}
                >
                  <MdMessage />
                  <span className="ms-3 flex-1 whitespace-nowrap">
                    모임채팅 보기
                    
                  </span>
                   <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">3</span>
                </button>
              </li>
          </ul>
        </div>
      </aside>
      <div className="p-8 sm:ml-64 w-[88%] absolute top-0 h-full overflow-y-scroll">
        <div className="mb-4 grid grid-cols-3 gap-4">
          {rowData.length > 0 ? (
             rowData.slice(0, max).map((item: any) => (
              <Row
                key={item.id}
                title={item.title}
                content={item.content}
                fetchUrl={item.fetchUrl}
                linkUrl={item.linkUrl}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
