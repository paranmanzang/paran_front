"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Alert from "@/app/components/common/Alert";

export default function ShowOne() {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const Deny = () => {
    route.back();
  // 거절하게 되면 다시 admin으로 이동하도록 하기
  }

const Complete = () => {
  setIsOpen(true);
}
  return (
    <div className="max-w-lg mx-auto my-8 p-8 rounded-lg bg-green-100">
      {/* 신고 접수 요청을 리스트로 크게 볼 수 있도록 한다. */}
       <ul className="bg-white p-6">
        <li className="border-b-2 border-gray-200 pb-6 mb-6">
          <h2 className="text-xl">신고 접수 큰 제목</h2>
          <p className="">신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용신고 접수 내용</p>
        </li>
        <li className="flex justify-center items-center">
          <button type="button" className="p-2 bg-green-400 mx-2 rounded-lg text-white" onClick={Complete}>처리완료하기</button>
          <button type="button" className="p-2 bg-green-400 mx-2 rounded-lg text-white" onClick={Deny}>거절하기</button>
        </li>
       </ul>
       <Alert message={"처리가 완료되었습니다"} isOpen={isOpen} onClose={() => {setIsOpen(false)}}/>
    </div>
  )
}
