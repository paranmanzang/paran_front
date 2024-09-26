"use client";
import { RoomModel } from "@/app/model/room.model";
import { findAllRooms } from "@/app/service/room/room.service";
import { getRooms, saveCurrentRoom, saveRooms } from "@/lib/features/room.Slice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RoomList() {
    const rooms = useSelector(getRooms)
    console.log("rooms: ", rooms,rooms.length)
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        findAllRooms(0, 5).then(data => {
            if (data) {
                dispatch(saveRooms(data))
            }
        })
    }, [dispatch])

    const onClick = (id: number | undefined) => {
        if (id !== undefined) {
            dispatch(saveCurrentRoom(rooms[id - 1]))
            router.push(`/rooms/${id}`);
        } else {
            console.error("ID is undefined");
        }
    };

    return (
        <div>
            <div>rooms.length: {rooms.length}</div>
            <div>
                {rooms.length > 0 ? (
                    rooms.map((room: RoomModel) => (
                        <button key={room.id} onClick={() => onClick(room.id)} style={{ padding: "100" }}>
                            {room.name}
                        </button>
                    ))
                ) : (
                    <div>공간 정보 없음</div>
                )}
            </div>
        </div>
    );
}
