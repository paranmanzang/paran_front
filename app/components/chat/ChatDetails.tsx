import { ChatRoomModel } from "@/app/model/chat/chat.model"
import { saveCurrentRoom } from "@/lib/features/chat/chat.Slice";
import { AppDispatch } from "@/lib/store";
import Link from "next/link"
import { useDispatch } from "react-redux";

interface ChatDetailsProps{
  chatRoom:ChatRoomModel
}
export default function ChatDetails({chatRoom}:ChatDetailsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleJoinChat = () => {
    dispatch(saveCurrentRoom(chatRoom));
  };

  return (
    <div className="relative">
      <h2 className="font-semibold text-2xl">{chatRoom.name}</h2>
      <p className="text-lg my-4 px-3">채팅방 소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새</p>
      <Link onClick={handleJoinChat} href={`/chats/${chatRoom.roomId}`} className="absolute right-6 my-6 text-green-600 hover:text-white bg-green-200 hover:bg-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        참여하기
      </Link>
    </div>
  )
}
