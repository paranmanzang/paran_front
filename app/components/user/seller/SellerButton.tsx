import { useRouter } from "next/navigation";
import { useState } from "react";
import Alert from "../../common/Alert";

export default function SellerButton() {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleUpdate = () => {
    route.push('/rooms/update');
  }

  const handleDelete = () => {
    <Alert message={'삭제되었습니다.'} isOpen={true} onClose={() => isOpen}/>
  }
 
  const moveToAddPage = () => {
    route.push('/rooms/add');
  }

  return (
    <>
    <div className="flex justify-end h-[3.75rem] items-center bg-green-100">
      <button type="button" onClick={moveToAddPage} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 ">등록하기</button>
      <button type="button" onClick={handleUpdate} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 ">수정</button>
      <button type="button" onClick={handleDelete} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 ">삭제</button>
    </div>
    
    </>
  )
}
