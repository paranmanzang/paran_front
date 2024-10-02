"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getError, getGroups, getIsLoading } from "@/lib/features/group/group.slice";
import GroupCard from "./GroupCard";
import LoadingSpinner from "../status/LoadingSpinner";
import ErrorMessage from "../status/ErrorMessage";
import { groupService } from "@/app/service/group/group.service";
import { useAppDispatch } from "@/lib/store";

interface GroupRowProps {
  active: boolean;
  onSelect: () => void;
}

const GroupRow = ({ active, onSelect }: GroupRowProps) => {
  const dispatch = useAppDispatch()
  const groups = useSelector(getGroups);
  // error 나 loading  부분은 isFetching 작업을 통해서 최적화 && react query 에서 미리 불러와서 사용할 수 있도록 하자.
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const page = 5; //임의로 넣어둠
  const size = 5; //임의로 넣어둠


  useEffect(() => {
    groupService.findList(page, size, dispatch)
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      {groups.map((group) => (
        <GroupCard
          key={group.id}
          group={group}
          active={active}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};

export default GroupRow;