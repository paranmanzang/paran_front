import { ChatUserModel } from "@/app/model/chat/chat.model";
import Image from "next/image";
import { useState } from "react";
import ModalFriend from "./ModalFriend";
import styles from './PeopleList.module.css'

interface PeopleListProps{
  chatUser : ChatUserModel
}

export default function getPeopleList({chatUser}: PeopleListProps) {
  const [onToggle, setOnToggle] = useState(false);
  const onFriendShip = () => {
    setOnToggle(true);
  } 

  return (
    <li className="border-b w-full">
{/* userId 받아서  */}
      <div className="flex justify-evenly px-3 py-2 my-3 items-center"> 
        <div className="relative">
          <Image
          width={46}
          height={46}
          className="rounded-full bg-green-400"
          src="/"
          alt="userprofile"
          />
          
          {/* user 상태 온라인 오프라인일 때 구분  */}
          {/* { !onLine ?
            <span className="absolute left-7 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-red-400 dark:border-gray-800"></span>
          :
            <span className="absolute left-7 top-0  h-3.5 w-3.5 rounded-full border-2 border-white bg-green-400 dark:border-gray-800"></span>
          } */}
          
        </div>
          <p className="inline text-white text-lg font-semibold ">{chatUser.nickname}</p>
          <button className="text-xs border-white border p-2 rounded-lg text-white hover:bg-green-600" onClick={onFriendShip}>보기</button>
        <div className={`${styles.toggleBottoom} ${onToggle ? `${styles.visible}` : `${styles.invisible}` }`}>
           <ModalFriend />
        </div>
      </div>
    </li>
  );
}
