"use client"
import Link from "next/link";

export default function update() {
  const onUpdate = () => {
    window.alert('수정이 완료되었습니다.')
  }

  return (
    <div className="h-[80%] my-10">
      <form className="mx-auto max-w-sm" onSubmit={onUpdate}>
        <div className="my-2">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            제목
          </label>
          <input
            type="text"
            id="title"
            aria-describedby="helper-text-explanation"
            placeholder="제목을 입력해주세요"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-400 focus:ring-green-400  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-400 dark:focus:ring-green-400"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="content"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            내용
          </label>
          <textarea
            id="content"
            rows={4}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-400 focus:ring-green-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-400 dark:focus:ring-green-400"
            placeholder="내용을 작성해주세요"
          ></textarea>
        </div>
        <div className="my-2">
          <label
            htmlFor="categories"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            카테고리
          </label>
          <select
            id="categories"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-green-400 focus:ring-green-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-green-400 dark:focus:ring-green-400"
          >
            <option>소설</option>
            <option>만화</option>
            <option>SF / 판타지</option>
            <option>로맨스</option>
            <option>무협</option>
          </select>
        </div>
        <button type="submit" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">수정하기</button>
        <Link href="/aboard" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600">뒤로가기</Link>
      </form>
    </div>
  );
}
