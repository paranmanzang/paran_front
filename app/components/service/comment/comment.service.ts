import axios from 'axios';
import { CommentRequestModel, CommentResponseModel } from '../../model/comment/comment';
import { ExceptionResponseModel } from '../../model/error/error';

const api = axios.create({
    baseURL: 'http://localhost:8084/api/comments', // Spring Boot API 주소
  });

  // 댓글 등록
export const insertComment = async (model: CommentRequestModel, nickname: string): Promise<boolean | ExceptionResponseModel> => {
    try {
      const response = await api.post('/', model, {
        headers: {
          nickname,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error inserting comment:', error);
      throw new Error('댓글 등록 중 오류 발생');
    }
  };

  // 댓글 삭제
export const deleteComment = async (commentId: number): Promise<boolean> => {
    try {
      const response = await api.delete(`/${commentId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting comment:', error);
      throw new Error('댓글 삭제 중 오류 발생');
    }
  };
  
  // 댓글 수정
  export const updateComment = async (commentId: number, content: string, nickname: string): Promise<boolean> => {
    try {
      const response = await api.put(`/${commentId}`, { content }, {
        headers: {
          nickname,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating comment:', error);
      throw new Error('댓글 수정 중 오류 발생');
    }
  };
  
  // 특정 게시물에 대한 댓글 리스트 가져오기
  export const getCommentListByPostId = async (postId: number): Promise<CommentResponseModel[]> => {
    try {
      const response = await api.get(`/${postId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching comment list:', error);
      throw new Error('댓글 리스트 가져오기 중 오류 발생');
    }
  };
