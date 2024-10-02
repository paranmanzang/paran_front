// components/DetailButton.tsx
"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BookingModal from "../BookingModal";
import Alert from "../Alert";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/lib/store";
import { addLikedBook, getCurrentBook, getLikedBooks, saveError } from "@/lib/features/group/book.slice";
import { getCurrentRoom } from "@/lib/features/room/room.slice";
import { getCurrentGroupPost } from "@/lib/features/group/group.slice";
import { saveGlobalLoading } from "@/lib/features/error.slice";
import { LikeBookModel } from "@/app/model/group/book.model";
import { likeBookService } from "@/app/service/group/likeBook.service";

interface DetailButtonProps {
    thisPage: string;
    displayReview: 'none' | 'block';
    displayReservation: 'none' | 'block';
}

export default function DetailButton({ thisPage, displayReview, displayReservation }: DetailButtonProps) {
    const nickname = 'A'; // 임의로 넣어둠
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const route = useRouter();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const dispatch = useAppDispatch()
    const likedBooks = useSelector(getLikedBooks);
    const book = useSelector(getCurrentBook);
    const room = useSelector(getCurrentRoom);
    const groupPost = useSelector(getCurrentGroupPost);

    useEffect(() => {
        dispatch(saveGlobalLoading(true));
        switch (thisPage) {
            case "/books": {
                const likeBookModel: LikeBookModel = {
                    bookId: Number(book?.id),
                    nickname: nickname
                };
                likeBookService.insert(likeBookModel, dispatch)
                    .finally(() => {
                        setAlertMessage('찜 했습니다.');
                        setIsAlertOpen(true);
                    });
                break;
            }
            case "/rooms": {
                //sevice 존재하지 않음
            }
                break;
            case "/groupPost": {
                //sevice 존재하지 않음
            }
                break;
        }
    }, [dispatch, thisPage]);

    const onBack = () => {
        route.back();
    }
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
        dispatch(saveGlobalLoading(false)); // 항상 로딩 종료
        setAlertMessage('찜 했습니다.');
        setIsAlertOpen(true);
    }
    const JoinGroups = () => {
        setAlertMessage('이 소모임에 참여하시겠습니까? ');
        setIsAlertOpen(true);
    }
    const handleConfirm = () => {
        setIsConfirmOpen(false);
        route.push('/likeList');
    };
    const handleCancel = () => {
        setIsConfirmOpen(false);
    };
    const handleAccount = () => {
        openModal();
    }

    const isBookLiked = likedBooks.some(LikedBook => LikedBook.id === book?.id);
    //const isRoomLiked = likedRooms.some(likedRoom => likedRoom.id === room?.id);
    //const isGroupPostLiked = likedGroupPosts.some(likedGroupPost => likedGroupPost.id === groupPost?.id);

    return (
        <>
            {/* {userInfo == admin ?  */}
            <div>
                <button>수정</button>
                <button>삭제</button>
            </div>
            :
            <div className="mx-auto flex h-[20px] w-full max-w-lg items-end">
                {isBookLiked ? (
                    // 이미 찜 목록에 있을 경우 다른 버튼이나 메시지 표시
                    `${Message()}`
                ) : (
                    // 책이 찜 목록에 없을 경우 "찜하기" 버튼 표시
                    <button type="button" onClick={LikeThis} className="mx-2 rounded-full border px-3 py-2">
                        🥰 찜하기 🥰
                    </button>
                )}
                <button type="button" onClick={handleReview} className="mx-2 rounded-full border px-3 py-2"
                    style={{ display: displayReview }}
                // 리뷰는 유저의 예약일이 접속일보다 과거면 버튼 띄우기 -> 해당 유저가 진짜 그 장소를 컨텍했는지에 따라 버튼 유무 결정할 것
                >
                    리뷰보기
                </button>
                <button type="button" onClick={handleAccount} className="mx-2 rounded-full border px-3 py-2"
                    style={{ display: displayReservation }}
                >
                    예약하기
                </button>
                <BookingModal isOpen={isModalOpen} onClose={closeModal} />

                <button type="button" onClick={JoinGroups} className="mx-2 rounded-full border px-3 py-2"
                    style={{ display: displayReservation }}
                >
                    참여하기
                </button>

                <button type="button" onClick={onBack} className="mx-2 rounded-full border px-3 py-2">
                    뒤로가기
                </button>
            </div>
            {/* } */}
            {/* <div className="mx-auto flex h-[20px] w-full max-w-lg items-end">
        {isBookLiked ? (
          // 이미 찜 목록에 있을 경우 다른 버튼이나 메시지 표시
          `${Message()}`
        ) : (
          // 책이 찜 목록에 없을 경우 "찜하기" 버튼 표시
          <button type="button" onClick={LikeThis} className="mx-2 rounded-full border px-3 py-2">
            🥰 찜하기 🥰
          </button>
        )}
        <button type="button" onClick={handleReview} className="mx-2 rounded-full border px-3 py-2"
          style={{ display: displayReview }}
        // 리뷰는 유저의 예약일이 접속일보다 과거면 버튼 띄우기 -> 해당 유저가 진짜 그 장소를 컨텍했는지에 따라 버튼 유무 결정할 것
        >
          리뷰보기
        </button>
        <button type="button" onClick={handleAccount} className="mx-2 rounded-full border px-3 py-2"
          style={{ display: displayReservation }}
        >
          예약하기
        </button>
        <BookingModal isOpen={isModalOpen} onClose={closeModal} />

        <button type="button" onClick={JoinGroups} className="mx-2 rounded-full border px-3 py-2"
          style={{ display: displayReservation }}
        >
          참여하기
        </button>

        <button type="button" onClick={onBack} className="mx-2 rounded-full border px-3 py-2">
          뒤로가기
        </button>
      </div> */}

            <Alert
                message={alertMessage}
                isOpen={isAlertOpen}
                onClose={handleAlertClose}
            />

            <Alert
                message="찜 목록으로 이동하시겠습니까?"
                isOpen={isConfirmOpen}
                onClose={handleCancel}
                onConfirm={handleConfirm}
                showConfirm={true}
            />
        </>
    )
}