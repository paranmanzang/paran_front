"use client"
import CategorySelect from "@/app/components/common/CategorySelect";
import Link from "next/link";
import Alert from "@/app/components/common/Alert";
import { useState } from "react";

export default function Update() {
  // 기존에 적혀 있는거 가지고 와야함. 
  // 그러고 나서 update  처리가 되야함. 
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const onUpdate = () => {
    // 왜 새로고침되는 건지.. bubbling  구조 보기
  }

  const postUpdate = () => {

  }
  return (
    <>
    <div className="h-[80%] my-10">
      <form className="mx-auto max-w-sm" onSubmit={postUpdate}>
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
        <CategorySelect />
        <button type="submit" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500" onClick={onUpdate}>수정하기</button>
        <Link href="/aboard" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-600">뒤로가기</Link>
      </form>
    </div>
    <Alert 
    isOpen={isOpen}
    message={message}
    onClose={() => setIsOpen(false)}
    />
    </>
  );
}
