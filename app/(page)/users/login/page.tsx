import Link from "next/link";

export default function Login() {
  return (
    <div className="mx-auto my-6 max-w-lg rounded-lg border px-6 py-6 shadow dark:bg-gray-600">
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-500 dark:focus:ring-green-400"
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
        <Link
          href="/"
          type="submit"
          className="w-full rounded-lg border-2 border-green-400 bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-green-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-50 dark:hover:bg-green-100 dark:focus:ring-green-200 sm:w-auto"
        >
          뒤로가기
        </Link>
        <Link href="/users/register" className="mx-3">
          처음이시라면 회원가입{"(*Ü*)ﾉ"}
        </Link>
      </form>

      <hr className="my-2" />

      <div className="mx-auto my-4 max-w-lg">
        <button
          type="button"
          className="mb-2 me-2 rounded-lg bg-green-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-600"
        >
          네이버로 로그인
        </button>
      </div>
    </div>
  );
}
