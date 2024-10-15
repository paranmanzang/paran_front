"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
import AccountButton from "./AccountButton"
import { useState } from "react"
import { useAppDispatch } from "@/lib/store"
import { deleteBooking } from "@/lib/features/room/bookings.slice"
import { BookingModel } from "@/app/model/room/bookings.model"

import { getBookings } from "@/lib/features/room/bookings.slice"
import { useSelector } from "react-redux"
import { bookingService } from "@/app/service/room/booking.service"

interface BookingListProps {
  bookingId?: string
}

export default function BookingList({ bookingId }: BookingListProps) {
  const router = useRouter()
  const [selectedBookings, setSelectedBookings] = useState<string[]>([])
  const dispatch = useAppDispatch();
  const bookingItem = useSelector(getBookings);


  const handleCheckboxChange = (id: string) => {
    setSelectedBookings(prev =>
      prev.includes(id) ? prev.filter(bookingId => bookingId !== id) : [...prev, id]
    )
  }

  const handleDelete = () => {
    console.log('삭제하기:', selectedBookings)
    if (selectedBookings.length > 0) {
      selectedBookings.forEach(id => {
        bookingService.drop(Number(id), dispatch)
      })
    }
  }

  return (
    <div className="mx-auto max-w-lg">
      <ul>
        {bookingItem && bookingItem.map((booking: BookingModel) => (
          <li key={booking.id} className="relative mb-4 max-w-sm rounded-lg bg-green-100" id="box">
            <form className="absolute top-2 w-full px-3">
              <div className="flex justify-between">
                <div id="selectBtn">
                  <input
                    id={`select-${booking.id}`}
                    type="checkbox"
                    checked={selectedBookings.includes(String(booking.id))}
                    onChange={() => handleCheckboxChange(String(booking.id))}
                    className="size-6 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor={`select-${booking.id}`} hidden>Select</label>
                </div>
              </div>
            </form>
            <div className="border-1 border-gray-100 pt-5">
              <div className="p-5">
                <Link href={`/books/${booking.id}`}>
                  <h5 className="mb-2 text-lg font-medium tracking-tight">
                    {booking?.roomId}
                  </h5>
                </Link>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  {booking.date}
                </p>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  {booking.groupId}
                </p>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  {booking.usingTime}
                </p>
                <p className="mb-3 text-sm font-medium text-gray-700">
                  {booking.enabled}
                </p>
                <div className="mt-5 flex w-full items-center justify-center">
                  <button
                    type="button"
                    onClick={() => router.push(`/rooms/${booking.id}`)}
                    className="mx-2 rounded-lg bg-green-600 p-2 text-sm font-medium text-white"
                  >
                    상세보기
                  </button>
                  <AccountButton />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="btn_wrap my-4 flex justify-end">
        <button onClick={() => router.back()} className="rounded-lg bg-green-600 p-2 text-white">뒤로가기</button>
        <button
          onClick={() => handleDelete()}
          className="mx-2 rounded-lg bg-green-600 p-2 text-white"
        >삭제하기</button>
      </div>
    </div>
  )
}