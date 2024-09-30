"use client"
import React, { useCallback, useRef, useState } from 'react'
import InputField from "../InputField/InputField";
import MessageContainer from '../MessageContainer/MessageContainer';
import { insertMessage } from '@/app/service/chat/chatMessage.service';
import { ChatMessageModel } from '@/app/model/chat/chat.model';

interface ChatPageProps {
  messages: ChatMessageModel[];
  roomId: string;
}

const ChatPage = ({ messages, roomId} : ChatPageProps) => {
  const [message, setMessage] = useState("");
  const isSuccessRef = useRef<boolean | null>(null);
  const nickname = 'A' // 임의로 넣어둠

  const sendMessage = useCallback(() => {
    insertMessage({ nickname, roomId, message })
      .then((isSuccess) => {
        if (isSuccess) {
          setMessage(''); // 메시지 전송 성공 후 입력창 초기화
          isSuccessRef.current = true;
        } else {
          isSuccessRef.current = false;
          console.error('메시지 전송 실패');
        }
      })
      .catch((error) => {
        isSuccessRef.current = false;
        console.error('메시지 전송 중 오류 발생:', error);
      });
  }, [nickname, roomId, message]);


  return (
    <div>
      <div id="ChatPage">
        <MessageContainer messages={messages} currentUserNickname={nickname} />
        <InputField
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default ChatPage;