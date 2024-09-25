// errorTypes.ts
export interface ErrorField {
    value: object;
    message: string;
}

export interface ExceptionResponseModel {
    code: string;
    message: string;
    errors: ErrorField[];
}

// 상태 인터페이스 정의
export interface ErrorState {
    currentError: ExceptionResponseModel | null;
    errorHistory: ExceptionResponseModel[];
    isError: boolean;
}

// 초기 상태
export const initialErrorState: ErrorState = {
    currentError: null,
    errorHistory: [],
    isError: false
};