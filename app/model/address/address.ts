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
