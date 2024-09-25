import Link from "next/link"

interface ChatDetailsProps{
  roomId:string;
  name:string;
  userCount: number;
  unReadMessageCount:number;
}
export default function ChatDetails({roomId, name, userCount, unReadMessageCount}:ChatDetailsProps) {
  return (
    <div className="relative">
      <h2 className="font-semibold text-2xl">{name}</h2>
      <p className="text-lg my-4 px-3">채팅방 소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새</p>
      <Link href={`/chats/${roomId}`} className="absolute right-6 my-6 text-green-600 hover:text-white bg-green-200 hover:bg-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        참여하기
      </Link>
    </div>
  )
}
