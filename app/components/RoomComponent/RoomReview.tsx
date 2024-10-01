"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
export default function RoomReview() {
  const route = useRouter()
  const goBack = () => {
    route.back()
  }
  return (
    <div className="max-w-lg mx-auto bg-green-50 rounded-lg p-6 my-8">
      {/* 예약일이 오늘 날보다 과거이면 리뷰쓰기 버튼 생성하기 */}
      <p className="text-xl">공간리뷰</p>
      <span className="text-sm"> 실제 사용자분들의 후기를 담고 있습니다.</span>
      <ul className="my-3 w-full">
        <li className="bg-white rounded-lg my-5 min-w-full max-w-3">
          <Link href="/" className="p-5">
            <h2 className="text-xl border-b border-gray-100">너무 좋아요!! 만족 만족!!</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">장소가 너무 이쁘고 좋아요 너무 좋고 조용해서 책읽고 소모임 하기 너무 좋습니다!!!</p>
          </Link>
        </li>
        <li className="bg-white rounded-lg my-5 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">너무 좋아요!! 만족 만족!!</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">장소가 너무 이쁘고 좋아요 너무 좋고 조용해서 책읽고 소모임 하기 너무 좋습니다!!!</p>
          </div>
        </li>
        <li className="bg-white rounded-lg my-5 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">너무 좋아요!! 만족 만족!!</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">장소가 너무 이쁘고 좋아요 너무 좋고 조용해서 책읽고 소모임 하기 너무 좋습니다!!!</p>
          </div>
        </li>
        <li className="bg-white rounded-lg my-5 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">너무 좋아요!! 만족 만족!!</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">장소가 너무 이쁘고 좋아요 너무 좋고 조용해서 책읽고 소모임 하기 너무 좋습니다!!!</p>
          </div>
        </li>
        <li className="bg-white rounded-lg my-5 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">너무 좋아요!! 만족 만족!!</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">장소가 너무 이쁘고 좋아요 너무 좋고 조용해서 책읽고 소모임 하기 너무 좋습니다!!!</p>
          </div>
        </li>
      
      </ul>
      <h1>pagination구현할곳</h1>
      <button type="button" className="p-2 bg-green-100 rounded-lg border-white" onClick={goBack}>뒤로가기</button>
    </div>
  )
}
