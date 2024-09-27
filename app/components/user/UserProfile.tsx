"use client"
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";

export default function UserProfile() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  const handlePageAccount = () => {
    router.push('/account');
  }
  const handlePageLikeList = () => {
    router.push('/likeList');
  }
  const handlePage = () => {
    //{유저아이디}
    router.push(`/users/update/2`);
  }

  return (
    <div className="mx-auto my-[40px] py-3 px-6 h-auto w-full max-w-lg items-start rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex mb-10">
      {/* 유저 이미지 */}
        <div className="flex flex-col items-center ml-3">
          <Image
            className="mb-3 rounded-full shadow-lg"
            width={102}
            height={100}
            src="/docs/images/people/profile-picture-3.jpg"
            alt="프로필 사진"
          />
          <div className="flex md:mt-6">
            <Link
              href="/file/upload"
              className="ms-2 px-4 py-2 text-sm font-medium text-gray-900 hover:text-green-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              내 프로필 사진변경
            </Link>
          </div>
        </div>
        {/* 유저정보 */}
        <div className="flex items-center">
          <ul className="text-sm dark:text-white">
            <li className="flex items-center">
              아이디
              <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900 dark:text-white">
                ringring123
              </h5>
            </li>
            <li className="flex items-center">
              닉네임
              <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900 dark:text-white">
                spongeBOB
              </h5>
            </li>
            <li className="flex items-center">
              비밀번호
              <h5 className="mb-2 ml-6 text-xl font-medium text-gray-900 dark:text-white">
                qwer****
              </h5>
            </li>
            <li className="flex items-center">
              내 포인트
              <h5 className="mb-2 ml-6 flex items-end text-xl font-medium text-gray-900 dark:text-white">
                10
                <p className="text-sm dark:text-white">점</p>
              </h5>
            </li>
          </ul>
        </div>
      </div>
{/* 버튼 */}
      <div className="flex items-center justify-center">
      <button type="button" onClick={handlePageAccount} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white dark:bg-green-600 dark:hover:bg-green-500">결제 내역보기</button>
        <button type="button" onClick={handlePageLikeList} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white dark:bg-green-600 dark:hover:bg-green-500">찜목록 ❤️</button>
        <button type="button" onClick={handlePage} className="m-2 rounded-lg bg-green-50 px-4 py-2 text-center border-2 border-green-400  text-sm font-medium text-gray-900 hover:bg-green-400 hover:text-white dark:bg-green-600 dark:hover:bg-green-500">내정보 변경</button>
        <button type="button" onClick={handleGoBack} className="m-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 hover:text-white">뒤로가기</button>
      </div>
    </div>
  );
}
