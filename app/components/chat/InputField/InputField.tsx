import "./InputField.css";
import React, { useEffect } from "react";

const InputField = ({
  message,
  setMessage,
  sendMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: () => void;
}) => {
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

  const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      if (!e.shiftKey) {
        e.preventDefault();  
        sendMessage();      
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();  // form 제출 시 새로고침 방지
    sendMessage();       // 메시지 전송
  };

  // text -> 글자 작성할때 위로 올라가면서 작성 되도록 함.

  return (
    <div className="input-area">
      <form onSubmit={handleSubmit} className="input-container">
        <textarea
          id="autoResize"
          rows={1} // 최소 1줄로 시작
          placeholder="메세지를 작성해주세요.."
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
        <button disabled={message === ""} type="submit" className="send-button">
          <svg
            className="size-5 rotate-45 rtl:-rotate-45 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default InputField;
