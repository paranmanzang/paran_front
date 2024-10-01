import { useRouter } from "next/navigation";
import { useState } from "react";
import Alert from "../../common/Alert";

export default function SellerButton() {
  const route = useRouter();
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState('');
  const handleUpdate = () => {
    route.push('/rooms/update');
  }

  const handleDelete = () => {
    setMessage('삭제되었습니다.')
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
    <Alert message={message} isOpen={true} onClose={() => {}}/>
    </>
  )
}
