// components/DetailButton.tsx
"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingModal from "../BookingModal";
import Alert from "../Alert";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/lib/store";
import { getCurrentBook, getLikedBooks } from "@/lib/features/group/book.slice";
import { getCurrentRoom } from "@/lib/features/room/room.slice";
import { getCurrentGroup, getCurrentGroupPost, getGroupMembers, getLeaderGroups, getLikedPosts } from "@/lib/features/group/group.slice";
import { LikeBookModel } from "@/app/model/group/book.model";
import { likeBookService } from "@/app/service/group/likeBook.service";
import { getCurrentUser, getNickname } from "@/lib/features/users/user.slice";
import { LikeRoomModel } from "@/app/model/user/users.model";
import { likeRoomService } from "@/app/service/users/likeRoom.service";
import { getLikedRooms } from "@/lib/features/users/likeRoom.slice";
import { likePostService } from "@/app/service/group/likePost.service";
import { LikePostModel } from "@/app/model/group/group.model";

interface DetailButtonProps {
    thisPage: string;
    displayReview: 'none' | 'block';
    displayBoard: 'none' | 'block';
    displayReservation: 'none' | 'block';
}

export default function DetailButton({ thisPage, displayReview, displayBoard, displayReservation }: DetailButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const [isConfirmOpen, setIsConfirmOpen] = useState(false)

    const route = useRouter()
    const dispatch = useAppDispatch()
    const book = useSelector(getCurrentBook)
    const likebooks = useSelector(getLikedBooks)
    const likeRooms = useSelector(getLikedRooms)
    const likePosts = useSelector(getLikedPosts)
    const leaderGroups = useSelector(getLeaderGroups)
    const room = useSelector(getCurrentRoom)
    const group = useSelector(getCurrentGroup)
    const post = useSelector(getCurrentGroupPost)
    const user = useSelector(getCurrentUser)
    const users = useSelector(getGroupMembers)
    const nickname = useSelector(getNickname)
    const userInfo = user?.role ?? null
    const isUserInGroup = group?.id && users[group.id]?.some((user: any) => user.nickname === nickname);
    console.log(isUserInGroup)
    console.log(leaderGroups)
    const handleReview = () => {
        route.push(`${thisPage}/review`)
    }
    const handleAlertClose = () => {
        setIsAlertOpen(false);
        setIsConfirmOpen(true);
    };
    const Message = () => {
        setAlertMessage('이미 찜 상품에 있습니다.');
        setIsAlertOpen(true);
    }
    const LikeThis = () => {
        switch (thisPage) {
            case "/books": {
                if (!book || !nickname) return;
                const likeBookModel: LikeBookModel = {
                    bookId: Number(book.id),
                    nickname: nickname
                };

                likeBookService.insert(likeBookModel, dispatch);
                break;
            }
            case "/groupPost": {
                if (!post || !nickname) return;
                const likePostModel: LikePostModel = {
                    postId: post.id,
                    nickname: nickname
                };

                likePostService.insert(likePostModel, dispatch);
                break;
            }
            case "/rooms": {
                if (!room || !nickname) return;
                const likeRoomModel: LikeRoomModel = {
                    roomId: Number(room.id),
                    nickname: nickname
                };
                likeRoomService.insert(likeRoomModel, dispatch);
                break;
            }
            default:
                return;
        }
        setAlertMessage('찜 했습니다.');
        setIsAlertOpen(true);
    }
    const JoinGroups = () => {
        setAlertMessage('성공적으로 소모임 참여 신청이 되었습니다.');
        setIsAlertOpen(true);
    }
    const groupConfirm = () => {
        setIsConfirmOpen(false);
        route.push('/');
    }
    const handleConfirm = () => {
        setIsConfirmOpen(false);
        route.push('/likeList');
    }

    const isBookLiked = likebooks.some((likeBook) => likeBook.bookId === book?.id)
    const isRoomLiked = likeRooms.some((likeRoom) => likeRoom.roomId === room?.id)
    const ispostLiked = likePosts.some((likePost) => likePost.id === post?.id)

    return (
        <>
            {userInfo === 'ROLE_admin' && (
                <div className="max-w-sm mx-auto">
                    <button type="button" onClick={() => { route.push('/admin/update') }} className="p-3 bg-green-500 text-white">수정</button>
                    <button type="button" onClick={() => { route.push('/admin/delete') }} className="p-3 bg-green-500 text-white">삭제</button>
                </div>
            )}
            <div className="flex justify-center items-end">
                {thisPage !== '/groups' && (() => {

                    let isLiked;
                    switch (thisPage) {
                        case '/books':
                            isLiked = isBookLiked;
                            break;
                        case '/rooms':
                            isLiked = isRoomLiked;
                            break;
                        case '/grouppost':
                            isLiked = ispostLiked;
                            break;
                        default:
                            return null; // 해당되지 않는 페이지일 경우 렌더링하지 않음
                    }

                    // 좋아요 여부에 따른 버튼 렌더링
                    return (
                        isLiked ? (
                            <button type="button" onClick={Message} className="mx-2 rounded-full border px-3 py-2">
                                이미 좋아요 목록에 있습니다
                            </button>
                        ) : (
                            userInfo && (
                                <button type="button" onClick={LikeThis} className="mx-2 rounded-full border px-3 py-2">
                                    🥰 좋아요 🥰
                                </button>
                            )
                        )
                    );
                })()}

                {/* 리뷰는 유저의 예약일이 접속일보다 과거면 버튼 띄우기 -> 해당 유저가 진짜 그 장소를 컨텍했는지에 따라 버튼 유무 결정할 것 */}
                <button type="button" onClick={handleReview} className="mx-2 rounded-full border px-3 py-2"
                    style={{ display: displayReview }}
                >
                    리뷰보기
                </button>
                {thisPage == '/rooms' && leaderGroups.length > 0 && (
                    <button type="button" onClick={() => setIsModalOpen(true)} className="mx-2 rounded-full border px-3 py-2"
                        style={{ display: displayReview }}
                    >
                        예약하기
                    </button>
                )}
                <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} id={3} />
                {userInfo && thisPage === '/groups' && group && !isUserInGroup && (
                    <button type="button" onClick={JoinGroups} className="mx-2 rounded-full border px-3 py-2"
                        style={{ display: displayReservation }}
                    >
                        참여하기
                    </button>
                )}
                {userInfo && thisPage === '/groups' && isUserInGroup && (
                    <button
                        type="button"
                        onClick={() => { route.push(`/groups/board/${group?.id}`) }}
                        className="mx-2 rounded-full border px-3 py-2"
                        style={{ display: displayBoard }}
                    >
                        모임 공지가기
                    </button>
                )}
                <button type="button" onClick={() => { route.back() }} className="mx-2 rounded-full border px-3 py-2">
                    뒤로가기
                </button>
            </div>

            <Alert
                message={alertMessage}
                isOpen={isAlertOpen}
                onClose={handleAlertClose}
            />
            {thisPage === '/rooms' && (
                <Alert
                    message="목록으로 이동하시겠습니까?"
                    isOpen={isConfirmOpen}
                    onClose={() => { setIsConfirmOpen(false) }}
                    onConfirm={handleConfirm}
                    showConfirm={true}
                />
            )}
            {thisPage === '/groups' && (
                <Alert
                    message="목록으로 이동하시겠습니까?"
                    isOpen={isConfirmOpen}
                    onClose={() => { setIsConfirmOpen(false) }}
                    onConfirm={groupConfirm}
                    showConfirm={true}
                />
            )}
        </>
    )
}