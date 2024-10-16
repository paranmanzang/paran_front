"use client";
import { RoomModel } from "@/app/model/room/room.model";
import { roomService } from "@/app/service/room/room.service";
import { getRooms, saveCurrentRoom } from "@/lib/features/room/room.slice";
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
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(0)

  useEffect(() => {
    const roomlist = roomService.findAll(1, 50, dispatch);
    console.log("roomlist 불러오기유", roomlist)
  }, [page, size, dispatch])

  const onClick = (room: RoomModel) => {
    if (room.id !== undefined) {
      dispatch(saveCurrentRoom(room))
      route.push(`/rooms/${room.id}`)
    }
  }
  return (
    <div className="mx-auto my-[40px] h-auto max-w-lg">
      <div id="btn" className="m-2 max-w-full">
        <Link href="/admin" className="rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">뒤로가기</Link>
      </div>
      <ul className="h-1/2 rounded-lg bg-green-100 p-10">
        {rooms.map((room, index) => (
          <li key={index}>
            <div
              className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
            >
              {/* <div className="size-8 rounded-sm bg-green-500">Img</div> */}
              <p className="w-[30%]">{room.name}</p>
              <span className="text-xs w-[30%]">등록일: <br/>
                {formatDate(room.createdAt ?? "2024-01-01T00:00:00")}</span>
              <button
                type="button"
                onClick={() => onClick(room)}
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
