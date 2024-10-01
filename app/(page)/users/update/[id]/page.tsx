"use client"
import Link from "next/link";

export default function UserUpdate() {
  const onUpdate = () => {
    console.log('수정이 완료되었습니다.')
  }

  const HandleSubmit = () => {

  }
  return (
    <div className="max-w-sm mx-auto p-6 my-8 bg-green-100 rounded-lg">
      <form className="p-2" onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="ID" className="block mb-2 text-sm font-medium text-gray-900">아이디</label>
          <input type="text" id="ID" placeholder="userID" disabled className=" border text-sm rounded-lg  block w-full p-2.5"/>
        </div>
        <div className="my-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">비밀번호</label>
          <input type="text" id="password" placeholder="변경할 비밀번호를 입력해주세요" className="bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"/>
        </div>
        <button type="submit" onClick={onUpdate} className="p-2 bg-green-400 mx-2 rounded-lg text-white">수정하기</button>
        <Link href="/">취소</Link>
      </form>
    </div>

  )
}
