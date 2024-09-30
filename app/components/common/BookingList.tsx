"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function BookingList() {
  const route = useRouter()
  const goBack = () => route.back()
  const goDelete = () => {
    console.log('삭제되었습니다.')
  }
  const moveToPage = () => route.push(`/rooms/2`)
  

  return (
    <div className="max-w-lg mx-auto">
      <ul>
        <li className="relative max-w-sm bg-green-100 rounded-lg" id="box">
          <form className="absolute top-2 w-full px-3">
            <div className="flex justify-between">
              {/* 어드민 셀러만 보이게 */}
              <div id="selectBtn">
                <input id="select" type="checkbox" value="" className="size-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500" />
                <label htmlFor="select" hidden>Select</label>
              </div>
            </div>
          </form>
          <div className="border-1 border-gray-100 pt-5">
            <div className="p-5">
              <Link href={`/books/2`}>
                <h5 className="mb-2 text-lg font-medium tracking-tight">
                  방넘버
                </h5>
              </Link>
              <p className="mb-3 text-sm font-medium text-gray-700">
                이방이 뭐가좋으냐면 다좋아요
              </p>
              <p className="text-sm font-medium">예약 리스트입니다다다다다다</p>
              <div className="flex mt-5 w-full items-center justify-center">
                <button
                  // 선택 된 상세보기의 id 를 받아와야함. link 잘보기
                  type="button" 
                  onClick={moveToPage}
                  className="rounded-lg p-2 mx-2 text-sm font-medium bg-green-600 text-white"
                >
                  상세보기
                </button>
                <button type="button" className="p-2 bg-green-400 text-white rounded-lg mx-2">결제하기</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="btn_wrap my-4">
        <button onClick={goBack} className="p-2 bg-green-600 text-white rounded-lg">뒤로가기</button>
        <button onClick={goDelete} className="p-2 mx-2 bg-green-600 text-white rounded-lg">삭제하기</button>
      </div>
    </div>

  )
}
