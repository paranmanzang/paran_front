import { RoomModel, RoomUpdateModel, TimeModel } from "@/app/model/room.model";
import api from "../axios";
import requests from "../requests";

export const roomAPI = {
    save(roomModel: RoomModel){return  api.post<RoomModel>(requests.fetchRooms + '/add', roomModel)},
    
    update(roomModel: RoomUpdateModel){return api.put<RoomModel>(requests.fetchRooms + '/update', roomModel);},
    
    delete(id: number){return api.delete<boolean>(requests.fetchRooms + `/delete/${id}`)},
    
    findUser(nickname: string, page: number, size: number){return api.get<Page<RoomModel>>(requests.fetchRooms + `/list/${nickname}`, { params: { page, size } });},

    findAll(page: number, size: number){return api.get<Page<RoomModel>>(requests.fetchRooms + '/list', { params: { page, size } });},
    
    findEnabled(page: number, size: number){return api.get<Page<RoomModel>>(requests.fetchRooms + '/list/Enabled', { params: { page, size } });},
    
    confirm(id: number){return api.put<RoomModel>(requests.fetchRooms + `/adminAnswer/${id}`);},
    
    reject(id: number){return api.delete<boolean>(requests.fetchRooms + `/adminAnswer/${id}`);},
    
    findTime(roomId: number){return api.get<TimeModel[]>(requests.fetchRooms + `/times/${roomId}`);},   

}