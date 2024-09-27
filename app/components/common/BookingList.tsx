"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import HeartCheckbox from "../common/Row/HeartCheckBox";

export default function BookingList() {
  const route = useRouter()
  const goBack = () => route.back()
  const goDelete = () => {
    console.log('삭제되었습니다.')
  }

  const handleLikeChange = (active:boolean) => {
    console.log('좋아요 상태:', active);
    // 여기에서 필요한 로직을 수행 (예: API 호출)
  };


  return (
    <div className="max-w-lg mx-auto">
      <ul>
        <li className="relative max-w-sm bg-green-100 rounded-lg" id="box">
          <form className="absolute top-2 w-full px-3">
            <div className="flex justify-between">
              {/* 모든 유저  */}
              <div id="likeBtn">
              <HeartCheckbox onChange={handleLikeChange} />
              </div>
              {/* 어드민 셀러만 보이게 */}
              <div id="selectBtn">
                <input id="select" type="checkbox" value="" className="size-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
              <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                이방이 뭐가좋으냐면 다좋아요
              </p>
              <p className="text-sm font-medium">예약 리스트입니다다다다다다</p>
              <Link
                href={`/books/2`}
                className="mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium bg-green-600 text-white"
              >
                상세보기
                <svg
                  className="ms-2 size-3.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </li>
      </ul>
      <div className="btn_wrap">
        <button onClick={goBack} className="p-2 bg-green-600 text-white rounded-lg">뒤로가기</button>
        <button onClick={goDelete} className="p-2 mx-2 bg-green-600 text-white rounded-lg">삭제하기</button>
      </div>
    </div>

  )
}
