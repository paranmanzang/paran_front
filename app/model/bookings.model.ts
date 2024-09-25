// bookingTypes.ts
export interface BookingModel {
  id?: number;
  enabled: boolean;
  usingStart: string;
  usingEnd: string;
  roomId: number;
  groupId: number;
}

// 상태 인터페이스 정의
export interface BookingState {
  bookings: BookingModel[];
  currentBooking: BookingModel | null;
  isLoading: boolean;
  error: string | null;
}

// 초기 상태
export const initialBookingState: BookingState = {
  bookings: [],
  currentBooking: null,
  isLoading: false,
  error: null
};