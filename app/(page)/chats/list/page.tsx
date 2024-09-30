"use client";
import CardRow from "@/app/components/chat/CardRow";
import { ChatRoomModel } from "@/app/model/chat/chat.model";
import { findChatList } from "@/app/service/chat/chatRoom.service";
import { getError, getIsLoading, saveError, saveLoading } from "@/lib/features/chat/chat.Slice";
import {useAppDispatch} from "@/lib/store";
import { useEffect, useState } from "react";

export default function ChatList() {
  const nickname = 'A'; // 임의로 넣어둠
  const dispatch = useAppDispatch();
  const [chatRooms, setChatRooms] = useState<ChatRoomModel[] | null>(null)

  useEffect(() => {
    setChatRooms(findChatList(nickname,dispatch))
    dispatch(saveLoading(false));
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
