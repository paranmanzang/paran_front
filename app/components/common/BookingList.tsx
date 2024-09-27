"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export default function BookingList() {
  const route = useRouter()
  const goBack = () => route.back()
  const goDelete = () => {
    console.log('삭제되었습니다.')
  }

  return (
    <div className="max-w-lg">
      <ul>
        <li>
          <div className="relative max-w-sm" id="box">
            <form className="absolute top-2 w-full px-3">
              <div className="flex justify-between">
                {/* 모든 유저  */}
                <div id="likeBtn">
                  <label htmlFor="like" hidden>likeThat</label>
                  <input type="checkbox" id="like" />
                </div>
                {/* 어드민 셀러만 보이게 */}
                <div id="selectBtn">
                  <input id="select" type="checkbox" value="" className="size-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="select" hidden>chatSelect</label>
                </div>
              </div>
            </form>
            <div className="border-1 border-gray-100">
              <Link href={`/books/2`}>
                <Image
                  width={400}
                  height={330}
                  className="rounded-t-lg"
                  src={"https://picsum.photos/400/380"}
                  alt={`cover`}
                />
              </Link>
              <div className="p-5">
                <Link href={`/books/2`}>
                  <h5 className="mb-2 text-lg font-medium tracking-tight">
                    title
                  </h5>
                </Link>
                <p className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-400">
                  content
                </p>
                <p className="text-sm font-medium">chatList</p>
                <Link
                  href={`/books/2`}
                  className="mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white"
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
          </div>
        </li>
      </ul>
      <div className="btn_wrap">
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goDelete}>삭제하기</button>
      </div>
    </div>

  )
}
