// groupTypes.ts

// 상태 인터페이스 정의
export interface GroupState {
    books: BookResponseModel[];
    categories: CategoryModel[];
    groups: GroupResponseModel[];
    groupPosts: GroupPostResponseModel[];
    points: PointResponseModel[];
    likedBooks: LikeBookModel[];
    currentGroup: GroupResponseModel | null;
    currentBook: BookResponseModel | null;
    isLoading: boolean;
    error: string | null;
}

// 초기 상태
export const initialGroupState: GroupState = {
    books: [],
    categories: [],
    groups: [],
    groupPosts: [],
    points: [],
    likedBooks: [],
    currentGroup: null,
    currentBook: null,
    isLoading: false,
    error: null
};
export interface BookResponseModel {
    id: number;
    title: string;
    author: string;
    categoryName: string;
    likeBookCount: number;
}
export interface CategoryModel {
    name: string;
}

export interface GroupModel {
    groupName: string;
    categoryName: string;
    nickname?: string;
}

export interface GroupPostModel {
    boardId?: number;
    title: string;
    content: string;
    userGroupId: number;
}

export interface JoiningModel {
    nickname: string;
    groupId: number;
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

export interface LikeBookModel {
    id?: number;
    nickname: string;
    bookId: number;
    title?: string;
    autior?: string;
    categoryName?: string;
    likeBookCount?: number;
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

