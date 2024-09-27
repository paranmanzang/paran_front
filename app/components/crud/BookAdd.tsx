"use client"
import { useRouter } from "next/navigation";
export default function Add() {
  const route = useRouter();
  const onPost = () => {
    route.push('/');
  }
  return (
    <div className="my-8">
      {/* 어드민 관리로 돌리기 */}
      <form className="max-w-lg mx-auto" onSubmit={onPost}>
      <h1 className="text-xl">책 업로드</h1>
        <div>
          <label htmlFor="title" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">책 제목</label>
          <input type="text" id="title" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
        </div>
        <div>
          <label htmlFor="message" className="block my-2 text-sm font-medium text-gray-900 dark:text-white">책 소개 글</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="간략한 줄거리를 적어주세요..." />
        </div>
        <div>
          <label className="block my-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">책 사진 업로드</label>
          <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
        </div>
        <button type="submit" className="p-2 bg-green-500 text-white rounded-lg mt-3 w-full">등록하기</button>
      </form>
    </div>
  )
}
