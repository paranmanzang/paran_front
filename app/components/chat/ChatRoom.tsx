"use client";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {useSelector} from "react-redux";
import dynamic from 'next/dynamic';
import ChatRoomLayout from "./ChatRoomLayout";
import {useChatRoom} from "@/app/hooks/useChatRoom";
import {getCurrentChatRoom, getError, getIsLoading} from "@/lib/features/chat/chat.Slice";
import {useAppDispatch} from "@/lib/store";

const ChatPage = dynamic(() => import("@/app/components/chat/ChatPages/ChatPage"), {ssr: false});
const MyChatList = dynamic(() => import("@/app/components/chat/MyChatList"), {ssr: false});
const PeopleList = dynamic(() => import("@/app/components/chat/PeopleList"), {ssr: false});
const MyProfile = dynamic(() => import("@/app/components/chat/MyProfile"), {ssr: false});

export default function ChatRoom() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const chatRoom = useSelector(getCurrentChatRoom);
    const loading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const nickname = "A"; // TODO: 실제 사용자 닉네임으로 대체
    const roomId = chatRoom?.roomId ?? '';

    const {
        messages,
        chatRooms,
        chatUsers,
        togglePopUp,
        leaveChat
    } = useChatRoom(roomId, nickname, dispatch);

    useEffect(() => {
        if (error) {
            // 에러 처리 로직
        }
    }, [error]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <ChatRoomLayout
            togglePopUp={togglePopUp}
            leaveChat={leaveChat}
            roomId={roomId}
        >
            <>
                <MyChatList chatRooms={chatRooms} currentChatRoomId={roomId}/>
                <ul className="w-full">
                    {chatUsers.map((user) => (
                        <PeopleList key={user.nickname} chatUser={user}/>
                    ))}
                </ul>
                <MyProfile/>
                <ChatPage messages={messages} roomId={roomId}/>
            </>
        </ChatRoomLayout>
    );
}