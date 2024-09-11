import Link from "next/link";
//props 로 데이터 받아서 room, group, chat 다 다르게 바뀌도록 다시 손봐야 함.
export default function Row() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href="/books/2">
        <img
          className="rounded-t-lg"
          src="https://cdn.pixabay.com/photo/2017/01/19/08/56/book-1991816_640.jpg"
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link href="/books/2">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
            책 제목
          </h5>
        </Link>
        <p className="mb-3 font-medium text-sm text-gray-700 dark:text-gray-400">
          출간일:
        </p>
        <p className="font-medium text-sm">
          저자명: 
        </p>
        <Link
          href="/books/2"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          상세보기
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
