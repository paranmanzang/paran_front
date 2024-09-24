export interface ChatRoomModel {
    roomId: string;                 // 방 ID 
    name: string;                   // 방 이름
    password: string;               // 방 비밀번호
    userCount: number;              // 방안에 있는 User 수
    unReadMessageCount: number;     // 채팅방에 대해서 내가 읽지 않은 메세지 갯수
}

export interface ChatUserModel{
    nickname: string;               // 유저 닉네임
    enterTime: string;              // 유저가 방에 최초 입장한 시간
}

export interface ChatMessageModel{
    id:string;
    type: "ENTER" | "TALK" | "EXIT";// 메세지 타입 ENTER or TALK or EXIT
    nickname: string;               // 유저 닉네임
    message: string;                // 메세지 내용
    time: string;                   // 메세지 보낸 시간
    roomId: string;                 // 채팅방 ID
}