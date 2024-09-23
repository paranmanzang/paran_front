export interface RoomModel {
    id?: number; // 공간 ID (선택적)
    name: string; // 공간 이름 (필수)
    maxPeople: number; // 최대 이용 정원 (필수, 양수)
    price: number; // 이용 금액 (필수, 양수, 1시간당 금액)
    opened: boolean; // 오픈된 공간 여부 (필수)
    openTime: string; // 가게 여는 시간 (HH:mm 형식의 문자열, 필수)
    closeTime: string; // 가게 마지막 이용 시간 (HH:mm 형식의 문자열, 필수)
    createdAt?: string; // 등록일 (선택적, ISO 형식의 문자열)
    enabled?: boolean; // 공간 승인 여부 (선택적)
    nickname: string; // 등록자 닉네임 (필수)
}

export interface RoomUpdateModel {
    id: number; // 공간 ID (필수)
    name: string; // 공간 이름 (필수)
    maxPeople: number; // 최대 이용 정원 (필수, 양수)
    price: number; // 이용 금액 (필수, 양수, 1시간당 금액)
    opened: boolean; // 오픈된 공간 여부 (필수)
    openTime: string; // 가게 여는 시간 (HH:mm 형식의 문자열, 필수)
    closeTime: string; // 가게 마지막 이용 시간 (HH:mm 형식의 문자열, 필수)
}

export interface RoomWTimeModel {
    id: number; // 공간 ID
    name: string; // 공간 이름
    maxPeople: number; // 최대 이용 정원
    price: number; // 1시간당 이용 금액
    opened: boolean; // 오픈된 공간 여부
    openTime: string; // 가게 여는 시간 (HH:mm 형식의 문자열)
    closeTime: string; // 가게 마지막 이용 시간 (HH:mm 형식의 문자열)
    createdAt: string; // 등록일 (ISO 형식의 문자열)
    enabled: boolean; // 승인 여부
    nickname: string; // 등록자 닉네임
    times: any[]; // 공간 이용 시간 (시간에 관련된 모델이 필요할 경우 수정 가능)
}

export interface ReviewModel {
    id?: number; // 리뷰 ID (선택사항)
    rating: number; // 별점 (필수)
    content: string; // 리뷰 내용 (필수)
    nickname: string; // 작성자 (필수)
    createAt?: string; // 작성일 (선택사항, ISO 8601 형식)
    roomId: number; // 이용 공간 ID (필수)
    bookingId: number; // 예약 정보 ID (필수)
}

export interface ReviewUpdateModel {
    id: number; // 리뷰 ID (필수)
    rating: number; // 별점 (필수, 1~10 범위의 자연수)
    content: string; // 리뷰 내용 (필수)
}

export interface BookingModel {
    id?: number; // 예약 ID (선택사항)
    enabled: boolean; // 승인 여부 (필수)
    usingStart: string; // 이용 시작 시간 (필수, "yyyy-MM-dd HH:mm" 형식)
    usingEnd: string; // 이용 종료 시간 (필수, "yyyy-MM-dd HH:mm" 형식)
    roomId: number; // 공간 ID (필수)
    groupId: number; // 소모임 ID (필수)
}

export interface AddressModel {
    id?: number; // 주소 ID는 선택적으로 존재할 수 있습니다.
    address: string; // 전체 주소
    detailAddress: string; // 상세 주소
    latitude: number; // 위도
    longitude: number; // 경도
    roomId: number; // 공간 ID
}

export interface AddressUpdateModel {
    id: number; // 주소 ID (필수)
    address: string; // 전체 주소 (필수)
    detailAddress: string; // 상세 주소 (필수)
    latitude: number; // 위도 (필수, 소수점 이하 13자리까지 가능)
    longitude: number; // 경도 (필수, 소수점 이하 13자리까지 가능)
}

export interface AccountResultModel {
    orderId: string;        // 주문 번호
    paymentKey: string;     // 결제 번호
    amount: number;         // 결제 금액
    orderName: string;      // 상품명
    groupId: number;        // 소모임 ID (결제한 주체)
    roomId: number;         // 공간 ID (사용처)
    bookingId: number;      // 예약 ID
    usePoint: number;       // 사용한 포인트
}


export interface AccountCancelModel {
    paymentKey: String;     // 결제 번호
    cancelReason: String;   // 취소 사유
}
