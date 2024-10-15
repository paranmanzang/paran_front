interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

export const initialPageState: Page<[]> = {
  content: [],
  totalPages: 0,
  totalElements: 0,
  size: 0,
  number: 0
}
