"use client"
import { getDeclarationPosts } from "@/lib/features/users/declarationPost.slice"
import { useAppDispatch } from "@/lib/store"
import Link from "next/link"
import { useSelector } from "react-redux"
import ErrorMessage from "../status/ErrorMessage"
import { getNickname } from "@/lib/features/users/user.slice"
import { useEffect, useState } from "react"
import { declarationService } from "@/app/service/users/declarationPost.service"
import { useRouter } from "next/navigation"

interface ComplainListProps {
  id: number
}

export default function ComplainList({id}: ComplainListProps) {
  const dispatch = useAppDispatch()
  const declarationList = useSelector(getDeclarationPosts)
  const router = useRouter()
  const [page, setPage] = useState(0);
  const size = 10;
  
  useEffect(() => {
    if (!id) return;
    const declaration = declarationService.findAll(page, size, dispatch);
    console.log("declaration값이 나오는지 봅시다", declaration)
  }, [page, size, dispatch]);
  
  return (
    <>
        {declarationList.map((complain, index) => {
            <li className="p-4 bg-white rounded-lg my-2" key={index}>
              <Link href={`/complain/${complain.id}`}>
                {complain.title}
              </Link>
            </li>
          })}
        {declarationList.length <= 0 && (
          <p><ErrorMessage message="접수된신고가 없습니다." /></p>
        )}
    </>
  )
}
