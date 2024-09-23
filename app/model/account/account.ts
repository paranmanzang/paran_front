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
  

export interface AccountCancelModel{
    paymentKey: String;     // 결제 번호
    cancelReason: String;   // 취소 사유
}