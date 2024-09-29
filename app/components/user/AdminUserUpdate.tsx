"use client"
import { useState } from "react"
import Alert from "../common/Alert"
export default function AdminUserUpdate() {
  const [isOpen, setIsOpen] = useState(false);
  const userUpdate = () => {
    setIsOpen(true)
  }

  return (
    <div className="mx-auto my-[40px] py-3 px-6 h-auto w-full max-w-lg items-start rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <ul className="text-sm dark:text-white">
            <li className="flex items-center">
              닉네임
              <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900 dark:text-white">
                spongeBOB
              </h5>
            </li>
            <li className="flex items-center">
              유저 포인트
              <h5 className="mb-2 ml-6 flex items-end text-xl font-medium text-gray-900 dark:text-white">
                10
                <p className="text-sm dark:text-white">점</p>
              </h5>
            </li>
            <li className="flex items-center">
              유저 등급
              <h5 className="mb-2 ml-6 flex items-end text-xl font-medium text-gray-900 dark:text-white">
                seller
              </h5>
            </li>
          </ul>
          <div>
            <button type="button" onClick={userUpdate} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white dark:bg-green-600 dark:hover:bg-green-500">등급수정</button>
          </div>
          <Alert message={'등급 수정이 완료되었습니다.'} isOpen={isOpen} onClose={() => {}}/>  
    </div>
  )
}
