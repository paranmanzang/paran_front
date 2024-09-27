"use client"
import { useRouter } from "next/navigation";
import CategorySelect from "../common/CategorySelect";
import Alert from "../common/Alert";
import { useState } from "react";

export default function GroupAdd() {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const createGroup = () => {
    setIsOpen(true);
  }
  const goBack = () => {
    route.back();
  }
  return (
    <>
      <form className="max-w-lg mx-auto p-6 my-8 bg-green-50 rounded-lg">
        <div>
          <label htmlFor="place">모임방 이름</label>
          <input type="text" placeholder="소모임의 이름을 적어주세요" id="place" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 my-2" />
        </div>
        <div>
          <label htmlFor="leader">모임장을 정해주세요!</label>
          <input type="text" placeholder="모임장의 닉네임을 적어주세요" id="leader" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 my-2" />
        </div>
        <CategorySelect />
        <div>
          <button type="button" onClick={createGroup} className="p-2 bg-green-400 rounded-lg text-white">모임 개설하기</button>
          <button type="button" onClick={goBack} className="p-2 mx-2 bg-green-400 rounded-lg text-white">모임 개설 취소하기</button>
        </div>
        <div>
        </div>
      </form>
      <Alert message={'모임이 개설이 요청되었습니다.'} isOpen={isOpen} onClose={() => { setIsOpen(false) }} />
    </>
  )
}
