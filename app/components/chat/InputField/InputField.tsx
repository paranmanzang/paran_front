import React from 'react'
import { Button } from 'flowbite-react'

import './InputField.css'
const InputField = ({message,setMessage,sendMessage}) => {

  return (
    <div className="input-area">
          <div className="plus-button">+</div>
          <form onSubmit={sendMessage} className="input-container">
            <input
              type="text"
              placeholder="Type in here…"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              multiline={false}
              rows={1}
            />

            <Button
              disabled={message === ""}
              type="submit"
              className="send-button"
            >
              전송
            </Button>
          </form>
        </div>
  )
}

export default InputField