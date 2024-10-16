"use client"
import Pagination from "@/app/components/common/Row/pagination/Pagination"
import { BookingModel } from "@/app/model/room/bookings.model"
import { bookingService } from "@/app/service/room/booking.service"
import { roomService } from "@/app/service/room/room.service"
import { getSeperatedBookings } from "@/lib/features/room/booking.slice"
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
    const rooms = useSelector(getRooms)
    const { enabledBookings, notEnabledBookings } = useSelector(getSeperatedBookings)
    const route = useRouter()
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState<'확정' | '승인 대기'>('확정');
    // rooms 에 있는 nickname 어떻게 가져옴? 
    // const userRooms = rooms.nickname === nickname;
    const handleTabClick = (category: '확정' | '승인 대기') => {
        setSelectedCategory(category);
    };

    const showList: BookingModel[] = selectedCategory === '확정' ? enabledBookings : notEnabledBookings;

    useEffect(() => {
        if (nickname) {
            bookingService.findByRoomIds(nickname, page, size, dispatch)
            if((enabledBookings.length>0 || notEnabledBookings.length>0)&& rooms.length===0){
                roomService.findAllByUserNickname(nickname, dispatch)
            }
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

        <div className="mx-auto my-8 max-w-lg rounded-lg bg-green-100 p-6 shadow-md">
            {/* 카테고리 선택 탭 */}
            <div className="flex space-x-4">
                <button
                    className={`px-4 py-2 ${selectedCategory === '확정' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => handleTabClick('확정')}
                >
                    확정
                </button>
                <button
                    className={`px-4 py-2 ${selectedCategory === '승인 대기' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                    onClick={() => handleTabClick('승인 대기')}
                >
                    승인 대기
                </button>
            </div>

            {/* 목록 */}
            {showList.length > 0 && (
                showList.map((booking) => (
                    <li key={booking.id}
                        className="mx-auto my-3 flex items-center justify-around bg-white p-3">
                        <div className="flex justify-around">
                            <h2 className="text-lg">장소: {rooms.find(room => room.id === booking.roomId)?.name}</h2>
                            <p>예약일: {booking.date}</p>
                            <p>예약시간: {booking.usingTime.map(time => time.slice(0, 5)).join(', ')}</p>
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
            {showList.length === 0 && (
                <li>정보가 존재하지 않습니다.</li>
            )}



            {/* <Pagination /> */}
            <button type="button" onClick={() => route.back()} className="mx-2 rounded-lg bg-green-100 p-3">뒤로가기</button>
        </div >
    )
}
