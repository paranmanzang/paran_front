import React, { useState, useEffect, useCallback } from 'react';
import { setAccessToken } from "@/app/api/authUtils";
import { userService } from "../../../service/user/user.service";
import { groupService } from "../../../service/group/group.service";
import { likeBookService } from "../../../service/group/likeBook.service";
import { likePostService } from "../../../service/group/likePost.service";
import { roomService } from "../../../service/room/room.service";
import { saveNickname } from "@/lib/features/users/user.slice";
import axios from 'axios';
import { useDispatch } from 'react-redux'; // redux dispatch 사용
import { AppDispatch } from "@/lib/store";
import requests from '@/app/api/requests';
import api from '@/app/api/axios';



interface TimerButtonProps {
  onRefresh: () => void;
}

const TimerButton = ({ onRefresh }: TimerButtonProps) => {
  const dispatch = useDispatch<AppDispatch>(); // dispatch 가져오기
  const [timeLeft, setTimeLeft] = useState(600); // 10분 
  const [isHovered, setIsHovered] = useState(false);

  const formatTime = useCallback((seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    console.log("Refresh button clicked."); // 버튼 클릭 로그
    try {
      // API 호출
      console.log("Sending request to reissue token..."); // API 요청 로그
      const response = await api.post(requests.fetchReissue, {
        withCredentials: true, // 필요한 경우, 쿠키를 포함할 수 있도록 설정
      });

      const token = response.headers['authorization']?.replace("Bearer ", "");

      if (token) {
        console.log("Token received:", token); // 토큰 수신 로그
        setAccessToken(token);
        dispatch(saveNickname(response.headers['nickname']));
        const nickname = response.headers['nickname'];
        console.log(nickname)
        
        // 유저 세부정보 요청
        await userService.findUserDetail(nickname, dispatch);
        await groupService.findByNickname(nickname, dispatch);
        await likeBookService.findByNickname(nickname, dispatch);
        await roomService.findAllLikedByNickname(nickname, dispatch);
        await likePostService.findAllByUserNickname(nickname, dispatch);

        onRefresh(); // 새로 고침 이벤트 호출
      } else {
        console.error("토큰이 안보여요 ㅠㅠ"); // 토큰이 없는 경우 오류 로그
        throw new Error('토큰을 받지 못했습니다.');
      }
      // API 호출 성공 시 추가 작업
      console.log('Response:', response.data); // API 응답 로그
    } catch (error) {
      console.error('Error during reissue:', error); // 오류 발생 시 로그
    }

    // Reset 타이머
    setTimeLeft(600); // Reset 10분 
  };

  return (
    <div
      className="inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <button
          type="button"
          onClick={handleRefresh}
          className="rounded bg-green-500 py-2 text-white hover:bg-green-600"
        >
          시간연장하기
        </button>
      ) : (
        <div className={`rounded px-4 py-2 ${timeLeft === 0 ? 'bg-yellow-100' : 'bg-gray-100'}`}>
          <span className={`font-mono ${timeLeft === 0 ? 'text-yellow-700' : ''}`}>{formatTime(timeLeft)}</span>
        </div>
      )}
    </div>
  );
};

export default TimerButton;