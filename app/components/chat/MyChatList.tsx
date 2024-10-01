"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./MyChatList.module.css";
import { ChatRoomModel } from "@/app/model/chat/chat.model";

interface ChatRoomListProps {
  chatRooms: ChatRoomModel[] | null;
  currentChatRoomId: string;
}

export default function MyChatList({ chatRooms, currentChatRoomId }: ChatRoomListProps) {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  // Popover를 토글하는 함수
  const togglePopover = () => {
    setIsPopoverVisible((prev) => !prev);
  };

  const filteredChatRooms = chatRooms?.filter((room) => room.roomId !== currentChatRoomId);

  return (
    <div id="chatHead" className="px-5 py-3">
      <button
        id="popup-button"
        type="button"
        className="relative mb-3 me-4 w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-lg font-bold text-gray-100 hover:bg-green-600"
        onClick={togglePopover}
      >
        참여중인 대화방 이름 {"^"}
      </button>
      {isPopoverVisible && (
        <ul
          id="popover-bottom"
          className={`${styles.ListUp} transition-opacity duration-300 ease-in-out ${
            isPopoverVisible ? "opacity-100" : "opacity-0"
          }`}
        >
        {filteredChatRooms && filteredChatRooms.length > 0 ? (
          filteredChatRooms.map((room) => (
            <li key={room.roomId} className={styles.ListOne}>
              <Link href={`/chats/${room.roomId}`}>{room.name}</Link>
              <span className={styles.number}>{room.unReadMessageCount}</span>
            </li>
          ))
        ) : (
          <p>다른 채팅방이 없습니다</p>
        )}
      </ul>
      )}
    </div>
  );
}
