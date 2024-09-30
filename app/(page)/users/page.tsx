import Link from "next/link";

export default function userList() {
  return (
    <div className="h-auto max-w-lg mx-auto my-[40px]" >
      
      <div id="btn" className="m-2 max-w-full">
        <Link href="/admin" className="rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">뒤로가기</Link>
      </div>

      <ul className="h-1/2 px-10 py-10 bg-green-100 rounded-lg">
        <li>
          <Link href="/users/2" className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
            <div className="size-8 bg-green-500 rounded-full">
              Img
            </div>
            <p>userNickname</p>
            <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">상세보기</button>
          </Link>
        </li>
        <li>
          <Link href="/users/2" className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
            <div className="size-8 bg-green-500 rounded-full">
              Img
            </div>
            <p>userNickname</p>
            <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">상세보기</button>
          </Link>
        </li>
        <li>
          <Link href="/users/2" className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
            <div className="size-8 bg-green-500 rounded-full">
              Img
            </div>
            <p>userNickname</p>
            <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">상세보기</button>
          </Link>
        </li>
        <li>
          <Link href="/users/2" className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
            <div className="size-8 bg-green-500 rounded-full">
              Img
            </div>
            <p>userNickname</p>
            <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500  ">상세보기</button>
          </Link>
        </li>
        <li>
          <Link href="/users/2" className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
            <div className="size-8 bg-green-500 rounded-full">
              Img
            </div>
            <p>userNickname</p>
            <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500  ">상세보기</button>
          </Link>
        </li>
        <li>
          <Link href="/users/2" className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
            <div className="size-8 bg-green-500 rounded-full">
              Img
            </div>
            <p>userNickname</p>
            <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500  ">상세보기</button>
          </Link>
        </li>
        <li>
          <Link href="/users/2" className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
            <div className="size-8 bg-green-500 rounded-full">
              Img
            </div>
            <p>userNickname</p>
            <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500  ">상세보기</button>
          </Link>
        </li>
      </ul>
      
    </div>
  );
}
