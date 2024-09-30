"use client"
import { useRouter } from "next/navigation"
import styles from "./AdminButton.module.css"
import { useEffect, useState } from "react";
import Alert from "@/app/components/common/Alert";

type getPageProps = {
  pageUrl: string,
  name: string
}
// {getPage : getPageProps} , ${getPage.pageUrl}
export default function AdminButton() {
  useEffect(() => {
    // dispatchEvent.arguments.
  })
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const route = useRouter();
  const handleUpdate = () => {
    route.push(`/rooms/update`);
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
    //route.push(`${getPage.pageUrl}/add`);
  }

  return (
    <>
      <div id={styles.AdminButtonNav}>
        <button type="button" onClick={moveToPage}>등록</button>
        <button type="button" onClick={handleUpdate}>수정</button>
        <button type="button" onClick={handleDelete}>삭제</button>

      </div>
      <Alert
        message="삭제되었습니다."
        isOpen={isAlertOpen}
        onClose={handleAlertClose}
      />
    </>

  )
}
