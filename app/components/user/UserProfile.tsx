"use client"
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '@/app/components/common/status/LoadingSpinner'
import { getCurrentUser } from '@/lib/features/users/user.slice'
import ErrorMessage from '@/app/components/common/status/ErrorMessage'
import { RootState, useAppDispatch } from '@/lib/store'
import { getLeaderGroups } from '@/lib/features/group/group.slice'

interface UserProfileProps {
    getUser: string | undefined;
}
export default function UserProfile({ getUser }: UserProfileProps) {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const user = useSelector(getCurrentUser)
    const leaderGroup = useSelector(getLeaderGroups)
    const { isLoading, error } = useSelector((state: RootState) => state.user);

    useEffect(() => {

    }, [getUser]);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="mx-auto my-[40px] h-auto w-full max-w-[90%] items-center rounded-lg border border-gray-200 bg-white px-6 py-3 shadow">
            <div className="mb-10 flex justify-center">
                <div className="ml-3 flex flex-col items-center">
                    {/* <Image
                        className="mb-3 rounded-full shadow-lg"
                        width={102}
                        height={100}
                        src={user.profileImage || `process.env.NEXT_PUBLIC_IMAGE_DEFAULT`}
                        alt="프로필 사진"
                        onError={(e) => {
                            e.currentTarget.src = `process.env.NEXT_PUBLIC_IMAGE_DEFAULT`
                        }}
                    /> */}
                </div>
                <div className="flex items-center justify-center">
                    <ul className="text-sm">
                        <li className="flex items-center">
                            닉네임
                            <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                                {user?.nickname}
                            </h5>
                        </li>
                        <li className="flex items-center">
                            아이디
                            <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                                {user?.username}
                            </h5>
                        </li>
                        <li className="flex items-center">
                            권한
                            <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900">
                                {user?.role}
                            </h5>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {leaderGroup.length > 0 && (
                    <>
                        <button
                            type="button"
                            onClick={() => { router.push('/booking') }}
                            className="m-2 rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
                        >
                            예약내역보기
                        </button>
                        <button
                            type="button"
                            onClick={() => { router.push('/account') }}
                            className="m-2 rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
                        >
                            결제내역보기
                        </button>
                    </>
                )}

                <button
                    type="button"
                    onClick={() => { router.push('/likeList') }}
                    className="m-2 rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
                >
                    찜목록
                </button>
                <button
                    type="button"
                    onClick={() => { router.push('/users/declarationList') }}
                    className="m-2 rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
                >
                    내가 신고한 내역
                </button>
                <button
                    type="button"
                    onClick={() => { router.push('/users/friends') }}
                    className="m-2 rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
                >
                    친구 목록
                </button>
                <button
                    type="button"
                    onClick={() => { router.push(`/users/update/${getUser}`) }}
                    className="m-2 rounded-lg border-2 border-green-400 bg-green-50 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white"
                >
                    내정보수정
                </button>
                <button
                    type="button"
                    onClick={() => { router.back() }}
                    className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-500 hover:text-white"
                >
                    뒤로가기
                </button>
            </div>
        </div>
    );
}