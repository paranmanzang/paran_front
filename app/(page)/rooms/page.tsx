"use client";
import RoomDetails from "@/app/components/common/Details/RoomDetails";
import RoomList from "@/app/components/room/RoomList";
import { useParams } from "next/navigation";

export default function Rooms() {
  const param = useParams();
  
  return (
    <div>
      {/* <RoomDetails roomId={Number(param.id)} /> */}
      <RoomList />
    </div>
  );
}
