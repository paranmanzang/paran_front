
const chatMessageApi = 'http://localhost:8081/api/chats/message'

export const getMessageList = async ({ roomId, nickname }: { roomId: string, nickname: string }): Promise<void> => {
    try {
        // 이벤트 스트림 연결
        const eventSource = new EventSource(chatMessageApi+`/${roomId}?nickname=${nickname}`);

        // 서버로부터 들어오는 메시지 처리
        eventSource.onmessage = (event) => {
            console.log('새로운 메시지:', event.data);
            // 메시지 데이터를 처리하는 로직을 작성합니다.
        };

        // 오류가 발생했을 때 처리
        eventSource.onerror = (error) => {
            console.error('SSE 연결 오류 발생:', error);
            eventSource.close(); // 연결 종료
        };

        // 컴포넌트가 언마운트될 때 SSE 연결 종료 구현 필요
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('SSE 메시지 구독 중 오류 발생:', errorMessage);
    }
};


export const insertMessage = async ({ nickname, roomId, message }: { nickname: string, roomId: string, message:string }): Promise<Boolean> => {
    try {
        const response = await fetch(chatMessageApi , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            },
            body: JSON.stringify({ message: message, roomId: roomId })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('채팅 메세지 보내는 중 오류 발생:', error);
        return false;
    }
}

export const unReadTotalMessageCount = async ({nickname }: { nickname: string }): Promise<number> => {
    try {
        const response = await fetch(chatMessageApi + '/totalunread', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'nickname': nickname
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('총 User가 읽지 않은 메세지 갯수 찾는 중 오류 발생:', error);
        return 0;
    }
}