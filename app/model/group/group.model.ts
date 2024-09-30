// groupTypes.ts

// 상태 인터페이스 정의
export interface GroupState {
    groups: GroupResponseModel[];
    groupPostsNotices: GroupPostResponseModel[];
    groupPostsGenerals: GroupPostResponseModel[];
    points: PointResponseModel[];
    currentGroup: GroupResponseModel | null;
    currentGroupPost: GroupPostResponseModel | null;
    isLoading: boolean;
    error: string | null;
}

// 초기 상태
export const initialGroupState: GroupState = {
    groups: [],
    groupPostsNotices: [],
    groupPostsGenerals: [],
    points: [],
    currentGroup: null,
    currentGroupPost: null,
    isLoading: false,
    error: null
};



export interface GroupModel {
    groupName: string;
    categoryName: string;
    nickname?: string;
}



export interface JoiningModel {
    nickname: string;
    groupId: number;
    requestAt: string;
    reponseAt: string;
}



export interface GroupResponseModel {
    id: number;
    name: string;
    categoryName: string;
    createAt: string;
    enabled: boolean;
    detail: string;
    nickname: string;
    chatRoomId: string;
}



export interface PointModel {
    pointId?: number;
    groupId: number;
    point: number;
}

export interface PointDetailResponseModel {
    id: number;
    status: string;
    point: number;
    expirationAt: string;
    transactionAt: string;
    parentPointId: number;
}


export interface PointResponseModel {
    id: number;
    createAt: string;
    detail: string;
    point: number;
    groupId: number;
    pointDetails: PointDetailResponseModel[];
}

export interface GroupPostModel {
    boardId?: number;
    title: string;
    content: string;
    userGroupId: number;
    postCategory: string;
}

export interface GroupPostResponseModel {
    id: number;
    title: string;
    content: string;
    createAt: string;
    modifyAt?: string;
    postCategory: string;
    viewCount: number;
    nickname: string;
    groupId: number;
    groupName?: string;
    bookId?: number;
    bookTitle?: string;
}