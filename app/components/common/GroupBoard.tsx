"use client"
import Image from "next/image"
import HeartCheckbox from "./Row/HeartCheckBox"
import { useEffect, useState } from "react";
import { getCurrentGroup, getCurrentGroupPost, getGroupPostsGeneral, getGroupPostsNotice, saveError, saveGroupPosts, saveLoading } from "@/lib/features/group/group.Slice";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentFile } from "@/lib/features/file.Slice";
import { getPostsByGroupId } from "@/app/service/group/groupPost.service";

export default function GroupBoard() {
  const dispatch = useDispatch<AppDispatch>();
  const [active, setActive] = useState(false);
  const group = useSelector((state: RootState) => getCurrentGroup(state));
  const groupPostNitice= useSelector((state: RootState)=> getGroupPostsNotice(state))
  const groupPostsGeneral= useSelector((state: RootState)=> getGroupPostsGeneral(state))
  const groupId = group?.id ?? ''
  const page = 5 // 임의 값
  const size = 5 // 임의 값
  const postCategory = '공지 사항' // '공지 사항' | '자유게시판'



  useEffect(() => {
    dispatch(saveLoading(true));
    getPostsByGroupId(Number(groupId), page, size, postCategory)
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
  }, [dispatch, groupId,postCategory]);

  return (
      <ul className="max-w-sm mx-auto bg-green-100 my-8 p-4">
        <li className="p-6 m-2 bg-white">
          <Image 
          width={400}
          height={330}
          className="rounded-t-lg" src={"https://picsum.photos/400/380"} alt={'cover'}/>
          <div>title</div>
          <div  className="w-18 overflow-hidden whitespace-nowrap text-ellipsis">contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent</div>
          <HeartCheckbox onChange={setActive => true}/>
        </li>
      </ul>
  )
}
