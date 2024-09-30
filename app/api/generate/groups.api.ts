// src/services/userService.ts
import api from '../axios';

export const RoomsService = {
  getRooms: (id: string) => api.get(`/groups/${id}`),
  createRooms: (userData: any) => api.post('/groups', userData),
  updateRooms: (id: string, userData: any) => api.put(`/groups/${id}`, userData),
  deleteRooms: (id: string) => api.delete(`/groups/${id}`),
};