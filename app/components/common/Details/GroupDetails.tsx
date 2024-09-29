"use client"
import { useSelector } from "react-redux";
import DetailButton from "./DetailButton";
import { getCurrentGroup} from "@/lib/features/group/group.Slice";
import { RootState } from "@/lib/store";

export default function Details() {
  const group = useSelector((state: RootState) => getCurrentGroup(state));

  return (
    <div>
      <div className="h-[300px] w-full justify-center bg-gray-400">
        메인 상세보기
      </div>
      <div className="my-6 grid min-h-screen grid-cols-2 place-items-center">
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="col-span-2 h-[70%] w-[90%] bg-gray-400">
          안에 내용 넣기
        </div>
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="h-[70%] w-4/5 bg-gray-400">안에 내용 넣기</div>
        <div className="col-span-2 h-[70%] w-full bg-gray-400">
          안에 내용 넣기
        </div>
      </div>

      <DetailButton thisPage="/page1" displayReview="none" displayReservation="block" />
    </div>
  );
}
