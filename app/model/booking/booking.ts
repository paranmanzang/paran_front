export interface BookingModel {
    id?: number; // 예약 ID (선택사항)
    enabled: boolean; // 승인 여부 (필수)
    usingStart: string; // 이용 시작 시간 (필수, "yyyy-MM-dd HH:mm" 형식)
    usingEnd: string; // 이용 종료 시간 (필수, "yyyy-MM-dd HH:mm" 형식)
    roomId: number; // 공간 ID (필수)
    groupId: number; // 소모임 ID (필수)
  }
  