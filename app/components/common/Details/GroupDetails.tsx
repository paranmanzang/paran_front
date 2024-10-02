"use client"
import { useSelector } from "react-redux";
import { getCurrentGroup, getGroupMembers } from "@/lib/features/group/group.Slice";
import { useAppDispatch } from "@/lib/store";
import { useEffect } from "react";
import { groupService } from "@/app/service/group/group.service";

export default function Details() {
    const dispatch = useAppDispatch()
    const group = useSelector(getCurrentGroup);
    const users = useSelector(getGroupMembers)
    useEffect(() => {
        if (group?.id !== undefined) {
            groupService.findUserById(group.id, dispatch);
        }
    }, [group?.id, dispatch]);

    console.log(group)
    console.log(users)

    return (
        <div>
            <div className="h-[300px] w-full justify-center bg-gray-400">
                메인 상세보기
            </div>
            <div className="my-6 grid min-h-screen grid-cols-2 place-items-center">
                <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
                <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
                <div className="col-span-2 h-[70%] w-[90%] bg-gray-400">
                    안에 내용 넣기
                </div>
                <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
                <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
                <div className="col-span-2 h-[70%] w-full bg-gray-400">
                    안에 내용 넣기
                </div>
            </div>
            l
        </div>
    );
}
