// "use client";
// import React, { useEffect } from "react";
// import Link from "next/link";

// import styles from"./MyChatList.module.css";
// import { ChatRoomModel } from "@/app/model/chat/chat.model";

// interface ChatRoomListProps {
//   chatRooms: ChatRoomModel[] | null
//   currentChatRoomId: string
// }
// export default function ChatRoomList({ chatRooms, currentChatRoomId, togglePopUp }: ChatRoomListProps) {
//   useEffect(() => {
//     const targetElement = document.getElementById("popover-bottom");
//     const triggerElement = document.getElementById("popup-button");

//     if (targetElement && triggerElement) {
//       const options = {
//         placement: "bottom",
//         triggerType: "click",
//         offset: 10,
//       };
//     }
//   }, []);

//   const togglePopover = () => {
//     const popover = document.getElementById("popover-bottom");
//     if (popover) {
//       popover.classList.toggle("invisible");
//       popover.classList.toggle("opacity-1");
//     }
//   };

//   const filteredChatRooms = chatRooms?.filter((room) => room.roomId !== currentChatRoomId);

//   return (
//     <div id="chatHead" className="px-5 py-3">
//       <button
//         id="popup-button"
//         type="button"
//         className="relative mb-3 me-4 w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-lg font-bold text-gray-100 hover:bg-green-600"
//         onClick={togglePopover}
//       >
//         참여중인 대화방 이름 {"^"}
//       </button>
//       <ul
//         id="popover-bottom"
//         className={styles.listUp} 
//       >
//         {filteredChatRooms && filteredChatRooms.length > 0 ? (
//           filteredChatRooms.map((room) => (
//             <li key={room.roomId} className={styles.ListOne}>
//               <Link href={`/chats/${room.roomId}`}>{room.name}</Link>
//               <span className={styles.number}>{room.unReadMessageCount}</span>
//             </li>
//           ))
//         ) : (
//           <p>다른 채팅방이 없습니다</p>
//         )}
//       </ul>
//     </div>
//   );
// }



"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./MyChatList.module.css";
import { ChatRoomModel } from "@/app/model/chat/chat.model";

interface ChatRoomListProps {
  chatRooms: ChatRoomModel[] | null;
  currentChatRoomId: string;
}

export default function ChatRoomList({ chatRooms, currentChatRoomId }: ChatRoomListProps) {
  // Popover의 가시성을 관리하는 상태
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  // Popover를 토글하는 함수
  const togglePopover = () => {
    setIsPopoverVisible((prev) => !prev);
  };

  // 현재 활성화된 채팅방을 제외한 채팅방 필터링
  const filteredChatRooms = chatRooms?.filter((room) => room.roomId !== currentChatRoomId);

  return (
    <div id="chatHead" className="px-5 py-3">
      {/* Pop-up button */}
      <button
        id="popup-button"
        type="button"
        className="relative mb-3 me-4 w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-lg font-bold text-gray-100 hover:bg-green-600"
        onClick={togglePopover}
      >
        참여중인 대화방 이름 {"^"}
      </button>

      {/* Popover List */}
      <ul
        id="popover-bottom"
        className={`${styles.listUp} transition-opacity duration-300 ease-in-out ${
          isPopoverVisible ? `${styles.visible}` : `${styles.invisible}`
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
    </div>
  );
}
