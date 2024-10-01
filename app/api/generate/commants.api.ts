import { api } from '../axios';
import requests from "@/app/api/requests";
import {ExceptionResponseModel} from "@/app/model/error.model";
import {CommentRequestModel, CommentResponseModel} from "@/app/model/comment/comment.model";

export const commentsAPI = {
  insertCommentAPI: (model: CommentRequestModel, nickname: string) => {
    return api.post<boolean | ExceptionResponseModel>(`${requests.fetchComments}`, model, {
      headers: {
        nickname,
      },
    });
  },
  deleteCommentAPI: (commentId: number) => {
    return api.delete<boolean>(`${requests.fetchComments}/${commentId}`);
  },
  updateCommentAPI: (commentId: number, content: string, nickname: string) => {
    return api.put<boolean>(`${requests.fetchComments}/${commentId}`, { content }, {
      headers: {
        nickname,
      },
    });
  },
  findCommentListByPostIdAPI: (postId: number, page: number, size: number) => {
    return api.get<Page<CommentResponseModel>>(requests.fetchComments + `/${postId}`, {
      params: {
        page,
        size
      }
    });
  }
};

export default commentsAPI;