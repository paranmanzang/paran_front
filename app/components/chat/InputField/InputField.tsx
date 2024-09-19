import { Button } from "flowbite-react";

import "./InputField.css";
import React, { useEffect } from "react";
const InputField = ({ message, setMessage, sendMessage }) => {

  useEffect(() => {
    const textarea = document.getElementById(
      "autoResize",
    ) as HTMLTextAreaElement;

    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = "auto"; // 높이를 초기화
        textarea.style.height = `${textarea.scrollHeight}px`; // scrollHeight만큼 높이 설정
      };

      // 'input' 이벤트에 adjustHeight 함수 연결
      textarea.addEventListener("input", adjustHeight);

      // 초기 높이 설정
      adjustHeight();

      // 컴포넌트 언마운트 시 이벤트 제거
      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  
  }, []);

  const handleEnter = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key === 'Enter'){
      if(!e.shiftKey){
        e.preventDefault();
        sendMessage;
      }
    }
  }
 
// text -> 글자 작성할때 위로 올라가면서 작성 되도록 함. 

  return (
    <div className="input-area">
      <div className="plus-button">+</div>
      <form onSubmit={sendMessage} className="input-container">
        <textarea
          id="autoResize"
          rows={1} // 최소 1줄로 시작
          placeholder="Type in here…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          style={{
            resize: "none",
            whiteSpace: "pre-wrap", // 줄바꿈을 포함한 공백 처리
            overflow: "hidden", // textarea 크기를 자동으로 맞추므로 스크롤 숨김
          }}
          onKeyDown={handleEnter}
          className="w-[90%] rounded border p-2"
        />
        <Button disabled={message === ""} type="submit" className="send-button">
          전송
        </Button>
      </form>
    </div>
  );
};

export default InputField;
