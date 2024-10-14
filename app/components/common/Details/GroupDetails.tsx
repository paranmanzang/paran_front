"use client"
import { useSelector } from "react-redux";
import { getCurrentGroup, getGroupMembers } from "@/lib/features/group/group.slice";
import { useAppDispatch } from "@/lib/store";
import { useEffect } from "react";
import { groupService } from "@/app/service/group/group.service";
import DetailButton from "./DetailButton";
import LoadingSpinner from "../status/LoadingSpinner";
import { getNickname } from "@/lib/features/users/user.slice";
import { JoiningModel } from "@/app/model/group/group.model";

export default function GroupDetails() {
    const dispatch = useAppDispatch()
    const group = useSelector(getCurrentGroup)
    const users = useSelector(getGroupMembers)
    const nickname = useSelector(getNickname)
    useEffect(() => {
        if (group?.id !== undefined) {
            groupService.findUserById(group.id, dispatch);
        }
    }, [group?.id]);
    const isUserInGroup = group?.id && users[group.id]?.some((user: any) => user.nickname === nickname);
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

                        {group && users[group.id]?.length > 0 ? (
                            <ul>
                                {users[group.id].map((user: JoiningModel, index) => (
                                    <li
                                        key={index}
                                        className="mb-4 p-4 bg-white-100 rounded-lg shadow-sm hover:bg-gray-200 transition-colors text-center"
                                    >
                                        <p className="font-bold text-gray-800">{user.nickname} </p>
                                        <p className="text-gray-600">가입 날짜: {user.requestAt}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-center">참여 중인 유저가 없습니다. 함께 참여해주세요 😆</p>
                        )}
                    </div>
                )}
                <DetailButton thisPage={`/groups`} displayBoard="block" displayReview={'none'} displayReservation={'block'} />
            </div>
        </div>
    )
}