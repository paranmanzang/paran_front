"use client";
import { useState, useEffect } from "react";
import RoomRow from "./RoomRow";
import GroupRow from "./GroupRow";
import ChatRow from "./ChatRow";
import BookRow from './BookRow'
import { FaBook, FaSchool } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import AdminButton from "../../user/adminRow/AdminButton";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { getBooks } from "@/lib/features/group/book.Slice";
import { getGroups } from "@/lib/features/group/group.Slice";
import { getRooms } from "@/lib/features/room.Slice";
import axios from "@/app/api/axios";

export default function SideBar() {
  const [activeTab, setActiveTab] = useState("Groups");
  const nickname = 'A'; // 임의로 넣어둠
  const dispatch = useDispatch<AppDispatch>();
  const [rowData, setRowData] = useState<any[]>([]); // 빈 배열로 초기화
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const books = getBooks
  const groups = getGroups;
  // const chats = useSelector((state: RootState) => getChatRooms(state));
  const rooms = getRooms;


  const fetchTabData = async (tab: string) => {
    setLoading(true);
    setError(null); // 이전 에러 메시지 초기화
    let url = "";

    if (tab === "Rooms") url = `process.env.NEXT_PUBLIC_URL`;
    else if (tab === "Groups") url = `process.env.NEXT_PUBLIC_URL`;
    else if (tab === "Chats") url = `process.env.NEXT_PUBLIC_URL`;
    else if (tab === "Books") url = `process.env.NEXT_PUBLIC_URL`;

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
    setActiveTab(activeTab);
  }, [activeTab]);

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
    <div>
      {/* 이부분의 props 를 변경해줘야 함. */}
      <AdminButton />
      {/* <AdminButton page={'rooms'}/> */}
      {/* <SellerButton page={}/> */}
      <div className="flex min-h-screen w-full">
        <aside
          id="default-sidebar"
          className="w-64 bg-green-100"
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
                    className={`group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-green-200  ${activeTab === item.name
                        ? "bg-green-200 text-green-600 "
                        : "border-transparent hover:border-gray-300 hover:text-gray-600 "
                      }`}
                    onClick={() => setActiveTab(item.name)}
                  >
                    {item.icon}
                    <span className="ms-3 flex-1 whitespace-nowrap">{item.label}</span>
                    {item.name === "Chats" && (
                      <span className="ms-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800">
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
          <div className="mb-4 grid grid-cols-4 gap-4 md:grid-cols-3">
            {renderActiveContent()}
          </div>
        </div>
      </div>
    </div>
  );
}