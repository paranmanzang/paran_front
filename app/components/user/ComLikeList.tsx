"use client";
import AccountButton from "@/app/components/common/AccountButton";
import { useState } from "react";
import Alert from "../common/Alert";
import { useSelector } from "react-redux";

import { getLikedBooks, saveCurrentBook } from "@/lib/features/group/book.slice";
import { getLikedPosts, saveCurrentGroupPost } from "@/lib/features/group/group.slice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store";
import { getLikedRooms, saveCurrentRoom } from "@/lib/features/room/room.slice";



interface ComLikeListProps {
  type: "게시글" | "도서" | "장소";
}

interface LikedItem {
  id: string | number;
  title: string;
}

const ComLikeList = ({ type }: ComLikeListProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const likedPosts = useSelector(getLikedPosts);
  const likedRooms = useSelector(getLikedRooms);
  const likedBooks = useSelector(getLikedBooks);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const modalOpen = (): void => {
    setIsModalOpen(true);
  };

  const mapToLikedItems = (items: any[], type: string): LikedItem[] => {
    return items.map((item) => {
      switch (type) {
        case "게시글":
          return {
            id: item.id,
            title: item.title,
          };
        case "도서":
          return {
            id: item.id,
            title: item.title,
          };
        case "장소":
          return {
            id: item.id,
            title: item.roomName || item.title,
          };
        default:
          return {
            id: item.id,
            title: item.title || "제목 없음",
          };
      }
    });
  };

  // type에 맞는 아이템들을 렌더링
  const renderItems = (): JSX.Element[] => {
    let items: LikedItem[] = [];
    switch (type) {
      case "게시글":
        items = mapToLikedItems(likedPosts, "게시글");
        break;
      case "도서":
        items = mapToLikedItems(likedBooks, "도서");
        break;
      case "장소":
        items = mapToLikedItems(likedRooms, "장소");
        break;
      default:
        items = [];
    }

    const onClickToDetail = (id: number) => {
      switch (type) {
        case "게시글":
          const selectedPost = likedPosts.find((likePost) => likePost.id === id);
          if (selectedPost) {
            dispatch(saveCurrentGroupPost(selectedPost));
            router.push(`/groups/board/detail/${id}`);
          }
          break;
        case "도서":
          const selectedBook = likedBooks.find((likeBook) => likeBook.id === id);
          if (selectedBook) {
            dispatch(saveCurrentBook(selectedBook));
            router.push(`/books/${id}`);
          }
          break;
        case "장소":
          const selectedRoom = likedRooms.find((likeRoom) => likeRoom.id === id);
          if (selectedRoom) {
            dispatch(saveCurrentRoom(selectedRoom));
            router.push(`/rooms/${id}`);
          }
          break;
        default:
          break;
      }
    };

    return items.map((item: LikedItem, index: number) => (
      <li key={item.id || index} className="w-full relative">
        <div className="flex justify-around my-2 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100">
          <div>
            <h5
              className="mb-2 text-2xl font-bold tracking-tight text-gray-900"
              onClick={() => onClickToDetail(Number(item.id))}
            >
              {item.title}
            </h5>
          </div>
          <div className="btn_wrap flex items-center">
            {type === "장소" && (
              <>
                <button
                  type="button"
                  onClick={modalOpen}
                  className="text-sm p-2 mx-3 bg-green-100 rounded-lg"
                >
                  예약하기
                </button>
                <AccountButton />
              </>
            )}
          </div>
        </div>
      </li>
    ));
  };

  return (
    <div>
      {isModalOpen && (
        <Alert
          message={"예약요청이 완료되었습니다."}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <ul>{renderItems()}</ul>
    </div>
  );
};

export default ComLikeList;
