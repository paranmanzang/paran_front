"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeartCheckbox from "./HeartCheckBox";
import { useSelector } from "react-redux";

import { getError, getGroups, getIsLoading, saveError, saveGroups, saveLoading } from "@/lib/features/group/group.Slice";

interface GroupRowProps {
  active: boolean;
  onSelect: () => void;
}

const GroupRow: React.FC<GroupRowProps> = ({ active, onSelect }) => {
  const [isActive, setIsActive] = useState<boolean>(active);
  const groups = useSelector(getGroups)
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const page = 5; //임의로 넣어둠
  const size = 5; //임의로 넣어둠

  const handleLikeChange = (active:boolean) => {
    console.log('좋아요 상태:', active);
    // 여기에서 필요한 로직을 수행 (예: API 호출)
  };

  useEffect(() => {
    setIsActive(active);
  }, []);

  const handleClick = (): void => {
    onSelect();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if(error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="group-list">
      {groups.map((group: any) => (
        <div key={group.id} className="relative max-w-sm">
          <form className="absolute top-2 w-full px-3">
            <div className="flex justify-between">
              {/* 모든 유저 */}
              <div id="likeBtn">
                <HeartCheckbox onChange={handleLikeChange} />
              </div>
              {/* 어드민 셀러만 보이게 */}
              <div id="selectBtn">
                <input
                  id="select"
                  type="checkbox"
                  value=""
                  className="size-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2 "
                />
                <label htmlFor="select" hidden>
                  chatSelect
                </label>
              </div>
            </div>
          </form>
          <div
            className={`max-w-sm rounded-lg border border-gray-200 bg-white shadow  ${isActive ? 'ring-2 ring-green-500' : ''
              }`}
            onClick={handleClick}
          >
            <Link href={`/groups/${group.id}`}>
              <Image
                width={400}
                height={330}
                className="rounded-t-lg"
                src={group.image || "https://picsum.photos/400/380"}
                alt={`cover`}
                priority
              />
            </Link>
            <div className="p-5">
              <Link href={`/groups/${group.id}`}>
                <h5
                  className={`mb-2 text-lg font-medium tracking-tight ${isActive ? 'text-green-600' : 'text-gray-900'
                    } `}
                >
                  {group.title || "group title"}
                </h5>
              </Link>
              <p className="mb-3 text-sm font-medium text-gray-700 ">
                {group.content || "group content"}
              </p>
              <div className="w-full flex justify-between">
                <p className="text-sm font-medium">소모임 : {group.name}</p>
                <p className="text-sm font-medium">카테고리
                  <span className="font-xs bg-green-400 p-2 text-white rounded-full">{group.categoryName}</span>
                </p>
              </div>
              <Link
                href={`/groups/${group.id}`} 
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
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupRow;