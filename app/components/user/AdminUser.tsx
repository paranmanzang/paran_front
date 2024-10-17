"use client"
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from "next/image";
import LoadingSpinner from '../common/status/LoadingSpinner';
import { useAppDispatch } from '@/lib/store';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '@/lib/features/users/user.slice';
import { userService } from '@/app/service/user/user.service';

interface UserInfo {
  id: string
  nickname: string
  grade: string
  image: string
}

export default function AdminUser({nickname}: UserInfo) {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [newRole, setNewRole] = useState<string>('')
  const user = useSelector(getCurrentUser)

  useEffect(() => {
    userService.modifyRole(nickname, newRole, dispatch); 
  }, [nickname, newRole, dispatch]);

  const handlePageUserJoin = () => {router.push('/account')}
  const handlePageUserUpdate = () => { router.push('/admin/userUpdate')}
  const handlePage = () => {router.push(`/users/delete/${user?.id}`)}

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewRole(e.target.value);
  };

  const handleGradeUpdate = async () => {
    if (newRole && userInfo) {
      try {
        await userService.modifyRole(nickname, newRole, dispatch);
        setUserInfo({ ...userInfo, grade: newRole });
        alert("회원 등급이 성공적으로 업데이트되었습니다.");
      } catch (error) {
        console.error("회원 등급 업데이트 실패:", error);
        alert("회원 등급 업데이트에 실패했습니다.");
      }
    }
  };

  if (!userInfo) return <div><LoadingSpinner /></div>;


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
              {userInfo.nickname}
            </h5>
          </li>
          <li className="flex items-center">
            유저 등급
            <h5 className="mb-2 ml-6 flex items-end text-xl font-medium text-gray-900">
              {userInfo.grade}
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
        <option value="">등급 선택</option>
        <option value="user">User</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button
        onClick={handleGradeUpdate}
        className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
      >
        등급 변경
      </button>
    </div>
    <div className="flex items-center justify-center">
      <button type="button" onClick={handlePageUserJoin} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">등록정보</button>
      <button type="button" onClick={handlePageUserUpdate} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">회원등급 수정</button>
      <button type="button" onClick={handlePage} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white">회원강제탈퇴</button>
      <button type="button" onClick={() => {router.push('/')}} className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-500 hover:text-white">뒤로가기</button>
    </div>
  </div>
  );
}
