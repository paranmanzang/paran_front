import { useQuery, useMutation, useQueryClient } from 'react-query';
import {userService} from '@/app/service/user/user.service'; // 유저 서비스 임포트 가정

export const useUser = (nickname: string) => {
    const queryClient = useQueryClient();

    // nickname을 기준으로 유저 데이터 조회
    const { data: user, isLoading, error } = useQuery(
        ['user', nickname],
        () => userService.getUserByNickname(nickname).then(res => res.data), // nickname으로 유저를 찾는 API
        {
            staleTime: 5 * 60 * 1000, // 5분 동안 데이터 신선 상태 유지
        }
    );

    // 유저 데이터 업데이트
    const updateUser = useMutation(
        (userData: any) => userService.updateUserByNickname(nickname, userData), // nickname을 사용해 유저 업데이트
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['user', nickname]); // 업데이트 후 캐시 무효화
            },
        }
    );

    return {
        user,
        isLoading,
        error,
        updateUser: updateUser.mutate,
    };
};