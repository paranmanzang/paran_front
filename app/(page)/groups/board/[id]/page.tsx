"use client"
import { getCurrentGroup, getCurrentGroupPost, getGroupMembers } from "@/lib/features/group/group.slice";
import { useSelector } from "react-redux";
import GroupBoard from "@/app/components/common/GroupBoard";
import { getCurrentUser } from "@/lib/features/users/user.slice";
import { UserModel } from "@/app/model/user.model";
interface GroupBoardIdProps {
    id: string,
    userInfo?: UserModel;
}

export default function GroupBoardId({id}:GroupBoardIdProps) {
    const member = useSelector(getCurrentUser)

    return (
        <div>
            {/* group에 참여중인 사람만 보일 수 있도록 한다. */}
            <GroupBoard thisPage={id} userInfo={member?.id}/>
        </div>
    )
}
