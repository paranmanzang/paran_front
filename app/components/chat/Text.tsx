"use client"
import { useEffect } from "react";

export default function Text() {
  useEffect(() => {
    const textarea = document.getElementById('autoResize') as HTMLTextAreaElement;

    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = 'auto'; // 높이를 초기화
        textarea.style.height = `${textarea.scrollHeight}px`; // scrollHeight만큼 높이 설정
      };

      // 'input' 이벤트에 adjustHeight 함수 연결
      textarea.addEventListener('input', adjustHeight);

      // 초기 높이 설정
      adjustHeight();

      // 컴포넌트 언마운트 시 이벤트 제거
      return () => {
        textarea.removeEventListener('input', adjustHeight);
      };
    }
  }, []);

  return (
    <div className="h-auto flex justify-center">
      <textarea
        id="autoResize"
        rows={1} // 최소 1줄로 시작
        placeholder="채팅 입력"
        style={{
          resize: 'none', 
          whiteSpace: "pre-wrap", // 줄바꿈을 포함한 공백 처리
          overflow: "hidden", // textarea 크기를 자동으로 맞추므로 스크롤 숨김
        }}
        className="w-[90%] p-2 border rounded"
      />
      <button type="button" className="rounded-full border px-5 py-3">
        보내기
      </button>
    </div>
  );
}