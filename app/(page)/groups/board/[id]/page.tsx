"use client"
import { useSelector } from "react-redux";
import GroupBoard from "@/app/components/common/GroupBoard";
import { getCurrentUser } from "@/lib/features/users/user.slice";

interface GroupBoardIdProps {
    id: string;
}

export default function GroupBoardId({ id }: GroupBoardIdProps) {
    const user = useSelector(getCurrentUser);
    const userInfo = user?.id ?? ""

    return (
        <div>
            <GroupBoard thisPage={id} userInfo={userInfo} />
        </div>
    )
}