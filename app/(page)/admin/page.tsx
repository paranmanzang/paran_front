import Link from "next/link";
import './adminPage.css'

export default function admin() {
  return (
    <div className="min-h-dvh">
      <ul id="adminPage">
        <li><Link href='/users'>사용자 관리</Link></li>
        <li><Link href='/rooms'>공간 관리</Link></li>
        <li><Link href='/groups'>소모임 관리</Link></li>
        <li><Link href='/aboard'>관리자 공지 수정/삭제</Link></li>
      </ul>
    </div>
  )
}
