import groupsAPI from "@/app/api/generate/groups.api";
import {AppDispatch} from "@/lib/store";
import {saveBooks, saveError, saveLoading} from "@/lib/features/group/book.Slice";

// 도서 조회
export const findBookList = async (page: number, size: number, dispatch: AppDispatch): Promise<void> => {
    try {
        dispatch(saveLoading(true));
        const response = await groupsAPI.findBookList(page, size)
        dispatch(saveBooks(response.data.content))
    } catch (error) {
        dispatch(saveError("도서 조회 중 오류 발생했습니다."));
        console.error('Error fetching bookList:', error);
    } finally {
        dispatch(saveLoading(false));
    }
};