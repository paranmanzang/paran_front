"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeartCheckbox from "./HeartCheckBox";
import { useDispatch, useSelector } from "react-redux";
import { getRooms, saveCurrentRoom, saveRooms } from "@/lib/features/room.Slice";
import { useRouter } from "next/navigation";
import { findAllRooms } from "@/app/service/room/room.service";
import { RoomModel } from "@/app/model/room.model";
import { selectFileList } from "@/app/service/File/file.service";
import { getFiles, saveFiles } from "@/lib/features/file.Slice";
interface RoomRowProps {
  active: boolean;
  onSelect: () => void;
}

const RoomRow: React.FC<RoomRowProps> = ({ active, onSelect }) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const rooms = useSelector(state => getRooms(state));
  const files = useSelector(state => getFiles(state))
  const dispatch = useDispatch();
  const router = useRouter();

  // 페이지네이션 정보
  const size: number = 5;
  const [page, setPage] = useState<number>(0);



  useEffect(() => {
    setIsActive(active);

    findAllRooms(page, size).then(data => {
      if (data) {
        dispatch(saveRooms(data))
        const refIdList: number[] = data.map(data => data.id);
        selectFileList(refIdList, "room").then(response => {
          console.log(response)
          if (response) dispatch(saveFiles(response))
        })

      }
    })


  }, [active, dispatch, page]);


  const handleLikeChange = (active: boolean) => {
    console.log('좋아요 상태:', active);
    // 여기에서 필요한 로직을 수행 (예: API 호출)
  };


  const handleClick = (): void => {
    onSelect();
  };

  const onClickToDetail = (currentId: number | undefined) => {
    if (currentId !== undefined) {
      dispatch(saveCurrentRoom(rooms.find(({ id }) => id === currentId)))
      router.push(`/rooms/${currentId}`);
    } else {
      console.error("ID is undefined");
    }
  };
  return (
    <>

      {rooms.length > 0 ? (
        rooms.map((room: RoomModel) => (
          <div className="relative max-w-sm" key={room.id}>
            <form className="absolute top-2 w-full px-3">
              <div className="flex justify-between">
                {/* 모든 유저  */}
                <div id="likeBtn">
                  <HeartCheckbox onChange={handleLikeChange} />
                </div>
                {/* 어드민 셀러만 보이게 */}
                <div id="selectBtn">
                  <input id="select" type="checkbox" value="" className="size-6 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500 " />
                  <label htmlFor="select" hidden>chatSelect</label>
                </div>
              </div>
            </form>
            <div
              className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow ${isActive ? 'ring-2 ring-green-500' : ''
                }`}
              onClick={handleClick}
            >
              {files.roomFiles.find(({ refId }) => room.id === refId)?.path.includes("default.png") ? (
                <Link href={`/rooms/${room.id}`}>
                  <Image
                    width={400}
                    height={330}
                    className="rounded-t-lg"
                    src={"https://picsum.photos/400/380"}
                    alt={`cover`}
                  />
                </Link>
              ) : (
                <Link href={`/rooms/${room.id}`}>
                  <Image
                    width={400}
                    height={330}
                    className="rounded-t-lg"
                    src={`http://localhost:8000/api/files/one?path=${files.roomFiles.find(({ refId }) => room.id === refId)?.path
                      }`}
                    alt={files.roomFiles.find(({ refId }) => room.id === refId)?.path || "No image available"}
                  />
                </Link>
              )}

              <div className="p-5">
                <Link href={`/rooms/${room.id}`}>
                  <h5 className={`mb-2 text-lg font-medium tracking-tight ${isActive ? 'text-green-600' : 'text-gray-900'
                    } `}>
                    {room.name}
                  </h5>
                </Link>
                <p className="mb-3 text-sm font-medium text-gray-700 ">
                  {room.price.toLocaleString("ko-kr")}원
                </p>
                <p className="text-sm font-medium">판매자: {room.nickname}</p>
                <button onClick={() => onClickToDetail(room.id)}
                  className={`mt-5 inline-flex w-full items-center rounded-lg p-3 text-sm font-medium text-white ${isActive
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-green-400 hover:bg-green-500'
                    } `}
                >
                  상세보기
                  <svg
                    className="ms-2 size-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>등록된 공간이 없습니다.</div>
      )}

    </>
  );
};


export default RoomRow;