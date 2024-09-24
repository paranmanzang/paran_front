import { useEffect, useRef } from "react";
import { ChatMessageModel } from "@/app/model/chat/chat.model";
import "./MessageContainer.css";

interface MessageContainerProps {
  messages: ChatMessageModel[]; // props로 메시지 리스트를 받음
  currentUserNickname: string; // 현재 사용자의 닉네임을 받음
}

const MessageContainer: React.FC<MessageContainerProps> = ({ messages, currentUserNickname }) => {
  const messageEndRef = useRef<HTMLDivElement | null>(null); // 마지막 메시지를 참조하는 ref

  // 새로운 메시지가 올 때마다 자동 스크롤
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" }); // 부드럽게 스크롤
    }
  }, [messages]); // 메시지가 업데이트될 때마다 실행

  return (
    <div className="message-container min-h-dvh mb-9 px-20 py-20 ">
      {messages.map((message) => {
        const isCurrentUser = message.nickname === currentUserNickname;

        // 시스템 메시지 처리 (ENTER, EXIT)
        if (message.type === "ENTER" || message.type === "EXIT") {
          return (
            <div key={message.id} className="system-message-container">
              <p className="system-message">{message.message}</p>
            </div>
          );
        }

        // 내가 보낸 메시지
        if (isCurrentUser) {
          return (
            <div key={message.id} className="my-message-container">
              <span className="message-time">{message.time}</span>
              <div className="my-message">
                <span>{message.message}</span>
              </div>
            </div>
          );
        }

        // 상대방이 보낸 메시지
        return (
        <>
            <p>{message.nickname}</p>
          <div key={message.id} className="your-message-container">
            <div className="your-message">
              <span>{message.message}</span>
            </div>
              <span className="message-time">{message.time}</span>
          </div>
        </>    
        );
      })}
      <div ref={messageEndRef} /> {/* 스크롤을 마지막으로 이동 */}
    </div>
  );
};

export default MessageContainer;

