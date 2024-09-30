// src/services/userService.ts
import api from '../axios';
import requests from "@/app/api/requests";

export const userAPI = {
  getUser: (id: string) => api.get(`${requests.fe}/users/${id}`),
  createUser: (userData: any) => api.post('/users', userData),
  updateUser: (id: string, userData: any) => api.put(`/users/${id}`, userData),
  deleteUser: (id: string) => api.delete(`/users/${id}`),
};