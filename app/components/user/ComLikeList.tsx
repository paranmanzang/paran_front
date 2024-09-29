"use client"
import Link from "next/link";
import AccountButton from "@/app/components/common/AccountButton";
import { useState } from "react";
import Alert from "../common/Alert";

interface ComLikeListProps {
  type: "all" | "groups" | "rooms";
}

const ComLikeList: React.FC<ComLikeListProps> = ({ type }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = () => {
     setIsModalOpen(true);
  }
  
  return ( 
    <div>
      {type === "all" && <p></p>}
      {type === "groups" && <p></p>}
      {type === "rooms" && <p></p>}
      <ul>
        {/* map 으로 돌리기 */}
        <li className="w-full relative">
          <form className="absolute top-2 left-2">
            <label htmlFor="select" hidden>선택박스</label>
            <input type="checkbox" id="select" />
          </form>
          <div
            className=" flex justify-around my-2 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                큰 제목 title
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                작은글
              </p>
            </div>
            <div className="btn_wrap flex items-center">
              {/* 
            book에서는 안보이기 ,
            group에서도 안보이기 -> 참여하기 버튼으로, 
            room에서만 보이기 
             */}

              <button type="button" onClick={modalOpen} className="text-sm p-2 mx-3 bg-green-100 rounded-lg">예약요청</button>
              <Alert message={'예약요청이 완료되었습니다.'} isOpen={isModalOpen} onClose={() => {true}}/>
              <AccountButton />

              {/* <button type="button" onClick={modalOpen} className="text-sm p-2 mx-3 bg-green-100 rounded-lg">참여하기</button> */}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ComLikeList;