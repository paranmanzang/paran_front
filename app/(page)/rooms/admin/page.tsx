import Link from "next/link";

export default function roomAdmin() {
  return (
    <div className="mx-auto my-[40px] h-auto max-w-lg">
       <div id="btn" className="m-2 max-w-full">
        <Link href="/admin" className="rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">뒤로가기</Link>
      </div>
      <ul className="h-1/2 rounded-lg bg-green-100 px-10 py-10">
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        {/* <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li>
        <li>
          <Link
            href="/rooms/1"
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <div className="size-8 rounded-sm bg-green-500">Img</div>
            <p>방 이름</p>
            <span className="text-xs">등록일:</span>
            <button
              type="button"
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500"
            >
              상세보기
            </button>
          </Link>
        </li> */}
      </ul>
      
    </div>
  );
}
