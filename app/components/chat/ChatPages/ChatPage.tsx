"use client"
import React, { useCallback, useRef, useState } from 'react'
import InputField from "../InputField/InputField";
import './ChatPageStyle.css'
import MessageContainer from '../MessageContainer/MessageContainer';
import { insertMessage } from '@/app/service/chat/chatMessage.service';
import { ChatMessageModel } from '../../app/modelchat.model';

interface ChatPageProps {
  messages: ChatMessageModel[]
}

const ChatPage: React.FC<ChatPageProps> = ({ messages }) => {
  const [message, setMessage] = useState("");
  const isSuccessRef = useRef<boolean | null>(null);
  const roomId = '66f14b991332832511b02fbb' // 임의로 넣어둠
  const nickname = 'A' // 임의로 넣어둠

  const sendMessage = useCallback(async () => {
    isSuccessRef.current = await insertMessage({ nickname, roomId, message });
    setMessage('')
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