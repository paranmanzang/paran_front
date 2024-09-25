// 모델 정의
export interface RoomModel {
    id?: number;
    name: string;
    maxPeople: number;
    price: number;
    opened: boolean;
    openTime: string;
    closeTime: string;
    createdAt?: string;
    enabled?: boolean;
    nickname: string;
}

export interface RoomUpdateModel {
    id: number;
    name: string;
    maxPeople: number;
    price: number;
    opened: boolean;
    openTime: string;
    closeTime: string;
}

export interface RoomWTimeModel {
    id: number;
    name: string;
    maxPeople: number;
    price: number;
    opened: boolean;
    openTime: string;
    closeTime: string;
    createdAt: string;
    enabled: boolean;
    nickname: string;
    times: any[];
}

export interface ReviewModel {
    id?: number;
    rating: number;
    content: string;
    nickname: string;
    createAt?: string;
    roomId: number;
    bookingId: number;
}

export interface ReviewUpdateModel {
    id: number;
    rating: number;
    content: string;
}

export interface BookingModel {
    id?: number;
    enabled: boolean;
    usingStart: string;
    usingEnd: string;
    roomId: number;
    groupId: number;
}

export interface AddressModel {
    id?: number;
    address: string;
    detailAddress: string;
    latitude: number;
    longitude: number;
    roomId: number;
}

export interface AddressUpdateModel {
    id: number;
    address: string;
    detailAddress: string;
    latitude: number;
    longitude: number;
}

export interface AccountResultModel {
    orderId: string;
    paymentKey: string;
    amount: number;
    orderName: string;
    groupId: number;
    roomId: number;
    bookingId: number;
    usePoint: number;
}

export interface AccountCancelModel {
    paymentKey: string;
    cancelReason: string;
}

// 상태 인터페이스 정의
interface RoomState {
    rooms: RoomModel[];
    currentRoom: RoomModel | null;
    reviews: ReviewModel[];
    currentReview: ReviewModel | null;
    bookings: BookingModel[];
    currentBooking: BookingModel | null;
    addresses: AddressModel[];
    currentAddress: AddressModel | null;
    accountResult: AccountResultModel | null;
    accountCancel: AccountCancelModel | null;
    isLoading: boolean;
    error: string | null;
}

// 초기 상태
export const initialRoomState: RoomState = {
    rooms: [],
    currentRoom: null,
    reviews: [],
    currentReview: null,
    bookings: [],
    currentBooking: null,
    addresses: [],
    currentAddress: null,
    accountResult: null,
    accountCancel: null,
    isLoading: false,
    error: null
};