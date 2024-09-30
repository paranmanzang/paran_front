// src/hooks/useUser.ts
import { useState, useEffect } from 'react';
import { userService } from '@/app/services/user/user.service.ts';

export const useUser = (id: string) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await userService.getUser(id);
        setUser(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const updateUser = async (userData: any) => {
    try {
      setLoading(true);
      const response = await userService.updateUser(id, userData);
      setUser(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, updateUser };
};