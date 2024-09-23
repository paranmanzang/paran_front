export interface BookModel {
    title: string;          // 도서명 (필수값)
    author: string;         // 글쓴이 (필수값)
    publisher: string;      // 출판사 (필수값)
    categoryName: string;     // 카테고리 Name (필수값)

}

export interface CategoryModel{
    name: string;     // 카테고리 Name (필수값)
}

export interface GroupModel{
        groupname: string;          // 소모임명 (필수값)
        groupconcept: string;       // 카테고리명 (필수값)
        nickname?: string;          // 닉네임 (선택값)
}

export interface GroupPostModel{
    boardId?: number;          // 게시판 ID (선택값)
    userBoardtitle: string;    // 게시판 제목
    userBoardcontent: string;  // 게시판 내용
    userGroupId: number;       // 사용자 그룹 ID
}

export interface JoiningModel{
    nickname: string;    // 참여할 사용자 닉네임 (필수값)
    groupId: number;         // 참여할 그룹 ID (필수값)
}

export interface PointModel{
    pointId?: number;         // 포인트 ID (선택값)
    groupId: number;          // 그룹 번호 (필수값)
    point: number;            // 포인트 값 (필수값)
}

export interface PointDetailResponseModel{
    id: number;                 // 포인트 상세 ID 
    status: string;              // 상태 
    point: number;               // 포인트 값
    expirationAt: string;        // 만료일
    transactionAt: string;       // 트랜잭션 발생 시각 
    parentPointId: number;      // 부모 포인트 ID 
}

export interface GroupResponseModel{
    id: number;                // 그룹 ID
    name: string;              // 그룹 이름
    categoryName: string;      // 카테고리 이름
    createAt: string;          // 생성일 (LocalDateTime, ISO 문자열 형식)
    enabled: boolean;          // 활성화 상태
    detail: string;            // 세부 사항
    nickname: string;          // 관리자 닉네임
    chatRoomId: string;        // 채팅방 ID
}

export interface PointResponseModel{
    id: number;                                 // 포인트 ID
    createAt: string;                           // 생성일 (LocalDateTime, ISO 문자열 형식)
    detail: string;                             // 세부 사항
    point: number;                              // 포인트 값
    groupId: number;                            // 그룹 ID
    pointDetails: PointDetailResponseModel[];   // 포인트 상세 정보 리스트
}

export interface PointDetailResponseModel {
    id: number;                 // 포인트 상세 ID
    status: string;             // 상태 (예: active, expired 등)
    point: number;              // 포인트 값
    expirationAt: string;       // 만료일 (LocalDate, ISO 문자열 형식)
    transactionAt: string;      // 트랜잭션 발생 시각 (LocalDateTime, ISO 문자열 형식)
    parentPointId: number;      // 부모 포인트 ID
}


export interface GroupPostResponseModel {
    id: number;                // 게시물 ID
    title: string;             // 게시물 제목
    content: string;           // 게시물 내용
    createAt: string;          // 생성일 (LocalDateTime, ISO 문자열 형식)
    modifyAt?: string;         // 수정일 (선택적 필드, LocalDate, ISO 문자열 형식)
    postCategoryId: number;    // 게시물 카테고리 ID
    viewCount: number;         // 조회 수
    nickname: string;          // 작성자 닉네임
    groupId: number;           // 그룹 ID
    groupName?: string;        // 그룹 이름 (선택적 필드)
    bookId?: number;           // 책 ID (선택적 필드)
    bookTitle?: string;        // 책 제목 (선택적 필드)
}
