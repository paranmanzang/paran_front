"use client"
import { useState } from "react"
import Alert from "../common/Alert"
export default function AdminUserUpdate() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState([0]);
  const userUpdate = () => {
    setIsOpen(true)
  }
  const onSetRank = () => {

    setFormData([1]);
  }

  return (
    <div className="mx-auto my-[40px] py-3 px-6 h-auto w-full max-w-lg items-start rounded-lg border border-gray-200 bg-white shadow">
        <ul className="text-sm">
            <li className="flex items-center justify-center">
              닉네임
              <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                spongeBOB
              </h5>
            </li>
            <li className="flex items-center justify-center">
              <h2 className="mx-3">유저 등급</h2>

              <form onSubmit={onSetRank}>
                <select id="selectRank">
                  <option>노랑 회원 - 판매자</option>
                  <option>초록 회원 - 일반</option>
                </select>
              </form>

            </li>
          </ul>
          <div className="flex justify-end">
            <button type="button" onClick={userUpdate} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">등급수정</button>
          </div>
          <Alert message={'등급 수정이 완료되었습니다.'} isOpen={isOpen} onClose={() => {}}/>  
    </div>
  )
}
