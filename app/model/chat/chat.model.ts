export interface ChatRoomModel {
    roomId: String;                 // 방 ID 
    name: String;                   // 방 이름
    password: String;               // 방 비밀번호
    userCount: number;              // 방안에 있는 User 수
    unReadMessageCount: number;     // 채팅방에 대해서 내가 읽지 않은 메세지 갯수
}

export interface ChatUserModel{
    nickname: String;               // 유저 닉네임
    enterTime: String;              // 유저가 방에 최초 입장한 시간
}