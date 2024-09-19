"use client"
import React, { useState } from 'react'
import InputField from "../InputField/InputField";
import './ChatPageStyle.css'

const ChatPage = () => {
    const [message, setMessage] = useState("");
  
    const sendMessage = () => {
      //
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