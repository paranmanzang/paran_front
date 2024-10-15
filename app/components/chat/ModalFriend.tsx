"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Alert from '../common/Alert';
import { getNickname } from "@/lib/features/users/user.slice";
import { getAlreadyFriends, getPendingFriends } from "@/lib/features/users/friend.slice";
import { friendService } from "@/app/service/users/friend.service";
import { useAppDispatch } from "@/lib/store";

interface ModalFriendProps {
    name: string;
}

export default function ModalFriend({ name }: ModalFriendProps) {
    const [alertState, setAlertState] = useState({ isOpen: false, message: "" });
    const dispatch = useAppDispatch()
    const nickname = useSelector(getNickname);
    const alreadyFriends = useSelector(getAlreadyFriends)
    const pendingFriends = useSelector(getPendingFriends)

    useEffect(() => {
        if (nickname) {
            friendService.findFriendList(nickname, dispatch)
        }
    }, [dispatch, nickname]);


    const onFriends = () => {
        if (nickname) {
            setAlertState({ isOpen: true, message: "친구요청을 보냈습니다." });
        } else {
            setAlertState({ isOpen: true, message: "사용자 정보를 불러올 수 없습니다." });
        }
    };

    // 친구 요청 거절 또는 친구 삭제
    const onRejectRequest = (action: string) => {
        let message = '';
        let id: number | null | undefined = null;
        switch (action) {
            case 'delete':
                const friendToDelete = alreadyFriends.find((friend) =>
                    friend.requestUser === name || friend.responseUser === name
                );
                if (friendToDelete) {
                    id = friendToDelete.id;
                    message = '친구를 삭제했습니다.';
                }
                break;
            case 'reject':
                const friendToReject = pendingFriends.find((friend) =>
                    friend.requestUser === name && friend.responseUser === nickname
                );
                if (friendToReject) {
                    id = friendToReject.id;
                    message = '친구 요청을 거절했습니다.';
                }
                break;
            case 'cancel':
                const friendToCancel = pendingFriends.find((friend) =>
                    friend.requestUser === nickname && friend.responseUser === name
                );
                if (friendToCancel) {
                    id = friendToCancel.id;
                    message = '친구 요청을 거절했습니다.';
                }
                message = '친구 요청을 취소했습니다.';
                break;
            default:
                message = '알 수 없는 작업입니다.';
        }
        if (id) {
            friendService.drop(id, dispatch)
        }
        setAlertState({ isOpen: true, message });
    };

    // 친구 요청 수락
    const onAcceptRequest = () => {
        // friendService.acceptFriendRequest(name)  // 친구 요청을 수락하는 API 호출
        //     .then(() => {
        //         setAlertState({ isOpen: true, message: "친구 요청을 수락했습니다." });
        //     })
        //     .catch(() => {
        //         setAlertState({ isOpen: true, message: "친구 요청 수락 중 오류가 발생했습니다." });
        //     });
    };

    const closeAlert = () => {
        setAlertState({ isOpen: false, message: "" });
    };

    // 나한테 온 요청
    const isRequestPendingToMe = pendingFriends.some((friend) =>
        friend.requestUser === name && friend.responseUser === nickname
    );

    // 친구한테 보낸 요청
    const isRequestPendingFromMe = pendingFriends.some((friend) =>
        friend.requestUser === nickname && friend.responseUser === name
    );

    const isFriend = alreadyFriends.some((friend) =>
        friend.requestUser === name || friend.responseUser === name
    );

    return (
        <>
            <ul className="transition-opacity duration-300 ease-in-out">
                {/* <li>{name || "사용자 이름"}</li> */}
                {isFriend && (
                    <button
                        type="button"
                        className="p-2 bg-red-500 text-white"
                        onClick={() => onRejectRequest('delete')}
                    >
                        친구 삭제하기
                    </button>
                )}
                {isRequestPendingToMe && (
                    <>
                        <button
                            type="button"
                            className="p-2 bg-blue-500 text-white"
                            onClick={onAcceptRequest}
                        >
                            친구 요청 수락
                        </button>
                        <button
                            type="button"
                            className="p-2 bg-blue-500 text-white"
                            onClick={() => onRejectRequest('reject')}
                        >
                            친구 요청 거절
                        </button>
                    </>
                )}
                {isRequestPendingFromMe && (
                    <li>
                        <button
                            type="button"
                            className="p-2 bg-gray-500 text-white w-full"
                            onClick={() => onRejectRequest('cancel')}  // 요청 대기 중일 때 취소 기능
                        >
                            요청 대기 취소
                        </button>
                    </li>
                )}
                {!isFriend && !isRequestPendingFromMe && !isRequestPendingToMe && (
                    <button type="button" className="p-2 bg-green-500 text-white" onClick={onFriends}>친구요청하기</button>
                )}
            </ul>
            <Alert
                message={alertState.message}
                isOpen={alertState.isOpen}
                onClose={closeAlert}
            />
        </>
    );
}