import api from '@/app/api/axios';
import requests from '@/app/api/requests';
import { CommentRequestModel, CommentResponseModel } from '@/app/model/comment/comment.model';
import { ExceptionResponseModel } from '@/app/model/error.model';

// 댓글 등록
export const insertComment = async (model: CommentRequestModel, nickname: string): Promise<boolean | ExceptionResponseModel> => {
  try {
    const response = await api.post<boolean | ExceptionResponseModel>(requests.fetchComments, model, {
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
    const response = await api.delete<boolean>(requests.fetchComments + `/${commentId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting comment:', error);
    throw new Error('댓글 삭제 중 오류 발생');
  }
};

// 댓글 수정
export const updateComment = async (commentId: number, content: string, nickname: string): Promise<boolean> => {
  try {
    const response = await api.put<boolean>(requests.fetchComments + `/${commentId}`, { content }, {
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
export const getCommentListByPostId = async (postId: number, page: number, size: number): Promise<CommentResponseModel[]> => {
  try {
    const response = await api.get<CommentResponseModel[]>(requests.fetchComments + `/${postId}`, {
      params: {
        page,
        size
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching comment list:', error);
    throw new Error('댓글 리스트 가져오기 중 오류 발생');
  }
};
