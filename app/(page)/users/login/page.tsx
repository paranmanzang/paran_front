"use client"
import Link from "next/link";
import Image from "next/image";
import Naver from "../../../assets/btnG.png"
import { useRouter } from "next/navigation";

export default function Login() {
  const route = useRouter();
  const goBack = () => {
    route.back();
  }

  return (
    <div className="mx-auto my-6 max-w-lg rounded-lg border p-6 shadow dark:bg-gray-600">
      <form>
        <div className="mb-5">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            ID
          </label>
          <input
            type="username"
            id="username"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-green-500 dark:focus:ring-green-400"
            placeholder="ID를 입력해주세요"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-500"
            placeholder="비밀번호"
            required
          />
        </div>
        <button
          type="submit"
          className="mx-2 w-full rounded-lg border-2 border-green-400 bg-green-400 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500 sm:w-auto"
        >
          로그인
        </button>
        <button
          type="button"
          onClick={goBack}
          className="w-full rounded-lg border-2 border-green-400 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-50 dark:hover:bg-green-100 dark:focus:ring-green-200 sm:w-auto"
        >
          뒤로가기
        </button>
        <Link href="/users/register" className="mx-3">
          처음이시라면 회원가입{"(*Ü*)ﾉ"}
        </Link>
      </form>

      <hr className="my-2" />

      <div className="mx-auto my-4 max-w-lg">
        <button
          type="button"
          className="mb-2 w-full flex items-center rounded-lg text-[#03c75a] px-5 py-2.5 text-sm font-medium bg-white border-2 border-[#03c75a] hover:bg-[#03c75a] dark:bg-gray-600 dark:hover:bg-gray-600 hover:text-white "
        >
           <Image
           src={Naver}
           alt="cat"
           width={40}
          />
        <span className="mx-5">네이버로 로그인</span>
        </button>
      </div>
    </div>
  );
}
