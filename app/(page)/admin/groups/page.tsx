"use client"
import ErrorMessage from "@/app/components/common/status/ErrorMessage";
import LoadingSpinner from "@/app/components/common/status/LoadingSpinner";
import { groupService } from "@/app/service/group/group.service";
import { getGroups, saveCurrentGroup } from "@/lib/features/group/group.slice";
import { getError, getIsLoading } from "@/lib/features/room/room.slice";
import { useAppDispatch } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function roomAdmin() {
  const dispatch = useAppDispatch()
  const groups = useSelector(getGroups)
  const loading = useSelector(getIsLoading)
  const error = useSelector(getError)
  
  const route = useRouter()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const totalItems = 10

  useEffect(() => {
    groupService.findList(page, pageSize, dispatch)
  }, [page, pageSize])

  const onClickToDetail = () => {
    dispatch(saveCurrentGroup(groups));
    route.push(`/groups/${groups.id}`);
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />


  return (
    <div className="mx-auto my-[40px] h-auto max-w-lg">
       <div id="btn" className="m-2 max-w-full">
        <Link href="/admin" className="rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500">뒤로가기</Link>
      </div>
      <ul className="h-1/2 rounded-lg bg-green-100 px-10 py-10">
        {groups.map((group) => (
        <li key={group.id}>
          <div
            className="m-2 inline-flex w-full items-center justify-around border-2 border-green-400 bg-green-50 p-4"
          >
            <p>{group.name}</p>
            <span className="text-xs">등록일: {group.createAt}</span>
            <button
              type="button"
              onClick={onClickToDetail}
              className="mx-2 rounded-lg bg-green-400 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-500"
            >
              상세보기
            </button>
          </div>
        </li>
        ))}
       
      </ul>
      
    </div>
  );
}
