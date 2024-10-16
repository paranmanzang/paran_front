"use client"
import Link from "next/link";
import { useSelector } from "react-redux";
import { getNickname, getUserList } from "@/lib/features/users/user.slice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAppDispatch } from "@/lib/store";
import { userService } from "@/app/service/user/user.service";
import { useEffect, useState } from "react";
import Pagination from "@/app/components/common/Row/pagination/Pagination";

export default function UserList() {
  const dispatch = useAppDispatch()
  const users = useSelector(getUserList)
  const nickname = useSelector(getNickname) as string
  const route = useRouter()

  // const [page, setPage] = useState(0);
  // const [pageSize, setPageSize] = useState(9);
  // const totalItems = 10;

  useEffect(() => {
    const user = userService.findAllUsers(nickname, dispatch)
    console.log("useEffect 에서 값 가져올거임. ", user);

  }, [nickname, dispatch]) 

  return (
    <div className="h-auto max-w-lg mx-auto my-[40px]">
      <div id="btn" className="m-2 max-w-full">
        <Link href="/admin" className="rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">
          뒤로가기
        </Link>
      </div>

      <ul className="h-1/2 px-10 py-10 bg-green-100 rounded-lg">
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.nickname}`} className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
              <div className="size-8 bg-green-500 rounded-full">
                <Image
                  className="size-8 rounded-full shadow-lg"
                  width={102}
                  height={100}
                  // user.profileImage || 
                  src={`${process.env.NEXT_PUBLIC_IMAGE_DEFAULT}`}
                  alt="프로필 사진"
                  onError={(e) => {
                    e.currentTarget.src = `process.env.NEXT_PUBLIC_IMAGE_DEFAULT`
                  }}
                />
              </div>
              <p>{user.nickname}</p>
              <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
                onClick={() => { `${route.push(`${user.nickname}`)}` }}>
                상세보기
              </button>
            </Link>
          </li>
        ))}
      </ul>

      {/* <Pagination
        // currentPage={page}
        // pageSize={pageSize}
        // totalItems={totalItems}
        // onPageChange={setPage}
        // onPageSizeChange={setPageSize}
      /> */}
    </div>
  );
}