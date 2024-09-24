import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SellerButton() {
  const route = useRouter();
  const handleUpdate = () => {

  }

  const handleDelete = () => {

  }
 
  const moveToAddPage = () => {
     route.push('/rooms/seller/add');
  }

  return (
    <div>
      <button type="button" onClick={moveToAddPage} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">등록하기</button>
      <button type="button" onClick={handleUpdate} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">수정</button>
      <button type="button" onClick={handleDelete} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">삭제</button>
    </div>
  )
}
