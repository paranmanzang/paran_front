"use client"
import React, { useEffect, useState } from 'react'
import MessageContainer from "../MessageContainer/MessageContainer";
import InputField from "../InputField/InputField";
import './ChatPageStyle.css'

const ChatPage = () => {
    const [message, setMessage] = useState("");
  
    const sendMessage = (e) => {
      e.preventDefault();
    };

    return (
      <div>
        <div className="ChatPage">
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