"use client"
import { useEffect, useState } from "react";
import { getCurrentGroup, getGroupPosts, saveCurrentGroupPost, saveError, saveGroupPosts, saveLoading, updateGroupPost } from "@/lib/features/group/group.Slice";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByGroupId, updateViewCount } from "@/app/service/group/groupPost.service";
import { useRouter } from "next/navigation";
import { GroupPostResponseModel } from "@/app/model/group/group.model";

export default function GroupBoard() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter(); 
  const [active, setActive] = useState(false);
  const group = useSelector((state: RootState) => getCurrentGroup(state));
  const { groupPostsNotice, groupPostsGeneral } = useSelector((state: RootState) => getGroupPosts(state));
  const groupId = group?.id ?? ''
  const page = 5 // 임의 값
  const size = 5 // 임의 값
  const [selectedCategory, setSelectedCategory] = useState<'공지 사항' | '자유게시판'>('공지 사항');


  useEffect(() => {
    if (!groupId) {
      return;
    }

    dispatch(saveLoading(true));
    getPostsByGroupId(Number(groupId), page, size, selectedCategory)
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
        dispatch(saveLoading(false));  // 항상 로딩 종료
      });
  }, [dispatch, groupId, selectedCategory]);

  const postsToShow = selectedCategory === "공지 사항" ? groupPostsNotice : groupPostsGeneral;

  const onClickToDetail = (currentId: number | undefined) => {
    if (currentId !== undefined) {
      const selectedPost = postsToShow.find(({ id }) => id === currentId);
      if (selectedPost) {
        dispatch(saveCurrentGroupPost(selectedPost)); // 선택한 게시물 저장
  
        updateViewCount(currentId)
          .then(result => {
            if (result && Array.isArray(result)) {
              dispatch(saveGroupPosts(result));
            }
          })
          .catch(error => {
            console.error("Error updating view count:", error);
          })
          .finally(() => {
            router.push(`/groups/board/${currentId}`);
          });
      } else {
        console.error(`Post with ID ${currentId} not found`);
      }
    } else {
      console.error("ID is undefined");
    }
  };
  

  return (
    <div className="max-w-sm mx-auto bg-green-100 my-8 p-4">
      {/* 카테고리 선택 탭 */}
      <div className="flex justify-around mb-4">
        <button
          className={`p-2 ${selectedCategory === '공지 사항' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('공지 사항')}
        >
          공지 사항
        </button>
        <button
          className={`p-2 ${selectedCategory === '자유게시판' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setSelectedCategory('자유게시판')}
        >
          자유게시판
        </button>
      </div>


      {/* 게시물 목록 */}
      <ul>
        {postsToShow.length > 0 ? (
          postsToShow.map((post, index) => (
            <li key={index} className="p-6 m-2 bg-white" onClick={()=>onClickToDetail(post.id)}>
              <div className="font-bold text-lg">{post.title}</div>
              <div className="font-bold text-lg">{post.nickname}</div>
              <div className="font-bold text-lg">{post.createAt}</div>
              <div className="font-bold text-lg">{post.viewCount}</div>
            </li>
          ))
        ) : (
          <li>게시물이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
