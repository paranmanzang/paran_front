import { useRouter } from "next/navigation";
import { useState } from "react";
import Alert from "./Alert";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const route = useRouter();
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  if (!isOpen) return null;

  const booking = (e: React.FormEvent) => {
    e.preventDefault();
    setAlertMessage("예약 되었습니다.");
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setIsConfirmOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmOpen(false);
    route.push('/booking');
  };

  const handleCancel = () => {
    setIsConfirmOpen(false);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                예약하기
              </h3>
              <button type="button" onClick={onClose} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="size-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">닫기</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
              <form className="space-y-4" action="#" onSubmit={booking}>
                {/* 날짜 선택 폼 */}
                <input type="date" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full  px-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" />
                <span className="text-green-600">예약가능 날짜 입니다.</span>
                {/* {date.booking === true ? <span className="text-green-600">예약가능 날짜입니다.</span> : <span className="text-red-500">예약이 불가능합니다.</span>} */}

                {/* 시간 선택 폼 */}
                <ul className="grid w-full gap-3 md:grid-cols-4">
                  <li>
                    <input type="checkbox" id="react-option00" value="" className="hidden peer"/>
                      <label htmlFor="react-option00" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option01" value="" className="hidden peer"/>
                      <label htmlFor="react-option01" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option02" value="" className="hidden peer"/>
                      <label htmlFor="react-option02" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option03" value="" className="hidden peer"/>
                      <label htmlFor="react-option03" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option04" value="" className="hidden peer"/>
                      <label htmlFor="react-option04" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option05" value="" className="hidden peer"/>
                      <label htmlFor="react-option05" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option06" value="" className="hidden peer"/>
                      <label htmlFor="react-option06" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option07" value="" className="hidden peer"/>
                      <label htmlFor="react-option07" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                  <li>
                    <input type="checkbox" id="react-option08" value="" className="hidden peer"/>
                      <label htmlFor="react-option08" className="inline-flex items-center justify-between w-full p-2 text-center text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        00:00
                      </label>
                  </li>
                </ul>
                <button type="submit" className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">예약 신청하기</button>
                <div className="text-sm font-medium text-green-700 hover:underline dark:text-green-500">요청이 수락되면 알려드릴게요!^^</div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <Alert
        message={alertMessage}
        isOpen={isAlertOpen}
        onClose={handleAlertClose}
      />

      <Alert
        message="예약신청내역으로 이동하시겠습니까?"
        isOpen={isConfirmOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        showConfirm={true}
      />
    </>
  )
}
