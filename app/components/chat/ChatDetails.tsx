import Link from "next/link"
export default function ChatDetails() {
  return (
    <div className="relative">
      <h2 className="font-semibold text-2xl">채팅방 제목</h2>
      <p className="text-lg my-4 px-3">채팅방 소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새소개 간략하게 소개소개소개새</p>
      <Link href="/chats/2" className="absolute right-6 my-6 text-green-600 hover:text-white bg-green-200 hover:bg-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
        참여하기
      </Link>
    </div>
  )
}
