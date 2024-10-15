"use client"
import Link from "next/link";
import { useSelector } from "react-redux";
import { getUsers } from "@/lib/features/users/user.slice";
import { useRouter } from "next/navigation";

export default function UserList() {
  const users = useSelector(getUsers);
  const route = useRouter()
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
            <Link href={`/users/${user.id}`} className="inline-flex justify-around items-center w-full bg-green-50 border-2 border-green-400 p-4 m-2">
              <div className="size-8 bg-green-500 rounded-full">
                Img
              </div>
              <p>{user.nickname}</p>
              <button type="button" className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
              onClick={()=>{`${route.push(`${user.id}`)}`}}>
                상세보기
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}