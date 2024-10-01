import { AddressModel, AddressUpdateModel } from "@/app/model/address.model";
import requests from "../requests";
import api from "../axios";

export const addressAPI = {
    search(query: string) {
        return api.get<AddressModel[]>(requests.fetchRooms + '/accounts/search', {
            params: { query },
        });
    },
    save(addressModel: AddressModel) {
        return api.post<AddressModel>(requests.fetchRooms + '/addresses/add', addressModel);
    },
    update(addressModel: AddressUpdateModel) {
        return api.put<AddressModel>(requests.fetchRooms + '/addresses/update', addressModel);
    },
    delete(id: number) {
        return api.delete<boolean>(requests.fetchRooms + `/addresses/delete/${id}`);
    },
    findAddresses() {
        return api.get<AddressModel[]>(requests.fetchRooms + '/addresses/list');
    },
    findQuery(query: string) {
        return api.get<AddressModel[]>(`${requests.fetchRooms}/addresses/find/${query}`);
    },
}