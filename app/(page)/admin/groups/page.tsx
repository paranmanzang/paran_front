"use client"
import ErrorMessage from "@/app/components/common/status/ErrorMessage";
import LoadingSpinner from "@/app/components/common/status/LoadingSpinner";
import { GroupResponseModel } from "@/app/model/group/group.model";
import { groupService } from "@/app/service/group/group.service";
import { getEnableGroups, getGroups, saveCurrentGroup } from "@/lib/features/group/group.slice";
import { getError, getIsLoading } from "@/lib/features/room/room.slice";
import { useAppDispatch } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function roomAdmin() {
  const [activeTab, setActiveTab] = useState<string>("승인된 소모임");
  const dispatch = useAppDispatch()
  // 승인된 소모임 내역
  const groups = useSelector(getGroups)
  // 승인되지 않은 소모임 내역
  const enableGroups = useSelector(getEnableGroups)
  const loading = useSelector(getIsLoading)
  const error = useSelector(getError)

  const router = useRouter()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(9)
  const totalItems = 10

  useEffect(() => {
    groupService.findList(page, pageSize, dispatch)
    groupService.enableList(page, pageSize, dispatch)
  }, [page, pageSize])

  const onClickToDetail = (group: GroupResponseModel) => {
    dispatch(saveCurrentGroup(group));
    router.push(`/groups/${group.id}`);
  }

  const enableGroup = (group: GroupResponseModel) => {
    groupService.enable(group.id, dispatch)
  }

  const ableGroup = (group: GroupResponseModel) => {
    groupService.able(group.id, dispatch)
  }

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error} />

  const renderTabContent = () => {
    switch (activeTab) {
      case "승인된 소모임":
        return (
          <ul>
            {groups.length > 0 ? (
              groups.map((group, index) => (
                <li key={index} className="p-4 bg-white rounded-lg shadow-sm mb-4 flex justify-between items-center">
                  <p className="font-bold text-gray-800" onClick={() => onClickToDetail(group)}>
                    {group.name}
                  </p>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() =>
                      enableGroup(group)
                    }
                  >
                    승인 취소
                  </button>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">승인한 소모임 목록이 없습니다.</p>
            )}
          </ul>
        );
      case "승인 대기 소모임":
        return (
          <ul>
            {enableGroups.length > 0 ? (
              enableGroups.map((group, index) => (
                <li key={index} className="p-4 bg-white rounded-lg shadow-sm mb-4 flex justify-between items-center">
                  <p className="font-bold text-gray-800" onClick={() => onClickToDetail(group)}>
                    {group.name}
                  </p>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() =>
                      ableGroup(group)
                    }
                  >
                    승인
                  </button>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500">승인 요청이 없습니다.</p>
            )}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <div className="bg-green-50 py-8 rounded-lg text-center">
        <h1 className="text-4xl font-bold">소모임 관리</h1>
      </div>

      <div className="my-6 space-y-6">
        {/* 탭 버튼 */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "승인된 소모임" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => setActiveTab("승인된 소모임")}
          >
            승인된 소모임
          </button>
          <button
            className={`px-4 py-2 mx-2 rounded-lg ${activeTab === "승인 대기 소모임" ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
            onClick={() => setActiveTab("승인 대기 소모임")}
          >
            승인 대기 소모임
          </button>
        </div>

        {/* 탭 내용 렌더링 */}
        <div className="bg-green-50 p-8 rounded-lg">{renderTabContent()}</div>
      </div>
      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={() => { router.back() }}
          className="rounded-full bg-white-400 px-6 py-3 text-black text-sm font-medium hover:bg-gray-200 transition duration-300 border border-gray-200"
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
}
