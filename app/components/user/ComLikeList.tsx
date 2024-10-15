"use client"
import AccountButton from "@/app/components/common/AccountButton";
import { useState } from "react";
import Alert from "../common/Alert";
import { useSelector } from "react-redux";
import { getLikedBooks } from "@/lib/features/group/book.slice";
import { getLikedRooms } from "@/lib/features/users/likeRoom.slice";
import { getLikedPosts } from "@/lib/features/group/group.slice";

interface ComLikeListProps {
  type: "게시글" | "도서" | "장소";
}

interface LikedItem {
  id: string | number
  title: string
}
const ComLikeList = ({ type }: ComLikeListProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const likedPosts = useSelector(getLikedPosts);
  const likedRooms = useSelector(getLikedRooms);
  const likedBooks = useSelector(getLikedBooks);

  const modalOpen = (): void => {
    setIsModalOpen(true);
    <Alert message={'예약요청이 완료되었습니다.'} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    // console.log('AccountLike: ' + '예약요청이 완료되었습니다.');
  }

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
            title: item.title
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

    return items.map((item: LikedItem, index: number) => (
      <li key={item.id || index} className="w-full relative">
        <div className="flex items-center justify-evenly my-2 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100">
          <div>
            <h5 className="mb-2 w-60 text-base text-center font-semibold tracking-tight text-gray-900">
              {item.title}
            </h5>
          </div>
          <div className="btn_wrap flex items-center">
            {type === "장소" && (
              <button type="button" onClick={modalOpen} className="text-sm p-2 mx-3 bg-green-100 rounded-lg">
                요청보내기
              </button>
            )}
            {type === "게시글" && (
              <button type="button" onClick={modalOpen} className="text-sm p-2 mx-3 bg-green-100 rounded-lg">
                참여요청
              </button>
            )}
            <AccountButton />
          </div>
        </div>
      </li>
    ));
  };

  return (
    <div>
      <ul>
        {renderItems()}
      </ul>
    </div>
  );
}

export default ComLikeList;