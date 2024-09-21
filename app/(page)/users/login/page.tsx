import Link from "next/link"

export default function Login() {
  return (
      <div className="max-w-lg mx-auto my-6 py-6 px-6 border shadow rounded-lg dark:bg-gray-600">
        <form>
          <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
            <input type="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-500" placeholder="ID를 입력해주세요" required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  placeholder="비밀번호" required />
          </div>
          <button type="submit" className="text-white border-2 border-green-400 bg-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 mx-2 text-center dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-500">로그인</button>
          <Link href="/"type="submit" className="text-gray-500 border-2 border-green-400 bg-white hover:text-white hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2.5 text-center dark:bg-green-50 dark:hover:bg-green-100 dark:focus:ring-green-200">뒤로가기</Link>
          <Link href="/users/register" className="mx-3">
          처음이시라면 회원가입{'(*Ü*)ﾉ'}
          </Link>
        </form>

        <hr className="my-2"/>

        <div className="max-w-lg mx-auto my-4">
        <button type="button" className="focus:outline-none text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-600">네이버로 로그인</button>
        </div>

      </div>
  )
}
