import { ChatUserModel } from "@/app/model/chat/chat.model";
import Image from "next/image";
import { useState, useEffect } from "react";
import ModalFriend from "./ModalFriend";
import styles from './PeopleList.module.css';

interface PeopleListProps {
  chatUser: ChatUserModel;
}

export default function PeopleList({ chatUser }: PeopleListProps) {
  const [onToggle, setOnToggle] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  // useEffect(() => {
  //   let eventSource: EventSource | null = null;

  //   //sse end point 설정해야합니당
  //   const setupSSE = () => {
  //     eventSource = new EventSource(`/api/user-status/${chatUser.nickname}`);

  //     eventSource.onmessage = (event) => {
  //       const data = JSON.parse(event.data);
  //       setIsOnline(data.isOnline);
  //     };

  //     eventSource.onerror = (error) => {
  //       console.error('SSE error:', error);
  //       if (eventSource) {
  //         eventSource.close();
  //       }
  //     };
  //   };

  //   setupSSE();

  //   return () => {
  //     if (eventSource) {
  //       eventSource.close();
  //     }
  //   };
  // }, [chatUser.nickname]);

  return (
    <li className="border-b w-full">
      <div
        className="flex items-center px-6 py-4 space-x-6 justify-between"
        style={{ maxWidth: "600px", margin: "0 auto" }} // 가운데 정렬
      >
        {/* 프로필 이미지와 온라인 상태 */}
        <div className="relative">
          <Image
            width={50}
            height={50}
            className="rounded-full bg-green-400"
            src="/"
            alt="user profile"
          />
          <span className={`${isOnline ? "online" : "offline"}`}></span>
        </div>

        {/* 닉네임 버튼 */}
        <button
          className="text-white text-lg font-semibold hover:text-green-300 focus:outline-none"
          onClick={() => setOnToggle((prev) => !prev)}
        >
          {chatUser.nickname}
        </button>

        {/* 모달 */}
        <div
          className={`${onToggle ? "visible" : "invisible"
            } transition-all duration-300`}
        >
          <ModalFriend name={chatUser.nickname} />
        </div>
      </div>
    </li>
  );
}