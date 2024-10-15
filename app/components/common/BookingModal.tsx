import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Alert from "./Alert";
import { useSelector } from "react-redux";
import { getCurrentRoom } from "@/lib/features/room/room.slice";
import { useAppDispatch } from "@/lib/store";
import { saveBookings } from "@/lib/features/room/bookings.slice";
import { BookingModel } from "@/app/model/room/bookings.model";
import { TimeModel } from "@/app/model/room/room.model";
import { timeService } from "@/app/service/room/time.service";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

export default function BookingModal({ id, isOpen, onClose }: BookingModalProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const room = useSelector(getCurrentRoom);
  const [alertMessage, setAlertMessage] = useState("");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [formData, setFormData] = useState<BookingModel>({
    enabled: false,
    date: '',
    usingTime: [],
    roomId: id,
    groupId: 0
  });
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState<TimeModel[]>([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    setMinDate(`${year}-${month}-${day}`);
  }, []);



  useEffect(() => {
    if (formData.date && room?.id) {
      timeService.findByRoom(room.id, dispatch).then(data => {
        if (data) {
          const timesForSelectedDate = data.filter(time => time.date === formData.date)
          setAvailableTimes(timesForSelectedDate)
        }
      });
    } else {
      setAvailableTimes([])
    }
  }, [formData.date, room?.id, dispatch])

  if (!isOpen) return null

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(prevState => ({
      ...prevState,
      date: e.target.value,
      usingTime: []
    }));
    setIsDateSelected(true);
  };

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (!isTimeSlotDisabled(value, formData.date)) {
      setFormData(prevState => ({
        ...prevState,
        usingTime: checked
          ? [...prevState.usingTime, value]
          : prevState.usingTime.filter(item => item !== value)
      }));
    }
  };
  
  const isTimeSlotDisabled = (time: string, date: string) => {
    const now = new Date();
    const slotDateTime = new Date(`${date}T${time}`);
    return slotDateTime <= now;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    dispatch(saveBookings([formData]));
    setAlertMessage("예약 되었습니다.");
    setIsAlertOpen(true);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
    setIsConfirmOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmOpen(false);
    router.push('/booking');
  };

  const handleCancel = () => {
    setIsConfirmOpen(false);
  };


  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <ModalHeader onClose={onClose} />
            <ModalBody
              formData={formData}
              handleDateChange={handleDateChange}
              handleTimeChange={handleTimeChange}
              handleSubmit={handleSubmit}
              availableTimes={availableTimes}
              isDateSelected={isDateSelected}
              minDate={minDate}
            />
          </div>
        </div>
      </div>
      <Alert
        message={alertMessage}
        isOpen={isAlertOpen}
        onClose={handleAlertClose}
      />
      <Alert
        message="예약신청내역으로 이동하시겠습니까?"
        isOpen={isConfirmOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        showConfirm={true}
      />
    </>
  );
}

const ModalHeader = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
      <h3 className="text-xl font-semibold text-gray-900">
        예약하기
      </h3>
      <button
        type="button"
        onClick={onClose}
        className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
      >
        <svg className="size-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span className="sr-only">닫기</span>
      </button>
    </div>
  );
}

function ModalBody({
  formData,
  handleDateChange,
  handleTimeChange,
  handleSubmit,
  availableTimes,
  isDateSelected,
  minDate
}: {
  formData: BookingModel;
  handleDateChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleTimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  availableTimes: TimeModel[];
  isDateSelected: boolean;
  minDate: string;
}) {
  return (
    <div className="p-4 md:p-5">
      <form className="space-y-4" action="#" onSubmit={handleSubmit}>
        <input
          type="date"
          value={formData.date}
          onChange={handleDateChange}
          min={minDate}
          className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full px-2.5"
        />
        {formData.date && <span className="text-green-600">예약가능 날짜 입니다.</span>}
        {isDateSelected && availableTimes.length > 0 && (
          <TimeSlots
            availableTimes={availableTimes}
            handleChange={handleTimeChange}
            selectedTimes={formData.usingTime}
            selectedDate={formData.date}
          />
        )}
        {isDateSelected && availableTimes.length === 0 && (
          <p className="text-red-500">선택한 날짜에 예약 가능한 시간이 없습니다.</p>
        )}
        <button
          type="submit"
          className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled={!isDateSelected || formData.usingTime.length === 0}
        >
          예약 신청하기
        </button>
        <div className="text-sm font-medium text-green-700 hover:underline">
          요청이 수락되면 알려드릴게요!^^
        </div>
      </form>
    </div>
  );
}

function TimeSlots({ availableTimes, handleChange, selectedTimes, selectedDate }: {
  availableTimes: TimeModel[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedTimes: string[];
  selectedDate: string;
}) {
  const isTimeSlotDisabled = (time: string, date: string) => {
    const now = new Date();
    const slotDateTime = new Date(`${date}T${time}`);
    return slotDateTime <= now;
  };

  return (
    <ul className="grid grid-cols-6 gap-2">
      {availableTimes.map((time) => {
        const isDisabled = isTimeSlotDisabled(time.time, selectedDate);
        return (
          <li key={time.id} className="mb-4">
            <input
              type="checkbox"
              id={`time-${time.id}`}
              name="time"
              value={time.time}
              onChange={handleChange}
              checked={selectedTimes.includes(time.time)}
              disabled={isDisabled}
              className="hidden peer"
            />
            <label
              htmlFor={`time-${time.id}`}
              className={`p-2 text-center text-green-400 bg-white border-2 border-green-200 rounded-lg cursor-pointer peer-checked:border-green-600 hover:text-green-300 peer-checked:text-green-400 hover:bg-green-500 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {time.time}
            </label>
          </li>
        );
      })}
    </ul>
  );
}