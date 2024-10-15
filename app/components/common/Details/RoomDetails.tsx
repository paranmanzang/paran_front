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
import { getCurrentUser } from "@/lib/features/users/user.slice";

interface DetailsProps {
  roomId: string
}

export default function Details({ roomId }: DetailsProps) {
  const room = useSelector(getCurrentRoom);
  const file = useSelector(getCurrentFile);
  const dispatch = useAppDispatch();
  const user = useSelector(getCurrentUser);


  return (
    <div>
      <div className="mx-auto my-8 flex w-4/5 items-center justify-center gap-3">
        {file && <Image
          width={600}
          height={400}
          className="cursor-pointer rounded-lg bg-green-400"
          src={file.path === process.env.NEXT_PUBLIC_IMAGE_DEFAULT ? process.env.NEXT_PUBLIC_IMAGE_DEFAULT : `http://localhost:8000/api/files?path=${file.path}`}
          alt={`cover of ${room?.title}`}
          priority
        />}

      </div>
      <hr className="mx-auto my-8 w-4/5" />
      <div className="mx-auto my-8 w-[45rem]">
        <div className="h-[300px] w-full justify-center rounded-lg bg-green-50 p-8">
          <p className="mb-2">가게명: {room?.name}</p>
          <p className="mb-2">이용 정원: {room?.maxPeople} 명</p>
          <p className="mb-2">단독 사용 여부: {room?.opened ? "O" : "X"}</p>
          <p className="mb-2">이용 가능 시간: {room?.openTime} ~ {room?.closeTime}</p>
          <p className="mb-2">시간당 이용 금액: {room?.price}원</p>
        </div>

      </div>
      {user?.role &&
        <DetailButton thisPage="/rooms" displayBoard="block" displayReview="block" displayReservation="block" />
      }
      {!user?.role &&
        <DetailButton thisPage="/rooms" displayBoard="none" displayReview="none" displayReservation="none" />
      }

    </div >
  );
}
