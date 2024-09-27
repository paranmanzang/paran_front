"use client"
import Link from "next/link";
import AccountButton from "@/app/components/common/AccountButton";
import { useState } from "react";
import BookingModal from "../common/BookingModal";

export default function LikeList() {
  const [idModalOpen, setIsModalOpen] = useState(false);
  const modalOpen = () => {
    
  }
  return (
    <ul>
      {/* map 으로 돌리기 */}
      <li className="w-full">
        <div
          className=" flex justify-around my-2 rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
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
            <button type="button" onClick={modalOpen} className="text-sm p-2 mx-3 bg-green-100 rounded-lg">예약하기</button>
            <AccountButton />

            {/* <button type="button" onClick={modalOpen} className="text-sm p-2 mx-3 bg-green-100 rounded-lg">참여하기</button> */}
          </div>
        </div>
      </li>
    </ul>
  );
}
