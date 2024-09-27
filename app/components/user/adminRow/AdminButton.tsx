"use client"
import { useRouter } from "next/navigation"
import "./AdminButton.css"
import { useState } from "react";
import Alert from "@/app/components/common/Alert";

export default function AdminButton() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const route = useRouter();
  const handleUpdate = () => {
    route.push('/rooms/update');
  }
  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setIsConfirmOpen(true);
  };

  const Message = () => setIsAlertOpen(true);

  const handleDelete = () => {
    Message();
  }
  const moveToPage = () => {
    route.push('/rooms/add');
  }

  return (
    <>
      <div id="AdminButtonNav">
        <button type="button" onClick={moveToPage} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">등록</button>
        <button type="button" onClick={handleUpdate} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">수정</button>
        <button type="button" onClick={handleDelete} className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500">삭제</button>

      </div>
      <Alert
        message="삭제되었습니다."
        isOpen={isAlertOpen}
        onClose={handleAlertClose}
      />
    </>

  )
}
