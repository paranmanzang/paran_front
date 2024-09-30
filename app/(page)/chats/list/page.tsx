"use client";
import CardRow from "@/app/components/chat/CardRow";
import { ChatRoomModel } from "@/app/model/chat/chat.model";
import { getChatList } from "@/app/service/chat/chatRoom.service";
import { getError, getIsLoading, saveError, saveLoading } from "@/lib/features/chat/chat.Slice";
import {useAppDispatch} from "@/lib/store";
import { useEffect, useState } from "react";

export default function ChatList() {
  const nickname = 'A'; // 임의로 넣어둠
  const dispatch = useAppDispatch();
  const [chatRooms, setChatRooms] = useState<ChatRoomModel[] | null>(null)
  const loading = getIsLoading;
  const error = getError;

  useEffect(() => {
    dispatch(saveLoading(true));
    getChatList({ nickname })
      .then(result => {
        if (result && Array.isArray(result)) {
          setChatRooms(result)
        } else {
          dispatch(saveError("방 목록을 불러오는 중 오류가 발생했습니다."));
        }
      })
      .catch((error) => {
        dispatch(saveError((error as Error).message || "방 목록을 불러오는 중 오류가 발생했습니다."));
      })
      .finally(() => {
        dispatch(saveLoading(false)); // 항상 로딩 종료
      });
  }, [nickname]);

  return (
    <div className="mx-auto my-6 grid w-full max-w-lg grid-cols-2 gap-3">
      {chatRooms?.map((room) => (
        <CardRow key={room.roomId}
          chatRoom={room} />
      ))}
    </div>
  );
}
