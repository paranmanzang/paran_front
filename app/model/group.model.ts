// groupTypes.ts

export interface BookModel {
    title: string;
    author: string;
    categoryName: string;
}

export interface CategoryModel {
    name: string;
}

export interface GroupModel {
    groupname: string;
    groupconcept: string;
    nickname?: string;
}

export interface GroupPostModel {
    boardId?: number;
    userBoardtitle: string;
    userBoardcontent: string;
    userGroupId: number;
}

export interface JoiningModel {
    nickname: string;
    groupId: number;
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

export interface PointResponseModel {
    id: number;
    createAt: string;
    detail: string;
    point: number;
    groupId: number;
    pointDetails: PointDetailResponseModel[];
}

export interface GroupPostResponseModel {
    id: number;
    title: string;
    content: string;
    createAt: string;
    modifyAt?: string;
    postCategoryId: number;
    viewCount: number;
    nickname: string;
    groupId: number;
    groupName?: string;
    bookId?: number;
    bookTitle?: string;
}

export interface BookResponseModel {
    id: number;
    title: string;
    author: string;
    categoryName: string;
    likeBookCount: number;
}

export interface LikeBookModel {
    id?: number;
    nickname: string;
    bookId: number;
    bookName?: string;
}


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