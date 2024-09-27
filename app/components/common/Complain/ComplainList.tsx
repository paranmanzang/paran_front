import Link from "next/link"

export default function ComplainList() {
  return (
    <li className="p-4 bg-white rounded-lg my-2">
      <Link href="/complain/1">접수된 신고1</Link>
    </li>
  )
}
