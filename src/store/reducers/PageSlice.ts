import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IPageState {
  pageCategory: string;
  pageNumber: number;
  pageSizeNumber: number;
  pagesPrevAndNext: (string|null)[]
}

const initialState: IPageState = {
  pageCategory: '',
  pageNumber: 1,
  pageSizeNumber: 10,
  pagesPrevAndNext:[]
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageCategory(state, action: PayloadAction<string>) {
      state.pageCategory = action.payload;
    },
    setPageNumber(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
    setPageSizeNumber(state, action: PayloadAction<number>) {
      state.pageSizeNumber = action.payload;
    },
    setPagesPrevAndNext(state, action: PayloadAction<(string|null)[]>) {
      state.pagesPrevAndNext = action.payload;
    },
  },
});

export default pageSlice.reducer;
