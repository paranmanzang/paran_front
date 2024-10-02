import { ChatUserModel } from "@/app/model/chat/chat.model";
import Image from "next/image";
import { useState } from "react";
import ModalFriend from "./ModalFriend";
import styles from './PeopleList.module.css';

interface PeopleListProps {
  chatUser: ChatUserModel;
}

export default function PeopleList({ chatUser }: PeopleListProps) { // 컴포넌트 이름 대문자로 시작
  const [onToggle, setOnToggle] = useState(false);
  const onFriendShip = () => {
    setOnToggle((prev) => !prev);
  };
  const [onLine, setOnLine] = useState(false);
  // user가 입장하면 onLine == true가 되어야 함.

  return (
      <li className="border-b w-full">
        {/* userId 받아서 */}
        <div className="flex justify-around px-3 py-2 my-3 items-center">
          <div className="relative">
            <Image
                width={46}
                height={46}
                className="rounded-full bg-green-400"
                src="/"
                alt="userprofile"
            />

            {/* user 상태 온라인/오프라인 구분 */}
            {onLine ? (
                <span className="absolute left-7 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
            ) : (
                <span className="absolute left-7 top-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
            )}
          </div>
          <p className="text-white text-lg font-semibold">{chatUser.nickname}</p>
          <button
              className="text-xs border-white border p-2 rounded-lg text-white hover:bg-green-600"
              onClick={onFriendShip}
          >
            보기
          </button>
          <div
              className={`${styles.toggleBottom} relative top-0 ${
                  onToggle ? styles.visible : styles.invisible
              }`}
          >
            <ModalFriend />
          </div>
        </div>
      </li>
  );
}