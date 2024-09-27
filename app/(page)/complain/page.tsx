"use client"
import ComplainList from "@/app/components/common/Complain/ComplainList";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function List() {
  const route = useRouter();
  const goBack = () => {
    route.back();
  }

  return (
    <div className="max-w-lg mx-auto my-9">
      <ul className="m-6 p-4 bg-green-100 rounded-lg">
        <ComplainList />
        <ComplainList />
        <ComplainList />
        <ComplainList />
        <ComplainList />
        <ComplainList />
        <li className="p-4 bg-white rounded-lg my-2"><Link href="/complain/2">신고접수a</Link></li>
        <li className="p-4 bg-white rounded-lg my-2"><Link href="/complain/3">신고접수a</Link></li>
        <li className="p-4 bg-white rounded-lg my-2"><Link href="/complain/4">신고접수a</Link></li>
      </ul>
        <button type="button" onClick={goBack} className="p-2 bg-green-400 rounded-lg">뒤로가기</button>
    </div>
  )
}
