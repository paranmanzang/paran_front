import { RoomModel, RoomUpdateModel, TimeModel } from "@/app/model/room.model";
import api from "../axios";
import requests from "../requests";
import { BookingModel } from "@/app/model/bookings.model";
import { dropBooking, findByGroupId, rejectBooking, saveState } from "@/app/service/room/booking.service";

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

    // booking
    saveBookingAPI: (bookingModel: BookingModel) => {
        return api.post<BookingModel>(requests.fetchRooms + '/add', bookingModel);
    },
    saveStateAPI: (id: number) => {
        return api.put<BookingModel>(requests.fetchRooms + `/state/${id}`);
    },
    rejectBookingAPI: (id: number) => {
        return api.delete<boolean>(requests.fetchRooms + `/state/${id}`);
    },
    dropBookingAPI: (id: number) => {
        return api.delete<boolean>(requests.fetchRooms + `/delete/${id}`);
    },
    findByGroupIdAPI: (groupId: number, page: number, size: number) => {
        return api.get<Page<BookingModel>>(requests.fetchRooms + `/groups/list/${groupId}`, { params: { page, size } });
    },
    findByRoomIdAPI: (roomId: number, page: number, size: number) => {
        return api.get<Page<BookingModel>>(requests.fetchRooms + `/rooms/list/${roomId}`, { params: { page, size } });
    },
}