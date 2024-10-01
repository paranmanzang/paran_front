import { RoomModel, RoomUpdateModel, TimeModel } from "@/app/model/room.model";
import api from "../axios";
import requests from "../requests";
import { BookingModel } from "@/app/model/bookings.model";
import { ReviewModel, ReviewUpdateModel } from "@/app/model/review.model";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { AccountCancelModel, AccountModel, AccountResultModel } from "@/app/model/account.model";
import { AddressModel, AddressUpdateModel } from "@/app/model/address.model";

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

    // booking
    saveBooking(bookingModel: BookingModel){return api.post<BookingModel>(requests.fetchRooms + '/bookings/add', bookingModel);},
    
    saveStateAPI(id: number){return api.put<BookingModel>(requests.fetchRooms + `/bookings/state/${id}`);},
    
    rejectBookingAPI(id: number){return api.delete<boolean>(requests.fetchRooms + `/bookings/state/${id}`);},
    
    dropBookingAPI(id: number){return api.delete<boolean>(requests.fetchRooms + `/bookings/delete/${id}`);},
    
    findByGroupIdAPI(groupId: number, page: number, size: number){return api.get<Page<BookingModel>>(requests.fetchRooms + `/bookings/groups/list/${groupId}`, { params: { page, size } });},
    
    findByRoomIdAPI(roomId: number, page: number, size: number){return api.get<Page<BookingModel>>(requests.fetchRooms + `/bookings/rooms/list/${roomId}`, { params: { page, size } });
    },

    // review
    saveReviewAPI(reviewModel: ReviewModel){return api.post<ReviewModel>(requests.fetchRooms + '/reviews/add', reviewModel);},
    
    modify(reviewModel: ReviewUpdateModel){return api.put<ReviewModel>(requests.fetchRooms + '/reviews/update', reviewModel);},
    
    drop(id: number){return api.delete<boolean>(requests.fetchRooms + `/reviews/delete/${id}`);},
    
    findAllReviewAPI(page: number, size: number){return api.get<Page<ReviewModel>>(requests.fetchRooms + '/reviews/list', { param: { page, size } });},
    
    findReviewByRoomAPI(roomId: number, page: number, size: number){return api.get<Page<ReviewModel>>(requests.fetchRooms + `/reviews/list/rooms/${roomId}`, { param: { page, size } });},
    
    findReviewByUserAPI(nickname: string, page: number, size: number){return api.get<Page<ReviewModel>>(requests.fetchRooms + `/reviews/list/rooms/${nickname}`, { param: { page, size } });},

    // account
    loadTossPaymentsAPI(){return loadTossPayments("test_ck_mBZ1gQ4YVX9QGM06mRNRrl2KPoqN");},
    
    savePaymentAPI(model: AccountResultModel){return api.post<boolean>(requests.fetchRooms + '/accounts/success', model);},
    
    findByOrderIdAPI(orderId: string){return api.get<string>(requests.fetchRooms + '/accounts/findPayment', {params: { orderId },});},
    
    cancelPaymentAPI(model: AccountCancelModel){return api.put<boolean>(requests.fetchRooms + '/accounts/cancel', model);},
    
    findByBookingAPI(bookingId: number, page: number, size: number){return api.get<AccountModel>(requests.fetchRooms + `/accounts/findByBooking/${bookingId}`, { params: { page, size } });},
    
    findByGroupAPI(groupId: number, page: number, size: number){return api.get<Page<AccountModel>>(requests.fetchRooms + `/accounts/list/groups/${groupId}`, { params: { page, size } });},

    // address
    searchAddressAPI (query: string) {
        return api.get<AddressModel[]>(requests.fetchRooms + '/accounts/search', {
            params: { query },
        });
    },
    insertAddressAPI (addressModel: AddressModel) {
        return api.post<AddressModel>(requests.fetchRooms + '/addresses/add', addressModel);
    },
    modifidAddressAPI(addressModel: AddressUpdateModel){
        return api.put<AddressModel>(requests.fetchRooms + '/addresses/update', addressModel);
    },
    dropAddressAPI(id: number){
        return api.delete<boolean>(requests.fetchRooms + `/addresses/delete/${id}`);
    },
    findByAddressesAPI(){
        return api.get<AddressModel[]>(requests.fetchRooms + '/addresses/list');
    },
    findByQueryAPI(query: string){
        return api.get<AddressModel[]>(`${requests.fetchRooms}/addresses/find/${query}`);
    }
}