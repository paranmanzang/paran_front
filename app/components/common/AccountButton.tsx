"use client";
import { useEffect, useState } from "react";
import { ANONYMOUS, loadTossPayments, TossPaymentsPayment } from "@tosspayments/tosspayments-sdk";
import { v4 } from "uuid";
import { savePayment } from "@/app/service/room/account.service";
import { AccountResultModel, AmountModel } from "@/app/model/account.model";
import { useSelector } from "react-redux";
import { getCurrentBooking } from "@/lib/features/bookings.Slice";
import { getCurrentUser } from "@/lib/features/user.Slice";
import { RootState } from "@reduxjs/toolkit/query";

export default function AccountButton() {
  // 입력 받은 값
  const orderName: string = "1회 모임";
  const amountValue: number = 5000;
  const booking = useSelector((state: RootState | string) => getCurrentBooking(state));
  const user = useSelector((state: RootState | string) => getCurrentUser(state));
  const usePoint: number = 0;
  const [payment, setPayment] = useState<TossPaymentsPayment | null>(null);
  const [amount] = useState<AmountModel>({
    currency: "KRW",
    value: amountValue,
  });
 // const booking = { id: 245, groupId: 1, roomId: 12, date: "2024-09-27", usingTime: ["10:00"], enabled: true }
 useEffect(() => {
  async function fetchPayment(): Promise<void> {
    try {
      const tossPayments = await loadTossPayments("test_ck_mBZ1gQ4YVX9QGM06mRNRrl2KPoqN");
      const payment = tossPayments.payment({ customerKey: ANONYMOUS });
      setPayment(payment);
    } catch (error) {
      console.error("Error fetching payment:", error);
    }
  }
  fetchPayment();
}, []);

const requestPayment = async (): Promise<void> => {
  if (!payment) {
    console.error("Payment instance is not initialized.");
    return;
  }
  const today = new Date();
  const orderDate = "".concat(
    today.getFullYear().toString(),
    (today.getMonth() + 1).toString().padStart(2, '0'),
    today.getDate().toString().padStart(2, '0')
  );
  try {
    // 카드결제
    await payment.requestPayment({
      method: "CARD",
      amount: amount,
      orderId: orderDate + v4().substring(0, 50),
      orderName: orderName,
      customerName: user?.nickname || "",
      windowTarget: "iframe",
      card: {
        useEscrow: false,
        flowMode: "DEFAULT",
        useCardPoint: false,
        useAppCardOnly: false,
      },
    })
      .then(function (response: any) {
        if (response) {
          const model: AccountResultModel = {
            orderId: response.orderId,
            paymentKey: response.paymentKey,
            amount: response.amount.value,
            orderName: orderName,
            roomId: booking?.roomId,
            groupId: booking?.groupId,
            bookingId: booking?.id,
            usePoint: usePoint,
          };
          savePayment(model).then((response) => {
            if (response) {
              console.log("결제 성공");
            }
          });
        }
      });
  } catch (error) {
    console.error("Payment request failed:", error);
  }
};
  return (
    <div>
      {/* 여기에 결제 버튼 붙여주세요  */}
      <button className="rounded-lg bg-green-100 p-2 text-sm text-gray-900" onClick={requestPayment}>결제하기</button>
    </div>
  )
}
