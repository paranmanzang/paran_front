import Link from "next/link";

export default function seller() {
  return (
    <div className="max-w-lg mx-auto my-10">
      <ul className="p-7 bg-green-100 rounded-lg">
        <li className="py-3 px-4 my-2 bg-white rounded-lg"><Link href='/seller/rooms'>공간 관리</Link></li>
        <li className="py-3 px-4 my-2 bg-white rounded-lg"><Link href='/seller/bookings'>예약 관리</Link></li>
      </ul>
    </div>
  )
}
