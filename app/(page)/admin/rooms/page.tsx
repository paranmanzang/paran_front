"use client";
import { RoomModel } from "@/app/model/room/room.model";
import { roomService } from "@/app/service/room/room.service";
import { getRooms, getSeperatedRooms, saveCurrentRoom } from "@/lib/features/room/room.slice";
import { useAppDispatch } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function RoomAdmin() {
  const rooms = useSelector(getRooms)
  const dispatch = useAppDispatch()
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  console.log("rooms 목록 불러오기 ", rooms)
  const route = useRouter()
  const [page, setPage] = useState(3)
  const [size, setSize] = useState(0)
  const { enabledrooms, notEnabledrooms } = useSelector(getSeperatedRooms)
  const [selectedCategory, setSelectedCategory] = useState<'관리' | '승인 대기'>('관리');
  const handleTabClick = (category: '관리' | '승인 대기') => {
    setSelectedCategory(category);
  };
  const showList: RoomModel[] = selectedCategory === '관리' ? enabledrooms : notEnabledrooms;

  useEffect(() => {
    roomService.findAll(page, size, dispatch);
  }, [page, size, dispatch])

  const onClick = (room: RoomModel) => {
    if (room.id !== undefined) {
      dispatch(saveCurrentRoom(room))
      route.push(`/rooms/${room.id}`)
    }
  }

  const onDelete = (id: string) => {
    // 삭제 로직 
    console.log(`Deleting room with id: ${id}`)
    roomService.drop(Number(id), dispatch)
  }
  const onUpdate = (id: string) => {
    if (id !== undefined) {
      roomService.modifyConfirm(Number(id), dispatch)
    }
  }
  return (
    <div className="mx-auto my-8 max-w-lg rounded-lg bg-green-100 p-6 shadow-md">
      {/* 카테고리 선택 탭 */}
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 ${selectedCategory === '관리' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleTabClick('관리')}
        >
          관리
        </button>
        <button
          className={`px-4 py-2 ${selectedCategory === '승인 대기' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
          onClick={() => handleTabClick('승인 대기')}
        >
          승인 대기
        </button>
      </div>

      {/* 목록 */}
      {showList.length > 0 && (
        showList.map((room) => (
          <li key={room.id}
            className="mx-auto my-3 flex items-center justify-around bg-white p-3">
            <div className="flex justify-around">
              <h2 className="text-lg">{room.name}, {room.id}</h2>
              <p>{room.createdAt}</p>
              <p>{room.enabled}</p>
            </div>
            {selectedCategory === '관리' && (
              <button
                type="button"
                onClick={() => onClick(room)}
                className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
              >
                상세보기
              </button>
            )}
            {selectedCategory === '승인 대기' && (
              <div>
                <button type="button" onClick={() => onUpdate(`${room.id}`)} className="mx-2 rounded-lg bg-green-100 p-3">승인</button>
                <button type="button" onClick={() => onDelete(`${room.id}`)} className="mx-2 rounded-lg bg-green-100 p-3">거절</button>
              </div>
            )}
          </li>
        ))
      )}
      {
        showList.length === 0 && (
          <li>정보가 존재하지 않습니다.</li>
        )
      }
    </div>
  );
}
