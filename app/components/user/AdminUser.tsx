"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from "next/image";
import LoadingSpinner from '../common/status/LoadingSpinner';
import { useAppDispatch } from '@/lib/store';
import { userService } from '@/app/service/user/user.service';
import { useSelector } from 'react-redux';
import { getCurrentUser, getNickname } from '@/lib/features/users/user.slice';
import ErrorMessage from '../common/status/ErrorMessage';

interface AdminUserProps {
  nickname: string
}

export default function AdminUser({ nickname }: AdminUserProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    role: ''
  })
  const [newRole, setNewRole] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)
  // const userNickname = useSelector(getNickname)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await userService.findAdminUser(nickname, dispatch);
        setUserInfo(user)
        setNewRole(userInfo.role)
      } catch (error) {
        console.error("사용자 정보 조회 중 오류:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserInfo()
  }, [nickname, dispatch])

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewRole(e.target.value)
  }

  const handleRoleUpdate = async () => {
    if (newRole && userInfo) {
      try {
        await userService.modifyRole(nickname, newRole, dispatch)
        setUserInfo({ ...userInfo, role: newRole })
        alert("회원 등급이 성공적으로 업데이트되었습니다.")
      } catch (error) {
        console.error("회원 등급 업데이트 실패:", error)
        alert("회원 등급 업데이트에 실패했습니다.")
      }
    }
  }

  if (isLoading) return <div><LoadingSpinner /></div>
  if (!userInfo) return <div><ErrorMessage message='사용자 정보를 찾을 수 없습니다.'/></div>

  return (
    <div className="mx-auto my-[40px] py-3 px-6 h-auto w-full max-w-lg items-start rounded-lg border border-gray-200 bg-white shadow">
      <div className="flex mb-10">
        <div className="flex flex-col items-center ml-3">
          <Image
            className="mb-3 rounded-full shadow-lg"
            width={102}
            height={100}
            src={`${process.env.NEXT_PUBLIC_IMAGE_DEFAULT}`}
            alt="프로필 사진"
          />
        </div>
        <div className="flex items-center">
          <ul className="text-sm">
            <li className="flex items-center">
              닉네임
              <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                {nickname}
              </h5>
            </li>
            <li className="flex items-center">
              유저 등급
              <h5 className="mb-2 ml-6 flex items-end text-xl font-medium text-gray-900">
                {userInfo.role}
              </h5>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center mb-4">
        <select
          value={newRole}
          onChange={handleGradeChange}
          className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400 text-sm font-medium text-gray-900"
        >
          <option value="ROLE_USER">User</option>
          <option value="ROLE_SELLER">Seller</option>
        </select>
        <button
          onClick={handleRoleUpdate}
          className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
        >
          등급 변경
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button type="button" onClick={() => router.push('/account')} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">등록정보</button>
        <button type="button" onClick={() => router.push('/admin/userUpdate')} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">회원등급 수정</button>
        <button type="button" onClick={() => router.push(`/users/delete/${userInfo.nickname}`)} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">회원강제탈퇴</button>
        <button type="button" onClick={() => router.push('/')} className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-500 hover:text-white">뒤로가기</button>
      </div>
    </div>
  );
}