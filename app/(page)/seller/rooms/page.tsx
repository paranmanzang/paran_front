"use client"
import { RoomModel } from "@/app/model/room/room.model"
import { roomService } from "@/app/service/room/room.service"
import { getDisabledRoomByNickname, getEnabledRoomByNickname, saveCurrentRoom } from "@/lib/features/room/room.slice"
import { getNickname } from "@/lib/features/users/user.slice"
import { useAppDispatch } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function SellerRoom() {
  const nickname = useSelector(getNickname)
  const dispatch = useAppDispatch()
  const enabledRooms = useSelector(getEnabledRoomByNickname)
  const disabledRooms = useSelector(getDisabledRoomByNickname)
  const route = useRouter()
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState<'관리' | '승인 대기'>('관리');
  // rooms 에 있는 nickname 어떻게 가져옴? 
  // const userRooms = rooms.nickname === nickname;

  const handleTabClick = (category: '관리' | '승인 대기') => {
    setSelectedCategory(category);
  };
  const showList: RoomModel[] = selectedCategory === '관리' ? enabledRooms : disabledRooms;

  useEffect(() => {
    if (nickname) {
      if (selectedCategory === '관리') {
        roomService.findEnableByNickname(page, size, nickname, dispatch)
      } else {
        roomService.findDisableByNickname(page, size, nickname, dispatch)
      }
    }
  }, [nickname, page, size, dispatch, selectedCategory])

  const onDelete = (id: string) => {
    console.log(`Deleting room with id: ${id}`)
    roomService.drop(Number(id), dispatch)
  }


  const onUpdate = (room: RoomModel) => {
    if (room.id !== undefined) {
      dispatch(saveCurrentRoom(room))
      route.push(`/rooms/update/${room.id}`)
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
        showList.map((room, index) => (
          <li key={room.id}
            className="mx-auto my-3 flex items-center justify-around bg-white p-3">
            <div className="flex justify-around">
              <h2 className="text-lg">{room.name}, {room.id}</h2>
              <p>{room.createdAt}</p>
              <p>{room.enabled}</p>
            </div>
            {selectedCategory === '관리' && (
              <div>
                <button type="button" onClick={() => onDelete(`${room.id}`)} className="mx-2 rounded-lg bg-green-100 p-3">삭제</button>
                <button type="button" onClick={() => onUpdate(room)} className="mx-2 rounded-lg bg-green-100 p-3">수정</button>
              </div>
            )}
            {selectedCategory === '승인 대기' && (
              <div>
                <button type="button" onClick={() => onDelete(`${room.id}`)} className="mx-2 rounded-lg bg-green-100 p-3">등록 취소</button>
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
      <button type="button" onClick={() => route.back()} className="mx-2 rounded-lg bg-green-100 p-3">뒤로가기</button>
    </div>
  )
}
