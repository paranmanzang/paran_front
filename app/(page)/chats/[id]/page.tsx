"use client";
import { useEffect, useRef, useState } from "react";

import ChatPage from "@/app/components/chat/ChatPages/ChatPage";
import MyChatList from "@/app/components/chat/MyChatList";
import PeopleList from "@/app/components/chat/PeopleList";
import MyProfile from "@/app/components/chat/MyProfile";
import { ChatMessageModel, ChatRoomModel, ChatUserModel, LastReadMesaageTimeModel } from "@/app/model/chat/chat.model";
import { getPeopleList } from "@/app/service/chat/chatUser.service";
import { getMessageList } from "@/app/service/chat/chatMessage.service";
import { useRouter } from "next/navigation";
import { getChatList, saveLastReadMessageTime } from "@/app/service/chat/chatRoom.service";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { getCurrentChatRoom, getError, getIsLoading,saveError, saveLoading, } from "@/lib/features/chat/chat.Slice";

export default function ChatRoom() {
  const router = useRouter();
  const nickname = "A"; // 임의로 넣어둠
  const [messages, setMessages] = useState<ChatMessageModel[]>([]);
  const unsubscribeRef = useRef<(() => void) | null>(null);
  const [chatRooms, setChatRooms] = useState<ChatRoomModel[]>([])
  const [chatUsers, setChatUsers] = useState<ChatUserModel[]>([])

  const dispatch = useDispatch<AppDispatch>();
  const chatRoom = useSelector((state: RootState) => getCurrentChatRoom(state))
  const loading = useSelector((state: RootState) => getIsLoading(state));
  const error = useSelector((state: RootState) => getError(state));
  const roomId = chatRoom?.roomId ?? '';
  // 팝업 창 상태 관리
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  // 팝업 열기 및 닫기 함수
  const togglePopUp = () => {
    setIsPopUpOpen(!isPopUpOpen);
    const url = `/chats/${roomId}`;
    const popup = window.open(
      url,
      "작은채팅방",
      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=0, resizable=0, width=500, height=800, top=30, left=30",
    );
  };

  useEffect(() => {
    dispatch(saveLoading(true));

    getChatList({ nickname })
      .then(result => {
        if (result && Array.isArray(result)) {
          setChatRooms(result);
        } else {
          dispatch(saveError("채팅방 목록을 불러오는 중 오류가 발생했습니다."));
        }
      })
      .catch((error) => {
        dispatch(saveError((error as Error).message || "채팅방 유저을 불러오는 중 오류가 발생했습니다."));
      })

    getPeopleList({ roomId })
      .then(result => {
        if (result && Array.isArray(result)) {
          setChatUsers(result);
        } else {
          dispatch(saveError("유저 목록을 불러오는 중 오류가 발생했습니다."));
        }
      })
      .catch((error) => {
        dispatch(saveError((error as Error).message || "방 유저을 불러오는 중 오류가 발생했습니다."));
      })



    // SSE로 실시간 메시지 구독
    const handleNewMessage = (newMessage: ChatMessageModel) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    getMessageList({
      roomId,
      nickname,
      onMessage: handleNewMessage,
    });

    dispatch(saveLoading(false));

    // 컴포넌트 언마운트 시 SSE 연결 종료
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current(); // SSE 연결 종료
      }
    };
  }, [chatRoom, dispatch]);

  const leaveChat = () => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current(); // SSE 연결 종료
    }

    if (!chatRoom) {
      console.error("현재 채팅방 정보가 없습니다.");
      return;
    }

    saveLastReadMessageTime({ roomId, nickname })
      .then((isSaved) => {
        if (isSaved) {
          console.log("마지막 읽은 메시지 시간이 저장되었습니다.");
        } else {
          console.error("마지막 읽은 메시지 시간 저장에 실패했습니다.");
        }
      })
      .catch((error) => {
        dispatch(saveError("마지막 읽은 메시지 시간 저장 중 오류 발생"));
        console.error("마지막 읽은 메시지 시간 저장 중 오류 발생:", error);
      })
      .finally(() => {
        router.push("/chats/list"); // 페이지 이동
      });
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative w-full">
      <div className="fixed left-0 top-0 min-h-screen w-full">
        <div
          id="chatHead"
          className="mt-1 flex justify-end bg-gray-100 text-black opacity-90"
        >
          {/* PopUp 버튼 - 모바일에서는 안보이도록 후처리 */}
          <button
            type="button"
            onClick={togglePopUp}
            className="mb-1 me-2 rounded-full bg-green-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 "
          >
            <svg
              className="size-4 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"></path>
              <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"></path>
            </svg>
          </button>
          <button
            onClick={leaveChat}
            className="mb-1 me-2 rounded-full bg-red-700 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            X
          </button>
        </div>
        <div className="flex h-dvh justify-center rounded-lg bg-gray-100">
          <section className="relative w-1/5 bg-green-700">
            <MyChatList chatRooms={chatRooms} currentChatRoomId={roomId} />
            <ul className="w-full">
              {chatUsers?.map((user) => (
                <PeopleList key={user.nickname} chatUser={user} />))}
            </ul>
            <MyProfile />
          </section>
          <article className="flex w-4/5 flex-col bg-blue-200 ">
            <aside className="w-full">
              <ChatPage messages={messages} roomId={roomId} />
            </aside>
          </article>
        </div>
      </div>
    </div>
  );
}
