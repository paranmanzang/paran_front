"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Row from "./Row";
import { FaBook, FaSchool } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import AdminButton from "../user/adminRow/AdminButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { getBooks } from "@/lib/features/group/book.Slice";
import { getGroups } from "@/lib/features/group/group.Slice";
import { getRooms } from "@/lib/features/room.Slice";

export default function SideBar() {
  const nickname = 'A'; // 임의로 넣어둠
  const dispatch = useDispatch<AppDispatch>();
  const [activeTab, setActiveTab] = useState("All");
  const [rowData, setRowData] = useState<any[]>([]); // 빈 배열로 초기화
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const books = useSelector((state: RootState) => getBooks(state));
  const groups = useSelector((state: RootState)=> getGroups(state));
  // const chats = useSelector((state: RootState) => getChatRooms(state));
  const rooms = useSelector((state: RootState) => getRooms(state));


  const fetchTabData = async (tab: string) => {
    setLoading(true);
    setError(null); // 이전 에러 메시지 초기화
    let url = "";

    if (tab === "Rooms") url = "/api/rooms";
    else if (tab === "Groups") url = "/api/groups/groups";
    else if (tab === "Chats") url = "/api/chats";
    else if (tab === "Books") url = "/api/books";

    try {
      const response = await axios.get(url);

      // 데이터가 배열인지 확인 후 설정
      if (Array.isArray(response.data)) {
        setRowData(response.data); // 정상적인 배열이면 저장
      } else {
        console.error("Received data is not an array:", response.data);
        setRowData([]); // 배열이 아닌 경우 빈 배열로 설정
      }
    } catch (error: any) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data"); // 에러 메시지 설정
    } finally {
      setLoading(false); // 로딩 상태 업데이트
    }
  };

  const handleRowSelect = (id: string) => {
    setSelectedId(id);
  };

  useEffect(() => {
    fetchTabData(activeTab);
  }, [activeTab]);

  return (
    <div>
      <AdminButton />
      {/* <SellerButton id={selectedId || "2"} /> */}
      <div className="relative min-h-screen overflow-x-hidden">
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
                  className={`group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700 ${
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
                  className={`group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700 ${
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
                  className={`group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700 ${
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
                  className={`group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200 dark:text-white dark:hover:bg-gray-700 ${
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
                  <span className="ms-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                    3
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
        <div className="absolute top-0 h-full w-[88%] overflow-y-scroll p-8 sm:ml-64">
          <div className="mb-4 grid grid-cols-3 gap-4">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : rowData.length > 0 ? (
              rowData.map((item: any) => (
                <Row
                  data={{
                    id: item.id,
                    title: item.title,
                    content: item.content,
                    fetchUrl: item.fetchUrl,
                    linkUrl: item.linkUrl,
                    imageUrl: item.imageUrl, // optional
                    author: item.author, // optional
                  }}
                  onSelect={() => handleRowSelect(item.id)}
                  isSelected={selectedId === item.id}
                  key={item.id}
                />
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
