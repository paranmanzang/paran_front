import { api } from '../axios';

export const CommentService = {
  getComment: (id: string) => api.get(`/comments/${id}`),
  createComment: (commentData: any) => api.post('/comments', commentData),
  updateComment: (id: string, commentData: any) => api.put(`/comments/${id}`, commentData),
  deleteComment: (id: string) => api.delete(`/comments/${id}`),
};