export default function CategorySelect() {
  return (
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
    <option>사회과학</option>
    <option>기술과학</option>
    <option>문학</option>
    <option>철학</option>
    <option>예술</option>
    <option>언어</option>
    <option>역사</option>
    <option>종교</option>
    <option>자연과학</option>
    <option>기타</option>
    </select>
  </div>
  )
}
