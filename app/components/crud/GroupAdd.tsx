"use client"
import { useRouter } from "next/navigation";
import CategorySelect from "../common/CategorySelect";

export default function GroupAdd() {
  const route = useRouter();
  const createGroup = () => {
    console.log("모임이 개설되었습니다.")
  }
  const goBack = () => {
    route.back();
  }
  return (
    <form className="max-w-lg mx-auto p-6 my-8 bg-green-50 rounded-lg">
      <div>
        <label htmlFor="place">모임 이름</label>
        <input type="text" placeholder="공간의 이름을 적어주세요" id="place" />
      </div>
      <div>
        <label htmlFor="people">모임 최대인원수</label>
        <input type="number" placeholder="최대인원 수를 정해주세요!" id="people" />
      </div>
      <div>
        <label htmlFor="leader">모임장을 정해주세요!</label>
        <input type="number" placeholder="모임장의 닉네임을 적어주세요" id="leader" />
      </div>
      <CategorySelect />
      <div>
        <button type="button" onClick={createGroup} className="p-2 bg-green-400 rounded-lg text-white">모임 개설하기</button>
        <button type="button" onClick={goBack} className="p-2 mx-2 bg-green-400 rounded-lg text-white">모임 개설 취소하기</button>
      </div>
      <div>
      </div>
    </form>
  )
}
