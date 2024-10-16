"use client"
import Pagination from "@/app/components/common/Row/pagination/Pagination"
import { bookingService } from "@/app/service/room/booking.service"
import { getBookings } from "@/lib/features/room/bookings.slice"
import { getRooms } from "@/lib/features/room/room.slice"
import { getCurrentUser } from "@/lib/features/users/user.slice"
import { useAppDispatch } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function SellerBooking() {
    const user = useSelector(getCurrentUser)
    const nickname = user?.nickname as string
    const dispatch = useAppDispatch()
    const bookings = useSelector(getBookings)
    const rooms = useSelector(getRooms)
    const route = useRouter()
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(0);

    // rooms 에 있는 nickname 어떻게 가져옴? 
    // const userRooms = rooms.nickname === nickname;

    useEffect(() => {
        if (nickname) {
            bookingService.findByRoomIds(nickname, page, size, dispatch)
        }
    }, [nickname, page, size, dispatch])

    const onDelete = (id: string) => {
        // 삭제 로직 
        console.log(`Deleting room with id: ${id}`)
        bookingService.drop(Number(id), dispatch)
    }
    const onUpdate = (id: string) => {
        if (id !== undefined) {
            bookingService.modify(Number(id), dispatch)
        }
    }


    return (
        <div className="mx-auto my-8 max-w-lg">
            <div className="w-full">
                <button type="button" onClick={() => route.push('/rooms/add')} className="rounded-lg bg-green-100 p-3">등록하기</button>
            </div>
            <ul className="my-8 rounded-lg bg-green-100 p-6">
                {bookings.length > 0 && (
                    bookings.map((booking) => (
                        <li key={booking.id}
                            className="mx-auto my-3 flex items-center justify-around bg-white p-3">
                            <div className="flex justify-around">
                                <h2 className="text-lg">{rooms.find(room => room.id === booking.roomId)?.name}</h2>
                                <p>{booking.date}</p>
                                <br />
                                <p>{booking.usingTime}</p>
                            </div>
                            <div>
                                {!booking.enabled && (
                                    <>
                                        <button type="button" onClick={() => onUpdate(`${booking.id}`)} className="mx-2 rounded-lg bg-green-100 p-3">거절</button>
                                        <button type="button" onClick={() => onDelete(`${booking.id}`)} className="mx-2 rounded-lg bg-green-100 p-3">승인</button>
                                    </>
                                )}
                                {booking.enabled && (
                                    <button type="button" className="mx-2 rounded-lg bg-green-100 p-3" disabled>승인됨</button>
                                )}


                            </div>
                        </li>
                    ))
                )}
                {bookings.length === 0 && (
                    <li>요청된 예약이 없습니다</li>
                )}
            </ul>
            {/* <Pagination /> */}
            <button type="button" onClick={() => route.back()} className="mx-2 rounded-lg bg-green-100 p-3">뒤로가기</button>
        </div >
    )
}
