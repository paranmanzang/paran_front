"use client";
import React from "react";
import { useSelector } from "react-redux";
import { getGroups, getIsLoading, getError } from "@/lib/features/group/group.Slice";
import GroupCard from "./GroupCard";
import LoadingSpinner from "../status/LoadingSpinner";
import ErrorMessage from "../status/ErrorMessage";

interface GroupRowProps {
  active: boolean;
  onSelect: () => void;
}

const GroupRow = ({ active, onSelect }:GroupRowProps) => {
  const groups = useSelector(getGroups);
  // error 나 loading  부분은 isFetching 작업을 통해서 최적화 엔드 react query 에서 미리 불러와서 사용할 수 있도록 하자.
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="group-list grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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