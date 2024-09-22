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
