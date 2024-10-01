import { useQuery, useMutation, useQueryClient } from 'react-query';
import { RootState } from "@/lib/store";
import userService from '@/app/service/user/user.service'

export const useUser = (id: string) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading, error } = useQuery(
    ['user', id],
    () => userService.getUser(id).then(res => res.data),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );

  const updateUser = useMutation(
    (userData: any) => userService.updateUser(id, userData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['user', id]);
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