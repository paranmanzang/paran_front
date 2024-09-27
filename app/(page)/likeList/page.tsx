"use client"
import { useRouter } from "next/navigation";
import AccountButton from "@/app/components/common/AccountButton";
export default function LikeList() {
  const route = useRouter();
  const goBack = () => route.back()
  return (
    <div>
      찜 리스트보이기

      탭바로 목록 별 보기

      버튼
      <br/>
      예약하기 
      <AccountButton />
      {/* //결제하기 버튼 갈기기- 결제 버튼 컴포넌트로 빼기  */}
      <br/>
      
      <button type="button" onClick={goBack}>뒤로가기</button>
    </div>
  )
}
