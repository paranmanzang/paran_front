import Link from "next/link";
//props 로 데이터 받아서 room, group, chat 다 다르게 바뀌도록 다시 손봐야 함.
export default function Row({
  //title, content, isData, getId 
  // -> 해당 프롭스로 다른 url 링크 타면 다른 데이터 받아오는 방식으로 컴포넌트 재활용할 것임. 
  //fetchUrl
}) {
  /* 
    const fetchData = async () => {
    const request = await axios.get(fetchUrl);
   } */

  return (
   // {dataname.map((data) => (
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href="/books/2">
        <img
          className="rounded-t-lg"
          src="https://picsum.photos/400/380"
          alt="rowsImage"
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
          className="inline-flex items-center rounded-lg bg-green-400 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600"
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
    //))}
  );
}
