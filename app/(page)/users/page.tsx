import Link from "next/link";

export default function userList() {
  return (
    <div>
      <ul>
        <li><Link href="/">user1</Link></li>
        <li><Link href="/">user2</Link></li>
        <li><Link href="/">user3</Link></li>
        <li><Link href="/">user4</Link></li>
        <li><Link href="/">user5</Link></li>
      </ul>
    </div>
  )
}
