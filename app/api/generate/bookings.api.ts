import { BookingModel } from "@/app/model/bookings.model";
import api from "../axios";
import requests from "../requests";

export const bookingAPI={
    save(bookingModel: BookingModel){return api.post<BookingModel>(requests.fetchRooms + '/bookings/add', bookingModel);},
    
    approval(id: number){return api.put<BookingModel>(requests.fetchRooms + `/bookings/state/${id}`);},
    
    reject(id: number){return api.delete<boolean>(requests.fetchRooms + `/bookings/state/${id}`);},
    
    delete(id: number){return api.delete<boolean>(requests.fetchRooms + `/bookings/delete/${id}`);},
    
    findGroup(groupId: number, page: number, size: number){return api.get<Page<BookingModel>>(requests.fetchRooms + `/bookings/groups/list/${groupId}`, { params: { page, size } });},
    
    findRoom(roomId: number, page: number, size: number){return api.get<Page<BookingModel>>(requests.fetchRooms + `/bookings/rooms/list/${roomId}`, { params: { page, size } });
    },
}