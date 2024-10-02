"use client"
import { useSelector } from "react-redux";
import { getCurrentGroup, getGroupMembers, getGroups } from "@/lib/features/group/group.slice";
import { useAppDispatch } from "@/lib/store";
import { useEffect, useMemo } from "react";
import { groupService } from "@/app/service/group/group.service";

export default function GroupDetails() {
    const dispatch = useAppDispatch()
    const group = useSelector(getCurrentGroup);
    const users = useSelector(getGroupMembers);
    const groups = useSelector(getGroups);

    useEffect(() => {
        if (group?.id !== undefined) {
            groupService.findUserById(group.id, dispatch);
        }
    }, [group?.id, dispatch]);

    // 리더 찾기
    const leader = useMemo(() => {
        // return users.find(user => user.role === 'leader');
    }, [users]);

    console.log(group)
    console.log(users)

    return (
        <div>
            {/*
            <div className="h-[300px] w-full justify-center bg-gray-400">
                <h1>{group?.groupName || "그룹 이름"}</h1>
            </div>
            <div className="my-6 grid min-h-screen grid-cols-2 gap-4">
                <div className="h-[70%] w-4/5 bg-gray-400 p-4">
                    <h3 className="text-xl font-bold mb-4">소모임 정보:</h3>
                    {group ? (
                        <div>
                            <p>카테고리: {group.categoryName}</p>
                            <p>설명: {group.description}</p>
                            <p>최대 인원: {group.maxMembers}</p>
                            {/* 추가 그룹 정보를 여기에 넣을 수 있습니다 
                        </div>
                    ) : (
                        <p>그룹 정보를 불러오는 중...</p>
                    )}
                </div>
                <div className="h-[70%] w-4/5 bg-gray-400 p-4 overflow-y-auto">
                    <h3 className="text-xl font-bold mb-4">참여 중인 유저:</h3>
                    {/* {users.length > 0 ? (
                        <ul>
                            {users.map((user) => (
                                <li key={user.id} className="mb-4 p-2 bg-gray-300 rounded">
                                    <p className="font-bold">{user.name} {user.role === 'leader' ? '(리더)' : ''}</p>
                                    <p>이메일: {user.email}</p>
                                    <p>역할: {user.role}</p>
                                    {/* 추가 유저 정보를 여기에 넣을 수 있습니다 
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>참여 중인 유저가 없습니다.</p>
                    )}
                </div>
            </div> 
            */}
        </div>
    );
}