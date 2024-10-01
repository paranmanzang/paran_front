"use client"; // 클라이언트 컴포넌트로 설정
import { QueryClient, QueryClientProvider } from "react-query";
import UserProfile from "@/app/components/user/UserProfile";

const queryClient = new QueryClient(); // QueryClient 인스턴스 생성

export default function getMyPage() {
    const nickname: string = "userNickname"; // 실제 유저의 닉네임 값으로 변경 필요

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <UserProfile nickname={nickname} />
            </div>
        </QueryClientProvider>
    );
}