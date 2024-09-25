"use client";
import CardRow from "@/app/components/chat/CardRow";
import { ChatRoomModel } from "../../app/modelchat.model";
import { getChatList } from "@/app/service/chat/chatRoom.service";
import { useEffect, useState } from "react";
export default function ChatList() {
  const [chatRooms, setChatRooms] = useState<ChatRoomModel[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchChatRooms = async () => {
      const nickname = 'A';
      const result = await getChatList({ nickname });

      if (result && Array.isArray(result)) {
        setChatRooms(result);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    fetchChatRooms();
  }, [chatRooms]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>방 목록을 불러오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <div className="mx-auto my-6 grid w-full max-w-lg grid-cols-2 gap-3">
      {chatRooms?.map((room) => (
        <CardRow key={room.roomId}
          roomId={room.roomId}
          name={room.name}
          userCount={room.userCount}
          unReadMessageCount={room.unReadMessageCount} />
      ))}
    </div>
  );
}
