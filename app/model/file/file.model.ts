export interface FileModel {
    id: string, //파일 ID
    type: string, //파일 참조 타입
    path: string, //파일 경로
    refId: number, // 참조 ID
    uploadAt: Date // 업로드 일
}
export interface FileDeleteModel{
    path: string // 파일 경로
}