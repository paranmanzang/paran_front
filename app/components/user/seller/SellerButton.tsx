import { useRouter } from "next/navigation";

interface SellerButtonProps {
  id: string | number;
}

export default function SellerButton({id}: SellerButtonProps) {
  const route = useRouter();
  const handleUpdate = () => {
    route.push('/rooms/update');
  }

  const handleDelete = () => {
    window.alert('삭제되었습니다.')
  }
 
  const moveToAddPage = () => {
    route.push('/rooms/seller/add');
  }

  return (
    <div className="flex justify-end h-[3.75rem] items-center bg-green-100">
      <button type="button" onClick={moveToAddPage} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 ">등록하기</button>
      <button type="button" onClick={handleUpdate} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 ">수정</button>
      <button type="button" onClick={handleDelete} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 ">삭제</button>
    </div>
  )
}
