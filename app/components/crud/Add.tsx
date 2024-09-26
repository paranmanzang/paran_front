export default function Add() {
  return (
    <>
      <form className="max-w-sm mx-auto">
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
          <input type="text" id="title" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
        </div>
        <div>

          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="내용을 적어주세요..."></textarea>

        </div>

      </form>
    </>
  )
}
