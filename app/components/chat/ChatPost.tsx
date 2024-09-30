import Link from "next/link";

export default function ChatPost() {
  return (
    <div>
      <ul className="">
        <li>
          <div>
            <h2>Hello, Chats!!</h2>
            <p><Link href="/">채팅방 참여하기</Link></p>
          </div>
        </li>
        <li>
          <p>chat title</p>
          <p>chat content</p>
        </li>
      </ul>
    </div>
  )
}
