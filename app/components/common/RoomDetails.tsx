"use client";
import api from "@/app/api/axios";
import { FileModel } from "@/app/model/file.model";
import { RoomWTimeModel, TimeModel, RoomModel } from "@/app/model/room.model";
import { loadFile, selectFileList } from "@/app/service/File/file.service";
import { findRoomById } from "@/app/service/room/room.service";
import { getTimeList } from "@/app/service/room/time.service";
import { getCurrentRoom } from "@/lib/features/room.Slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface roomDetailProps {
  roomId: number;
}
export default function Details({ roomId }: roomDetailProps) {
  const [times, setTimes] = useState<TimeModel[]>([])
  const room = useSelector(getCurrentRoom);
  useEffect(() => {
    if (room?.id !== undefined) {
      getTimeList(room?.id).then(data => {
        if (data) {
          setTimes(data)
        }
      })
    }

  }, [])

  const groupedTimes = times.reduce((acc: Record<string, TimeModel[]>, time) => {
    const { date } = time;
    if (!acc[date]) {
      acc[date] = []; // Create new array for this date if it doesn't exist
    }
    acc[date].push(time);
    return acc;
  }, {});
  return (
    <div>
      <div className="h-[300px] w-full justify-center bg-gray-400">
        메인 상세보기
        <p>가게명: {room?.name}</p>
        <p>이용 정원: {room?.maxPeople} 명</p>
        <p>단독 사용 여부: {room?.opened ? "O" : "X"}</p>
        <p>이용 가능 시간: {room?.openTime} ~ {room?.closeTime}</p>
        <p>시간당 이용 금액: {room?.price}원</p>
        <p>이용 가능 시간 {groupedTimes && Object.keys(groupedTimes).map((date) => (
          <p key={date}>
            <p>{date}</p>
            {groupedTimes[date].map((time) => (
              <span key={time.id}>{time.time} </span>
            ))}
          </p>
        ))}</p>
      </div>
      <div className="my-6 grid min-h-screen grid-cols-2 place-items-center">=
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="col-span-2 h-[70%] w-[90%] bg-gray-400">
          안에 내용 넣기
        </div>
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="col-span-2 h-[70%] w-full bg-gray-400">
          안에 내용 넣기
        </div>
      </div>

      <div className="mx-auto flex h-[20px] w-full max-w-sm items-end">
        <button type="button" className="mx-2 rounded-full border px-3 py-2">
          🥰 찜하기 🥰
        </button>
        <button type="button" className="mx-2 rounded-full border px-3 py-2">
          예약하기
        </button>
        <button type="button" className="mx-2 rounded-full border px-3 py-2">
          뒤로가기
        </button>
      </div>
    </div >
  );
}
