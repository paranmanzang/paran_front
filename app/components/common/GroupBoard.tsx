"use client"
import { useEffect, useState } from "react";
import { getCurrentGroup, getGroupPosts, saveCurrentGroupPost } from "@/lib/features/group/group.slice";
import { useAppDispatch } from "@/lib/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { groupPostService } from "@/app/service/group/groupPost.service";
import { getBookings } from "@/lib/features/room/bookings.slice";
import { bookingService } from "@/app/service/room/booking.service";
import { getAllRooms, saveCurrentRoom } from "@/lib/features/room/room.slice";
// 페이지 네이션 필요!!!!
export default function GroupBoard() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { groupPostsNotice, groupPostsGeneral } = useSelector(getGroupPosts);
    const groupId = useSelector(getCurrentGroup)?.id
    const page = 0 // 임의 값
    const size = 5 // 임의 값
    const [selectedCategory, setSelectedCategory] = useState<'공지 사항' | '자유게시판' | '스케쥴'>('공지 사항');

    const bookings = useSelector(getBookings)
    const enableRooms = useSelector(getAllRooms)
    console.log(enableRooms)
    useEffect(() => {
        if (!groupId) {
            return;
        }
        groupPostService.findByGroupId(groupId, page, size, selectedCategory, dispatch)
        bookingService.findByGroupId(groupId, page, size, dispatch)
    }, [dispatch, groupId, selectedCategory]);

    const postsToShow = selectedCategory === "공지 사항" ? groupPostsNotice : groupPostsGeneral;
    console.log(postsToShow)

    const handleTabClick = (category: '공지 사항' | '자유게시판' | '스케쥴') => {
        setSelectedCategory(category);
    };

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

    const onClickToRoomDetail = (currentId: number | undefined) => {
        if (currentId !== undefined) {
            dispatch(saveCurrentRoom(enableRooms.find((room) => room.id === currentId) || null))
            router.push(`/rooms/${currentId}`);
        }
    }

    return (
        <div className="mx-auto my-8 max-w-lg rounded-lg bg-green-100 p-6 shadow-md">
            {/* 카테고리 선택 탭 */}
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 ${selectedCategory === '공지 사항' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => handleTabClick('공지 사항')}
                >
                    공지 사항
                </button>
                <button
                    className={`px-4 py-2 ${selectedCategory === '자유게시판' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => handleTabClick('자유게시판')}
                >
                    자유게시판
                </button>
                <button
                    className={`px-4 py-2 ${selectedCategory === '스케쥴' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => handleTabClick('스케쥴')}
                >
                    스케쥴
                </button>
            </div>

            {/* 게시물 목록 */}
            {(selectedCategory === '공지 사항' || selectedCategory === '자유게시판') && (
                <ul className="space-y-4">
                    {postsToShow.length > 0 ? (
                        postsToShow.map((post, index) => (
                            <li
                                key={index}
                                className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-green-50"
                                onClick={() => onClickToDetail(post.id)}
                            >
                                <p className="mb-1 text-xl font-semibold text-gray-900">{post.title}</p>
                                <p className="mb-1 text-sm text-gray-600">작성자: {post.nickname}</p>
                                <p className="text-sm text-gray-600">조회수: {post.viewCount}</p>
                            </li>
                        ))
                    ) : (
                        <li className="text-center text-gray-500">게시물이 없습니다.</li>
                    )}
                </ul>
            )}

            {/* 스케쥴 카테고리 */}
            {selectedCategory === '스케쥴' && (
                <ul className="space-y-4">
                    {bookings.length > 0 && (
                        bookings.map((booking, index) => (
                            <li
                                key={index}
                                className="cursor-pointer rounded-lg bg-white p-6 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-green-50"
                            >
                                <p className="mb-1 text-xl font-semibold text-gray-900">{booking.date}</p>
                                <p className="mb-1 text-xl font-semibold text-gray-900" onClick={() => onClickToRoomDetail(booking.roomId)} >장소: {enableRooms.find((room) => room.id === booking.roomId)?.name}</p>
                                <p className="mb-1 text-sm text-gray-600">이용시간: {booking.usingTime.map((time) => time)}</p>
                            </li>
                        ))
                    )} {bookings.length === 0 && (
                        <li className="text-center text-gray-500">스케쥴이 없습니다.</li>
                    )}
                </ul>
            )}


            {/* 뒤로가기 버튼 */}
            <div className="mt-8 flex justify-center">
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="rounded-full border px-6 py-2 text-sm font-medium text-gray-700 transition-colors duration-300 hover:bg-gray-200"
                >
                    뒤로가기
                </button>
            </div>
        </div>

    );
}
