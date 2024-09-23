"use client";
import { useEffect, useState } from "react";
import { RoomWTimeModel } from "../model/room/room";
import { findRoomById } from "../service/room/room.service";
import { loadFile, selectFileList } from "../service/File/file.service";
import { FileModel } from "../model/file/file.model";

export default function Details() {
  const id: number = 2;
  const [room, setRoom] = useState<RoomWTimeModel>();
  const [files, setFiles] = useState<FileModel[]>();
  useEffect(() => {
    findRoomById(id).then(data => {
      if (data) {
        setRoom(data)
      }
    })
    selectFileList(2, 'room').then(data => {
      if (data) {
        setFiles(data)
      }
    })
  }, [])
  return (
    <div>
      <div className="h-[300px] w-full justify-center bg-gray-400">
        메인 상세보기
      </div>
      <div className="my-6 grid min-h-screen grid-cols-2 place-items-center">
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
    </div>
  );
}
