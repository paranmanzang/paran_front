import { ChatRoomModel } from "../../app/modelchat.model";

const chatRoomApi = 'http://localhost:8081/api/chats/room'

export const createRoom = async ({ roomName, nickname }: { roomName: string, nickname: string }): Promise<string | Boolean> => {
    try {
        // API 요청 전송
        const response = await fetch(chatRoomApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            },
            body: JSON.stringify({ name: roomName })
        });
        const result = await response.json();

        return result ? result : false;
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('방 생성 중 오류 발생:', error);
        return errorMessage;
    }
};

export const getChatList = async ({ nickname }: { nickname: string }): Promise<Boolean | ChatRoomModel[]> => {
    try {
        const response = await fetch(chatRoomApi + '/getchatlist', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            }
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('방 찾기 중 오류 발생:', error);
        return false;
    }
}

export const updateName = async ({ roomName, roomId, nickname }: { roomName: string, roomId: string, nickname: string }): Promise<Boolean | String> => {
    try {
        const response = await fetch(chatRoomApi + '/updatename', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            },
            body: JSON.stringify({ name: roomName, roomId: roomId })
        })
        const result = await response.json();
        return result;
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('이름 수정 중 오류 발생:', error);
        return errorMessage;
    }
}

export const updatePassword = async ({ roomId, password, nickname }: { roomId: string, password: string, nickname: string }): Promise<boolean | string> => {
    try {
        const response = await fetch(chatRoomApi + `/updatepassword`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            },
            body: JSON.stringify([
                { password: password },
                { roomId }
            ])
        });

        const result = await response.json();

        return result ? true : false;
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('비밀번호 변경 중 오류 발생:', errorMessage);
        return errorMessage;
    }
};

export const deleteRoom = async ({ roomId }: { roomId: string }): Promise<Boolean> => {
    try {
        const response = await fetch(chatRoomApi + `/${roomId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const result = await response.json();

        return result ? true : false;
    } catch (error) {
        console.error('방 삭제 중 오류 발생:', error);
        return false;
    }
}

export const saveLastReadMessageTime = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<Boolean> => {
    try {
        const response = await fetch(chatRoomApi + `/lastreadtime/${roomId}`, {
            method: 'POST',
            headers: {
                'nickname': nickname,
                'Content-Type': 'application/json'
            },
        })
        const result = await response.json();
        return result ? true : false;
    } catch (error) {
        console.error('마지막 읽은 메세지 시간 저장 중 오류 발생:', error);
        return false;
    }
}