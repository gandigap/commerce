import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IPageState {
  pageCategory: string;
  pageNumber: number;
  pageSizeNumber: number;
}

const initialState: IPageState = {
  pageCategory: '',
  pageNumber: 1,
  pageSizeNumber: 10,
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
  },
});

export default pageSlice.reducer;
