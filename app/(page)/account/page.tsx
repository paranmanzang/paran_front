"use client"
import { useRouter } from "next/navigation"

export default function Account() {
  const route = useRouter();
  const goBack = () => route.back()
  
  return (
    <div className="max-w-lg mx-auto">
        <ul className="p-6 my-8 bg-green-100 rounded-lg">
          {/* 맵으로 돌리기 */}
          <li className="p-4 bg-green-50 rounded-lg my-2">
            <div className="flex justify-evenly items-end">
              <h2 className="text-xl">결제 큰제목</h2>
              <p className="text-sm">결제정보</p>
              <span className="bg-green-500 text-white text-sm p-1 rounded-full">결제여부</span>
            </div>
          </li>
          <li className="p-4 bg-green-50 rounded-lg my-2">
            <div className="flex justify-evenly items-end">
              <h2 className="text-xl">결제 큰제목</h2>
              <p className="text-sm">결제정보</p>
              <span className="bg-green-500 text-white text-sm p-1 rounded-full">결제여부</span>
            </div>
          </li>
          <li className="p-4 bg-green-50 rounded-lg my-2">
            <div className="flex justify-evenly items-end">
              <h2 className="text-xl">결제 큰제목</h2>
              <p className="text-sm">결제정보</p>
              <span className="bg-green-500 text-white text-sm p-1 rounded-full">결제여부</span>
            </div>
          </li>
          <li className="p-4 bg-green-50 rounded-lg my-2">
            <div className="flex justify-evenly items-end">
              <h2 className="text-xl">결제 큰제목</h2>
              <p className="text-sm">결제정보</p>
              <span className="bg-green-500 text-white text-sm p-1 rounded-full">결제여부</span>
            </div>
          </li>
          <li className="p-4 bg-green-50 rounded-lg my-2">
            <div className="flex justify-evenly items-end">
              <h2 className="text-xl">결제 큰제목</h2>
              <p className="text-sm">결제정보</p>
              <span className="bg-green-500 text-white text-sm p-1 rounded-full">결제여부</span>
            </div>
          </li>
          <li className="p-4 bg-green-50 rounded-lg my-2">
            <div className="flex justify-evenly items-end">
              <h2 className="text-xl">결제 큰제목</h2>
              <p className="text-sm">결제정보</p>
              <span className="bg-green-500 text-white text-sm p-1 rounded-full">결제여부</span>
            </div>
          </li>
          <li className="p-4 bg-green-50 rounded-lg my-2">
            <div className="flex justify-evenly items-end">
              <h2 className="text-xl">결제 큰제목</h2>
              <p className="text-sm">결제정보</p>
              <span className="bg-green-500 text-white text-sm p-1 rounded-full">결제여부</span>
            </div>
          </li>
        </ul>
      <button type="button" onClick={goBack} className="p-2 bg-green-400 text-white rounded-lg">뒤로가기</button>
    </div>
  )
}
