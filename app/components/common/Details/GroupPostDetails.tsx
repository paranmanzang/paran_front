"use client"
import { useSelector } from "react-redux";
import { getCurrentGroupPost } from "@/lib/features/group/group.slice";
import DetailButton from "./DetailButton";

export default function GroupPostDetails() {
    const post = useSelector(getCurrentGroupPost)
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    return (
        <div className="max-w-4xl mx-auto my-20 px-4">
            <div className="bg-green-50 py-8 rounded-lg">
                <h1 className="text-3xl font-bold text-center">{post?.title || "글 제목"}</h1>
            </div>
            <hr className="my-8" />

            <div className="my-6">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-bold mb-4">작성자 : {post?.nickname}</h3>
                </div>
            </div>
            <hr className="my-8" />

            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-bold mb-4">작성일: {formatDate(post?.createAt ?? "2024-01-01T00:00:00")}</h3>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-bold mb-4">조회수: {post?.viewCount}</h3>
                </div>
            </div>
            <hr className="my-8" />

            <div className="my-6">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-bold mb-4">카테고리: {post?.postCategory}</h3>
                </div>
            </div>
            <hr className="my-8" />

            <div className="my-6">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg md:text-xl font-bold mb-4">내용:</h3>
                    {post?.bookId && (
                        <div className="mb-4">
                            <p className="text-sm md:text-base">책 제목: {post?.bookTitle}</p>
                        </div>
                    )}
                    <div className="text-sm md:text-base">{post?.content}</div>
                </div>
                <DetailButton thisPage={`/groups/board/detail`} displayBoard="block" displayReview="none" displayReservation="block" />
            </div>
        </div>
    )
}