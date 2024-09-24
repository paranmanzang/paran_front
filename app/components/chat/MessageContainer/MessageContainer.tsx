import { ChatMessageModel } from "@/app/model/chat/chat.model";
import "./MessageContainer.css";

interface MessageContainerProps {
  messages: ChatMessageModel[]; // props로 메시지 리스트를 받음
  currentUserNickname: string; // 현재 사용자의 닉네임을 받음
}

const MessageContainer: React.FC<MessageContainerProps> = ({ messages, currentUserNickname }) => {
  return (
    <div className="message-container min-h-dvh mb-6 px-20 py-10">
      {messages.map((message) => {
        // 시스템 메시지 처리
        if (message.type === "ENTER" || message.type === "EXIT") {
          return (
            <div key={message.id} className="system-message-container">
              <p className="system-message">{message.message}</p>
            </div>
          );
        }

        // 내가 보낸 메시지
        if (message.nickname === currentUserNickname) {
          return (
            <div key={message.id} className="my-message-container">
              <div className="my-message">{message.message}</div>
            </div>
          );
        }

        // 상대방이 보낸 메시지
        return (
          <div key={message.id} className="your-message-container">
            {/* <Image
              width={24}
              height={24}
              src="/"
              className="profile-image bg-green-700"
              alt="userprofile"
            // user profile 넣어두기
            /> */}
            <div className="your-message">{message.message}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageContainer;
