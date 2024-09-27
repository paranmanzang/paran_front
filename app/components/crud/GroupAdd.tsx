"use client"
import { useRouter } from "next/navigation";

export default function GroupAdd() {
  const route = useRouter();
  const createGroup = () => {
    console.log("모임이 개설되었습니다.")
  }
  const goBack = () => {
    route.back();
  }
  return (
    <form>
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
      <div>
        <label htmlFor="category">모임의 카테고리를 정해주세요</label>
        <select id="category">
          <option>1. 사회과학</option>
          <option>2. 기술과학</option>
          <option>3. 문학</option>
          <option>4. 철학</option>
          <option>5. 예술</option>
          <option>6. 언어</option>
          <option>7. 역사</option>
          <option>8. 종교</option>
          <option>9. 자연과학</option>
          <option>10. 기타</option>
        </select>
      </div>
      <div>
        <button type="button" onClick={createGroup}>모임 개설하기</button>
        <button type="button" onClick={goBack}>모임 개설 취소하기</button>
      </div>
      <div>
      </div>
    </form>
  )
}
