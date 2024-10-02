import { ReviewModel, ReviewUpdateModel } from "@/app/model/review.model";
import requests from "../requests";
import api from "../axios";

export const reviewAPI = {

    save(reviewModel: ReviewModel) { return api.post<ReviewModel>(requests.fetchRooms + '/reviews/add', reviewModel); },

    update(reviewModel: ReviewUpdateModel) { return api.put<ReviewModel>(requests.fetchRooms + '/reviews/update', reviewModel); },

    delete(id: number) { return api.delete<boolean>(requests.fetchRooms + `/reviews/delete/${id}`); },

    findAll(page: number, size: number) { return api.get<Page<ReviewModel>>(requests.fetchRooms + '/reviews/list', { param: { page, size } }); },

    findRoom(roomId: number, page: number, size: number) { return api.get<Page<ReviewModel>>(requests.fetchRooms + `/reviews/list/rooms/${roomId}`, { param: { page, size } }); },

    findUser(nickname: string, page: number, size: number) { return api.get<Page<ReviewModel>>(requests.fetchRooms + `/reviews/list/rooms/${nickname}`, { param: { page, size } }); },
}