import { ReviewModel, ReviewUpdateModel } from "@/app/model/room/review.model";
import requests from "../requests";
import api from "../axios";

export const reviewAPI = {

    insert(reviewModel: ReviewModel) { return api.post<ReviewModel>(requests.fetchRooms + '/reviews', reviewModel); },

    modify(reviewModel: ReviewUpdateModel) { return api.put<ReviewModel>(requests.fetchRooms + '/reviews', reviewModel); },

    drop(id: number) { return api.delete<boolean>(requests.fetchRooms + `/reviews/${id}`); },

    findAll(page: number, size: number) { return api.get<Page<ReviewModel>>(requests.fetchRooms + '/reviews', { param: { page, size } }); },

    findRoom(roomId: number, page: number, size: number) { return api.get<Page<ReviewModel>>(requests.fetchRooms + `/reviews/room/${roomId}`, { param: { page, size } }); },

    findUser(nickname: string, page: number, size: number) { return api.get<Page<ReviewModel>>(requests.fetchRooms + `/reviews/user/${nickname}`, { param: { page, size } }); },
}