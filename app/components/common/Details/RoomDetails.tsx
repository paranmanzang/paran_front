"use client";
import { TimeModel } from "@/app/model/room/room.model";
import { timeService } from "@/app/service/room/time.service";
import { getCurrentRoom, saveLoading } from "@/lib/features/room/room.slice";
import { useEffect, useState } from "react";
import DetailButton from "./DetailButton";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/lib/store";
import Image from "next/image";
import { getCurrentFile } from "@/lib/features/file/file.slice";
interface roomDetailProps {
  roomId: number;
}
export default function Details({ roomId }: roomDetailProps) {
  const [times, setTimes] = useState<TimeModel[]>([])
  const room = useSelector(getCurrentRoom);
  const file = useSelector(getCurrentFile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (room && room.id !== undefined) {
      timeService.findByRoom(room.id, dispatch).then(data => {
        if (data) {
          setTimes(data)
        }
      })
    }
    dispatch(saveLoading(false))
  }, [dispatch])
  const getRoomImage = (path: string | undefined) => {
    if (file !== undefined) {
      return !path?.includes("default.png") ? `http://localhost:8000/api/files/one?path=${path}` : process.env.NEXT_PUBLIC_IMAGE_DEFAULT; // 기본 이미지 제공
    }
    return process.env.NEXT_PUBLIC_;
  };
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
      <div className="my-6 grid min-h-screen grid-cols-2 place-items-center">
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <Image
          width={400}
          height={380}
          className="cursor-pointer rounded-t-lg"
          src={getRoomImage(file?.path) ?? `process.env.NEXT_PUBLIC_IMAGE_DEFAULT`}
          alt={`cover of ${room?.title}`}
          priority
        />
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

      <DetailButton thisPage="/rooms" displayReview="block" displayReservation="block" />
    </div >
  );
}
