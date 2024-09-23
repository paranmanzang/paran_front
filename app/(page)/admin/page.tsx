import Link from "next/link";
import './adminPage.css'

export default function admin() {
  return (
    <div className="min-h-dvh">
      <ul id="adminPage">
        <li><Link href='/users'>사용자 관리</Link></li>
        <li><Link href='/rooms/roomAdmin'>공간 관리</Link></li>
        <li><Link href='/groups/groupAdmin'>소모임 관리</Link></li>
        <li><Link href='/aboard'>관리자 공지 관리</Link></li>
      </ul>
    </div>
  )
}
