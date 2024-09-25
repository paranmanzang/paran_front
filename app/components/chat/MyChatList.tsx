import React, { useEffect } from "react";
import Link from "next/link";

import "./MyChatList.css";
import { ChatRoomModel } from "@/app/model/chat/chat.model";

interface ChatRoomListProps {
  chatRooms: ChatRoomModel[] | null
  currentChatRoomId: string
}
export default function ChatRoomList({ chatRooms, currentChatRoomId }: ChatRoomListProps) {
  useEffect(() => {
    const targetElement = document.getElementById("popover-bottom");
    const triggerElement = document.getElementById("popup-button");

    if (targetElement && triggerElement) {
      const options = {
        placement: "bottom",
        triggerType: "click",
        offset: 10,
      };
    }
  }, []);

  const togglePopover = () => {
    const popover = document.getElementById("popover-bottom");
    if (popover) {
      popover.classList.toggle("invisible");
      popover.classList.toggle("opacity-0");
    }
  };

  const filteredChatRooms = chatRooms?.filter((room) => room.roomId !== currentChatRoomId);

  return (
    <div id="chatHead" className="px-5 py-3">
      <button
        id="popup-button"
        type="button"
        className="relative mb-3 me-4 w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-lg font-bold text-gray-100 hover:bg-green-600 dark:hover:bg-green-700"
        onClick={togglePopover}
      >
        참여중인 대화방 이름 {"^"}
      </button>
      <ul
        id="popover-bottom"
        className="listUp invisible absolute z-10 inline-block w-80 space-y-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-lg text-gray-500 opacity-0 shadow-sm transition-opacity
         dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
      >
        {filteredChatRooms && filteredChatRooms.length > 0 ? (
          filteredChatRooms.map((room) => (
            <li key={room.roomId} className="ListOne">
              <Link href={`/chats/${room.roomId}`}>{room.name}</Link>
              <span className="number">{room.unReadMessageCount}</span>
            </li>
          ))
        ) : (
          <p>다른 채팅방이 없습니다</p>
        )}
      </ul>
    </div>
  );
}
