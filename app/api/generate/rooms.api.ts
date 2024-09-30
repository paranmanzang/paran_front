// src/services/userService.ts
import api from '../axios';

export const RoomsService = {
  getRooms: (id: string) => api.get(`/rooms/${id}`),
  createRooms: (userData: any) => api.post('/rooms', userData),
  updateRooms: (id: string, userData: any) => api.put(`/rooms/${id}`, userData),
  deleteRooms: (id: string) => api.delete(`/rooms/${id}`),
};