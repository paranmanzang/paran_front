"use client"
import React, { useState } from 'react'
import InputField from "../InputField/InputField";
import './ChatPageStyle.css'
import MessageContainer from '../MessageContainer/MessageContainer';

const ChatPage = () => {
    const [message, setMessage] = useState("");
  
    const sendMessage = () => {
      //
    };

    return (
      <div>
        <div id="ChatPage">
          <MessageContainer />
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