import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { AppDispatch } from "@/lib/store";
import { ChatMessageModel, ChatRoomModel, ChatUserModel } from "@/app/model/chat/chat.model";
import { saveError, saveLoading } from "@/lib/features/chat/chat.Slice";
import { findChatList, saveLastReadMessageTime } from "@/app/service/chat/chatRoom.service";
import { findPeopleList } from "@/app/service/chat/chatUser.service";
import { findMessageList } from "@/app/service/chat/chatMessage.service";

export const useChatRoom = (roomId: string, nickname: string, dispatch: AppDispatch) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageModel[]>([]);
  const [chatRooms, setChatRooms] = useState<ChatRoomModel[]>([]);
  const [chatUsers, setChatUsers] = useState<ChatUserModel[]>([]);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  const togglePopUp = useCallback(() => {
    const url = `/chats/${roomId}`;
    window.open(
      url,
      "작은채팅방",
      "toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=0, resizable=0, width=500, height=800, top=30, left=30",
    );
  }, [roomId]);

  const leaveChat = useCallback(() => {
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
    }

    saveLastReadMessageTime({ roomId, nickname, dispatch })
      .then((isSaved) => {
        if (isSaved) {
          console.log("마지막 읽은 메시지 시간이 저장되었습니다.");
        } else {
          console.error("마지막 읽은 메시지 시간 저장에 실패했습니다.");
        }
      })
      .finally(() => {
        router.push("/chats/list");
      });
  }, [dispatch, nickname, roomId, router]);

  useEffect(() => {
    dispatch(saveLoading(true));

    Promise.all([
      findChatList({ nickname, dispatch }),
      findPeopleList({ roomId, dispatch }),
    ])
      .then(([chatRoomsResult, chatUsersResult]) => {
        setChatRooms(chatRoomsResult);
        setChatUsers(chatUsersResult);

        const handleNewMessage = (newMessage: ChatMessageModel) => {
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        return findMessageList({
          roomId,
          nickname,
          onMessage: handleNewMessage,
        });
      })
      .then((unsubscribe) => {
        if (typeof unsubscribe === 'function') {
          unsubscribeRef.current = unsubscribe;
        } else {
          console.error('findMessageList did not return a function');
        }
      })
      .catch((error) => {
        dispatch(saveError((error as Error).message));
      })
      .finally(() => {
        dispatch(saveLoading(false));
      });

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, [dispatch, nickname, roomId]);

  return {
    messages,
    chatRooms,
    chatUsers,
    togglePopUp,
    leaveChat
  };
};