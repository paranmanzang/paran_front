import { AccountCancelModel, AccountModel, AccountResultModel } from "@/app/model/account.model";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import api from "../axios";
import requests from "../requests";

export const accountAPI = {
    load() { return loadTossPayments("test_ck_mBZ1gQ4YVX9QGM06mRNRrl2KPoqN"); },

    save(model: AccountResultModel) { return api.post<boolean>(requests.fetchRooms + '/accounts/success', model); },

    findOrderId(orderId: string) { return api.get<string>(requests.fetchRooms + '/accounts/findPayment', { params: { orderId }, }); },

    cancel(model: AccountCancelModel) { return api.put<boolean>(requests.fetchRooms + '/accounts/cancel', model); },

    findBooking(bookingId: number, page: number, size: number) { return api.get<AccountModel>(requests.fetchRooms + `/accounts/findByBooking/${bookingId}`, { params: { page, size } }); },

    findGroup(groupId: number, page: number, size: number) { return api.get<Page<AccountModel>>(requests.fetchRooms + `/accounts/list/groups/${groupId}`, { params: { page, size } }); },

}