"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { findUserDetail } from '@/app/service/user/user.service'; // getUserDetail import
import LoadingSpinner from '@/app/components/common/status/LoadingSpinner';
import ErrorMessage from '@/app/components/common/status/ErrorMessage';
import { AppDispatch } from '@/lib/store'; // AppDispatch import
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store'; // RootState import

export default function UserProfile({ nickname }: { nickname: string }) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // Redux state에서 user, isLoading, error를 가져옵니다.
  const { user, isLoading, error } = useSelector((state: RootState) => ({
    user: state.user.currentUser, // 사용자 상세 정보
    isLoading: state.user.isLoading, // 로딩 상태
    error: state.user.error, // 에러 메시지
  }));

  useEffect(() => {
    // 컴포넌트가 마운트될 때 사용자 상세정보를 가져옵니다.
    const fetchUserDetail = async () => {
      await findUserDetail(nickname, dispatch);
    };

    fetchUserDetail();
  }, [nickname, dispatch]);

  const handleGoBack = () => {
    router.back();
  };

  const handlePageAccount = () => {
    router.push('/account');
  };

  const handlePageLikeList = () => {
    router.push('/likeList');
  };

  const handlePage = () => {
    router.push(`/users/update/${nickname}`);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />; // 에러 메시지 표시
  if (!user) return null;

  return (
      <div className="mx-auto my-[40px] py-3 px-6 h-auto w-full max-w-lg items-start rounded-lg border border-gray-200 bg-white shadow">
        <div className="flex mb-10">
          <div className="flex flex-col items-center ml-3">
            <Image
                className="mb-3 rounded-full shadow-lg"
                width={102}
                height={100}
                src={'/default-profile.jpg'}
                //src={user.profileImage || '/default-profile.jpg'}
                alt="프로필 사진"
                onError={(e) => {
                  e.currentTarget.src = '/default-profile.jpg'; // 이미지 로딩 실패 시 기본 이미지로 대체
                }}
            />
          </div>
          <div className="flex items-center">
            <ul className="text-sm">
              <li className="flex items-center">
                닉네임
                <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                  {user.nickname}
                </h5>
              </li>
              <li className="flex items-center">
                아이디
                <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                  {user.username}
                </h5>
              </li>
              <li className="flex items-center">
                권한
                <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                  {user.role}
                </h5>
              </li>
              <li className="flex items-center">
                유저 포인트
                <h5 className="mb-2 ml-6 flex items-end text-xl font-medium text-gray-900">
                  <p className="text-sm">10점</p>
                </h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
              type="button"
              onClick={handlePageAccount}
              className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400 text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
          >
            결제내역보기
          </button>
          <button
              type="button"
              onClick={handlePageLikeList}
              className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400 text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
          >
            찜목록
          </button>
          <button
              type="button"
              onClick={handlePage}
              className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400 text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
          >
            내정보수정
          </button>
          <button
              type="button"
              onClick={handleGoBack}
              className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-500 hover:text-white"
          >
            뒤로가기
          </button>
        </div>
      </div>
  );
}