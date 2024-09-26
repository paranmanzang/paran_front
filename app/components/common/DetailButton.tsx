// components/DetailButton.tsx
"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookingModal from "./BookingModal";
import Alert from "./Alert";

interface DetailButtonProps {
  thisPage: string;
  displayReview: 'none' | 'block';
  displayReservation: 'none' | 'block';
}

export default function DetailButton({ thisPage, displayReview, displayReservation }: DetailButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const route = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const onBack = () => {
    route.back();
  }
  
  const handleReview = () => {
    route.push(`${thisPage}/review`)
  }
  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setIsConfirmOpen(true);
  };

  const likeThis = () => {
    setAlertMessage('찜 했습니다.');
    setIsAlertOpen(true);
  }

    const handleConfirm = () => {
      setIsConfirmOpen(false);
      route.push('/likeList');
    };
    const handleCancel = () => {
      setIsConfirmOpen(false);
    };
  
  const handleAccount = () => {
    openModal();
  }


  return (
    <>
    <div className="mx-auto flex h-[20px] w-full max-w-lg items-end">
      <button type="button" onClick={likeThis} className="mx-2 rounded-full border px-3 py-2">
        🥰 찜하기 🥰
      </button>
      <button type="button" onClick={handleReview} className="mx-2 rounded-full border px-3 py-2"
        style={{display: displayReview}}
      >
        리뷰보기
      </button>
      <button type="button" onClick={handleAccount} className="mx-2 rounded-full border px-3 py-2" 
        style={{display: displayReservation}}
      >
        예약하기
      </button>
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />

      <button type="button" onClick={onBack} className="mx-2 rounded-full border px-3 py-2">
        뒤로가기
      </button>
    </div>

    <Alert
        message={alertMessage}
        isOpen={isAlertOpen}
        onClose={handleAlertClose}
      />

      <Alert
        message="찜 목록으로 이동하시겠습니까?"
        isOpen={isConfirmOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        showConfirm={true}
      />
    </>
  )
}