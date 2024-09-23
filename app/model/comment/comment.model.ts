export interface CommentRequestModel {
    content: string;   // 댓글 내용
    postId: number;    // 게시판 아이디
    step?: number;     // 이미 달린 댓글 이후 댓글 순서 (Optional)
    depth?: number;    // 이전 댓글 깊이 (Optional)
    parentId?: number; // 부모 댓글 ID (Optional)
  }

  export interface CommentResponseModel {
    id: number;               // 댓글 id
    content: string;           // 댓글 내용
    nickname: string;          // 작성자 닉네임
    postId: number;            // 댓글이 작성된 글 id
    ref: number;               // 댓글 깊이가 같은 것끼리의 그룹 순서
    step: number;              // 댓글 그룹 안에서의 순서
    depth: number;             // 댓글 깊이
    createdAt: string;         // 댓글 작성 시간 (yyyy-MM-dd HH:mm:ss 형식)
  }
  