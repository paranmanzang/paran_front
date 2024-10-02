"use client";  // 클라이언트 컴포넌트로 선언

import UserProfile from "@/app/components/user/UserProfile";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function GetMyPage() {  // 컴포넌트 이름은 대문자로 시작해야 합니다.
    const currentUser = useSelector((state: RootState) => state.user.currentUser);

    if (!currentUser?.nickname) {
        console.error("닉네임이 없습니다.");
        return <p>사용자 정보를 불러올 수 없습니다.</p>;
    }

    return (
        <div>
            <UserProfile nickname={currentUser.nickname} />
        </div>
    );
}