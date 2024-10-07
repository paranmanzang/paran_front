import { AppDispatch } from "@/lib/store";
import { saveBooks, saveError, saveLoading } from "@/lib/features/group/book.slice";
import bookAPI from "@/app/api/generate/book.api";


interface BookListResponse {
    content: BookListResponse | null;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
  }
  

  const findList = async (page: number, size: number, dispatch: AppDispatch): Promise<BookListResponse | null> => {
    try {
        dispatch(saveLoading(true));
        const response = await bookAPI.findList(page, size);
        const bookListResponse = response.data as BookListResponse;
        dispatch(saveBooks(bookListResponse.content));
        return bookListResponse;
    } catch (error) {
        dispatch(saveError("도서 조회 중 오류 발생했습니다."));
        console.error('Error fetching bookList:', error);
        return null;
    } finally {
        dispatch(saveLoading(false));
    }
};

export const bookService = {
    findList
};