"use client"
import { useRouter } from "next/navigation";
import LikeList from "@/app/components/user/LikeList";

export default function likeList() {
  const route = useRouter();
  const goBack = () => route.back()
  return (
    <div className="max-w-lg p-6 my-8  mx-auto bg-green-100">
      찜 리스트보이기-탭으로 변경
      <LikeList />
      <LikeList />
      <LikeList />
      
      <button type="button" onClick={goBack}>뒤로가기</button>
    </div>
  )
}
