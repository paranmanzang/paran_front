"use client"
import { useSelector } from "react-redux";
import { getCurrentGroupPost } from "@/lib/features/group/group.slice";
import DetailButton from "./DetailButton";
import { useEffect, useState } from "react";
import { fileService } from "@/app/service/file/file.service";
import { FileType } from "@/app/model/file/file.model";

export default function GroupPostDetails() {
    const post = useSelector(getCurrentGroupPost)
    const [imageUrl, setImageUrl] = useState<string | null>(null);
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

    useEffect(() => {
        const loadImage = async () => {
            if (!post) return; // post가 없으면 실행 중단

            const url = await fileService.findByRefId(post.id, FileType.GROUP_POST);
            console.log("url: ", url)
            if (url.size > 0) {
                setImageUrl(URL.createObjectURL(url)); // Blob URL을 상태에 저장
            } else {
                setImageUrl(null);
            }
        };

        loadImage();
    }, [post])

    return (
        <>
            <div className="mx-auto my-20 max-w-4xl bg-green-100 p-4">
                <div className="rounded-lg bg-white py-4">
                    <h1 className="text-center text-3xl font-bold">{post?.title || "글 제목"}</h1>
                </div>
                <div>
                    <h3 className="m-4 font-medium md:text-xl">작성자 : {post?.nickname}</h3>
                </div>
                <div className="my-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <h3 className="m-4 font-medium md:text-xl">작성일: {formatDate(post?.createAt ?? "2024-01-01T00:00:00")}</h3>
                    </div>
                    <div>
                        <h3 className="m-4 font-medium md:text-xl">조회수: {post?.viewCount}</h3>
                    </div>
                </div>
                <div>
                    <h3 className="m-4 font-medium md:text-xl">카테고리: {post?.postCategory}</h3>
                </div>
                <div className="border-t-2">
                    {imageUrl && imageUrl.length > 0 && (<img src={imageUrl} alt="포스트 이미지" className="rounded-lg shadow-md" />)}
                    <h3 className="m-4 font-medium md:text-xl">내용:</h3>
                    {post?.bookId && (
                        <div className="mb-4">
                            <p className="text-sm md:text-base">책 제목: {post?.bookTitle}</p>
                        </div>
                    )}
                    <div className="rounded-lg bg-white p-4 text-sm md:text-base">{post?.content}</div>
                </div>
            </div>
            <div className="mx-auto max-w-4xl">
                <DetailButton thisPage={`/groups/board/detail`} displayBoard="block" displayReview="none" displayReservation="block" displayComment="block" />
            </div>
        </>
    )
}