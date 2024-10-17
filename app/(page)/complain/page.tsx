"use client"
import ComplainList from "@/app/components/common/Complain/ComplainList";
import { declarationService } from "@/app/service/users/declarationPost.service";
import { getDeclarationPosts } from "@/lib/features/users/declarationPost.slice";
import { useAppDispatch } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function List() {
  const route = useRouter();
  const getId = useSelector(getDeclarationPosts)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(!getId) return;
    declarationService.findByPostId(getId, dispatch);
  }, [getId, dispatch])

  return (
    <div className="max-w-lg mx-auto my-9">
      <ul className="p-8 my-4 bg-green-100 rounded-lg">
        <ComplainList id={getId} />
      </ul>
      <button type="button" onClick={() =>{route.back()}} className="p-2 bg-green-200 rounded-lg hover:bg-green-300">뒤로가기</button>
    </div>
  )
}
