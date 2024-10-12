"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useAppDispatch } from "@/lib/store";
import { getNickname } from "@/lib/features/users/user.slice";
import { ChatRoomModel } from "@/app/model/chat/chat.model";
import { chatRoomService } from "@/app/service/chat/chatRoom.service";
import CardRow from "../../chat/CardRow";
import ChatCard from "./ChatCard";
interface ChatRowProps {
  active: boolean;
  onSelect: () => void;
}

const ChatRow = ({ active, onSelect }: ChatRowProps) => {
  const nickname = useSelector(getNickname) as string;
  const dispatch = useAppDispatch();
  const [chatRooms, setChatRooms] = useState<ChatRoomModel[] | null>(null)

  useEffect(() => {
    chatRoomService.findList({ nickname, dispatch })
      .then(result => {
        setChatRooms(result);
      })
  }, [nickname, dispatch]);

  return (
    <>
      {chatRooms?.map((room) => (
        <ChatCard key={room.roomId}
          chatRoom={room} active={active} onSelect={onSelect} />
      ))}
    </>
  );
};

export default ChatRow;