"use client"
import { useEffect, useState } from "react";
import { getCurrentGroup, getGroupPosts, saveCurrentGroupPost } from "@/lib/features/group/group.slice";
import { useAppDispatch } from "@/lib/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { groupPostService } from "@/app/service/group/groupPost.service";
// 페이지 네이션 필요!!!!
export default function GroupBoard() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { groupPostsNotice, groupPostsGeneral } = useSelector(getGroupPosts);
    const groupId = useSelector(getCurrentGroup)?.id
    const page = 0 // 임의 값
    const size = 5 // 임의 값
    const [selectedCategory, setSelectedCategory] = useState<'공지 사항' | '자유게시판'>('공지 사항');

    console.log(groupPostsGeneral)
    console.log(selectedCategory)


    useEffect(() => {
        if (!groupId) {
            return;
        }
        groupPostService.findByGroupId(groupId, page, size, selectedCategory, dispatch)
    }, [dispatch, groupId, selectedCategory]);

    const postsToShow = selectedCategory === "공지 사항" ? groupPostsNotice : groupPostsGeneral;
    console.log(postsToShow)

    const onClickToDetail = (currentId: number | undefined) => {
        if (currentId !== undefined) {
            const selectedPost = postsToShow.find(({ id }) => id === currentId);
            if (selectedPost) {
                dispatch(saveCurrentGroupPost(selectedPost)); // 선택한 게시물 저장
                groupPostService.modifyViewCount(currentId, dispatch)
                    .finally(() => {
                        router.push(`/groups/board/detail/${currentId}`);
                    });
            }
        }
    };


    return (
        <div className="mx-auto my-8 max-w-lg bg-green-100 p-6 rounded-lg shadow-md">
            {/* 카테고리 선택 탭 */}
            <div className="mb-6 flex justify-around">
                <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${selectedCategory === '공지 사항'
                            ? 'bg-green-500 text-white shadow'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    onClick={() => setSelectedCategory('공지 사항')}
                >
                    공지 사항
                </button>
                <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${selectedCategory === '자유게시판'
                            ? 'bg-green-500 text-white shadow'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                    onClick={() => setSelectedCategory('자유게시판')}
                >
                    자유게시판
                </button>
            </div>

            {/* 게시물 목록 */}
            <ul className="space-y-4">
                {postsToShow.length > 0 ? (
                    postsToShow.map((post, index) => (
                        <li
                            key={index}
                            className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-green-50"
                            onClick={() => onClickToDetail(post.id)}
                        >
                            <p className="text-xl font-semibold text-gray-900 mb-1">{post.title}</p>
                            <p className="text-sm text-gray-600 mb-1">작성자: {post.nickname}</p>
                            <p className="text-sm text-gray-600">조회수: {post.viewCount}</p>
                        </li>
                    ))
                ) : (
                    <li className="text-center text-gray-500">게시물이 없습니다.</li>
                )}
            </ul>

            {/* 뒤로가기 버튼 */}
            <div className="mt-8 flex justify-center">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="rounded-full border px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-300"
                >
                    뒤로가기
                </button>
            </div>
        </div>

    );
}
