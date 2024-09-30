"use client"
import {useEffect, useState} from "react";
import {getCurrentGroup, getGroupPosts, saveCurrentGroupPost} from "@/lib/features/group/group.Slice";
import {useAppDispatch} from "@/lib/store";
import {useSelector} from "react-redux";
import {findPostsByGroupId, updateViewCount} from "@/app/service/group/groupPost.service";
import {useRouter} from "next/navigation";

export default function GroupBoard() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const [active, setActive] = useState(false);
    const group = useSelector(getCurrentGroup);
    const {groupPostsNotice, groupPostsGeneral} = useSelector(getGroupPosts);
    const groupId = group?.id ?? ''
    const page = 5 // 임의 값
    const size = 5 // 임의 값
    const [selectedCategory, setSelectedCategory] = useState<'공지 사항' | '자유게시판'>('공지 사항');


    useEffect(() => {
        if (!groupId) {
            return;
        }
        findPostsByGroupId(Number(groupId), page, size, selectedCategory, dispatch)
    }, [dispatch, groupId, selectedCategory]);

    const postsToShow = selectedCategory === "공지 사항" ? groupPostsNotice : groupPostsGeneral;

    const onClickToDetail = (currentId: number | undefined) => {
        if (currentId !== undefined) {
            const selectedPost = postsToShow.find(({id}) => id === currentId);
            if (selectedPost) {
                dispatch(saveCurrentGroupPost(selectedPost)); // 선택한 게시물 저장

                updateViewCount(currentId, dispatch)
                    .finally(() => {
                        router.push(`/groups/board/${currentId}`);
                    });
            }
        }
    };


    return (
        <div className="max-w-sm mx-auto bg-green-100 my-8 p-4">
            {/* 카테고리 선택 탭 */}
            <div className="flex justify-around mb-4">
                <button
                    className={`p-2 ${selectedCategory === '공지 사항' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedCategory('공지 사항')}
                >
                    공지 사항
                </button>
                <button
                    className={`p-2 ${selectedCategory === '자유게시판' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedCategory('자유게시판')}
                >
                    자유게시판
                </button>
            </div>


            {/* 게시물 목록 */}
            <ul>
                {postsToShow.length > 0 ? (
                    postsToShow.map((post, index) => (
                        <li key={index} className="p-6 m-2 bg-white" onClick={() => onClickToDetail(post.id)}>
                            <div className="font-bold text-lg">{post.title}</div>
                            <div className="font-bold text-lg">{post.nickname}</div>
                            <div className="font-bold text-lg">{post.createAt}</div>
                            <div className="font-bold text-lg">{post.viewCount}</div>
                        </li>
                    ))
                ) : (
                    <li>게시물이 없습니다.</li>
                )}
            </ul>
        </div>
    );
}
