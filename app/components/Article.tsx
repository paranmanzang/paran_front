import Link from "next/link";
export default function Article() {
  return (
    <div className="px-4 py-4 w-90 h-80" id="article"> 
      <h2 className="text-4xl font-extrabold dark:text-gray-900">
        독서습관 길러봐요!
      </h2>
      <p className="my-2 text-lg text-gray-500">
        우리들의 즐거운 소모임을 통해서 함께 독서습관 만들어요!
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        집과 가까운곳, 재밌어 보이는곳, 나와 취향이 비슷한 곳 등 다양한 소모임에 참여해보세요!
      </p>
      <Link
        href="/"
        className="inline-flex items-center text-lg text-blue-600 hover:underline dark:text-blue-500"
      >
        더보기
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
  );
}
