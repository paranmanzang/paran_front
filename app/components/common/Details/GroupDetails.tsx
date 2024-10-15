"use client"
import { useSelector } from "react-redux";
import { getCurrentGroup, getGroupEnableMembers, getGroupMembers } from "@/lib/features/group/group.slice";
import { useAppDispatch } from "@/lib/store";
import { useEffect, useState } from "react";
import { groupService } from "@/app/service/group/group.service";
import DetailButton from "./DetailButton";
import LoadingSpinner from "../status/LoadingSpinner";
import { getNickname } from "@/lib/features/users/user.slice";
import { JoiningModel } from "@/app/model/group/group.model";
import ModalFriend from "../../chat/ModalFriend";
import { ChatUserModel } from "@/app/model/chat/chat.model";
import { chatUserService } from "@/app/service/chat/chatUser.service";

export default function GroupDetails() {
    const dispatch = useAppDispatch()
    const group = useSelector(getCurrentGroup)
    const users = useSelector(getGroupMembers)
    const enableUsers = useSelector(getGroupEnableMembers)
    const nickname = useSelector(getNickname)
    const [chatUsers, setChatUsers] = useState<ChatUserModel[]>([]);
    useEffect(() => {
        if (group?.id !== undefined) {
            groupService.findUserById(group.id, dispatch);
        }
    }, [group, dispatch]);
    useEffect(() => {
        if (group?.chatRoomId !== undefined) {
            chatUserService.findList({ roomId: group.chatRoomId, dispatch })
                .then((chatUserResult) => {
                    if (chatUserResult) {
                        setChatUsers(chatUserResult);
                    }
                })
                .catch((error) => {
                    console.error('채팅 유저 리스트를 불러오는 중 오류 발생:', error);
                });
        }
    }, [group, dispatch, chatUsers]);

    const inputUserIntoChatRoom = (name: string) => {
        if (group) {
            chatUserService.insert(group.chatRoomId, name, dispatch)
                .then((result) => {
                    if (result) {
                        return chatUserService.findList({ roomId: group.chatRoomId, dispatch });
                    }
                })
                .then((updatedChatUsers) => {
                    if (updatedChatUsers) {
                        setChatUsers(updatedChatUsers);
                    }
                })
        }
    }

    const deleteUser = (name: string) => {
        if (group) {
            groupService.dropUser(name, group.id, dispatch)
        }
    }

    const ableUser = (name: string) => {
        if (group) {
            groupService.ableUser(group.id, name, dispatch)
        }
    }



    const isUserInGroup = group?.id && users[group.id]?.some((user: any) => user.nickname === nickname);
    const isUserInChatRoom = (name: string) => { return chatUsers.some((user) => user.nickname === name); };


    return (
        <div className="w-[45rem] mx-auto my-20">
            <div className="h-100 w-full justify-center bg-green-50 py-8 rounded-lg">
                <h1 className="text-3xl font-bold text-center">{group?.name || "그룹 이름"}</h1>
            </div>
            <hr className="my-8 " />
            <div className="my-6">
                <div className="h-[70%] bg-green-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">소모임 정보:</h3>
                    {group && (
                        <div>
                            <p>카테고리: {group.categoryName}</p>
                            <p>설명: {group.detail}</p>
                        </div>
                    )}
                    {!group && (<LoadingSpinner />)}

                </div>
                {isUserInGroup && (
                    <div className="h-[70%] bg-green-50 rounded-lg p-8 shadow-lg overflow-y-auto my-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">소모임 장: {group.nickname}</h3>
                        <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">참여 중인 유저</h3>

                        {group && users[group.id]?.length > 0 && (
                            <ul>
                                {users[group.id].map((user: JoiningModel, index) => (
                                    user.nickname !== nickname && (
                                        <li
                                            key={index}
                                            className="mb-4 p-4 bg-white-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors text-center flex justify-between items-center"
                                        >
                                            <div className="text-left">
                                                <p className="font-bold text-gray-800">{user.nickname}</p>
                                                <p className="text-gray-600">가입 날짜: {user.requestAt}</p>
                                            </div>
                                            {!isUserInChatRoom(user.nickname) && nickname === group.nickname &&
                                                <>
                                                    <button
                                                        type="button"
                                                        className="p-2 bg-green-500 text-white"
                                                        onClick={() => inputUserIntoChatRoom(user.nickname)}
                                                    >
                                                        채팅방 초대하기
                                                    </button>
                                                </>
                                            }
                                            {nickname === group.nickname &&
                                                <button
                                                    type="button"
                                                    className="p-2 bg-green-500 text-white"
                                                    onClick={() => deleteUser(user.nickname)}
                                                >
                                                    소모임 멤버 제명
                                                </button>
                                            }
                                            <ModalFriend name={user.nickname} />
                                        </li>
                                    )
                                ))}
                            </ul>
                        )}

                        {group.nickname === nickname && enableUsers[group.id]?.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">참여하고 싶어하는 유저</h3>
                                <ul>
                                    {enableUsers[group.id].map((user: JoiningModel, index) => (
                                        <li
                                            key={index}
                                            className="mb-4 p-4 bg-white-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors text-center flex justify-between items-center"
                                        >
                                            <div className="text-left">
                                                <p className="font-bold text-gray-800">{user.nickname}</p>
                                            </div>
                                            <button
                                                type="button"
                                                className="p-2 bg-green-500 text-white"
                                                onClick={() => ableUser(user.nickname)}
                                            >
                                                소모임 멤버 승인
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
                <DetailButton thisPage={`/groups`} displayBoard="block" displayReview={'none'} displayReservation={'block'} />
            </div>
        </div>
    )
}