"use client"
import Pagination from "@/app/components/common/Row/pagination/Pagination"
import { RoomModel } from "@/app/model/room/room.model"
import { roomService } from "@/app/service/room/room.service"
import { getRooms } from "@/lib/features/room/room.slice"
import { getCurrentUser } from "@/lib/features/users/user.slice"
import { useAppDispatch } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function SellerRoom() {
  const user = useSelector(getCurrentUser)
  const nickname = user?.nickname as string
  const dispatch = useAppDispatch()
  const rooms = useSelector(getRooms)
  const route = useRouter()
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);

    // rooms 에 있는 nickname 어떻게 가져옴? 
    const userRooms = rooms.nickname === nickname;

  useEffect(() => {
    if (nickname) {
      roomService.findByUser(nickname, page, size, dispatch)
    }
  }, [nickname, page, size, dispatch])

  const onDelete = (id: string) => {
    // 삭제 로직 
    console.log(`Deleting room with id: ${id}`)
  }
  const onUpdate = (id: string) => {
    route.push(`/rooms/update/${id}`)
  }


  return (
    <div className="max-w-lg mx-auto my-8">
      <div className="w-full">
        <button type="button" onClick={() => route.push('/rooms/add')} className="p-3 bg-green-100 rounded-lg">등록하기</button>
      </div>
      <ul className="p-6 my-8 bg-green-100 rounded-lg">
      {userRooms.length > 0 ? (
          rooms.map((room) => (
            <li key={room.id}
              className="my-3 mx-auto p-3 bg-white flex justify-around items-center">
              <div className="flex justify-around">
                <h2 className="text-lg">{room.name}</h2>
                <p>{room.createdAt}</p>
                <p>{room.enabled}</p>
              </div>
              <div>
                <button type="button" onClick={() => onDelete(`${room.id}`)} className="p-3 bg-green-100 mx-2 rounded-lg">삭제</button>
                <button type="button" onClick={() => onUpdate(`${room.id}`)} className="p-3 bg-green-100 mx-2 rounded-lg">수정</button>
              </div>
            </li>
          ))
        ) : (
          <li>등록한 공간이 없습니다</li>
        )}
      </ul>
      {/* <Pagination /> */}
      <button type="button" onClick={() => route.back()} className="p-3 bg-green-100 mx-2 rounded-lg">뒤로가기</button>
    </div>
  )
}
