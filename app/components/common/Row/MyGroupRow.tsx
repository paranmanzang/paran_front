import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getGroups, getIsLoading, getError, getUserGroups } from '@/lib/features/group/group.slice';
import GroupCard from './GroupCard';
import LoadingSpinner from '../status/LoadingSpinner';
import ErrorMessage from '../status/ErrorMessage';
import { groupService } from '@/app/service/group/group.service';
import { useAppDispatch } from '@/lib/store';
import Pagination from './pagination/Pagination';

interface MyGroupRowProps {
    active: boolean;
    onSelect: () => void;
}

const MyGroupRow = ({ active, onSelect }: MyGroupRowProps) => {
    const groups = useSelector(getUserGroups);
    const loading = useSelector(getIsLoading);
    const error = useSelector(getError);

    if (loading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <>
            {groups.map((group, index) => (
                <GroupCard key={index} group={group} active={active} onSelect={onSelect} />
            ))}
        </>
    );
};

export default MyGroupRow;