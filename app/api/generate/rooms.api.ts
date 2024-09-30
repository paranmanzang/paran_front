import { RoomModel, RoomUpdateModel, TimeModel } from "@/app/model/room.model";
import api from "../axios";
import requests from "../requests";
import { BookingModel } from "@/app/model/bookings.model";

export const roomAPI = {
    saveRoomAPI: (roomModel: RoomModel) => {
        return api.post<RoomModel>(requests.fetchRooms + '/add', roomModel);
    },
    updateRoomAPI: (roomModel: RoomUpdateModel) => {
        return api.put<RoomModel>(requests.fetchRooms + '/update', roomModel);
    },
    deleteRoomAPI: (id: number) => {
        return api.delete<boolean>(requests.fetchRooms + `/delete/${id}`);
    },
    findRoomsByUserAPI: (nickname: string, page: number, size: number) => {
        return api.get<Page<RoomModel>>(requests.fetchRooms + `/list/${nickname}`, { params: { page, size } });
    },
    findRoomListAPI: (page: number, size: number) => {
        return api.get<Page<RoomModel>>(requests.fetchRooms + '/list', { params: { page, size } });
    },
    findEnabledRoomsAPI: (page: number, size: number) => {
        return api.get<Page<RoomModel>>(requests.fetchRooms + '/list/Enabled', { params: { page, size } });
    },
    confirmRoomAPI: (id: number) => {
        return api.put<RoomModel>(requests.fetchRooms + `/adminAnswer/${id}`);
    },
    rejectRoomAPI: (id: number) => {
        return api.delete<boolean>(requests.fetchRooms + `/adminAnswer/${id}`);
    },
    findTimeListAPI: (roomId: number) => {
        return api.get<TimeModel[]>(requests.fetchRooms + `/times/${roomId}`);
    },

    // bookingId
    saveBookingAPI: (bookingModel: BookingModel) => {
        return api.post<boolean>(requests.fetchRooms + '/add', bookingModel);
    }
}