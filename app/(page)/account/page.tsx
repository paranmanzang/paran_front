"use client"
import { useRouter } from "next/navigation"

export default function Account() {
  const route = useRouter();
  const goBack = () => route.back()
  
  return (
    <div>
        결제 내역 목록 보여주기
      <button type="button" onClick={goBack} >뒤로가기</button>
    </div>
  )
}
