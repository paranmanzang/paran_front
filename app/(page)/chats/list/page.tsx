"use client";
import CardRow from "@/app/components/chat/CardRow";
import { ChatRoomModel } from "@/app/model/chat/chat.model";
import { findChatList } from "@/app/service/chat/chatRoom.service";
import {useAppDispatch} from "@/lib/store";
import { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import {getError, getIsLoading} from "@/lib/features/chat/chat.Slice";

export default function ChatList() {
  const nickname = 'J'; // 임의로 넣어둠
  const dispatch = useAppDispatch();
  const [chatRooms, setChatRooms] = useState<ChatRoomModel[] | null>(null)
  const loding = useSelector(getIsLoading)
  const error = useSelector(getError);

  useEffect(() => {
    findChatList({ nickname, dispatch })
        .then(result => {
          setChatRooms(result);
        })
  }, [nickname,dispatch]);

  return (
    <div className="mx-auto my-6 grid w-full max-w-lg grid-cols-2 gap-3">
      {chatRooms?.map((room) => (
        <CardRow key={room.roomId}
          chatRoom={room} />
      ))}
    </div>
  );
}
