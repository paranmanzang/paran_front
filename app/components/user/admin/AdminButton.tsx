import Link from "next/link"
import "./AdminButton.css"
export default function AdminButton() {
  return (
    <div id="AdminButtonNav">
      <ul>
        <li><Link href="/">수정</Link></li>
        <li><Link href="/">삭제</Link></li>
      </ul>
    </div>
  )
}
