"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import Alert from '../common/Alert';
import { getNickname } from "@/lib/features/users/user.slice";

interface ModalFriendProps {
    name: string;
}

export default function ModalFriend({ name }: ModalFriendProps) {
    const [alertState, setAlertState] = useState({ isOpen: false, message: "" });

    const nickname = useSelector(getNickname);

    const onFriends = () => {
        if (nickname) {
            // 친구 요청 로직을 여기에 추가 (예: API 호출)
            setAlertState({ isOpen: true, message: "친구요청을 보냈습니다." });
        } else {
            setAlertState({ isOpen: true, message: "사용자 정보를 불러올 수 없습니다." });
        }
    };

    const closeAlert = () => {
        setAlertState({ isOpen: false, message: "" });
    };

    return (
        <>
            <ul className="transition-opacity duration-300 ease-in-out">
                <li>{name || "사용자 이름"}</li>
                <button type="button" className="p-2 bg-green-500 text-white" onClick={onFriends}>친구요청하기</button>
            </ul>
            <Alert
                message={alertState.message}
                isOpen={alertState.isOpen}
                onClose={closeAlert}
            />
        </>
    );
}