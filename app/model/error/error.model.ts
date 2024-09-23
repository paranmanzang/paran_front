export interface ErrorField{
    value: object;
    message: String;
}

export interface ExceptionResponseModel{
    code: String;
    message: String;
    eerors: ErrorField[];
}