import {AppDispatch} from "@/lib/store";
import {saveBooks, saveError, saveLoading} from "@/lib/features/group/book.Slice";
import bookAPI from "@/app/api/generate/book.api";

// 도서 조회
const findList = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await bookAPI.findList(page, size)
        dispatch(saveBooks(response.data.content))
    } catch (error) {
        dispatch(saveError("도서 조회 중 오류 발생했습니다."));
        console.error('Error fetching bookList:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};

export const bookService = {
    findList
}