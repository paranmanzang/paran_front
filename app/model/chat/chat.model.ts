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