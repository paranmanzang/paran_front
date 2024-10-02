import { RoomModel, RoomUpdateModel, TimeModel } from "@/app/model/room/room.model";
import api from "../axios";
import requests from "../requests";

export const roomAPI = {
    insert(roomModel: RoomModel) { return api.post<RoomModel>(requests.fetchRooms, roomModel) },

    modify(roomModel: RoomUpdateModel) { return api.put<RoomModel>(requests.fetchRooms, roomModel); },

    drop(id: number) { return api.delete<boolean>(requests.fetchRooms + `/${id}`) },

    findUser(nickname: string, page: number, size: number) { return api.get<Page<RoomModel>>(requests.fetchRooms + `/user`, { params: { nickname, page, size } }); },

    findAll(page: number, size: number) { return api.get<Page<RoomModel>>(requests.fetchRooms, { params: { page, size } }); },

    findEnabled(page: number, size: number) { return api.get<Page<RoomModel>>(requests.fetchRooms + '/Enabled', { params: { page, size } }); },

    modifyConfrim(id: number) { return api.put<RoomModel>(requests.fetchRooms + `/confrim/${id}`); },

    dropConfrim(id: number) { return api.delete<boolean>(requests.fetchRooms + `/${id}`); },

    findTime(roomId: number) { return api.get<TimeModel[]>(requests.fetchRooms + `/time/${roomId}`); },

}