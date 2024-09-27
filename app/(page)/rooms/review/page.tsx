"use client"
import { useRouter } from "next/navigation"
export default function ReviewRoom() {
  const route = useRouter()
  const goBack = () => {
    route.back()
  }
  return (
    <div className="max-w-lg mx-auto bg-green-50 rounded-lg p-6 my-8">
      {/* 예약일이 오늘 날보다 과거이면 리뷰쓰기 버튼 생성하기 */}
      <p className="text-xl">공간리뷰</p>
      <span className="text-sm">- 실제 사용자분들의 내용을 담고 있습니다.</span>
      <ul className="my-3 w-full">
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
        <li className="bg-white rounded-lg mb-3 min-w-full max-w-3">
          <div className="p-5">
            <h2 className="text-xl border-b border-gray-100">title</h2>
            <p className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</p>
          </div>
        </li>
      </ul>
      <h1>pagination구현할곳</h1>
      <button type="button" className="p-2 bg-green-100 rounded-lg border-white" onClick={goBack}>뒤로가기</button>
    </div>
  )
}
