"use client"
import { useState } from "react"
import { useSelector } from "react-redux"
import Alert from '../common/Alert'
import { getUsers } from "@/lib/features/users/user.Slice"
import { getCheckedNames } from "@/lib/features/users/users.Slice"

export default function ModalFriend() {
    const [alertState, setAlertState] = useState({ isOpen: false, message: "" })
    
    const userCheck = useSelector(getCheckedNames);
    const users = useSelector(getUsers); 

    const onFriends = async () => {
        if (userCheck != null ){
            setAlertState({ isOpen: true, message: "친구요청을 보냈습니다." })
        } else {
            setAlertState({ isOpen: true, message: "사용자 정보를 불러올 수 없습니다." })
        }
    }

    const closeAlert = () => {
        setAlertState({ isOpen: false, message: "" })
    }

    return (
        <>
            <ul className="transition-opacity duration-300 ease-in-out">
                <li>{users ? users.name : "사용자 이름"}</li>
                <li>
                    <button type="button" className="p-2 bg-green-500 text-white" onClick={onFriends}>친구요청하기</button>
                </li>
            </ul>
            <Alert
                message={alertState.message}
                isOpen={alertState.isOpen}
                onClose={closeAlert}
            />
        </>
    )
}