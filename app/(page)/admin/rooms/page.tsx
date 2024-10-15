"use client";
import { roomService } from "@/app/service/room/room.service";
import { getRooms } from "@/lib/features/room/room.slice";
import { useAppDispatch } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


export default function RoomAdmin() {
  const rooms = useSelector(getRooms)
  const dispatch = useAppDispatch()
  
  console.log("rooms 목록 불러오기 ", rooms)
  const route = useRouter()
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(0)

  useEffect(() => {
    const roomlist = roomService.findAll(page, size, dispatch);
    console.log("roomlist 불러오기유", roomlist)
  }, [page, size, dispatch])

  return (
    <div className="mx-auto my-[40px] h-auto max-w-lg">
       <div id="btn" className="m-2 max-w-full">
        <Link href="/admin" className="rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">뒤로가기</Link>
      </div>
      <ul className="h-1/2 rounded-lg bg-green-100 px-10 py-10">
        {rooms.map((room, index) => (
        <li key={index}>
          <div
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>{room.name}</p>
            <span className="text-xs">등록일:{room.createdAt}</span>
            <button
              type="button"
              onClick={() => {route.push(`/rooms/${room.id}`)}}
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
            >
              상세보기
            </button>
          </div>
        </li>
        ))}
      </ul>
      
    </div>
  );
}
