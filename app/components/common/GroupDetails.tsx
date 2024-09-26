import { useDispatch, useSelector } from "react-redux";
import DetailButton from "./DetailButton";
import { AppDispatch, RootState } from "@/lib/store";
import { getCurrentGroup, saveError, saveGroupPosts, saveLoading } from "@/lib/features/group/group.Slice";
import { useEffect } from "react";
import { getPostsByGroupId } from "@/app/service/group/groupPost.service";

export default function Details() {
  const dispatch = useDispatch<AppDispatch>();
  const group = useSelector((state: RootState) => getCurrentGroup(state));
  const groupId = group?.id ?? ''
  const page = 5 // 임의 값
  const size = 5 // 임의 값
  useEffect(() => {
      dispatch(saveLoading(true));
      getPostsByGroupId( Number(groupId), page, size )
        .then(result => {
          if (result && Array.isArray(result)) {
            dispatch(saveGroupPosts(result)); // 소모임 게시판 게시글 저장
          } else {
            dispatch(saveError("소모임 게시판을 불러오는 중 오류가 발생했습니다."));
          }
        })
        .catch((error) => {
          dispatch(saveError((error as Error).message || "소모임 게시판을 불러오는 중 오류가 발생했습니다."));
        })
        .finally(() => {
          dispatch(saveLoading(false)); // 항상 로딩 종료
        });
  }, [dispatch,groupId]);

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
