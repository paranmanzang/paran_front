// src/services/userService.ts
import api from '../axios';

export const FilesService = {
  getFiles: (id: string) => api.get(`/files/${id}`),
  createFiles: (userData: any) => api.post('/files', userData),
  updateFiles: (id: string, userData: any) => api.put(`/files/${id}`, userData),
  deleteFiles: (id: string) => api.delete(`/files/${id}`),
};