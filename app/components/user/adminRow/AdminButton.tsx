// import { useRouter } from "next/navigation"
import "./AdminButton.css"
export default function AdminButton() {
  // const route = useRouter();


  return (
    <div id="AdminButtonNav">
        <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">수정</button>
        <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">삭제</button>
    </div>
  )
}
