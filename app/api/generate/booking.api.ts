import { BookingModel } from "@/app/model/room/bookings.model";
import api from "../axios";
import requests from "../requests";

export const bookingAPI = {
    insert(bookingModel: BookingModel) { return api.post<BookingModel>(requests.fetchRooms + '/bookings', bookingModel); },

    modifyConfrim(id: number) { return api.put<BookingModel>(requests.fetchRooms + `/bookings/${id}`); },

    dropReject(id: number) { return api.delete<boolean>(requests.fetchRooms + `/bookings/${id}`); },

    drop(id: number) { return api.delete<boolean>(requests.fetchRooms + `/bookings/${id}`); },

    findGroup(groupId: number, page: number, size: number) { return api.get<Page<BookingModel>>(requests.fetchRooms + `/bookings/group/${groupId}`, { params: { page, size } }); },

    findRoom(roomId: number, page: number, size: number) {
        return api.get<Page<BookingModel>>(requests.fetchRooms + `/bookings/room/${roomId}`, { params: { page, size } });
    },
}