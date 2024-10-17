"use client"
import Link from "next/link";
import { useSelector } from "react-redux";
import { getNickname, getUserList } from "@/lib/features/users/user.slice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppDispatch } from "@/lib/store";
import { userService } from "@/app/service/user/user.service";
import { useEffect, useState, useMemo } from "react";
import Pagination from "@/app/components/common/Row/pagination/Pagination";

export default function UserList() {
  const dispatch = useAppDispatch()
  const allUsers = useSelector(getUserList)
  const nickname = useSelector(getNickname) as string
  const router = useRouter()

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(8)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await userService.findAllUsers(nickname, dispatch);
      } catch (error) {
        console.error("사용자 목록 조회 중 오류:", error);
      }
    };

    fetchUsers();
  }, [nickname, dispatch]);

  const { paginatedUsers, totalPages } = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return {
      paginatedUsers: allUsers.slice(startIndex, endIndex),
      totalPages: Math.ceil(allUsers.length / pageSize)
    };
  }, [allUsers, page, pageSize]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
  };

  return (
    <div className="h-auto max-w-lg mx-auto my-[40px]">
      <div id="btn" className="m-2 max-w-full">
        <Link href="/admin" className="rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">
          뒤로가기
        </Link>
      </div>

      <ul className="h-1/2 px-10 py-10 bg-green-100 rounded-lg">
        {paginatedUsers.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
              <div className="size-8 bg-green-500 rounded-full">
                <Image
                  className="size-8 rounded-full shadow-lg"
                  width={102}
                  height={100}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_DEFAULT}`}
                  alt="프로필 사진"
                  onError={(e) => {
                    e.currentTarget.src = `${process.env.NEXT_PUBLIC_IMAGE_DEFAULT}`
                  }}
                />
              </div>
              <p>{user.nickname}</p>
              <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
                onClick={() => router.push(`/users/${user.id}`)}>
                상세보기
              </button>
            </Link>
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={page}
        pageSize={totalPages}
        totalItems={allUsers.length}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
}