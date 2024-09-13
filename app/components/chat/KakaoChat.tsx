"use client"
import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Kakao: any; // Kakao 객체를 글로벌로 선언
  }
}

const KakaoChat = () => {
    useEffect(() => {
        // Kakao SDK 로드 후에만 실행
        const initializeKakao = () => {
          if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init('c089c8172def97eb00c07217cae17495'); // 사용하려는 앱의 JavaScript 키 입력
          }
    
          // DOM이 렌더링된 후에 채널 버튼 생성
          const chatButtonContainer = document.getElementById('chat-channel-button');
          if (chatButtonContainer) {
            window.Kakao.Channel.createChatButton({
              container: '#chat-channel-button',
              channelPublicId: '_xgEezn', // 채널의 공개 ID 입력
            });
          } else {
            console.error('Chat button container not found');
          }
        };
    
        // SDK가 로드되었는지 확인
        if (typeof window !== 'undefined' && window.Kakao) {
          initializeKakao();
        } else {
          // 만약 Kakao SDK가 로드되지 않았다면, Script가 로드된 후 초기화
          const interval = setInterval(() => {
            if (window.Kakao) {
              clearInterval(interval);
              initializeKakao();
            }
          }, 100); // 100ms마다 Kakao 객체가 존재하는지 확인
        }
      }, []);
    
      return (
        <div>
          <div id="chat-channel-button"></div>
    
          {/* Kakao SDK 스크립트 로드 */}
          <Script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
            integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
            crossOrigin="anonymous"
            strategy="afterInteractive" // 클라이언트 사이드에서만 로드되도록 설정
          />
        </div>
      );
};

export default KakaoChat;
